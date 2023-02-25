//1. npm i react-i18next
//2. create language sourse

import { useTranslation } from "react-i18next";
import i18n from "./i18next";

//3.
const I18Next = () => {
    const { t } = useTranslation();

    return ( 
        <div>
            <button
            onClick={()=>i18n.changeLanguage("en")}
            className="px-5 py-2 bg-slate-700 text-white">change to En</button>
            <button 
            onClick={()=>i18n.changeLanguage("fa")}
            className="px-5 py-2 bg-slate-500 text-white">change to Fa</button>
            <div>
                <div>
<p>{t("login")} </p>
                </div>
            </div>

        </div>
     );
}
 
export default I18Next;