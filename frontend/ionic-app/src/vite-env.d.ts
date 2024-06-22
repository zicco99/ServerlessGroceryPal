/// <reference types="react-scripts" />

interface ImportMeta {
    readonly env: {
      VITE_DISTRIBUTIONURL: string | URL;
      readonly VITE_STACKREGION: string;
      readonly VITE_USERPOOLID: string;
      readonly VITE_USERPOOLCLIENTID: string;
      readonly VITE_USERPOOLDOMAIN: string;
      readonly VITE_USERPOOLCLIENTCALLBACKURLLOCAL: string;
      readonly VITE_USERPOOLCLIENTCALLBACKURLREMOTE: string;
      readonly VITE_USERPOOLCLIENTLOGOUTURLLOCAL: string;
      readonly VITE_USERPOOLCLIENTLOGOUTURLREMOTE: string;
      readonly VITE_DISTRIBUTIONURL: string;
    };
  }