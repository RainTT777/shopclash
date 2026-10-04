type AffiliateProvider = {
  name: string;
  mark: string;
  tone: string;
  url: string;
  price: string;
  tagline: string;
  description: string;
  protocols: string;
  line: string;
  sourceStatus: string;
};

export const affiliateProviders: AffiliateProvider[] = [
  { name: '边缘节点 EdgeNova', mark: 'EN', tone: 'cyan', url: import.meta.env.PUBLIC_AFFILIATE_EDGENOVA, price: '¥15/月起', tagline: '流媒体与日常使用', description: '参考资料将其定位于流媒体和 AI 工具等使用场景；实际可用性会随地区、网络和时间变化。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' },
  { name: '极连云', mark: 'JL', tone: 'navy', url: import.meta.env.PUBLIC_AFFILIATE_JILIANYUN, price: '¥15.5/月起', tagline: '游戏、视频与日常使用', description: '参考资料将其定位于游戏、视频和日常访问场景，购买前请核对实时套餐与流量规则。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' },
  { name: '光年梯', mark: 'GN', tone: 'orange', url: import.meta.env.PUBLIC_AFFILIATE_GUANGNIANTI, price: '¥13/月起', tagline: '低门槛专线套餐', description: '参考资料将其定位为低门槛订阅方案；隐私、安全和稳定性结论仍需依据官方政策与持续测试。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' },
  { name: '云图', mark: 'YT', tone: 'red', url: import.meta.env.PUBLIC_AFFILIATE_YUNTU, price: '¥25/月起', tagline: '全节点 1 倍率方向', description: '参考资料称其采用全节点 1 倍率设计，购买前仍需核对设备数量、流量和套餐有效期。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' },
  { name: '鲲鹏加速', mark: 'KP', tone: 'slate', url: import.meta.env.PUBLIC_AFFILIATE_KUNPENG, price: '¥1/月起', tagline: '1元/1G · 12元/99G', description: '用户提供截图显示“扶摇尝鲜”1 元/1G，以及“逍遥畅游”12 元/99G；库存和套餐状态请以官网实时页面为准。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '用户截图核验于 2026-10-03' },
  { name: '速界', mark: 'SJ', tone: 'violet', url: import.meta.env.PUBLIC_AFFILIATE_SPEEDWORLD, price: '¥15/月起', tagline: '游戏与低丢包方向', description: '参考资料将其定位于跨服游戏使用场景，实际延迟和丢包表现取决于本地运营商与线路时段。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' },
  { name: '快狸', mark: 'KL', tone: 'rose', url: import.meta.env.PUBLIC_AFFILIATE_KUAILI, price: '¥15/月起', tagline: '新手与简单操作方向', description: '参考资料将其描述为操作门槛较低的订阅服务，具体客户端支持与导入方式请查看官网说明。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' },
  { name: '可信云', mark: 'KX', tone: 'blue', url: import.meta.env.PUBLIC_AFFILIATE_KEXINYUN, price: '¥15/月起', tagline: '加密与隐私方向', description: '参考资料将其定位于加密和隐私场景；日志与安全声明仍应以官方政策及独立审计证据为准。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' },
  { name: '瞬云', mark: 'SY', tone: 'green', url: import.meta.env.PUBLIC_AFFILIATE_SHUNYUN, price: '¥20/月起', tagline: '轻量与灵活计费方向', description: '参考资料将其定位为轻量和灵活计费方案，套餐计费方式和余额有效期请在购买前核对。', protocols: 'VLESS', line: 'IEPL 专线', sourceStatus: '第三方资料与用户补充' }
].filter((provider) => provider.url);
