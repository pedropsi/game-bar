/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: XMLSocket
module Shumway.AVMX.AS.flash.net {
  import notImplemented = Shumway.Debug.notImplemented;
  import axCoerceString = Shumway.AVMX.axCoerceString;
  export class XMLSocket extends flash.events.EventDispatcher {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;

    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // ["timeout", "timeout", "connected", "connect", "send", "close"];
    
    constructor (host: string = null, port: number /*int*/ = 0) {
      super();
      host = axCoerceString(host); port = port | 0;
    }
    
    // JS -> AS Bindings
    
    timeout: number /*int*/;
    connected: boolean;
    connect: (host: string, port: number /*int*/) => void;
    send: (object: any) => void;
    close: () => void;
    
    // AS -> JS Bindings
    
    // _timeout: number /*int*/;
    // _connected: boolean;
  }
}
