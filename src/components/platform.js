import React from "react"
export default function SupportedPlatforms() {
  return ( 
    <div className="bg-nn-bgg1">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:text-center">
            <div className="supported py-10 grid-cols-10 gap-y-8 grid justify-items-center items-center">
                <div>
                    <img alt="Chromium" className="h-12 w-12" src={'/img/supported/chromium.png'} />
                    <span className="block mt-2 bg-nn-t1 text-white text-sm">90</span> 
                </div>
                <div>
                    <img alt="Google Chrome" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/chrome.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">90</span> 
                </div>
                <div>
                    <img alt="Microsoft Edge" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/edge.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span> 
                </div>
                <div>
                    <img alt="Mozilla Firefox" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/firefox.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Apple Safari" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/safari.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Opera" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/opera.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Vivaldi" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/vivaldi.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>

                <div>
                    <img alt="Node.js" className="h-12" src={'/img/supported/nodejs.png'} />
                    <span className="block mt-2 bg-nn-t1 text-white text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Electron.js" className="h-12" src={'/img/supported/electron.png'} />
                    <span className="block mt-2 bg-nn-t1 text-white text-sm">n/a</span>
                </div>
                <div>
                    <img alt="NW.js" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/nwjs.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>

                <div>
                    <img alt="WeChat Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/weixin.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="QQ Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/qq.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Alipay Mini Apps" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/alipay.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Baidu Smart Programs" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/baidu.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Quick Apps" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/quickapp.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Bytedance Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/bytedance.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="360 Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={'/img/supported/360.png'} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
            </div>
        </div>
    </div>
  )
}