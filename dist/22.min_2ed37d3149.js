"use strict";(self.webpackChunktp_threejs=self.webpackChunktp_threejs||[]).push([[22,37,53,49],{5160:(e,i,t)=>{t.r(i),t.d(i,{default:()=>n});const n="uniform vec3 uColor;\nuniform sampler2D uTexture;\n\nvarying vec2 vUv;\nvarying float vElevation;\n\nvoid main() {\n    vec4 textureColor = texture2D(uTexture, vUv);\n    textureColor.rgb *= vElevation + 0.5;\n    // gl_FragColor = vec4(uColor, 1.0);\n    gl_FragColor = textureColor;\n}"},3876:(e,i,t)=>{t.r(i),t.d(i,{default:()=>n});const n="uniform float uTime;\nuniform vec2 uFrequency;\n\nvarying vec2 vUv;\nvarying float vElevation;\n\nvoid main() {\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n    float elevation = sin(modelPosition.x * uFrequency.x + uTime) * 0.3;\n    elevation += sin(modelPosition.y * uFrequency.y + uTime) * 0.3;\n\n    modelPosition.z += elevation;\n\n    gl_Position = projectionMatrix * viewMatrix * modelPosition;\n\n    vUv = uv;\n    vElevation = elevation;\n}"},7597:(e,i,t)=>{t.d(i,{c:()=>r,a:()=>a,b:()=>s});var n=t(2212);function r(e,i,t,n){t&&(e=e.addFolder(t)),e.add(i,"x",-10,10,.01).onChange(n),e.add(i,"y",0,10,.01).onChange(n),e.add(i,"z",-10,10,.01).onChange(n)}class a{constructor(e,i){this.obj=e,this.prop=i}get value(){return`#${this.obj[this.prop].getHexString()}`}set value(e){this.obj[this.prop].set(e)}}class s{constructor(e,i){this.obj=e,this.prop=i}get value(){return n.eb.radToDeg(this.obj[this.prop])}set value(e){this.obj[this.prop]=n.eb.degToRad(e)}}},752:(e,i,t)=>{t.d(i,{a:()=>a});var n=t(2212),r=t(5357);class a{constructor(e){this.appId="00",this.appName="BASE",this.width=r.c.width,this.height=r.c.height,this.canvas=null,this.viewCenter=new n.pc(0,0,0),this.handle=-1,this.canvas=e}initRender(){const e=new n.rc({antialias:!0,canvas:this.canvas});e.setSize(this.width,this.height),e.setClearColor("#000000",1),e.setPixelRatio(window.devicePixelRatio),this.renderer=e}initScene(){const e=new n.Qb;this.scene=e}initCamera(){}initLight(){}initModel(){}onCreating(){}onCreated(){}onRender(){}onDestroy(){}onResize(){}create(){this.onCreating(),this.initRender(),this.initScene(),this.initCamera(),this.initLight(),this.initModel(),this.onCreated()}render(){var e;null===(e=this.renderer)||void 0===e||e.clear(),this.onRender(),this.handle=requestAnimationFrame(this.render.bind(this))}run(){this.create(),this.render()}resize(){var e,i;this.width=window.innerWidth,this.height=window.innerHeight,this.camera&&this.camera instanceof n.zb&&(this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()),null===(e=this.renderer)||void 0===e||e.setSize(this.width,this.height),null===(i=this.renderer)||void 0===i||i.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.onResize()}destroy(){this.onDestroy(),this.scene.clear(),this.renderer.clear(),cancelAnimationFrame(this.handle),console.log(`销毁应用【${this.appId} ${this.appName}】`)}}},7079:(e,i,t)=>{t.r(i),t.d(i,{BaseJourney:()=>r});var n=t(752);class r extends n.a{}},8773:(e,i,t)=>{t.r(i),t.d(i,{Journey27:()=>d});var n=t(4376),r=t(2212),a=t(9365),s=t(7597),o=t(5160),h=t(3876),l=t(7079);class d extends l.BaseJourney{onCreating(){this.params={},this.clock=new r.r,this.gui=new n.a}onCreated(){this.controls=new a.a(this.camera,this.canvas),this.controls.enableDamping=!0}initLight(){}initCamera(){const e=new r.zb(35,this.width/this.height,.1,100);e.position.set(1,1,3),this.camera=e,this.scene.add(e)}initModel(){const e=(new r.ec).load("./resource/journey/flag-french.jpg"),i=new r.Ab(1,1,32,32),t=new r.Rb({vertexShader:h.default,fragmentShader:o.default,uniforms:{uFrequency:{value:new r.oc(5,5)},uTime:{value:0},uColor:{value:new r.s("orange")},uTexture:{value:e}}});this.material=t,this.gui.add(t.uniforms.uFrequency.value,"x").min(0).max(10).name("FrequencyX"),this.gui.add(t.uniforms.uFrequency.value,"y").min(0).max(10).name("FrequencyY"),this.gui.addColor(new s.a(t.uniforms.uColor,"value"),"value").name("uColor");const n=new r.nb(i,t);this.scene.add(n)}onRender(){this.renderer.render(this.scene,this.camera);let e=this.clock.getElapsedTime();this.material.uniforms.uTime.value=e}onDestroy(){var e;null===(e=this.gui)||void 0===e||e.destroy()}}}}]);
//# sourceMappingURL=22.min_2ed37d3149.js.map