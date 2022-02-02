module Main where

import Prelude
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Effect (Effect)
import Effect (Effect)
import Effect.Console (log)
-- import FingerPrint (fingerPrint, showPrint)
-- import Halogen as H
-- import Halogen.Aff as HA
-- import Halogen.HTML as HH
-- import Halogen.HTML.Events as HE
-- import Halogen.VDom.Driver (runUI)
import Node.Encoding (Encoding(..))
import Node.FS.Sync (readTextFile)
import Unsafe.Coerce (unsafeCoerce)
import Web.DOM.Element (Element, toNode)
import Web.DOM.Node (textContent)
import Web.DOM.NonElementParentNode (getElementById)
import Web.HTML (window)
import Web.HTML.HTMLDocument (toNonElementParentNode)
import Web.HTML.Window (document)

type DocData
  = { fingerSrc :: String
    }

main :: Effect Unit
main = do
  -- Setup doc
  win <- window
  doc <- toNonElementParentNode <$> document win
  let
    getElem = flip getElementById doc
  log getElem
