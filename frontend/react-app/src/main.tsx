import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import itamplify from "./lang/itamplify.tsx";
import it from "./lang/it.tsx";
import en from "./lang/en.tsx";
import { I18n } from "aws-amplify/utils";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.tsx";
import { Authenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsExports);

I18n.putVocabulariesForLanguage("it", itamplify);
I18n.putVocabulariesForLanguage("it", it);
I18n.putVocabulariesForLanguage("en", en);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Authenticator.Provider>
    <App />
  </Authenticator.Provider>,
);
