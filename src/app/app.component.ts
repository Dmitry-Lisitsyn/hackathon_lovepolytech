import { Component } from '@angular/core';
import {
  ViewerOptions,
  ViewerInitializedEvent,
  DocumentChangedEvent,
  SelectionChangedEventArgs,
  Extension
} from "ng2-adsk-forge-viewer";

import { MyExtension } from "./my-extension";

export const ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOndyaXRlIiwiZGF0YTpjcmVhdGUiLCJidWNrZXQ6Y3JlYXRlIiwiYnVja2V0OnVwZGF0ZSIsImJ1Y2tldDpyZWFkIl0sImNsaWVudF9pZCI6IjN5dGNJRVBjbEVjck9VV0g2ZDZkWVFzVFJ4OUExT0lTIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2Fqd3RleHA2MCIsImp0aSI6ImRSTEZRRUxBVDlhNkNjWUhDV0xHVEdkQWxyNGdQNlhaNkZYbEV2amhLa1NXcHEyb2ZnQWloMFVGMVdXSlFQMTciLCJleHAiOjE2Mzk3NDAzNDl9.ItRfBhHNlmCqn4pB_ihHuK_2G3SF4NaUyT51CxizKA1Zdsxs-qS8GcqPKHqCvztjwgX3RXI3CFq6ezplPp8aPaEWQYulAY0wiBWIfjAyyOE6H1L9YaI7zlkNmPEAmDSikKSVu0cM8hgweBhdCrn16xbvSqacpQYr39Ce0da_w-ClgcPAAbJxDTt_TKXay8nw1TAKNPoKXwDwiRbmRaf7eoPpTvcQ66WKeECF7DX4U1xE-0iMNNaLLTSupobZuP1Ai2y9wSl9o2yf4y015MlfzqZmXluh7Q5N6mMl4KFHb-eREgKCI24TGk8lXHL4fEwoATGiI6nN37JE2JG5VwQWMA";
export const DOCUMENT_URN = "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDIxLTEyLTE3LTEwLTI2LTM4LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlLzczMTExNC5pcHQ";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectVKR';
  public viewerOptions: ViewerOptions;
  public documentId: string;

  public ngOnInit() {
    this.viewerOptions = {
      initializerOptions: {
        env: "AutodeskProduction",
        getAccessToken: (
          onGetAccessToken: (token: string, expire: number) => void
        ) => {
          const expireTimeSeconds = 60 * 30;
          onGetAccessToken(ACCESS_TOKEN, expireTimeSeconds);
        },
        api: "derivativeV2",
        enableMemoryManagement: true
      },
      viewerConfig: {
        extensions: ["Autodesk.DocumentBrowser", MyExtension.extensionName],
        theme: "bim-theme"
      },
      onViewerScriptsLoaded: () => {
        // Register a custom extension
        Extension.registerExtension(MyExtension.extensionName, MyExtension);
      },
      onViewerInitialized: (args: ViewerInitializedEvent) => {
        args.viewerComponent.DocumentId = DOCUMENT_URN;
      },
      // showFirstViewable: false,
      // headlessViewer: true,
      // Set specific version number
      //version: "7.41"
    };
  }

  public selectionChanged(event: SelectionChangedEventArgs) {
    console.log(event.dbIdArray);
  }

}
