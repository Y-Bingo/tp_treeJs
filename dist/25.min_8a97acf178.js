"use strict";(self.webpackChunktp_threejs=self.webpackChunktp_threejs||[]).push([[25,37],{752:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(2212),s=n(5357);class a{constructor(e){this.appId="00",this.appName="BASE",this.width=s.c.width,this.height=s.c.height,this.canvas=null,this.viewCenter=new i.pc(0,0,0),this.handle=-1,this.canvas=e}initRender(){const e=new i.rc({antialias:!0,canvas:this.canvas});e.setSize(this.width,this.height),e.setClearColor("#000000",1),e.setPixelRatio(window.devicePixelRatio),this.renderer=e}initScene(){const e=new i.Qb;this.scene=e}initCamera(){}initLight(){}initModel(){}onCreating(){}onCreated(){}onRender(){}onDestroy(){}onResize(){}create(){this.onCreating(),this.initRender(),this.initScene(),this.initCamera(),this.initLight(),this.initModel(),this.onCreated()}render(){var e;null===(e=this.renderer)||void 0===e||e.clear(),this.onRender(),this.handle=requestAnimationFrame(this.render.bind(this))}run(){this.create(),this.render()}resize(){var e,t;this.width=window.innerWidth,this.height=window.innerHeight,this.camera&&this.camera instanceof i.zb&&(this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()),null===(e=this.renderer)||void 0===e||e.setSize(this.width,this.height),null===(t=this.renderer)||void 0===t||t.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.onResize()}destroy(){this.onDestroy(),this.scene.clear(),this.renderer.clear(),cancelAnimationFrame(this.handle),console.log(`销毁应用【${this.appId} ${this.appName}】`)}}},7079:(e,t,n)=>{n.r(t),n.d(t,{BaseJourney:()=>s});var i=n(752);class s extends i.a{}},4083:(e,t,n)=>{n.r(t),n.d(t,{Journey32:()=>v});var i=n(4376),s=n(2212),a=n(9365),r=n(2854),o=n(1217),h=n(5970),c=n(3684),d=n(7103),l=n(4458),p=n(7531),m=n(7399),u=n(7079);class v extends u.BaseJourney{constructor(){super(...arguments),this.lastTimeStamp=0}onCreating(){this.params={envMapIntensity:5},this.clock=new s.r,this.gui=new i.a}onCreated(){this.controls=new a.a(this.camera,this.canvas),this.controls.enableDamping=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=s.xb,this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=s.sc,this.renderer.toneMapping=s.Nb,this.renderer.toneMappingExposure=1.5;const e=new s.qc(this.width,this.height,{minFilter:s.W,magFilter:s.W,format:s.Jb,encoding:s.sc}),t=new c.a(this.renderer,e);t.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.setSize(this.width,this.height),this.effectComposer=t;const n=new l.a(this.scene,this.camera);t.addPass(n);const i=new h.a;i.enabled=!1,t.addPass(i);const r=new d.a;r.enabled=!1,t.addPass(r);const o=new p.a(m.a);o.enabled=!1,t.addPass(o);const u=new s.ec,v={uniforms:{tDiffuse:{value:null},uNormalMap:{value:null}},vertexShader:"\n                varying vec2, vUv;\n\n                void main(){\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                    \n                    vUv = uv;\n                }\n            ",fragmentShader:"\n                uniform sampler2D tDiffuse;\n                uniform sampler2D uNormalMap;\n                uniform vec3 uTint;\n                                \n                varying vec2, vUv;\n\n                void main() {\n                    vec3 normalColor = texture2D(uNormalMap, vUv).xyz * 2.0 - 1.0;\n\n                    vec2 newUv = vUv + normalColor.xy * 0.1;\n                    vec4 color = texture2D(tDiffuse, newUv);\n\n                    vec3 lightDirection = normalize(vec3(-1.0, 1.0, 0.0));\n                    float lightness = dot(normalColor, lightDirection);\n                    color.rgb += lightness * 1.0;\n\n                    gl_FragColor = color;\n                }\n            "},g=new p.a(v);g.uniforms.uNormalMap.value=u.load("./resource/journey/interfaceNormalMap.png"),this.effectComposer.addPass(g)}onResize(){this.effectComposer.setSize(this.width,this.height)}initLight(){const e=new s.y(16777215,3);e.position.set(.25,3,-2.25),e.shadow.mapSize.set(1024,1024),e.castShadow=!0,e.shadow.camera.far=15,e.shadow.normalBias=.05,this.scene.add(e)}initCamera(){const e=new s.zb(75,this.width/this.height,.1,100);e.position.set(4,1,-4),this.camera=e,this.scene.add(e)}initModel(){const e=this.scene,t=(new s.ec,(new s.u).load(["resource/journey/environmentMaps/0/px.jpg","resource/journey/environmentMaps/0/nx.jpg","resource/journey/environmentMaps/0/py.jpg","resource/journey/environmentMaps/0/ny.jpg","resource/journey/environmentMaps/0/pz.jpg","resource/journey/environmentMaps/0/nz.jpg"]));t.encoding=s.sc,e.background=t,e.environment=t;const n=new r.a;n.setDecoderPath("resource/draco/");const i=new o.a;i.setDRACOLoader(n),i.load("./resource/journey/models/DamagedHelmet/glTF/DamagedHelmet.gltf",(t=>{t.scene.scale.set(2,2,2),t.scene.rotation.y=.5*Math.PI,e.add(t.scene),this.updateAllMaterial()}),(()=>{console.log("progress")}),(e=>{console.log("error",e)}))}updateAllMaterial(){this.scene.traverse((e=>{e instanceof s.nb&&e.material instanceof s.lb&&(e.material.envMapIntensity=this.params.envMapIntensity,e.material.needsUpdate=!0,e.receiveShadow=!0,e.castShadow=!0)}))}onRender(){this.controls.update(),this.effectComposer.render();const e=this.clock.getElapsedTime();this.lastTimeStamp;this.lastTimeStamp=e}onDestroy(){var e;null===(e=this.gui)||void 0===e||e.destroy()}}}}]);
//# sourceMappingURL=25.min_8a97acf178.js.map