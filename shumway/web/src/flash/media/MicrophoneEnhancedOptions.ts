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
// Class: MicrophoneEnhancedOptions
module Shumway.AVMX.AS.flash.media {
  import notImplemented = Shumway.Debug.notImplemented;
  import axCoerceString = Shumway.AVMX.axCoerceString;
  export class MicrophoneEnhancedOptions extends ASObject {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;

    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // ["mode", "mode", "echoPath", "echoPath", "nonLinearProcessing", "nonLinearProcessing", "autoGain", "autoGain", "isVoiceDetected", "isVoiceDetected"];
    
    constructor () {
      super();
    }
    
    // JS -> AS Bindings
    
    mode: string;
    echoPath: number /*int*/;
    nonLinearProcessing: boolean;
    autoGain: boolean;
    isVoiceDetected: number /*int*/;
    
    // AS -> JS Bindings
    
    // _mode: string;
    // _echoPath: number /*int*/;
    // _nonLinearProcessing: boolean;
    // _autoGain: boolean;
    // _isVoiceDetected: number /*int*/;
  }
}
