import{_ as e,c as a,o as n,a4 as t}from"./chunks/framework.C1Yd8iPn.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/front/npm文档.md","filePath":"docs/front/npm文档.md"}'),p={name:"docs/front/npm文档.md"},s=t(`<h2 id="_1-npm-查看源地址以及更换源地址" tabindex="-1">1. npm 查看源地址以及更换源地址 <a class="header-anchor" href="#_1-npm-查看源地址以及更换源地址" aria-label="Permalink to &quot;1. npm 查看源地址以及更换源地址&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm config get registry</span></span>
<span class="line"><span>npm config set registry https://registry.npmmirror.com</span></span></code></pre></div><h2 id="npm-i-legacy-peer-deps" tabindex="-1">npm i --legacy-peer-deps <a class="header-anchor" href="#npm-i-legacy-peer-deps" aria-label="Permalink to &quot;npm i --legacy-peer-deps&quot;">​</a></h2><blockquote><p>是在使用 npm （Node Package Manager）安装包时的一个命令选项。<br> --legacy-peer-deps 这个选项的主要作用是在安装过程中，忽略对等依赖（peer dependencies）版本不匹配的问题，并以一种较为宽松的方式处理依赖关系。<br> 通常情况下，如果一个包指定了对等依赖，并且当前安装环境中的相关依赖版本不满足要求，npm 会报错并阻止安装。但当使用 --legacy-peer-deps 选项时，npm 会尝试安装，即使对等依赖的版本不完全符合要求。<br> 例如，如果一个包 packageA 依赖于另一个包 packageB 作为对等依赖，并指定了特定的版本范围，而当前环境中的 packageB 版本不在这个范围内。正常情况下，安装会失败，但加上 --legacy-peer-deps 选项后，安装仍会继续进行。<br> 这种选项在一些情况下很有用，比如当您确定版本不匹配不会导致严重问题，或者只是为了快速进行开发和测试而暂时忽略对等依赖的版本约束。但需要注意的是，在生产环境中，还是应该尽量确保依赖版本的准确性和兼容性，以避免潜在的问题。</p></blockquote><h2 id="force" tabindex="-1">--force <a class="header-anchor" href="#force" aria-label="Permalink to &quot;--force&quot;">​</a></h2><blockquote><p>强制安装</p></blockquote>`,6),r=[s];function o(c,i,d,l,m,_){return n(),a("div",null,r)}const f=e(p,[["render",o]]);export{g as __pageData,f as default};
