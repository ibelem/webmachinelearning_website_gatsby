import React from "react"
import chromium from "../../content/assets/supported/chromium.png"
import chrome from "../../content/assets/supported/chrome.png"
import edge from "../../content/assets/supported/edge.png"
import firefox from "../../content/assets/supported/firefox.png"
import safari from "../../content/assets/supported/safari.png"
import opera from "../../content/assets/supported/opera.png"
import vivaldi from "../../content/assets/supported/vivaldi.png"
import nodejs from "../../content/assets/supported/nodejs.png"
import electron from "../../content/assets/supported/electron.png"
import nwjs from "../../content/assets/supported/nwjs.png"
import weixin from "../../content/assets/supported/weixin.png"
import qq from "../../content/assets/supported/qq.png"
import alipay from "../../content/assets/supported/alipay.png"
import baidu from "../../content/assets/supported/baidu.png"
import quickapp from "../../content/assets/supported/quickapp.png"
import bytedance from "../../content/assets/supported/bytedance.png"
import t360 from "../../content/assets/supported/360.png"

export default function SupportedPlatforms() {
  return ( 
    <div className="">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:text-center">
            <div className="supported py-10 grid-cols-4 lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 gap-y-8 grid justify-items-center items-center">
                <div>
                    <img alt="Chromium" className="h-12 w-12" src={chromium} />
                    <span className="block mt-2 bg-nn-t1 text-white text-sm">90</span> 
                </div>
                <div>
                    <img alt="Google Chrome" className="h-12 filter-grayscale hover:filter-none" src={chrome} />
                    <span className="block mt-2 border border-b-1 text-sm">90</span> 
                </div>
                <div>
                    <img alt="Microsoft Edge" className="h-12 filter-grayscale hover:filter-none" src={edge} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span> 
                </div>
                <div>
                    <img alt="Mozilla Firefox" className="h-12 filter-grayscale hover:filter-none" src={firefox} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Apple Safari" className="h-12 filter-grayscale hover:filter-none" src={safari} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Opera" className="h-12 filter-grayscale hover:filter-none" src={opera} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Vivaldi" className="h-12 filter-grayscale hover:filter-none" src={vivaldi} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>

                <div>
                    <img alt="Node.js" className="h-12" src={nodejs} />
                    <span className="block mt-2 bg-nn-t1 text-white text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Electron.js" className="h-12" src={electron} />
                    <span className="block mt-2 bg-nn-t1 text-white text-sm">n/a</span>
                </div>
                <div>
                    <img alt="NW.js" className="h-12 filter-grayscale hover:filter-none" src={nwjs} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>

                <div>
                    <img alt="WeChat Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={weixin} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="QQ Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={qq} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Alipay Mini Apps" className="h-12 filter-grayscale hover:filter-none" src={alipay} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Baidu Smart Programs" className="h-12 filter-grayscale hover:filter-none" src={baidu} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Quick Apps" className="h-12 filter-grayscale hover:filter-none" src={quickapp} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="Bytedance Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={bytedance} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
                <div>
                    <img alt="360 Mini Programs" className="h-12 filter-grayscale hover:filter-none" src={t360} />
                    <span className="block mt-2 border border-b-1 text-sm">n/a</span>
                </div>
            </div>
        </div>
    </div>
  )
}