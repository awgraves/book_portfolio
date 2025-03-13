type Book = {
  title: string;
  bgColor: string;
  previewBlurb: string;
  previewImage: string;
  fullBookUrl: string;
};

export const books: Book[] = [
  {
    title: "Clinical Trial Recommender",
    bgColor: "#205493",
    previewBlurb:
      "Our lab needed a fast, easy way to provide our patients with relevant clinical trials on their reports.",
    previewImage: "/images/clinicaltrials/search_params.png",
    fullBookUrl: "/clinicaltrials",
  },
  {
    title: "Help Desk System",
    bgColor: "seagreen",
    previewBlurb:
      "Email just wasn't cutting it. We needed a better way to communicate and track technical issues.",
    previewImage: "/images/helpdesk/helpdesk_dash.png",
    fullBookUrl: "/helpdesk",
  },
  {
    title: "Sign-out QAs",
    bgColor: "#ff924a",
    previewBlurb:
      "Why use paper to record case QAs when we can make them electronic and fully integreated?",
    previewImage: "/images/signoutqas/main_QA_results.png",
    fullBookUrl: "/signoutqas",
  },
  {
    title: "Genetic Search DB",
    bgColor: "#8a1f1f",
    previewBlurb:
      "Our lab had no way to search our full ThyroSeq case archive for specific or demographic criteria; at least until now!",
    previewImage: "/images/geneticsearch/TDB_home.png",
    fullBookUrl: "/geneticsearch",
  },
];
