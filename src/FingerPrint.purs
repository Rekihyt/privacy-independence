{-
module FingerPrint where

import Prelude
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Console (log)
import Halogen as H
import Halogen.Aff as HA
import Halogen.HTML (ClassName(..))
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties (class_, classes)
import Halogen.HTML.Properties as Halogen
import Halogen.Hooks as Hooks
import Halogen.VDom.Driver (runUI)
import Web.DOM (NonElementParentNode)
import Web.DOM.Element (Element, toNode)
import Web.DOM.Node (textContent)
import Web.HTML (HTMLElement)

fingerprintId ∷ String
fingerprintId = "fingerprint"

fingerErrorMsg ∷ String
fingerErrorMsg = "Failed to load fingerprint, try disabling your adblocker and refreshing."

data FingerPrintTab
  = PrintData
  | PrintHash
  | PrintSource

showPrint :: (String -> Effect (Maybe Element)) -> Effect Unit
showPrint getElem = do
  maybeFingerSrc <- getElem fingerprintId
  fingerSrc <- maybe (pure fingerErrorMsg) (textContent <<< toNode) maybeFingerSrc
  log fingerSrc

btnClasses = classes $ map ClassName [ "w3-btn", "w3-text-teal" ]

divClasses = classes $ map ClassName [ "w3-bar", "w3-text-teal" ]

fingerPrint body = runUI fpComponent unit body
  where
  fpComponent =
    Hooks.component \_ input -> Hooks.do
      count /\ countId <- Hooks.useState PrintData
      Hooks.pure do
        HH.div
          [ divClasses ]
          [ HH.button [ btnClasses, HE.onClick \_ -> Hooks.modify_ countId (const PrintHash) ] [ HH.text "Your Browser Data" ]
          , HH.text $ "s"
          ]

-}