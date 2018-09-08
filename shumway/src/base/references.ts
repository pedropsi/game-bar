/*
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

///<reference path='es6-promises.d.ts' />
///<reference path='utilities.ts' />
///<reference path='options.ts' />
///<reference path='settings.ts'/>
///<reference path='metrics.ts' />
///<reference path='deflate.ts' />
///<reference path='lzma.ts' />
///<reference path='dataBuffer.ts' />
///<reference path='ShapeData.ts' />
///<reference path='SWFTags.ts' />
///<reference path='binaryFileReader.ts' />
///<reference path='flashlog.ts' />
///<reference path='remoting.ts' />
///<reference path='external.ts' />

var throwError: (className: string, error: any, replacement1?: any,
                 replacement2?: any, replacement3?: any, replacement4?: any) => void;
var Errors: any;
