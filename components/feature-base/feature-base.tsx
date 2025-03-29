// "use client"; // NextJS 13 requires this. Remove if you are using NextJS 12 or lower
// import { useEffect } from "react";
// import Script from "next/script";
// import { ReactNode } from "react";

// const FeedbackButton = ({ children }: { children: ReactNode }) => {
//   useEffect(() => {
//     const win = window as any;

//     if (typeof win.Featurebase !== "function") {
//       win.Featurebase = function () {
//         // eslint-disable-next-line prefer-rest-params
//         (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
//       };
//     }
//     win.Featurebase("initialize_feedback_widget", {
//       organization: "esportecidadao", // Replace this with your organization name, copy-paste the subdomain part from your Featurebase workspace url (e.g. https://*yourorg*.featurebase.app)
//       theme: "dark",
//       email: "devmarcosff@admin.com", // optional
//       defaultBoard: "", // optional - preselect a board
//       locale: "pt-br", // Change the language, view all available languages from https://help.featurebase.app/en/articles/8879098-using-featurebase-in-my-language
//       metadata: 'Esporte Cidadao - BJI', // Attach session-specific metadata to feedback. Refer to the advanced section for the details: https://help.featurebase.app/en/articles/3774671-advanced#7k8iriyap66
//     });
//   }, []);

//   return (
//     <>
//       <Script src="https://do.featurebase.app/js/sdk.js" id="featurebase-sdk" />
//       <div>{children}</div>
//     </>
//   );
// };

// export default FeedbackButton;
