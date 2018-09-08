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
// Class: AccelerometerEvent
module Shumway.AVMX.AS.flash.events {
  export class AccelerometerEvent extends flash.events.Event {

    static classInitializer: any = null;

    static classSymbols: string [] = null;
    static instanceSymbols: string [] = null;

    timestamp: number;
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;

    constructor(type: string, bubbles: boolean = false, cancelable: boolean = false,
                timestamp: number = 0, accelerationX: number = 0, accelerationY: number = 0,
                accelerationZ: number = 0) {
      super(type, bubbles, cancelable);
      this.timestamp = +timestamp;
      this.accelerationX = +accelerationX;
      this.accelerationY = +accelerationY;
      this.accelerationZ = +accelerationZ;
    }

    // JS -> AS Bindings
    static UPDATE: string = "update";
  }
}
