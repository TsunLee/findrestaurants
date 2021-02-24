const ShopData = [
  {
    name: "許家班餅舖",
    address: "松高路12號",
    tel: "+886-2-87261168",
    images: [
      "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    lat: 25.03885,
    lng: 121.5668,
    description:
      "許家班特級鳳梨酥採用金鑽鳳梨，標榜不添加鳳梨香精，還吃得到鳳梨纖維的口感。頂級美味的鳳梨餡，以完美比例精緻調配成美味的食材，外皮酥軟、內餡綿密，內含口感十足的鳳梨果粒，一口咬下，濃郁的香氣四溢，展現香、酥、軟、Q等四種口感，讓您回味無窮!",
    location: "信義區",
    rating: 4.2,
  },
  {
    name: "饗印印度料理",
    description: "MR=Muslim Restaurant 穆斯林餐廳 饗印印度巴基斯坦料理餐廳",
    lat: 25.03539,
    lng: 121.56073,
    location: "信義區",
    address: "基隆路1段366號",
    tel: "+886-2-87869366",
    images: [
      "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.5,
  },
  {
    name: "目木原覺台北信義店",
    description:
      "目木原覺在台中於西元2016創立，並於2017年五月插旗於台北信義區。目木原覺的目標，是以純天然食材打造出適合所有消費者的日常飲品，並打破大家對於天然與美味無法共存的觀念。讓飲料回歸到最初的原點，免於擔心人工添加物的傷害，成為你我每天生活中最簡單健康的滿足。目木原覺，請您一起見證天然食材原味的覺醒。",
    lat: 25.04159,
    lng: 121.56534,
    location: "信義區",
    address: "基隆路１段163-1號",
    tel: "02-25287733",
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "千之壽日式料理",
    description: "千之壽日式料理",
    lat: 25.02842,
    lng: 121.56415,
    location: "信義區",
    address: "莊敬路325巷30號1樓",
    tel: "02-27226061",
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 2.9,
  },
  {
    name: "好滴咖啡松菸店",
    description: "食新式美國菜、義式餐點和三明治",
    lat: 25.04353,
    lng: 121.56284,
    location: "信義區",
    address: "忠孝東路４段553巷26號",
    tel: "02-27648181",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "BeerGeek MicroPub Taipei",
    description:
      "Welcome to BeerGeek Micropub, a truly authentic pub that is true to its values.We offer great local and international draft and bottled beers along with a well chosen selection of Whisky and Gin in a friendly authentic environment.Daily rotating happy hour drinks are available, as well as Special Events and Beer launches.We are BeerGeeks ... You are welcome.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.0455,
    lng: 121.56763,
    location: "信義區",
    address: "永吉路8號一樓",
    tel: "02-27487558",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "WOOBar - W Taipei",
    description:
      "台北 W 飯店WOOBAR酒吧將提供您最新穎的品酒文化! 白天為時尚人士、姐妹淘們洽公、談心的最佳去處，晚上則搖身一變成為極具風格、炫目迷人的時尚男女聚集地。有知名 DJ 讓您感受音樂魔力，紅白沙發與大理石牆上的脣形投影燈，更增添了性感的氛圍。料理：調酒、輕食 │ 型式：新穎潮流酒吧《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04067,
    lng: 121.56598,
    location: "信義區",
    address: "忠孝東路五段236巷10弄",
    tel: "02-77038888",
    images: [
      "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.8,
  },
  {
    name: "The Corner Pit",
    description:
      "角窩是大家下班後的舞台，夜生活型態正在改變，我們提供顧客一個好食、好玩、好自在的角窩模式，這是我們不同的地方與全新的餐飲模式。下回下班後請一定要來放鬆吃喝，啟動時下最流行的-角窩模式吧！《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.0323,
    lng: 121.55897,
    location: "信義區",
    address: "基隆路二段10號",
    tel: "02-87868858",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "啜飲室 (Tasting Room)",
    description:
      "啜飲室是台灣首座結合藝術與異國手工啤酒的空間。在這裡同時可以擁有視覺，味覺和嗅覺的滿足。因為我們不只是一個提供21種世界各地精釀啤酒的地方，也是一座展示台灣本土藝術家作品的藝廊。「酣觴賦詩，以樂其志。」《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04025,
    lng: 121.56677,
    location: "信義區",
    address: "忠孝東路五段68號",
    tel: "02-87739001",
    images: [
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "台灣專業水煙館",
    description:
      "台灣水煙館的先驅,帶給您不同於一般夜店的風情踏入Playing即被煙霧繚繞香氣圍繞著搭配極致奢華的調酒讓您有如置身於阿拉丁神話裡中東肚皮舞團的專業表演《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04489,
    lng: 121.56796,
    location: "信義區",
    address: "基隆路一段101巷15號",
    tel: "02-27495495",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "Motown Taipei",
    description:
      "音樂人威士忌Motown Taipei是一個擁有好音樂的小酒館，也是城市裡漂泊心靈的驛站，以Motown音樂為主要元素，並提供精心挑選過的各式酒款與輕食《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。?營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03742,
    lng: 121.5582,
    location: "信義區",
    address: "仁愛路四段434號",
    tel: "02-27223230",
    images: [
      "https://images.unsplash.com/photo-1517638851339-a711cfcf3279?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "FRANK Taipei",
    description:
      "Frank is a classy lounge bar situated on ATT4Fun&#39;s top 10th floor which doesn&#39;t take itself too seriously. One look at the irreverent FRANK mascot with a lampshade as a head proves that! A welcome change from some of the more pretentious venues in the city.It&#39;s one of Taipei&#39;s best bars if you feel like a bit of clubbing after or want to be in the center of things without feeling like you&#39;re ...well... in the center of things!FRANK lounge bar is slap bang in the middle of the bustling Xinyi district, but offers a welcome respite from the craziness of the other ATT4Fun venues.As with Halo, Myst and Stream in ATT4Fun, Frank&#39;s biggest jewel in its crown has to be the spacious patio which offer stunning views of the Xinyi cityscape and 101.However, it feels less crowded most of the time.This atmospheric bar feels a bit more low key than its fellow ATT4Fun venues.It attracts a stylish and attractive crowd with an affinity for quality over quantity. Frank doesn&#39;t disappoint in the food, drink and music departments.A top shelf drinks selection and an eclectic array of beats from the DJ box keeps the good times going till late.A great place to go uptown and spend some quality times with friends.Dress sharp!《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03531,
    lng: 121.56606,
    location: "信義區",
    address: "松壽路 12 號10 樓",
    tel: "0909332333",
    images: [
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "備長炭",
    description:
      "位在光復南路的小巷內.靜謐的小酒館.Understated Japanese cocktail lounge bar hidden away from the masses in Taipei&#39;s trendy Daan district. and open till late 7 days a week..Similar to Ounce and other top Taipei cocktail bars, tell the mixologist/ bartender what gets your tastebuds going and they&#39;ll concoct the perfect drink for you.Also has a solid Japanese menu.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03527,
    lng: 121.55824,
    location: "信義區",
    address: "光復南路447-28號",
    tel: "02-27228568",
    images: [
      "https://images.unsplash.com/photo-1589960039105-5e73f31ffeb0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.9,
  },
  {
    name: "銅猴子 信義店",
    description:
      "在巴里島巡迴賽之旅某個星期六夜晚 ，兩名台北猴王橄欖球隊隊員坐在Sari Club裡討論在台灣開一家運動酒吧的可能性。這兩位好友-- Peter Chworowsky，長期居住台灣的成功美籍企業家，以及Max Murphy，才剛從上海搬至台灣的澳洲人，一邊喝著巴里島的當地啤酒Bintang，一邊徹夜長談。（此時其他的同隊隊員們正在旁邊喝酒跳舞。）這天正好是2002年10月12日，誰也沒想到再過不久，兩名激進恐怖份子會在Paddy&rsquo;s Bar和Sari Club放置炸彈，這場悲劇奪走了202條人命以及數百人受傷。很不幸地，五名台北猴王隊隊員也在此事件中喪命。大約兩個月後，Max問道: &rdquo;Peter，你還記得當晚我們在談的事情嗎？&rdquo;Peter答: &rdquo;Yes。&rdquo;Max提出: &rdquo;我們就這麼做吧！&rdquo;於是，六個分別來自澳洲、加拿大、英國、紐西蘭及美國的好友，加入Max與Peter打算開始這項計畫。他們來自不同工作領域，以各自的專長投入準備工作，而銅猴子在2003年2月28日就這麼誕生了！我們將銅猴子視為對那些罹難好友們的致敬方式，並希望這個地方可以提供台北居民及訪客享受他們喜愛的運動節目，或與三五好友相聚的最佳處所。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03527,
    lng: 121.56746,
    location: "信義區",
    address: "松壽路20號",
    tel: "02-27225755",
    images: [
      "https://images.unsplash.com/photo-1601351841251-766245326eee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "inhouse bar",
    description:
      "內有惡犬 瘋子 講古 回憶四百棵手植的花樹.層疊變換的裝置美學.深度浩室(house)音樂堅持.不變的混搭美墨勁道口味餐點~團隊優雅的美感接待~10年來的始終如一.是你我的互信品牌和共同生活《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03508,
    lng: 121.568,
    location: "信義區",
    address: "松仁路90號",
    tel: "02-23455549",
    images: [
      "https://images.unsplash.com/photo-1553443175-e1ce8896d8f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "WAVE CLUB Taipei",
    description:
      "ATT 4 FUN 派對娛樂中全新頂級夜店，台北wave夜店!以單點高級夜店的規格，提供最親民的暢飲服務!一覽無遺的台北奢華夜景，還有三不五時就會重金請來的知名專業DJ，高科技感的千萬店內裝潢，這一切的一切結合起來，給予您最高規格的感觀派對!《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03526,
    lng: 121.56616,
    location: "信義區",
    address: "松壽路12號",
    tel: null,
    images: [
      "https://images.unsplash.com/photo-1570802378140-42383ae50e07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "黑牛牧場",
    description: "MFR= Muslim-Friendly Restaurant牛排西餐",
    lat: 25.03227,
    lng: 121.56893,
    location: "信義區",
    address: "信義路5段126號",
    tel: "+886-2-27235988",
    images: [
      "https://images.unsplash.com/photo-1548166040-98dacb146e7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.3,
  },
  {
    name: "Alchemy Bar",
    description:
      "位在最熱鬧的信義商圈，一向低調神祕的Alchemy Bar，依舊安靜當著「閣樓上的隱藏者」，但內行人都知道，這間神祕到不行的酒吧，其實有著全亞洲50大酒吧台灣最高名次的頭銜。Alchemy Bar以1920年代美國禁酒令時期為風格，呈現Speakeasy地下酒吧般的復古氛圍。不過，想在這喝杯酒可沒那麼簡單，Alchemy Bar只接受預約客，到現場後必須透過門房帶位，穿過鐵門來到閣樓、打開隱藏式書櫃方能入內。但只要進得了門，就能輕鬆享受那極佳調酒與爵士樂帶來的美好片刻，以及那被閣樓包覆的安全感。店內熱門酒款偏向成熟大人味，以蘭姆酒、威士忌等老美式酒類所製作的調酒為主。照片出處：台北畫刊105年12月第587期文／陳淑玲、周培文攝影／Mark、張晉瑞《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03268,
    lng: 121.563,
    location: "信義區",
    address: "信義路五段16-1號2F",
    tel: "+886-2-27200080",
    images: [
      "https://images.unsplash.com/photo-1566678573165-e25cef0eb020?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTZ8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "頂鮮101美食美景餐廳",
    description: "MFR=Muslim-Friendly Restaurant 穆斯林友善餐廳",
    lat: 25.03354,
    lng: 121.56481,
    location: "信義區",
    address: "信義路5段7號86樓",
    tel: "+886-2-81018686",
    images: [
      "https://images.unsplash.com/photo-1567667778211-b19f5a4e1efe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "313咖啡魔豆屋",
    description:
      "傳承原於2003年在台北市大安區復興南路成立『優咖啡』，並於2008年榮獲第一屆台北咖啡節 TOP30 優質咖啡館。尼泊爾高山有機手工咖啡咖啡新鮮烘焙，只想為您保留喝咖啡的樂趣",
    lat: 25.03195,
    lng: 121.55918,
    location: "信義區",
    address: "基隆路二段19-1號",
    tel: "+886-2-27251377",
    images: [
      "https://images.unsplash.com/photo-1606291623862-33a8bbe114c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODd8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.5,
  },
  {
    name: "第8口鳳梨酥",
    description:
      "創立於2010年11月1日。五位創始人 決定使用台灣的農產品, 製作天然的、無人工添加物、無人工色素、無化工香料、無防腐劑的產品哈辣墨鳳梨酥禮盒第8口鳳梨酥自創獨家，墨西哥辣椒配上台灣土鳳梨，酸與辣的口感，在淡淡夏季仍然帶來一股青澀酸甜的絕妙好滋味。",
    lat: 25.03396,
    lng: 121.56447,
    location: "信義區",
    address: "信義路五段7號5樓/ B1",
    tel: "+886-2-89111011",
    images: [
      "https://images.unsplash.com/photo-1579764578151-25a817b0bf06?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODB8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.5,
  },
  {
    name: "伊利亞專業烘焙",
    description:
      "伊利亞專業烘焙成立於1995年秋天，至今將邁入第17個年頭，始終相信只有最天然的食材才能烘焙出既健康又具品質的糕點，唯有「好品質、好信用」才能將品牌永續經營。伊利亞鳳梨酥，外皮酥軟，內餡鬆軟不黏牙，有鳳梨甜香，總讓人垂涎不已。且鳳梨閩南語諧音「旺來」，亦有吉利興旺之意，常被當成逢年過節餽贈親友的禮品，成為觀光客必備的最佳伴手禮。伊利亞桂圓核桃糕採用台灣本島的桂圓肉，桂圓自古被視為果中神品，具有滋養補益作用。表面核桃則採用美國頂級脆核桃粒製作而成，加上獨家秘方，純手工生產，不甜、不膩、口感綿細，是最佳茶敘點心。",
    lat: 25.04763,
    lng: 121.578,
    location: "信義區",
    address: "松山路113號1樓",
    tel: "+886-2-27661155",
    images: [
      "https://images.unsplash.com/photo-1561395146-114561860dce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "興華名茶",
    description:
      "傳承70年的老店-興華名茶，100%台灣產，自家焙煎，無添加、無調味、古法烘焙，秉持自家烘焙理念，使用精製的焙火製茶法,產生自然的花果香.蘭花香.清香,讓烏龍茶不傷胃,不刺激且咖啡因及茶鹼低。 自購AgriPro專業級農藥殘留生化試驗分析儀定期檢驗, 定期送SGS檢驗合格,並已投保富邦產品責任險，維護消費者權益。",
    lat: 25.03366,
    lng: 121.52879,
    location: "大安區",
    address: "信義路二段150號",
    tel: "+886-2-23917514",
    images: [
      "https://images.unsplash.com/photo-1612505738111-bc5485276888?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.5,
  },
  {
    name: "欣葉101食藝軒",
    description:
      "雲端上的饗宴世界級地標大樓的85樓，傳統與現代交會，本土與國際接軌。以自然鮮甜的本土食材、世代傳承的精湛廚藝、多元而貼心的菜單，佐以台灣特有的人情味，精緻多元的台灣意象，匯集在食藝軒。",
    lat: 25.03372,
    lng: 121.56481,
    location: "信義區",
    address: "信義路五段7號85樓之1(台北101大樓)",
    tel: "+886-2-81010185",
    images: [
      "https://images.unsplash.com/photo-1569966459694-faf2bf4af6c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.2,
  },
  {
    name: "Joyce East",
    description:
      "Joyce East於2005年開業，座落於信義商圈- - 鄰近101大樓及信義豪宅區，佔地約兩百坪採用寬敞挑高的格局打造多層次的用餐環境，整體空間設計給人低調奢華的時尚感。希望給顧客不單只是味覺的享受,在每一處的陳設都有如藝術品般能豐富您的視覺，提供尊寵感的服務，將味覺、視覺及服務達到最完美的融合。非遵循傳統的義大利烹調方式，而是隨季節變化尋找當季最新鮮及最健康的食材，以保留真實原味、風格創新的義式料理方式呈現。讓客人盡情去感受到食物本身豐富的天然滋味。餐點設計除制式套餐外,也提供依客戶需求而量身打造的專屬菜單,歡迎您來品嚐。",
    lat: 25.03241,
    lng: 121.56932,
    location: "信義區",
    address: "信義路五段128號",
    tel: "+886-2-87896128",
    images: [
      "https://images.unsplash.com/photo-1570646982637-f6a903ca9e5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "梅門食踐堂",
    description:
      "「梅門食踐堂」的餐點自然是一絲不苟，毫不馬虎。每道餐點都大有來頭，由李鳳山師父親選秘方，配合四季節令，選用當季天然食材；遵循古法烹調，講究陰陽調和與五行運轉，使其易於消化吸收，深入五臟六腑；僅以鹽、醋、醬油及香油四品調味，完整呈現食材原味，在美味中講究養生，養生裡不離美味。所有餐點的命名都其來有自，現場由功夫好手解說，讓顧客口嚐極品美味，神遊高遠意境。置身於將歐風奢華展現到極致的 BELLAVITA ，「梅門食踐堂」融合古典與時尚，以現代風格呈現中國精妙深遠的食養文化，讓您跨越時空藩籬，盡攬古今中外的飲食精華！",
    lat: 25.03988,
    lng: 121.56741,
    location: "信義區",
    address: "松仁路28號B2",
    tel: "+886-2-87292734",
    images: [
      "https://images.unsplash.com/photo-1582359324766-9c2e09d83d43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.8,
  },
  {
    name: "泰市場",
    description:
      "豐美海鮮滿佈餐檯，泰式辛香料理引人食指大動，「泰市場」是全台唯一一家泰式海鮮自助料理餐廳，提供近百道酸甜火辣的冷盤、熱炒、酸辣海鮮湯、咖哩、沙嗲...，以及泰式奶茶、飲品、進口冰淇淋和多采多姿的東南亞糕點，搭配木材、泰絲、香料和美人蕉堆砌而成的100% 泰式Villa氛圍，營造視覺與味覺的精美饗宴！",
    lat: 25.03976,
    lng: 121.56575,
    location: "信義區",
    address: "松高路11號六樓",
    tel: "+886-2-87860029",
    images: [
      "https://images.unsplash.com/photo-1569762848460-1e6301bdbea3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.5,
  },
  {
    name: "樂子咖啡",
    description:
      "位於台北阪急百貨附近的樂子咖啡，這兒擁有一大片落地門窗的小館，綠意盎然的風貌，簡約淡雅且帶有幾分設計想像的美食空間，似乎有股說不出的魅力，讓人想前往一探究竟。 而它就是於2010年5月11日開幕之樂子系列餐廳的第三間分店「CAF&Eacute; CAF&Eacute; 樂子」。以輕食餐點、研磨咖啡與草本歐風，推廣樂活蔬食的飲食主義，邀請喜愛森林系的朋友們，以輕鬆愉悅的心情，漫活的優雅姿態，品味餐點，享受人生！店內提供多樣化的沙拉組合，份量加倍、能量加分，讓女性顧客，能享用低脂高纖且有飽足感的夏日餐點。為了讓輕食餐點能更加多元化，麵包類特別提供裸麥健康選擇，且新增5~6三明治餐點與店內獨家的法式薄餅、法式吐司。保留樂子最原始的美味並開發樂子以外的獨家餐點，給老顧客們與喜愛這份森林系草本質地的朋友，更多樣的選擇。",
    lat: 25.03515,
    lng: 121.56613,
    location: "信義區",
    address: "松壽路12號（ATT4fun 1f）",
    tel: "+886-2-77375055",
    images: [
      "https://images.unsplash.com/photo-1572761917199-b40ba1d1c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "PONORAMA隨意鳥地方高空景觀餐廳",
    description:
      "嚴選珍饌、融合料理2006年12月，隨意鳥地方美食團隊在世界最高樓成立了新的品牌PANORAMA，不僅定位為全球最高之觀景餐廳THE BEST 85，並且嚴選全球最頂級的食材珍饍，融合各國精闢廚藝，賦予料理最具特色獨到。隨意鳥地方85樓高空景觀餐廳提供頂級牛排與燕窩排翅等珍饈美饌、日本毛蟹、澳洲活龍蝦與法國吉拉朵生蠔更是每日限量供應。除此之外，THE BEST 85享有現場演奏的饗宴，享用美饌之餘，可帶點輕鬆又愜意，仔細地看到台北每個時分的變幻，體會生活最金字塔頂端的享受。光臨the Best85，除了戶外美麗的景緻、餐廳所提供之美饌料理之外，店內的特色裝潢也是值得回味再三，多盞的施華洛詩奇代表奢華的水晶吊燈、搭配柔和灰階的沙發椅，展現出溫馨帶點浪漫的氛圍。然而代表義大利水都威尼斯的貢多拉鳳尾船、全台最獨一無二高空觀景洗手間等皆為店內最令人激賞的設施，絕對是&ldquo;茶餘飯後&rdquo;最不同的視覺享受。",
    lat: 25.03357,
    lng: 121.56494,
    location: "信義區",
    address: "信義路五段7號85樓（台北101金融大樓 85樓）",
    tel: "+886-2-81010016",
    images: [
      "https://images.unsplash.com/photo-1576723664541-23f84c3f93fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.2,
  },
  {
    name: "臺北君悅酒店-漂亮台式海鮮餐廳",
    description:
      "台北君悅酒店漂亮台式海鮮餐廳─實現膳食養生的食藝境界漂亮中式海鮮餐廳的女主人Pearl Liang，中文名字就是漂亮。這間以漂亮為名的餐廳，結合生活美學與精緻美食，記錄、傳達、分享著「漂亮」的美好。在漂亮，品味美食是絕佳的樂趣。簡約的當代室內裝潢所營造出的優雅氣氛，搭配主廚私房海鮮料理、道地台式美饌及豐富的精選葡萄佳釀，取悅世界級饕家的味蕾。",
    lat: 25.03566,
    lng: 121.56267,
    location: "信義區",
    address: "松壽路2號2樓",
    tel: "+886-2-27201230",
    images: [
      "https://images.unsplash.com/flagged/photo-1570073159477-6440e770da2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "金色三麥(台北誠品酒窖店)",
    description:
      "2006 年初開幕的金色三麥誠品酒窖店，在累積了三家店的超人氣後，在書香文化味的誠品信義店與大家見面，更添不同的氣氛感受，成爲都會男女酒酣耳熱，交誼輕鬆的最佳場所。2010 年8月擴大營業，在不變的酒香和料理創意之上，增加的是絕佳的氣氛營造與飲酒選擇。",
    lat: 25.03955,
    lng: 121.56512,
    location: "信義區",
    address: "松高路11 號B1（誠品信義店）",
    tel: "+886-2-87895911",
    images: [
      "https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "吉品海鮮餐廳",
    description:
      "吉品海鮮餐廳─楊貫一嫡傳弟子的名店在吉品，頂級的鮑參翅肚是由總經理梁華生親自掌廚，他正是香港阿一鮑魚楊貫一的嫡傳弟子之一；而班底也多數都是來自原新同樂餐廳，不論服務品質，和餐廳格調都是走高級路線。因此，開業僅3年，吉品已是許多企業老闆的最愛。而北海道刺參鵝掌更是梁華生力薦的得意名菜。來自北海道的刺參，長度較長、軟中帶Q，不但零膽固醇，再配上炆得恰到好處、入口即化的鵝掌，滋味十分精緻細膩。吉品的高級還反應在食材料理的用心。同一道菜不僅因季節不同而調整口味，連早、晚也不一樣；例如排翅湯，中午喝起來口味較偏淡，到了晚餐則比較重。此外，吉品也開發了其他一系列較為平價的小炒及台灣小吃，同樣好評如潮。例如剛過世的「經營之神」王永慶的最愛「麻辣鴨血」以及老饕公認台北第一的廣東流沙包，都是目前熱門中的熱門。",
    lat: 25.033,
    lng: 121.5529,
    location: "大安區",
    address: "信義路四段236號2樓",
    tel: "+886-2-27003311",
    images: [
      "https://images.unsplash.com/photo-1576057608355-90c5503f9c8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.9,
  },
  {
    name: "臺北君悅酒店-雲錦中餐廳",
    description:
      "座落於臺北君悅酒店 2 樓的雲錦中餐廳，向來以道地上海料理聞名城中。講到上海，自然會令人聯想起一派綺麗的江南風光，當然，最令人讚不絕口的便是上海特有的美食文化，餐廳裡從街坊小吃至飯堂桌宴都有著屬於上海菜的獨特風格及滋味。廚藝精湛的雲錦中餐廳主廚團隊擁有二十餘年的江浙料理經驗，對於精緻呈現正宗上海菜的原味更是講究。多款精緻手工菜餚，皆是喜愛滬式料理的饕客不容錯過的用餐選擇。",
    lat: 25.03527,
    lng: 121.56258,
    location: "信義區",
    address: "松壽路2號2樓",
    tel: "+886-2-27201230",
    images: [
      "https://images.unsplash.com/photo-1583716078745-1574f45f8676?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "皇贊牛肉麵",
    description:
      "有家常口味的皇贊牛肉麵，沒有闊氣華麗的裝潢外表，只有乾乾淨淨、簡簡單單的店面。莊敬路上人氣強強滾的皇贊牛肉麵，2006年入圍人氣牛肉麵店，憑藉著「平凡實在」的家鄉好味道，老師傅的手藝，確實擄獲許多上班族、家庭主婦及小朋友的心。皇贊的牛骨湯頭是本地牛肉經長時間熬煮，清香滑順的牛肉麵（小碗100元、大碗120元），湯頭清爽不油膩，淡褐色濃郁湯汁，肉質Q不軟爛，夏天搭配大把空心菜，冬天配合大把的波菜對味，低脂爽口的牛肉細粉，吃再多也不怕胖，相當受到粉領族青睞。替牛肉麵大大加分的下酒菜，像是海帶、蘭花干等，也不能錯過，店門口親切的老闆、令人懷念的古早味，都是讓人喜愛的原因。",
    lat: 25.02845,
    lng: 121.56392,
    location: "信義區",
    address: "莊敬路325巷13號1樓",
    tel: "+886-2-27208726",
    images: [
      "https://images.unsplash.com/photo-1599110906763-a4ea410363e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "穆記牛肉麵館",
    description:
      "位在臺北醫學院附設醫院旁邊的穆記牛肉麵館，每天中午一開門，客人便絡繹不絕，深受醫師們的喜愛。傳說穆記牛肉麵的配方是清朝御廚寫在衣衫中攜帶出宮，再由「青幫」老爺子傳下來的。無論真假，這不可考的祕傳口味，的確讓人吃了還想再吃。手工桿製麵條，御廚配方，滿碗的牛肉，是穆記牛肉麵深受歡迎的原因。有嚼勁的肉加上手工刀切麵，不論清燉或紅燒口味，都能完美地滿足食慾。牛肉麵之外，穆記的斤餅包牛肉亦非常有名。斤餅抹上一層麵醬，放上薄片狀的牛腱，把青蔥捲入，口感十足。斤餅包京醬肉絲也是一絕，若你要外帶，分開點斤餅與牛肉，可避免麵醬滲入斤餅，吃不出麵香。眾多美食，讓很多人一試就成主顧，連小馬哥也經常光顧這家老店。想全面感受穆記的滋味？來一份斤餅包牛肉，加上一碗清燉湯頭，一濃一淡之間，享受指數早已破表。",
    lat: 25.02748,
    lng: 121.56341,
    location: "信義區",
    address: "吳興街239號1樓",
    tel: "+886-2-27239372",
    images: [
      "https://images.unsplash.com/photo-1546908720-1d9570dadddc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "杏子豬排-微風信義店",
    description:
      "來自日本九州，以講究豬種與採用有機蔬菜聞名，除了日式口味的豬排以外，也引進炸豬排的正統文化沾醬與器具。",
    lat: 25.04047,
    lng: 121.56691,
    location: "信義區",
    address: "忠孝東路五段68號",
    tel: "+886-2-27253339",
    images: [
      "https://images.unsplash.com/photo-1557956543-3187d3204fcf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "台北寒舍艾美酒店",
    description:
      "巧妙揉合人文藝術與時尚 探索台北新魅力以人文、藝術聞名全球的艾美酒店，起源於時尚之都-巴黎，以其富有前瞻性且引領時尚的內涵，不僅為賓客奉上完美的入住享受，更帶來駕馭自如的探索之旅。台北寒舍艾美酒店將帶來創意生活風尚，讓艾美賓客以嶄新的視角，透視世界。2010年12月3日正式開幕的台北寒舍艾美酒店，位於台北時尚+藝文核心地帶 &mdash; 信義計劃區內，共擁有160間客房和套房，兩家品味創新的美食餐廳、一間巧克力甜點專賣店、兩間時尚酒吧、以及占地1,700平方公尺的現代宴會空間，提供融合人文與科技的便捷服務。 以當代藝術的策展概念為基礎，台北寒舍艾美酒店選擇「光和影」作為思維主軸，將藝術品融入在每一位旅客都能接觸到的角落，以非傳統的方式引領賓客與藝術做直接性的互動，配合酒店的空間與環境，集結了來自台灣、中國、日本、韓國、美國、英國和比利時的多位當代藝術家，共近七百件跨媒材、跨形式的作品與裝置藝術創作，藉由藝術家們的獨具慧眼，觸動賓客感官神經，進而激發創意思維。",
    lat: 25.0382,
    lng: 121.56796,
    location: "信義區",
    address: "松仁路38號",
    tel: "+886-2-66228000",
    images: [
      "https://images.unsplash.com/photo-1590245623747-050dc9f20a54?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.9,
  },
  {
    name: "in house",
    description:
      "呈現lounge般時尚慵懶的in house，現代極簡的裝潢，讓人置身其中不會感到壓迫，加上服務人員熱絡的招呼，就如店名「in house」般，給客人回家般的感受。店內提供各國精華餐點，並不時加入自行研發的各式特色醬汁，提供時下流行且份量十足的美味；調酒部分同樣以「量大」為訴求，讓客人吃好也能吃飽。每週三、五、六晚間會邀請DJ視現場氣氛播放不同風格的音樂；每個月亦會策劃主題派對，在非常具有個人風格的服務人員感染下，客人也能忘我地加入狂歡。",
    lat: 25.03508,
    lng: 121.568,
    location: "信義區",
    address: "松仁路90號",
    tel: "+886-2-23455549",
    images: [
      "https://images.unsplash.com/photo-1573567048240-c799fae5c23e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.7,
  },
  {
    name: "榮榮園浙寧餐廳",
    description:
      "位於信義路上，有著令人懷念的老味道，榮榮園就是品嚐江南菜的不二選擇。前身為明和園，師父以50多年的專業料理經驗，傳承正宗手法，擁有深厚紮實的功夫，一絲不茍的精神，以注重火侯及程序的江浙和上海料理，讓榮榮園得到好口碑。像是「烤排」，選用新鮮豬排骨，以紅燒的湯汁燉煮6小時，讓肉質軟爛入味，吃起來排骨入口極化，香味撲鼻。獅子頭也是採用手工製作，將手工剁五花肉製做，經油炸、紅燒，吃起質感滑嫩，內餡相當的密實，不容易散掉。金牌主廚黃呈郎是江浙菜國寶級的老牌名廚，燒魚鮮和肉類料理的拿手絕活全是數十年功夫磨成，回憶起小時候跟著老師傅學做菜，光是學徒階段，就熬了10多年，才練就了今日精到俐落的好身手，「烤排骨」、「紅燒下巴」、「放山土雞」都是饕客指名的經典美饌。「馬頭魚燒豆腐」、「砂鍋魚頭」、「黃魚麵」、「清炒膳糊」，在平凡中有著滋養；「川揚獅子頭」、「八寶辣醬」、「東坡肉」、「肴豬腳」，在減油減糖的轉變中保留了老浙寧的家鄉味，熟客不斷上門，一吃就好幾代。大夥兒在此聚餐時，如果想小酌一杯，這裡的小菜，像是油爆蝦，以少油、少糖、少味精的健康烹煮方法，吃起來相當爽口，其他如干絲肉絲、茭白豆苗雙拼、油淋雞都是很好的下酒菜。榮榮園的裝潢相當明亮有著時尚的現代感，加上中國的畫作，如「清明上河圖」及庭院的山水等，巧妙地融合了傳統與現代的美感，讓顧客享受舒適的用餐氣氛。",
    lat: 25.03351,
    lng: 121.54471,
    location: "大安區",
    address: "信義路四段25號2樓",
    tel: "+886-2-27038822",
    images: [
      "https://images.unsplash.com/photo-1593487143578-5794e7084bee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "WET Bar 池畔酒吧 - W Taipei",
    description:
      "台北 W 飯店WOOBAR酒吧將提供您最新穎的品酒文化! 白天為時尚人士、姐妹淘們洽公、談心的最佳去處，晚上則搖身一變成為極具風格、炫目迷人的時尚男女聚集地。有知名 DJ 讓您感受音樂魔力，紅白沙發與大理石牆上的脣形投影燈，更增添了性感的氛圍。料理：調酒、輕食 │ 型式：新穎潮流酒吧Get cool after the pool in our oasis offering light and healthy snacks, grilled favorites from our urban barbeque, and drinks to quench your thirst!Fun, sun... done! Live it up by our beautifully landscaped poolside, where it&#39;s all about basking in the summertime, cool conversations, chilling out to your favorite DJs and their tunes, and attending the city&#39;s most sought-after W Happenings.With a panoramic view of the spectacular skyline, you&#39;ll never have to miss the sights, even as you live it up at our scene-setting party featuring an al fresco grill and all kinds of juices, smoothies, drinks and our famous neverending cocktail list to always keep you refreshed.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04005,
    lng: 121.57097,
    location: "信義區",
    address: "忠孝東路五段236巷10弄",
    tel: "02-77038887",
    images: [
      "https://images.unsplash.com/photo-1612505737433-dc58d045da38?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "Rice Cafe 杓文字",
    description:
      "Rice Caf&eacute; 杓文字為日式蓋飯、日式便當專門店。「杓文字」是&rdquo;飯匙&rdquo; 的日文，代表我們提供優質、道地日式米食的堅持。米是Rice Cafe最驕傲的食材，店內所有的餐點都使用原產於新潟移植到台灣的原種越光米，軟硬適中、粒粒分明，為行政院農委會主辦第一屆台灣米餐廳大賽唯一得獎的日式餐廳。每種丼飯都附上味噌湯及兩樣精緻清爽的日式配菜。「豬排丼」是店內的人氣料理，脆脆的炸豬排裹在滑嫩的蛋液與香濃的醬汁中，喜歡傳統日式丼飯的你絕對不可錯過！",
    lat: 25.03208,
    lng: 121.52926,
    location: "大安區",
    address: "永康街10巷7號",
    tel: "+886-2-23948236",
    images: [
      "https://images.unsplash.com/photo-1560053608-13721e0d69e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "高記 (永康店)",
    description:
      "高記上海點心&mdash;活出60年精彩的生煎包大紅的底色，「高記」兩字從民國38立於此。三代的傳承，熱賣的依舊是有名的「生煎包」，而其秘訣就在用以自然發酵的老麵，才能嚼出QQ的外皮麵香；只是要這60老麵使出真功夫，可不是人人使喚了得，還得十數年經驗累積，才能抓得住適合其溫度、濕度，加以手的揉勁、發酵的時間&hellip;，才讓它的內力完全施放出來。而為一嚐生煎包的鮮度與熱度，享受滑嫩肉餡結合包子底部的焦香，直接上桌的小鐵鍋，現點現煎，更是一絕。重酥蟹殼黃也是道地，烤得層層金黃的酥皮，內包油蔥，酥脆口感和層次間飄散的香氣，讓人一口接一口，難怪上海人叫它一口酥。蔥烤鯽魚、油豆腐細粉、原盅土雞湯、高祖菜飯等，也都口味道地，時有官員用以招待外國貴賓，亦曾獲邀至總統府現場製作，可說帶動了台北市的上海點心風潮",
    lat: 25.03333,
    lng: 121.52997,
    location: "大安區",
    address: "永康街1號",
    tel: "+886-2-23419984",
    images: [
      "https://images.unsplash.com/photo-1602694490288-66ee1f3dd95d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "Tajin塔吉摩洛哥料理",
    description:
      "塔吉摩洛哥料理為全台北市唯一一家正統的摩洛哥餐廳, 主廚兼老闆Hicham(綽號「老陳」) 來台多年，為了帶給台灣人最正統的家鄉菜而開了塔吉摩洛哥料理。「塔吉」 (Tajin) 在摩洛哥話的意思為陶鍋以及使用陶鍋所細火燉煮的料理，由於當地水資源不豐足，因此發展出特殊造型並兼具機能美的鍋具， 大大的三角錐鍋蓋創造出空間讓食材的水氣在鍋內流轉，充分發揮食材美味也保留了珍貴的水份，鎖住食材的原味及營養，加上各種摩洛哥香料以及肉類一起慢火燉煮，並搭配Pita麵包食用。塔吉鍋料理所用的香料有珍貴的番紅花，茴香、匈牙利紅椒粉等等，肉品更是使用清真認證(Halal)的肉品。",
    lat: 25.0283,
    lng: 121.55628,
    location: "大安區",
    address: "基隆路二段144巷3號",
    tel: "+886-2-27327296",
    images: [
      "https://images.unsplash.com/photo-1579511369362-ba589be6115b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "真的好海鮮餐廳",
    description:
      "&ldquo;真的好&ldquo;海鮮餐廳成立於1995年10月，迄今已有17個年頭, 真的好海鮮，創始店位於新生南路, 面對大安森林公園的一棟獨立花園別墅內.由於餐廳堅持提供原汁原味的海鮮以及餐廳盡善盡美的服務, 為客人提供精美上乘的菜肴及豪華舒適的飲食環境, 16年來深得各界中外人士、政商名流的喜愛,也贏得了臺北市海鮮食府之冠的美譽。&ldquo;真的好&ldquo;海鮮餐廳目前共有3家分店. 臺北一家&mdash;復興旗艦店,上海兩家&mdash;新天地店及楊浦店. &ldquo;真的好&rdquo;一直以其幽雅的環境,親切的服務及精湛的菜肴而受到當地消費者的喜愛, 以及業界的推崇,在各項餐飲及美食競賽中亦是屢獲大獎. 尤其是臺北&rdquo;真的好&rdquo;, 16年來對美食及服務的堅持不懈,更使其成為了政商名流及中外知名人士宴請用餐或造訪臺北時的首選.復興旗艦店&mdash;臺灣頂級海鮮代表秉持著十多年來經驗及精神,&rdquo;真的好&rdquo;於本年度擴大經營，並選址于臺北市復興南路一段222號開立旗艦店,以饗更多消費者對美食的追求.&ldquo;真的好&rdquo;復興旗艦店約500坪, 介於SOGO新館及福華飯店之間,消費層次高端.交通方面更是便利,近忠孝復興站捷運口,是臺北市極珍貴的商業精華地段. 在經&rdquo;真的好&rdquo;之專業經營團隊進駐後, 必將成為臺北頂級消費場所之一.&ldquo;真的好&rdquo;復興旗艦店的設計呈現了當今流行於紐約現代簡約奢華與東京室內庭園風的完美結合. 東西方相互交融的細節隨處可見. 細緻不炫耀, 沉穩而不浮誇. 一進門即可看到通透於2個樓層的儲酒櫃, 有著全見式的玻璃, 黑色的鋼骨層架擺放著來自法國五大酒莊以及新,舊世界酒區交互爭輝的各式精選酒, 這一設計讓我們看到了蘇活區的後現代裝置藝術的影子. 整個大廳及包廂被清代最Cool的文學大師--鄭板橋&rdquo;揚州雜記&rdquo;的書法所圍繞. 在現代的光影中流溢出傳統卻又不羈的豪放.&ldquo;真的好&rdquo; 復興旗艦店的生猛海鮮區亦是台北餐飲界首屈一指的亮點. ㄇ字型的環繞設計, 讓你一走進生猛海鮮區就彷彿到了水族館. 蘇眉,老鼠斑,七星斑,石頭魚,巨型龍膽魚,鱈場蟹,花蟹,龍蝦,牡丹蝦,瀨尿蝦,象拔蚌&hellip;&hellip;目不暇給. 這些珍貴的魚,蝦,蟹,貝在其原生長地,除了需要純淨的海水外, 從熱帶到寒帶其水溫更是有差異性的需求, 造價近300萬的溫控水族箱及濾水設備就是為了呈現這樣的原生環境. 也就是讓這些身價不菲的海鮮寶貝們住中央空調的豪宅. &ldquo;真的好&rdquo;認為,為了讓貴賓們享受到更優質美味的餐點,這樣的投資是值得的.&ldquo;真的好&rdquo; 復興旗艦店2個樓層共有13個精緻包廂, 從6人~18人同桌到可同時擺五桌的大包廂, 皆可滿足各樣的需求. 另外還有可提供200-300人餐聚的大型宴會廳. 不論是專業精緻的婚宴配套服務, 公司行號或私人宴請甚至是到府的外燴服務。&ldquo;真的好&rdquo;皆可以為您提供專業的廚師團隊, 美味精緻的餐點以及優質貼心的服務。並選用世界頂級品牌陶瓷和銀制餐具,配以高檔的海鮮食材.保證讓您的宴會賓主盡歡.MFR=Muslim-Friendly Restaurant 穆斯林友善餐廳",
    lat: 25.03917,
    lng: 121.54344,
    location: "大安區",
    address: "復興南路一段222號1樓",
    tel: "+886-2-27713000",
    images: [
      "https://images.unsplash.com/photo-1572677343279-a025657230ac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.8,
  },
  {
    name: "羅亞咖啡及餐廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳 羅亞咖啡及餐廳",
    lat: 25.02763,
    lng: 121.53447,
    location: "大安區",
    address: "新生南路2段72號",
    tel: "+886-2-23641310",
    images: [
      "https://images.unsplash.com/photo-1572339936896-a419b9e69b96?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjEzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "品安刈包",
    description: "位於東區巷弄內的平價美食",
    lat: 25.04325,
    lng: 121.54667,
    location: "大安區",
    address: "大安路１段51巷9號",
    tel: "02-27765319",
    images: [
      "https://images.unsplash.com/photo-1600353565737-2427a1ba3d3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjE1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "咖啡小自由",
    description: "小自由獨有的風味 讓想放鬆的靈魂在此處能夠享有那珍貴的自由",
    lat: 25.03003,
    lng: 121.53062,
    location: "大安區",
    address: "金華街243巷1號",
    tel: "0223567129",
    images: [
      "https://images.unsplash.com/photo-1503543924343-53d8f2d97bf4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjE4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "洛神賦麻辣極品鴛鴦",
    description:
      "坐落於東區名人巷弄, 鮮紅色的顯目招牌佇立在街角, 透露著高調不平凡中的低調, 深色基底裝潢色調流露出業者的獨特品味及想傳達給每位饕客的意念, 別於一般火鍋餐廳市場般鬧哄哄的用餐環境, 餐廳中間的VIP包廂將店內所有用餐位子明顯的劃分開, 因此用餐也多了幾分隱私, 餐廳內擺放張炳煌老師的墨寶, 常常造成用餐貴賓的討論話題, 店內每一座燈光的角度, 每一處角落的安排, 男女有別的化妝室都經過精心安排與巧思, 最主要的目的只有一個, 就是打造一個精品火鍋的品牌及環境, 讓來此用餐的饕客賓至如歸。",
    lat: 25.03995,
    lng: 121.54506,
    location: "大安區",
    address: "仁愛路四段27巷16號",
    tel: "02-27313779",
    images: [
      "https://images.unsplash.com/photo-1553676332-6cd6d6efbbcd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTl8fHJlc3RhdXJhbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "Bea's Bistro",
    description:
      "沒有華麗的裝潢，卻有著家的溫暖感覺，能吃到口味道地.有靈魂的義大利麵，值得推薦!!",
    lat: 25.02856,
    lng: 121.52892,
    location: "大安區",
    address: "潮州街133號",
    tel: "02-23918827",
    images: [
      "https://images.unsplash.com/photo-1593135530889-2bc0f05beaa6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "薩朵義式餐廳",
    description: "招牌菜 綜合義式臘腸、芝麻葉茴香豬肉披薩",
    lat: 25.03989,
    lng: 121.55584,
    location: "大安區",
    address: "光復南路280巷36號",
    tel: "02-85025857",
    images: [
      "https://images.unsplash.com/photo-1607083966193-2215b910f372?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "努得咖啡",
    description:
      "台北第一間COACHEF授權店，2014年世界烘豆冠軍賴昱權親自監製在台北永康街全新開幕。還在為心悸跟睡不著不敢喝咖啡，快來努得咖啡給你全新體驗。本店不使用果糖、奶精、香料...等人工調味。The first store in Taipei that has been authorized by COACHEF. Its brand-new store at Taipei&#39;s Yongkang Street is produced by Mr. Lai Yu-chuan, the winner of the 2014 World Coffee Roasting Championship.Are you still staying away from coffee for fear of palpitation and insomnia? Come quickly to Nous Deux for a brand-new experience.At Nous Deux, no fructose, creamer, synthetic fragrance and other artificial flavoring is used.台北初のCOACHEFライセンス店。2014年ワールド・バリスタ・チャンピオンシップで優勝した頼昱権氏の監修により台北永康街にオープンしました。コーヒーを飲むと夜眠れなくなるのが心配なあなた、ぜひ努得珈琲のコーヒーを体験してください。当店はフルクトース、クリーミングパウダー、香料などを使用していません。",
    lat: 25.03337,
    lng: 121.53156,
    location: "大安區",
    address: "信義路２段228巷2號",
    tel: "02-23222324",
    images: [
      "https://images.unsplash.com/photo-1584964682383-44adaa680d04?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.3,
  },
  {
    name: "東雅小廚",
    description:
      "「東雅小廚」以「東方的美味、西方的雅緻」傳承中華料理。為了讓您品嚐食物本身的新鮮原味，吃到食材原本應有的完整植化素（天然超級抗氧化物質，是「二十一世紀的維生素」，只存在於未加工的天然植物中，不能從保健食品中獲得，「東雅小廚」盡量採用有機、天然、無毒、無加工、對土地環境友善的食材，做出清爽的菜餚。「東雅小廚」秉持著多年來全台蒐尋好食材的熱愛，更瞭解健康與正確飲食的重要性，所以來這裡用餐的每位客人，都是我們的好朋友，堅持以溫馨私房菜色的「真味」呈現，來呵護您的健康！帶著一顆分享的心，「東雅小廚」的女主人喻姐更創立了「雅比斯手創樂活館」把自己多年來找尋到的天然無污染食材，讓更多好朋友也能一同分享。這裡賣的不只是安心食材，更希望將健康樂活的生活概念推廣到每一個人的生活中。發現天然食材，讓我重新喚回吃的感動，重新找回健康！經營餐飲業已十多年了，大家都叫我喻姐。我把自己多年來經營「東雅小廚」餐廳所找尋到的天然無污染食材，讓更多好朋友也能一同分享。這裡賣的不只是安心食材與餐食，更希望將健康樂活的生活概念推廣到每一個人的生活中。【認識喻姐】⋯⋯現任：雅比斯手創樂活館、東雅小廚餐廳執行總監2012台灣美食展「健康飲食概念展」召集人台北醫學大學「一般保健及食物與癌症學分班」研習結業耕莘醫院永和分院健康烹飪講座講師曾任：YMCA基督教女青年會烹飪比賽評審台安醫院第一屆無油煙烹調比賽評審2010台灣美食展「低碳飲食蔬活展」召集人2008年台灣美食展「樂活養生展」策展規劃2007年台灣美食展「生機飲食展」策展規劃吾愛吾家》月刊資深編輯",
    lat: 25.04026,
    lng: 121.53353,
    location: "大安區",
    address: "濟南路三段7-1號1樓",
    tel: "0227736799",
    images: [
      "https://images.unsplash.com/photo-1575862660817-a0b1f65cecd1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "遊茶 U CHA",
    description:
      "遊茶，起源於西元1988年，由傳統茶行蛻變而成為結合茶香、梅甘與雅膳的東方美食。嚴選台灣最優質的茶葉，輔以家傳的焙茶專業，焙出茶中極品，並且別具高巧的技藝，多年來陸續研發多項以茶入味的餐食，例如茶梅、茶肉乾、茶瓜子、茶肉燥和茶糖等等。獨家首創的「烏龍茶味牛肉麵」更使中外媒體報導不斷，日本美食界以『驚愕』字眼大加讚嘆這味源自台灣的美食，一時之間傳為奇談。西元1996年在遠企購物中心力邀之下，進駐設立台灣第一家茶麵專櫃，博得饕客一致肯定。⋯⋯遊茶專注於茶香與膳食的融會，講究風雅、自然與健康，為傳統台灣茶藝注入新活力，力促品茗年輕化，同時帶動「東方‧時尚‧藝術‧品味」，期許精緻的喫茶文化能瓜瓞綿延，名揚四海。",
    lat: 25.0277,
    lng: 121.5512,
    location: "大安區",
    address: "樂利路18號",
    tel: "0931124888",
    images: [
      "https://images.unsplash.com/photo-1570802378140-42383ae50e07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.9,
  },
  {
    name: "永康街芋頭大王",
    description:
      "三十年多年的歷史老店，小小不起眼的店面，每天卻能賣兩百手的芋頭，大塊芋頭甜而不膩，糊糊爛爛的讓人吃過就忘不了。",
    lat: 25.03246,
    lng: 121.52981,
    location: "大安區",
    address: "永康街15之4號",
    tel: "02-23217649",
    images: [
      "https://images.unsplash.com/photo-1558473399-6773c890474c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTExfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.6,
  },
  {
    name: "光扉5號",
    description: "提供飲料和咖啡",
    lat: 25.04403,
    lng: 121.54653,
    location: "大安區",
    address: "大安路一段31巷5號",
    tel: "02-27764806",
    images: [
      "https://images.unsplash.com/photo-1584362066939-5982187ab049?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "咖啡弄 忠孝店",
    description:
      "台北市最優質的下午茶輕食館，想以平易近人的價格享用美味無負擔的下午茶輕食，【咖啡弄】是您最佳的選擇。超厚實外脆內軟的鬆餅，一顆顆紅艷的鮮草莓，淋上頂級進口果醬與煉乳，幸福的滋味就在這裡。時尚簡潔的裝潢設計，穿梭在店內的服務人員，沒有了制服的拘束，專業的服務更充滿了活力與朝氣。讓您如同到朋友家中作客般的感覺，營造令人能夠放鬆心情盡情享用美味的用餐環境。",
    lat: 25.04331,
    lng: 121.54816,
    location: "大安區",
    address: "忠孝東路四段101巷45號",
    tel: "02-27111912",
    images: [
      "https://images.unsplash.com/photo-1569966459694-faf2bf4af6c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "咖啡弄 敦化店",
    description:
      "台北市最優質的下午茶輕食館，想以平易近人的價格享用美味無負擔的下午茶輕食，【咖啡弄】是您最佳的選擇。超厚實外脆內軟的鬆餅，一顆顆紅艷的鮮草莓，淋上頂級進口果醬與煉乳，幸福的滋味就在這裡。時尚簡潔的裝潢設計，穿梭在店內的服務人員，沒有了制服的拘束，專業的服務更充滿了活力與朝氣。讓您如同到朋友家中作客般的感覺，營造令人能夠放鬆心情盡情享用美味的用餐環境。",
    lat: 25.04252,
    lng: 121.55147,
    location: "大安區",
    address: "敦化南路一段187巷42號",
    tel: "02-27111910",
    images: [
      "https://images.unsplash.com/photo-1592898695035-689154511f66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "肉多多 古亭店",
    description: "肉多多",
    lat: 25.02616,
    lng: 121.52337,
    location: "大安區",
    address: "羅斯福路二段79號3樓",
    tel: "0223632323",
    images: [
      "https://images.unsplash.com/photo-1553321846-ad6616f5d1db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.5,
  },
  {
    name: "天下三絕",
    description:
      "五星級的牛肉麵店，最好的食材、最簡單的方法和最誠懇的心意，創作道地美味。台灣人愛吃牛肉麵，熱衷自己煮麵的人也不少。台北仁愛路巷內開幕不久的天下三絕，就是老闆吳贊浩、吳奇澤父子倆的實驗廚房！原本從事室內設計的老闆吳贊浩，牛肉麵是他在親友間頗有口碑的拿手菜之一，去年參加台北牛肉麵節台灣牛肉麵廚王大賽入圍前8強後，更加深他開店的自信，兒子吳奇澤也放下原本的工作來當助手。選用澳洲頂級花腱、腱子心、腱子頭等煮出肉味香濃的高檔牛肉麵，吸引許多名人上門嚐鮮。。為了讓吃牛肉麵更風雅、更國際化，餐廳還供應紅酒，與頂級食材互相搭配，滋味更是豐富。",
    lat: 25.03886,
    lng: 121.5453,
    location: "大安區",
    address: "仁愛路四段27巷3號",
    tel: "+886-2-27416299",
    images: [
      "https://images.unsplash.com/photo-1573588546512-2ace898aa480?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "芒果恰恰有限公司",
    description:
      "芒果長Mango 及芒果夫人ChaCha 每次品嚐到自家栽種的美味芒果時，所有煩惱都一掃而空！ 對芒果充滿熱忱的2個人，為能讓更多人體驗這種幸福時刻的感動，2010 年夏天，首家國際級「全芒果體驗店」正式問世！台灣頂級愛文芒果， 外型渾圓紅豔，黃澄澄的果肉細緻飽滿， 甜而多汁中帶著特殊清新芬芳， 幾顆就能滿室生香， 是水果王國台灣最亮麗的明星。MangoChaCha 嚴選一棵樹只取80 顆的稀有產量， 完熟、高甜度、飽滿紮實的頂級愛文芒果，獨家研發芒果沙西米急凍保鮮法， 鎖住芒果鮮甜風味。濃郁清新的芒果香氣、入口即化的細緻果肉，店裡一年四季都吃得到！再加上選用芒果牛奶刨成的綿密雪花， 鋪上新鮮愛文芒果， 點綴幾顆心型棉花糖，MangoChaCha 的招牌冰品－ 芒果雪花冰就完成了！不需要芒果醬汁，吃進嘴裡就是天然芒果鮮滋味！熟客必點的除了芒果雪花冰、招牌黑糖芒果冰之外， 還有芒果甜酒、芒果茶、芒果醋、芒果醬、芒果酥、芒果牛軋糖、芒果湯圓&hellip; 等等。吸引國際級巨星、偶像與藝人慕名而來，連韓國藝人SHINee、2.a.m.、日本藝人志村健、NBA 籃球明星林書豪、歌手林俊傑都特別來台灣指名品嘗MangoChaCha呢！Branding StoryEvery time when Mr. Mango and Mrs. ChaCha tasting the delicious mango grown by themselves, all their worries sweep away. Two mango-passionate people, in order to make more people exper ience this happiness and touched moment, in summer 2010,the f i rst internat ional &ldquo;Mango Holistic Experience Store＂officially opened.The top Taiwanese apple mango, wi th rounded shape a brilliant red-color skin wrapped up with delicate and fleshy yellow fruit pulp, sweet and juicy; the fresh aroma can fill a room by only few mangos. It is the brightest star of the fruit kingdom-Taiwan. Wi t h Ma n g oCh aCh a &acute; s s t r i c t standards, only 80 fully ripened, highly sweetness and fleshy top apple mango will be selected from one tree. The exclusively developed &ldquo;Mango Individual Quick Frozen Technology＂ can completely locks the sweetness of mango.The rich and fresh mango aroma and the mouse melting taste, you can taste it every season. The fluffy mango-milk snow ice with fresh apple mango pulp topping, embel l i sh wi th some hear tedshape marshmallow, Top Selling of MangoChaCha-Mango Snow-Ice-Flake is completed. Do not need the mango sauce, ever y taste in your mouth is natural and fresh mango flavor.Except Mango Snow Ice Flake and Brown Sugar Mango Ice that regular customers must ordered, we still have Mango Liquor, Mango tea, Mango Vinegar, Mango Jam, Mango Sauce , Mango Pastry , Mango Candy, Mango Dumpling and etc. Attracting international superstars, idols and celebrities: SHINee, 2.A.M, Japanese celebrity Ken Shimura, NBA basketball star Jeremy Lin and singer Jun-Jei Lin come to Taiwan especially for MangoChaCha!",
    lat: 25.03435,
    lng: 121.55728,
    location: "大安區",
    address: "光復南路562號",
    tel: "+886-2-27029506",
    images: [
      "https://images.unsplash.com/photo-1586156935685-b00d587bbbcc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.2,
  },
  {
    name: "溫古咖啡",
    description:
      "薰風陣陣 ，沉浸在藍色的白日夢裡...聆聽一季 🌵夏日的交響曲。溫古新推出 - 期間限定盆栽飲品🌱❄️&lt;&lt;我的藍莓夢&gt;&gt;❄️沁涼酸甜的藍莓，搭上果香濃厚的香蕉奶昔🍌🍌🍌⋯⋯馥郁的綿密口感，加入精心調製的幸福滋味🌸炎日的夏天到了，啜飲一口小確幸吧",
    lat: 25.04351,
    lng: 121.54777,
    location: "大安區",
    address: "敦化南路１段160巷16號",
    tel: "0227117181",
    images: [
      "https://images.unsplash.com/photo-1557956543-3187d3204fcf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "誠記越南麵食館",
    description:
      "誠記越南麵館 創立於1980年，創始人是越南年華僑杜氏夫婦，草創時期是以麵攤方式經營。餐點是以越南口味的河粉，清燉牛肉河粉及先牛肉河粉及小菜為主，由於用料實在、口味獨特深獲顧客的喜愛。誠記的道地招牌越南口味河粉系列，清燉、鮮牛肉河粉外還有沙茶、咖哩、乾拌等家鄉南洋口味的河粉， 讓老饕口碑相傳，讓食客聞香而至。永康街6巷1號店屹立三十年，因顧客口耳相傳及觀光客慕名而至，使杜氏夫婦生意越來越好，故在北市永康街6巷1號開出第一家店舖，讓顧客能有更好的用餐環境。一脈相傳的越南道地口味並堅持嚴選新鮮食材，是讓誠記屹立三十餘年的主要關鍵。誠記二代~經典口味創新傳承，第二代接手的是從英國留學歸國─主攻飯店管理，為了誠記長遠的經營，斥資建立中央廚房，父母親負責菜色研發，第二代負責經營管理，並在2008年勇奪台北市年肉麵節 國際組 亞軍 犇越牛肉河粉。",
    lat: 25.03266,
    lng: 121.52969,
    location: "大安區",
    address: "永康街6巷1號及6號",
    tel: "+886-2-23211579",
    images: [
      "https://images.unsplash.com/photo-1546908720-1d9570dadddc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "星辰牛排",
    description:
      "星辰牛排是一家天然、健康為取向的牛排店，為使牛排的每一個細胞都能將肉汁鎖住、使肉質鮮嫩、沒有血水，星辰曾於一年半的時間裡耗費1000公斤以上的牛排，精心研究法國分子料理技術「舒肥烹調法」，以真空低溫烹飪，更重要的是「低溫」不容易起化學變化，亦不容易產生致癌物，更無需使用組合肉、或泡嫩精、泡蘇打；講求少油、低鹽、少油煙、軟嫩好吃又健康！提供給顧客喝的水亦使用美國安全健康的A.J.Antunse的濾水系統。 除了牛排以外，另提供魚排、豬排及海鮮類套餐點，同樣講求不沾粉、不沾蛋、不調味的原汁原味料理方式，特別推薦店裡的名菜--德國烤豬腳，精準的控制到上下兩面脆、兩側保留軟嫩膠質、整體口感就是香、脆、軟嫩，歡迎前來體驗！",
    lat: 25.04261,
    lng: 121.55666,
    location: "大安區",
    address: "光復南路180巷16號1樓",
    tel: "+886-2-27217512",
    images: [
      "https://images.unsplash.com/photo-1560576866-eca28dedc388?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "湛盧咖啡",
    description:
      "湛盧咖啡為一咖啡專門店，湛盧之名來自戰國時代越國刀匠歐冶子，在炙熱的爐火邊，鑄造的湛盧寶劍，調配咖啡，也有類似火中取蓮的精神。湛盧咖啡的生豆取材自世界各產地，經自家烘焙、養豆、研磨，再由專業Barista即席桌邊沖煮，展現咖啡的最佳風味。湛盧有許多咖啡品項，以產地來源分海島咖啡、非洲咖啡、亞洲咖啡、美洲咖啡。有各種義式咖啡如義式濃縮咖啡、義式摩卡巧克力；各種酒香咖啡如貝里斯奶酒咖啡、君度香橙咖啡、加利安洛香草咖啡、愛爾蘭威士忌咖啡&hellip;等；各種冰釀咖啡如英倫玫瑰冰釀咖啡、法式薰衣草冰釀咖啡、雅典紫羅蘭冰釀咖啡，種類繁多。還有各式茶品、飲料，也有提供搭配咖啡的甜點。湛盧咖啡，燈光美氣氛佳，除提供美味的咖啡，也舉辦生活講座與免費活動，歡迎民眾參加，學習咖啡相關知識。",
    lat: 25.03455,
    lng: 121.5333,
    location: "大安區",
    address: "新生南路1段161巷2-1號",
    tel: "+886-2-27089828",
    images: [
      "https://images.unsplash.com/photo-1602833334025-5019f046b8f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "叁和院 台灣風格飲食 (忠孝店)",
    description:
      "『叁和院 台灣風格飲食 參和院 』-世界風 台灣情  創意時尚新台菜叁和院 &ndash; 以傳統台灣印象為基、嚴選新鮮食材保留台灣溫暖美味，結合歐美餐酒飲食文化、 加入新時尚與創意、增添品嘗時的視覺與味覺雙重享受，創造風格獨具的時尚用餐氣氛、精緻創意餐點、專業酒水與歡樂熱絡的服務。期望不只讓台灣各地都能品嚐到我們獨特的台式美味，也希望世界以台灣飲食為傲，讓更多人有機會體驗獨具一格的新派台菜餐酒文化。",
    lat: 25.04224,
    lng: 121.54793,
    location: "大安區",
    address: "忠孝東路四段101巷14號",
    tel: "02-2731-3833",
    images: [
      "https://images.unsplash.com/photo-1570615994481-7116637e5e52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.0,
  },
  {
    name: "GODIVA 生活形象店",
    description:
      "亞太區第一間、也是台灣唯一的GODIVA生活形象店，就在台北東區有名的216巷巷口跟大家見面囉！獨家提供GODIVA下午茶組合的忠孝生活形象店，門口有著大大的巧克力霜淇淋等著迎接大家～舒適的座位區，提供貼心的桌邊服務獨家的金緻下午茶組，還有許多下午茶體驗只在台北生活形象店！手製鮮果巧克力甜筒不定期推出的特別體驗活動，也只在台北忠孝生活形象店喔～",
    lat: 25.04129,
    lng: 121.55316,
    location: "大安區",
    address: "忠孝東路四段218號1樓",
    tel: "02-2711-8087",
    images: [
      "https://images.unsplash.com/photo-1571863005528-d4b29307e35a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.9,
  },
  {
    name: "桔梗三明治",
    description:
      "J I E G E N G E 桔梗，是ㄧ個集結各領域的團隊。包含:廚師、咖啡師、甜點師，平面、室內空間設計師&hellip;等。桔梗花語：S i m p l y t h e F i n e s t，堅持、永恆不變即是桔梗態度。我們的核心概念，將傳遞簡單生活的體悟，結合在地性美食、人文文創、展覽空間、熱絡里民。整合出貼近生活美學的創意美食品牌。精神核心四大主軸1.堅持:手作料理，任料理都是經由本店料理長親手製作與把關2.創意:多元飲食經驗元素設計融合，讓商品更多元與創新性3.熱情:人文生活的小確幸體悟，感受樂活4.品嚐:美食的料理哲學，人人都是美食家桔梗手作三名治，當新鮮食材運送過來後，經由桔梗廚師細心的處理食材，透過法式與現代手法的精心調味。讓各位顧客們，都能吃到美味又健康的料理。桔梗的空間主題設計以北歐極簡風格為基底，讓陽光從大片的落地窗灑入，搭配簡約的原木桌椅，用自然光營造出寬敞明亮的用餐空間，充滿植栽、各種書籍及與藝術設計作品的擺設，服務生的親切笑容與服務，讓客人們都能感到自在簡單、清新、放鬆，點上一份桔梗手作三明治與咖啡，絕對會是ㄧ件最放鬆療癒的事情。close",
    lat: 25.03316,
    lng: 121.54072,
    location: "大安區",
    address: "信義路三段150之2號",
    tel: "02-27012220",
    images: [
      "https://images.unsplash.com/photo-1567304107177-611e274b1bb8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "Watersheds",
    description:
      "位於安和路精華地段鬧中取靜的小巷深藏著---WatershedsWatersheds的挑高簡約裝潢,舒適空間無壓迫感環繞著 Trance &amp; house 的旋律讓來到 Watersheds 的朋友們放鬆整天疲累身心,盡情享受悠閒片刻《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03287,
    lng: 121.55203,
    location: "大安區",
    address: "文昌街123號",
    tel: null,
    images: [
      "https://images.unsplash.com/photo-1597575263131-67379da51957?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "Trio三重奏 (安和店)",
    description:
      "餐點好吃，酒也好喝。總共有兩個樓層，上下都有吧台。地下室Bartender是女生喔! 調的非常棒《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03055,
    lng: 121.55142,
    location: "大安區",
    address: "敦化南路二段63巷54弄12號",
    tel: "02-27038706",
    images: [
      "https://images.unsplash.com/photo-1541856644905-bd40b138cbbd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "Tickle My Fantasy",
    description:
      "Probably the best thing about this bar for many is its name.Tickly My Fantasy is a small Taipei dive bar/ restaurant in Xinyi&#39;s busy Anhe Road near Carnegie&#39;s that&#39;s open till late and a cosy spot to get a refreshing drink and bite to eat, and hang out with friends.The decor and layout inside is modern and spacious enough, however the atmosphere is not always that inviting though and the not-so-friendly owner is known for getting in your face if you behave in a way not to her liking ,e.g. being too noisy or in large group. If you don&#39;t like a smoke-filled bar, this Taipei bar might not be the right fit for you.It&#39;s not really a place where you&#39;ll be looking to make new friends, but more geared towards entertaining current friends.That being said though, Tickle My Fantasy is usually busy and packed with locals, so they must be doing something right? Tickling tastebuds more like. Look towards the well-priced food and drinks menu.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03261,
    lng: 121.55227,
    location: "大安區",
    address: "安和路二段8號",
    tel: "02-27090106",
    images: [
      "https://images.unsplash.com/photo-1593940702988-5ab40a1913d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.6,
  },
  {
    name: "The Speakeasy Bar",
    description:
      "The Speakeasy is an Irish bar located in the heart of Taipei. It is casual drinking establishment catering to those of us who enjoy a few drinks, having a chat, and listening to some background rock music. We also show some English premier league games on the weekend coupled with a few games of the oval ball variety during the rugby season.Our opening hours are from 7pm till 2am everyday (With a Happy Hour from 7pm till 9pm). Later on the weekends. On some nights the pints do flow well beyond 2am so do call ahead if you&rsquo;re looking for a nightcap in the wee hours.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03457,
    lng: 121.55731,
    location: "大安區",
    address: "光復南路554號",
    tel: "02-27050300",
    images: [
      "https://images.unsplash.com/photo-1566209046824-1f7529d71fb4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "Sappho Live Jazz",
    description:
      "Sappho Live 現場爵士酒吧坐落於台北市東區安和路的小巷子裡，多年來致力於現場爵士樂的演出，提供了一個不譁眾取寵的舞台, 每週二至六的爵士樂團與開放舞台, 隨著固定班底的樂團也歡迎你帶著各種樂器或聲音上台一起較量, 這樣隨性又即興的方式令熱愛現場演奏氣氛的聽眾, 享受一場精采的表演.。來這裡請忘掉白天的忙碌與日常生活的辛勞，好好享受我們為你帶來的一切，不需要帶著豐富的樂理知識, 只要帶著輕鬆的心就能為你準備一整晚的音樂,在這樣休閒放鬆的現場氣氛下,和知已朋友們喝酒聊天,聽聽音樂渡過一個愉快的夜晚.。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03443,
    lng: 121.55229,
    location: "大安區",
    address: "安和路一段102巷1號",
    tel: " 02-27005411",
    images: [
      "https://images.unsplash.com/photo-1592276154414-2989cfaa6f93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjAzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "Prozac Balcony",
    description:
      "關於百憂解陽台。幾個好友，學生時期就開始幻想，有朝一日能夠擁有屬於自己的場域：或像酒吧，或像餐館，或像咖啡店。只是後來因為種種現實考量，分開在不同的領域工作，但都能夠在繁忙之餘，定期相聚，把酒言歡，以此解憂，除分享咖啡、點心外，也在個小陽台上聽著音樂，抽著菸，相互訴說各自遭遇著的人生故事，交換討論彼此的夢想。一切從此開始，也是百憂解陽台命名的由來。隨著時間流逝，朋友圈逐漸擴大，訪客人數日增，為住家的空間，終於使人感到侷促狹窄，辦起聚會總未能盡興。眾人也得面對生涯的重要抉擇。才想起那年少時擁有的未盡之夢。於是這群各懷鬼才的朋友們，就在分工合作，互相扶持之下，花費將近兩年，終讓安和路上的首間百憂解陽台開始營運。但這個城市比想像裡的還要憂鬱：並非所有靈魂，都高貴且成熟的足以理解他人的夢想，更以種種物理化學及道德法理上的限制阻撓，使得那個空間內的自由素材極其有限，無法開出更多的解鬱處方，以治癒每個不同形狀，卻共同徬徨莫名的靈魂。於是營業正要屆滿一年前夕，朋友們無奈的取得共識，以種壯士斷腕的姿態，在週年慶前日，將安和路上的初代百憂解陽台永久歇業。在未有一人決定放棄夢想的狀況下，危機只會代表著轉機。這樣的劇變讓人很快的回頭想起，某個令人感到驚艷，卻陰錯陽差，失之交臂的開業地點。決策塵埃落定後，眾人傾力，快速的完成這間位於復興南路的二代百憂解陽台。過程有如像是大亨小傳作者－費茲傑羅筆下，那艘註定要在潮汐間不斷退回過去，卻奮力掙扎的逆流扁舟，痛苦萬分，卻也滋味豐富。無論如何，這地方確實更為接近最初的夢想了。像是酒吧，像是餐館，像是咖啡店。同時人、事、物依然有如過往的那般溫暖並真實：紅色的英式電話亭、白色明亮的小招牌、總煙霧繚繞的木質陽台，各個百憂解陽台的精神象徵，也終能繼續於眾人記憶中現身，更恒定的為所有即將到來，寂寞或不寂寞的人而開。",
    lat: 25.02417,
    lng: 121.54356,
    location: "大安區",
    address: "復興南路二段309號",
    tel: "02-23771118",
    images: [
      "https://images.unsplash.com/photo-1560053608-13721e0d69e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "Ounce",
    description:
      "台北的神秘地方1. 我們不接受訂位，但會盡力容納所有到場的客人。而由於座位限制，若人數超過四位，可能會被安排分桌坐。No reservations. We will do our best to accommodate all parties. However, please be aware that groups larger than 4 people may have to be split between multiple tables.2. 我們會等每一組客人的人數都到齊才安排入座。We ask that your entire party is present before we seat you.3. 在店門外交談時請將音量保持在室內講話的大小，我們的鄰居需要休息！Indoor speaking voices please. Our neighbors need their rest!4. 請注意我們保有權利驅趕酒醉行為不當的顧客。We reserve the right to remove any guests who display excessive drunkenness5. 請尊重所有員工以及客人。Please treat all staff and all other guests with respect《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03088,
    lng: 121.55103,
    location: "大安區",
    address: "敦化南路二段63巷40號",
    tel: "02-27086885",
    images: [
      "https://images.unsplash.com/photo-1579511369362-ba589be6115b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "飛鏢酒吧",
    description:
      "A Real English Pub in the Heart of Taipei.Providing the good times since 2011On Tap is the most popular English pub in Taipei, and as many might suggest, possibly the best in all of Taiwan. It is considered an institution by its legion of faithful regulars constantly lining up its counters.Owned by two long-term expats and jolly Englishmen, you&#39;ll find On Tap heaving on most nights with foreigners and locals of all walks of life, old and young. The atmosphere is always pleasant, never threatening and is the perfect place to bring a date.On Tap&#39;s intoxicating range of inported craft and draught beers, as well as home-made &quot;fusion shots&quot; are constantly updated under the expert eye of co-owner Jason David Lowe. If you&#39;re brave and/or stupid, ask for the Ghost Chilli Tequila.If you like to play darts, join the Moosehead Darts League! On Tap caters strongly for sports fans, and be warned, you need to book a seat well in advance during any World Cup or big event.You might never know who you run into at On Tap either...On Tap has an excellent kitchen and a great menu range of quality pub food, and their food specials are also well worth your while:Here are some highlights:Mondays: Burger Night (burger +free beer)Tuesday: Pasta Night (2 pastas for price of 1)Wednesday: Lad&#39;s Night (discounts on Mexican food and beer)Thursday: Wings NightSunday: Spicy Sundays (discount on all the Mexican food on the menu. We recommend the Chimichanga)Please note the pub can be hard to find if you&#39;re new to Taiwan. So, here&#39;s a quick map:Walk along Zhongxiao East Road until you first see the GNC shop and then McDonalds on your right. Turn right after McDonalds and then take the first right again, and you&#39;re thereDetails:2 Bars, 2 Floors, 12 Draft Beers &amp; Ciders, Huge selection of cocktails, spirits and shots, Wide range of home-made food, Live Sports on 10 screens, Pool, Darts, Beer Garden, Daily Happy Hour and Food Specials.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04089,
    lng: 121.55382,
    location: "大安區",
    address: "忠孝東路四段216巷11弄21號",
    tel: "02-27415365",
    images: [
      "https://images.unsplash.com/photo-1602694490288-66ee1f3dd95d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.8,
  },
  {
    name: "Nox Taipei",
    description:
      "&quot; Nox Taipei位在安和路巷內，擁有兩百餘款威士忌、啤酒與數不清的調酒配方，老闆Mordie曾鈺翔，是贏過多項大賽的調酒高手，懂酒，也愛好美食。擁有十多年以上的專業經歷，不但贏過大獎，還多次受邀為許多時尚雜誌、媒體、品牌派對等，設計獨家專屬的調酒配方，受到許多潮流人士的一致好評。&quot;http://i98tw.pixnet.net/blog/post/53854084-nox-taipei《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。?營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03021,
    lng: 121.55265,
    location: "大安區",
    address: "安和路二段71巷7號",
    tel: "02-27325826",
    images: [
      "https://images.unsplash.com/photo-1572914339585-e98c4d63d29a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjEwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "Monomono",
    description:
      "Monomono,located in Taipei&#39;s leafy and upmarket Daan area is an intimate lounge bar with great atmosphere, crisp service and a limited but delicious selection of snacks. Renowned specifically for their cocktails, Monomono can get crowded on weekends, but it just adds to the fun.A fantastic Taipei lounge and cocktail bar with more than a hint of exclusivity and elegance to treat friends or a date to an unforgettable evening.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。?營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.0358,
    lng: 121.55359,
    location: "大安區",
    address: "安和路一段127巷29弄17號",
    tel: "02-27540868",
    images: [
      "https://images.unsplash.com/photo-1594058158190-f0d493d39f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjE0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.5,
  },
  {
    name: "MOD Sequel 僖閣",
    description:
      "MOD經歷整整貳拾年，培育出不少傑出的學長姐，有幸成為台灣業界的搖籃。原因之一正是來自於MOD對經典的堅持以及對細節的追求。毛利桑和陳桑留給MOD簡單的一句話&quot;天天練習&quot;。直接反映出日本職人靈魂的中心思想，同時亦為MOD貳拾年以來所堅持的精神注入了一支重要的強心針。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。?營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.02835,
    lng: 121.55147,
    location: "大安區",
    address: "樂利路11巷7號",
    tel: "02-27372955",
    images: [
      "https://images.unsplash.com/photo-1572339936896-a419b9e69b96?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjEzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.2,
  },
  {
    name: "MOD Public Bar",
    description:
      "一顆顆手鑿威士忌專用圓冰，一杯杯平凡中見華美的調酒。一首首精心挑選的英式搖滾，一盤盤精心為您調製的美食。我們是 ＭＯＤ。如果我不在MOD那我一定是在去MOD的路上。Shall we?《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。?營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03888,
    lng: 121.55139,
    location: "大安區",
    address: "仁愛路四段345巷4弄40號",
    tel: "02-27314221",
    images: [
      "https://images.unsplash.com/photo-1562606847-fbb751995f1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjIwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "MayBE Music Bar",
    description:
      "旅遊聖經Lonely Planet高度推薦優質音樂酒吧台北音樂藝文人士的祕密音樂基地一個人來不會感到尷尬孤單一群人來歡樂無限的好地方在這裡音樂美酒是我們最好的朋友《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。?營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.0368,
    lng: 121.54431,
    location: "大安區",
    address: "復興南路一段253巷15號",
    tel: "02-27057399",
    images: [
      "https://images.unsplash.com/photo-1599409623944-fd5b92bb6908?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjE5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "馬可波羅酒廊（Marco Polo Lounge）- 香格里拉台北遠東國際大飯店",
    description:
      "馬可波羅酒廊居高臨下，可清楚觀賞台北 101 大樓的美景。就讓繽紛的飲料和雞尾酒陪伴您，度過一個美妙舒適的夜晚，感受高雅的聲光氣氛。這裡絕對是台北時尚人士最喜愛的聚集地。每週五與週六，晚間9點30分至凌晨，享受動感DJ的創意熱情演出，一同舞動快樂神經。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.0266,
    lng: 121.5492,
    location: "大安區",
    address: "敦化南路二段201號",
    tel: "02-77112080",
    images: [
      "https://images.unsplash.com/photo-1569707450161-98e87f345338?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "Little London 台北",
    description:
      "於台北東區角落的Little London你可乘著光影及音樂在這英倫迷幻空間旅行親吻大不列顛歡迎來品嚐絕對英式文化與精釀啤酒(備有 WIFI 無線網路、鋼琴、投影機，適合小型沙龍音樂會、講座及展演租借，歡迎洽詢)《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04274,
    lng: 121.55543,
    location: "大安區",
    address: "延吉街131巷26號",
    tel: "02-87722477",
    images: [
      "https://images.unsplash.com/photo-1596561260970-66b073f956a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjIzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "後院，L’arrière-cour，威士忌博物館",
    description:
      "小的時候學習成語，聲色犬馬這個成語，表示人的慾望橫流，自由的縱情聲色，如果要找到一個可以確切描述這樣情境的環境，腦中浮出的畫面，通常是一個煙霧裊裊的酒吧中，吧台上一個穿著西裝領帶的上班族，正在與一個穿著火辣的吧女，曖昧的攀談&hellip;&hellip;&hellip;.。這樣缺乏想像力的酒吧景象，在這個越來越多元化的現代社會之中，已經不是大部分酒吧的訴求或氛圍的塑造了。有些酒吧提供了良好的用餐空間，還有不輸星級飯店的精美料理；一些酒吧提供最新的運動頻道，讓三五好友可以一邊看球賽，一邊同樂；有些提供最頂級的古巴雪茄，讓行家玩賞；還有沙發酒吧，讓人躺在一列列的沙發上，彷彿回到家裡的感覺。酒吧種類的豐富讓城市人的夜生活越來越精采。2000年的千囍年，台北市安和路二段23巷4號L&rsquo;arri&egrave;re-cour我們的酒院子開幕，朋友會暱稱Backyard，或是後院。它是為城市中的菁英人士，建立符合其挑剔品味的需求。最齊全的單一麥芽威士忌收藏，在饕客口中L&rsquo;arri&egrave;re-cour號稱是威士忌博物館。第一家建立24小時恆溫恆溼空調酒窖來儲藏紅酒的酒吧。秉持著建立一家城市中最專業的Bar，讓國際上第一流的品味文化駐在家旁邊，像是你家的後院，隨時都可以推了門就進來，享受回家般的輕鬆悠閒。L&rsquo;arri&egrave;re-cour 地址:台北市安和路二段23巷4號。Tel:(02)27047818《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03202,
    lng: 121.55287,
    location: "大安區",
    address: "安和路二段23巷4號",
    tel: "02-27047818",
    images: [
      "https://images.unsplash.com/photo-1565706521995-b87fb9e71a45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjIyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "串場居酒屋 Kushi Bar",
    description:
      "我們是串場的!!!!當然也歡迎你們一起來&quot;串場&quot; !! &lt;按粉絲專頁「立即通話」就能迅速為您處理訂位哦！&gt;いらっしゃい !串場是一家以提供串燒和串炸為主的日式居酒屋,歡迎大家光臨來體驗關西豪邁的獨特風味!!門市聯絡資訊◎忠孝店__地址:台北市忠孝東路四段223巷52號__電話:(02)2771-9693__營業時間18:00-01:30 (Last Order 00:30)__座位數:43位◎大安店__地址:台北市大安路一段31巷44號__電話:(02)2711-9481__營業時間18:00-01:30 (Last Order 00:30)__座位數:50位◎林森店__地址:台北市中山北路二段39巷22號__電話:(02)2523-1022__營業時間18:00-01:30 (Last Order 00:30)__座位數:46位官方網站《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04392,
    lng: 121.54762,
    location: "大安區",
    address: "大安路一段31巷",
    tel: "02-29862156",
    images: [
      "https://images.unsplash.com/photo-1609692980754-5a9428f84960?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "KOR Taipei",
    description:
      "KOR擁有世界級的音響設備，每晚為您帶來嘻哈、放克、靈魂以及R&amp;B音樂，讓您搭配獨一無二的精緻調酒和稀有烈酒，與朋友們一起體驗全台北最時尚的夜生活。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04179,
    lng: 121.55143,
    location: "大安區",
    address: "忠孝東路四段201號",
    tel: "0966331033",
    images: [
      "https://images.unsplash.com/photo-1605492071155-1156bdf6ae13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "窖父 HideOut Taipei",
    description:
      "大安的水煙調酒吧。靠近師大和台大，進出窖父的族群除了音樂人，也有不少學生、上班族和外國人，你可以把這裡當成是認識新朋友的好地方，也可以單純來喝喝酒、解解悶。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.02588,
    lng: 121.53417,
    location: "大安區",
    address: "和平東路一段280號",
    tel: "02-23625805",
    images: [
      "https://images.unsplash.com/photo-1547157233-9ce16b078fd6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjMyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "Fourplay",
    description:
      "FourPlay2011年夏日誕生位於台北市大安區東豐街4位有著相同夢想 不同領域 共同努力因為我們都不想 一個人走 這無聊的台北街頭Fourplay 台北市大安區東豐街67號、Fourplay 2.0 OWL 台北市大安區東豐街61號, Taipei, Taiwan 106Price: 250~450 NTD/drink《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03606,
    lng: 121.54777,
    location: "大安區",
    address: "東豐街61號",
    tel: "02-27083898",
    images: [
      "https://images.unsplash.com/photo-1577595669707-8a707a0516fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "EZ5 Live House",
    description:
      "台北市歷史最久也是最知名的live house全球華人旅遊台北指名度最高音樂殿堂提醒：粉絲專頁不提供訂位服務，請於晚間7點~凌晨1:30致電+886-2-27383995訂位。僅此一家 別無分號《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.02611,
    lng: 121.55025,
    location: "大安區",
    address: "安和路二段211號",
    tel: "02-27383995",
    images: [
      "https://images.unsplash.com/photo-1548683691-70f5e3918cee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "Carnegie's Taipei",
    description:
      "體驗英倫搖滾的狂野氣質品味英、美、義式及亞洲美食魅力入夜後隨著節奏澎湃的音樂點燃熱情 跳上吧台熱舞狂歡每週三淑女之夜提供女士們香檳氣泡酒無限暢飲一整晚週五週六整晚狂歡至清晨《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.02849,
    lng: 121.54997,
    location: "大安區",
    address: "安和路二段100號",
    tel: "02-23254433",
    images: [
      "https://images.unsplash.com/photo-1603976227570-6aeed2d5c23f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjMxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "Bobwundaye 嘸問題",
    description:
      "音樂發聲, 滿足口腹, 說天談地溫馨小酒吧也提供異國美食 Monday to Saturday 6pm-2am 在心靈或形體寂寞的城市裡,一個小地方讓你發現原來不是唯一,卸下偽裝的面具,我只有用美酒音樂和友情讓你紓發自己《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.02466,
    lng: 121.5498,
    location: "大安區",
    address: "和平東路三段77號",
    tel: "02-23771772",
    images: [
      "https://images.unsplash.com/photo-1589930585353-e1949dc408f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjM1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.9,
  },
  {
    name: "BEAU",
    description:
      "Located in the heart of Taipei at Sec.4 Ren ai road, Beau is the latest addition to Taipei&rsquo;s bustling bar scene. Enter Beau&rsquo;s bronze doors and you are immediately transported to neo-classical Europe. Its grey-blue chic interior, romantic lighting, cosy courtyard, and collection of vintage furniture gives you an air of the Paris and Milan of yesterday. Splashes of modern colours and textures provide a touch of the new, while the dandy staff provide a friendly face.Open the menu and peruse through the list of old-world and new-world wines, boutique cocktails, spirits and beers. Pay particular attention to the wide range of sparkling wines, suitable for any occasion. The drinks menu is accompanied by a selection of moreish canap&eacute;s and bar snacks, incorporating Eastern and Western flavours.Beau&rsquo;s eclectic soundtrack of jazz, classical, electro-lounge and soul provide a relaxed mood during the week, while funky DJs provide a more upbeat vibe on the weekends.A plush upstairs loft is perfect for those wanting a little privacy or even a little romance.So grab your friends, and come enjoy Taipei&rsquo;s newest bar.Beau, the new gentleman in town.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.03714,
    lng: 121.55703,
    location: "大安區",
    address: "仁愛路四段408巷11號",
    tel: "02-27042189",
    images: [
      "https://images.unsplash.com/photo-1570054983111-559db00b08e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjMzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.2,
  },
  {
    name: "45 Pub",
    description:
      "45 Pub is situated near ShiDa, and is frequented by foreigners. But &quot;45&quot; isn&#39;t just a pub, it&#39;s also got food, and its music is alternative, but always of good quality with professional DJs. So come if you like good music but don&#39;t feel like dancing.You&#39;ll need to be careful though, &quot;45&quot; doesn&#39;t have all the ostentatious deco that most bars do, and it&#39;s on the 2nd floor of the building, so you&#39;ll need to pay attention when looking for it.《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.02715,
    lng: 121.52412,
    location: "大安區",
    address: "和平東路一段45號",
    tel: "02-23212140",
    images: [
      "https://images.unsplash.com/photo-1567102322755-77e538662806?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjM5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "鼎太極四神獸麻辣鍋",
    description:
      "以四神獸養生太極鍋作為發想，取名「鼎太極」。創辦人&mdash;&mdash;被各大媒體喻為麻辣教父的溫國智先生，是多項廚藝競賽冠軍，也是台視【美食好料理】常駐廚師、台視【健康好料理】、東風【料理美食王】、TVBS【吃飯皇帝大】、中天娛樂【冰冰好料理】等等知名美食節目特約廚師。曾獲獎項：2013年 十大傑出青年2009年 世界廚藝邀請團體組總冠軍2009年 獲選經濟部頒發【美味大師】榮譽2008年 獲選經濟部【十大美食名廚新秀】榮譽2008年 北京世界烹飪大賽 熱菜組金牌 點心組特金牌2008年 台灣美食展 國內賽職業組 團體組總冠軍　　學藝二十年經典之作，以源自於古天文學的四象作發想，意即全方位替消費者作食品安全的把關。本店的四神獸太極鍋，湯頭溫而不燥，滋而不膩，氣血雙補，相輔相成，搭配台灣在地食材，設計成「吃的藝術品」，帶給您視覺、味蕾的震撼與享受！　　在現今消費者講求健康養生的前提之下，食材選取方面特別嚴謹：鮮蔬類採用花蓮無毒中藥蔬菜及芽菜；海鮮類選用無毒養殖海鮮；肉類為香草豬肉，以及澳洲和牛等級肉品，打造出手創火鍋料理的新時代！　　溫師傅平日致力於為在地小農與農委會，以及地方政府推廣農業專案，同時任教於多所餐飲系的教學殿堂。將理論與知識做出最完美的結合，精心研發出運用台灣中藥材搭配台灣產地直送的新鮮蔬果，現熬而成「四神獸麻辣湯底」，絕對是讓您在享用後，完全不會上火的高品質特製養生高湯。此外，在各式菜色上亦大膽玩創意，讓在用餐之餘同時驚奇不斷、讚嘆不已。　　鼎太極麻辣鍋為中價位火鍋單點餐廳，菜色多樣化，有主廚推薦菜單、平價食材與頂級高檔食材可供選擇，包攬全客群！全台獨創四神獸鍋底：青龍酸辣鍋（綠）、白虎清爽鍋（白）、朱雀麻辣鍋（紅）及玄武香濃鍋（黃），採用大量嚴選在地新鮮時蔬，加上50多種中藥材，再與豬骨經過20小時精心熬煮而成之高湯，推疊出多種層次繽紛綻放的麻辣味型！　　時尚手創火鍋料理，揉合既有熟悉的品項構成時尚美食，強調天然、健康無負擔，以手工製作各式丸餃類如店內最熱門的起士牛肉丸、麻辣鱈魚湯包、皮蛋紅薑貢丸等造型特色丸子；主食提供十色繽紛米丸子、手工拉麵及烏龍麵；再加上各類絕美特色造型菜品如玫瑰松阪豬、雲霧手摘豌豆苗、女神火焰牛、段木香菇，搶占時尚料理界霸主！本店亦有超重量級商業午餐&mdash;&mdash;炭烤豬肋排麻辣麵，又辣又香又麻又軟嫩，嗜辣的朋友們千萬不能錯過！　　店內風格時尚簡約，環境舒適、享受，空間寬廣，亦有隱密性包廂，保密性高，服務人員如同朋友般的親切態度絕對讓您想一來再來！",
    lat: 25.01679,
    lng: 121.53285,
    location: "大安區",
    address: "新生南路三段104號",
    tel: "+886-2-23686811",
    images: [
      "https://images.unsplash.com/photo-1544694282-1019da8f482e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjM4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "臺北慕軒飯店  -  Gustoso義大利料理包廂",
    description: "MFT=Muslim-Friendly Tourism 穆斯林友善餐旅早餐/住宿",
    lat: 25.03398,
    lng: 121.52975,
    location: "大安區",
    address: "信義路2段195號2樓",
    tel: "+886-2-23432513",
    images: [
      "https://images.unsplash.com/photo-1597439664839-a8a03717c30a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjM2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "Wootp 窩台北",
    description:
      "要靈魂有靈魂，要歡騰有歡騰，甚至一點點寂寞與少許黏膩並存。身為亞洲50大酒吧之一，窩台北由台灣調酒大師小T黃俊憲領軍，在東區營造出頂級夜生活場域。除了厲害的調酒，店內也提供頗具水準的餐食、小點甚至下午茶咖啡，調酒師們實力強且不刻意裝酷，讓窩台北成為暖意十足的餐酒館，就連原本在附近流浪的貓咪也在此安居，成為暖男調酒師的夥伴。跨年夜如果想在喧鬧中覓得一方自在，相信窩台北會是個不錯的選擇。照片出處：台北畫刊105年12月第587期文／陳淑玲、周培文攝影／Mark、張晉瑞《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04394,
    lng: 121.55202,
    location: "大安區",
    address: "忠孝東路4段205巷39號",
    tel: "+886-2-87719813",
    images: [
      "https://images.unsplash.com/photo-1587217168511-915f2d11d7b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "冰館",
    description: "MFR=Muslim-Friendly Restaurant 穆斯林友善餐廳",
    lat: 25.04158,
    lng: 121.55516,
    location: "大安區",
    address: "忠孝東路4段297號",
    tel: "+886-2-87713263",
    images: [
      "https://images.unsplash.com/photo-1563469001217-29e202ac1653?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "加祿堂附設餐飲店",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.01931,
    lng: 121.52826,
    location: "大安區",
    address: "辛亥路1段27號1樓",
    tel: "+886-2-23643765",
    images: [
      "https://images.unsplash.com/photo-1550360627-cc06e960e4b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "加福堂附設餐飲店",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.02753,
    lng: 121.53448,
    location: "大安區",
    address: "新生南路2段74號1樓",
    tel: "+886-2-23916011",
    images: [
      "https://images.unsplash.com/photo-1564069061629-8c6eedc9281f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQ0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "泰姬印度餐廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.04473,
    lng: 121.54586,
    location: "大安區",
    address: "市民大道4段48巷1號",
    tel: "+886-2-87730175",
    images: [
      "https://images.unsplash.com/photo-1468933365661-3d5e7528ad21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "聖瑪莉東門店",
    description:
      "「聖瑪莉」目前已有20多家分店，甚至拓展分店至美國，並與各國簽訂麵包技術合作契約，商品包括中西式麵包、點心、蛋糕、宅配商品等，相當多元化。聖瑪莉東門店是聖瑪莉一路走來30年的創始店,也是全台聖瑪莉的旗艦店,位於東門捷運站5號出口,佇立於永康商圈逾30年的歲月,歷久彌新的各項商品,傳承經驗的用心,是各國觀光客來永康街必至的名店,不管是馳名日本與韓國的一口鳳梨酥,獨創的小體積配上純手工熬製的鳳梨餡,甜而不膩讓人一口接一口享用的衝動,還是每日新鮮出爐的麵包,秉持著聖瑪莉的企業精神&rdquo;用聖瑪莉的心，觸動美好的味覺饗宴＂,為您開啟美好的一天,每位師傅的用心在聖瑪莉的每一項產品中你都可以品嘗出來。",
    lat: 25.03352,
    lng: 121.52984,
    location: "大安區",
    address: "信義路二段186號",
    tel: "+886-2-23920224",
    images: [
      "https://images.unsplash.com/photo-1469631423273-6995642a6a40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQ2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "SUGAR & SPICE糖村(敦南一店、二店)",
    description:
      "以禮物分享概念經營的「蛋糕‧禮盒專賣店」，精選來自法國、歐美等食材，搭配台灣當地新鮮特產,期望能以專業、高雅的品牌形象，傳遞屬於糖村的幸福。★2010年獲選為「台北國際花卉博覽會」大會指定伴手禮專門店★2011年獲選為「台中市十大伴手禮首獎」。★2014年獲網友票選為「全世界最好吃的零食TOP10」,台灣唯一入榜品牌。★2015年獲台灣金餅獎-太陽餅競賽 金藝獎★2015年獲網友票選-來台必買伴手禮TOP1★2016獲觀光局慶祝大會指定伴手禮★2016年獲數位時代票選[人氣賣家]★第53屆金馬獎唯一指定牛軋糖、鳳梨酥伴手禮台北分店:敦南一店、敦南二店、瑞光店、京站店、南西店、101一店、101二店、信義A8店、西門町店、SOGO復興店、新光站前店全世界最好吃的牛軋糖TOP1★法式牛軋糖席捲味蕾的牛軋糖！兩岸三地超人氣熱賣伴手禮 &ndash; 牛軋糖「法國無鹽奶油」:法國牛奶製成天然奶油「美國加州杏仁粒」: 嚴選飽滿香脆杏仁粒「溫度、時間」: 控制恰到好處的溫度及時間「堅持」:製作過程堅持不加硬化劑、防腐劑。",
    lat: 25.04371,
    lng: 121.54845,
    location: "大安區",
    address: "敦化南路一段158號",
    tel: "+886-2-27522188",
    images: [
      "https://images.unsplash.com/photo-1558683722-35dedbfc61f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjUwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "<台G店>養生藥膳",
    description:
      "來台灣觀光必吃的美食。【台G店】養生藥膳為台灣養生藥膳界第一名，名震中華美食圈，是第一家將麻油雞由傳統大鍋煮改成小鍋現煮，精心篩選鮮嫩汁甜的土雞肉、烏骨雞肉，經高溫烹煮，鮮甜味美的湯頭，讓您回味無窮！土雞肉及烏骨雞肉富有人體每日所需營養，吃到美味、吃出健康。一年四季喝好雞湯，每天都健康，【台G店】把最美味的產品献給您、為您的健康把關!!小鍋現煮，肉質Q嫩，湯頭入味佳【台G店】是第一家將麻油雞由傳統大鍋煮改成小鍋現煮，由於大鍋熬久肉質太硬，且品質較難控制，無法滿足所有的客人。因此，用心思考後，決定用小鍋來煮，發現不僅湯汁入味，且特殊調理方式提出湯頭的鮮甜，近二十年不斷研發改進，讓口碑一級棒。重視食材鮮度，健康養生為主精心篩選鮮嫩汁甜的雞肉，經高溫烹煮，所有製作流程都有一段嚴格的品質把關，新鮮又衛生。店內提供多種養生藥膳產品，這些都是以健康養生為出發點，不斷嘗試與研發，適合每個季節來食用。善用全雞，依據剖位口感適合度來調理老闆引以為傲的是將全雞所有部份都善加利用，使用適合其部位的調理方式，將雞肉美食發揮到盡善盡美的境界，例如:雞胗、雞屁股、雞爪等，常常賣到缺貨。美味湯品，口味多樣【台G店】把各種美味雞湯，提供大家選擇，美味的湯頭，有12種湯底：招牌麻油、何首烏、鳳梨苦瓜、人參、四物、菜脯、九尾、牛奶埔、香菇、蒜頭、剝皮辣椒以及山葡萄。三種肉品可搭配湯底，土雞、烏骨雞及豬小排。",
    lat: 25.04328,
    lng: 121.5466,
    location: "大安區",
    address: "大安路1段51巷7-1號1樓",
    tel: "+886-2-27419741",
    images: [
      "https://images.unsplash.com/photo-1556775349-f8a2c3e9de27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjUzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "10 square café",
    description:
      "10 square cafe隱身於安和路的小巷弄，門前白色清新的庭院，讓人彷彿置身於國外。舒服的空間裡有咖啡香與悠揚的音樂，營造出都市人忙裡偷閒的小小幸福。10 Square是一個分享的空間10 Square=10的平方=10*10在這個框框裏，每個人都是一個10每ㄧ杯咖啡都是分享的乘號坐在隔壁的那個人可能就是另一個10&hellip;咖啡、甜點、美食、空間Share our love to you一間咖啡廳的靈魂，非咖啡莫屬。相信對的咖啡器具x對的咖啡豆x對的吧檯手能將我們的用心的表現在每一杯飲品上想讓您們來到10 Square cafe感到開心也想讓您們感受到一杯杯充滿溫度的好咖啡",
    lat: 25.03177,
    lng: 121.55292,
    location: "大安區",
    address: "安和路二段35巷5號 一樓",
    tel: "+886-2-27062210",
    images: [
      "https://images.unsplash.com/photo-1586253181808-c030e7e1aa5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjUyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "澳門新帆船葡國餐廳",
    description:
      "新帆船葡國餐廳從1998年在澳門新馬路上端出傳統澳門葡國料理，滿足了澳門當地的饕客，新帆船品牌也驕傲的在澳門官方旅遊書籍榮登澳門葡國料理必嘗之地。2014年Vela Latina新帆船開到了美食之都-臺北，成為第一個澳門葡國料理立足台灣Vela Latina秉持著「將道地的澳門葡國料理保留並傳承下去並發揚光大」創店初衷理念；視覺上，亮綠色的外觀建築、中古世紀帆船風的裝潢讓經過的人們瞬間蒞臨澳門街道上感受，而道地的美味就讓法國餐飲協會也立即頒發美味會員餐廳認證。澳門葡國料理傳統葡萄牙料理，橄欖、橄欖油、葡國腸、馬介休、葡國酒都是缺一不可的。新帆船葡國餐廳由香港商澳客餐飲集團廚師團隊專業培訓指導，並法規允許範圍下，堅持進口澳門與葡萄牙原料，融合臺灣在遞嚴選食材，就是要讓每位饕客食客在新帆船感受-味道到位、服務到位、享受到位的極致。",
    lat: 25.04253,
    lng: 121.54787,
    location: "大安區",
    address: "敦化南路一段190巷12號",
    tel: "+886-2-27711980",
    images: [
      "https://images.unsplash.com/photo-1585499919885-39605d9605cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjU0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "Kool Caffè",
    description:
      "調配數十種以上來自全球多產區新鮮頂級咖啡豆，以享有咖啡機界勞斯萊斯美譽的義大利 「La Pavoni」 拉把式咖啡機進行一致性超高壓萃取，完美創造頂級義式咖啡無可取代的香醇底韻 。臺灣唯一使用世界排名第一 「 義大利威尼斯花神咖啡館 」 的威尼斯風味茶，搭配英國皇室御用WEDGWOOD精品餐瓷和純天然白色大理石桌，讓每一口品茗彷彿擺盪在悠晃神遊的花都秘境。 嚴選天然食材，由義大利廚藝學院團隊與法國藍帶主廚團隊精心料理瑰麗動人的套餐、輕食、甜點，搭配Kool Caff&egrave;供應的微氣泡葡萄酒，沉醉在微醺迷人的快樂時光。",
    lat: 25.04485,
    lng: 121.54612,
    location: "大安區",
    address: "大安路一段2號",
    tel: "+886-2-27315111",
    images: [
      "https://images.unsplash.com/photo-1487196803616-3179eef89c44?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjU5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "YABOO鴉埠咖啡",
    description:
      "4年前，我們姊妹決定一起開店。開一間咖啡館，是一個夢想，更是一種生活態度。還沒開店前，我們就常跑咖啡館，那時候的我還是報社記者，待在咖啡館為的是寫稿，而Emily則是個真正喜歡泡館的人，她可以一整天都待著，看看書，發發呆，都好。對咖啡莫名有興趣的她，畢業後很自然的找了咖啡館的工作，學會了咖啡，也認知到自己的喜好，而我因為一直主跑家居線，對空間設計很有興趣，好多年前的某個夜晚，在一家常去的咖啡館裡頭，我們姊妹聊到了這個計畫，然後，計畫就成真了。4年了，我發現製作一杯好咖啡是一間咖啡館基本該有的態度之外，如何讓客人待在店裡能覺得自在，也很重要。而我們相信物以類聚這個理論，因為喜好慵懶自在，喜好率性不虛假，我們決定做一間這樣姿態的店，或許服務不是高度專業，卻是高度真誠。不知道是否因為這樣，交到很多好朋友，大家把店裡當成在台北的第二個家。事實上，我們姊妹倆從中獲得的溫暖和感動更多。未來，YABOO會繼續以這樣的姿態生存著，等著那些愛喝咖啡的人，享受一段慵懶的自我時光。特色咖啡：隨便我。這是一款特調咖啡，為了想品嚐新鮮的族群特製的品項，基本上，每一杯出去的飲品幾乎都是不同的，讓愛喝咖啡的人可以體驗一些新奇的口感。",
    lat: 25.03042,
    lng: 121.53058,
    location: "大安區",
    address: "永康街41巷26號1樓",
    tel: "+886-2-23912868",
    images: [
      "https://images.unsplash.com/photo-1547317213-f1949d62ea17?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjU4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "8%ice 甜．鹹點心屋",
    description:
      "在2014年6月以【日式的堅持，法式的華麗】的概念所成立『8%ice 甜・鹹點心屋』，坐落於捷運東門站金華公園旁，由法國藍帶主廚團隊以用心專業的烘培技術，提供點心飲料套餐，主打各式繽紛迷人的閃電泡芙、口感細緻的經典蛋糕、風味多變的創意鹹點，帶您細細品嚐點心及冰淇淋交織的香氣及美味。",
    lat: 25.03376,
    lng: 121.52819,
    location: "大安區",
    address: "大安區信義路二段130號",
    tel: "+886-2-3587286",
    images: [
      "https://images.unsplash.com/photo-1597140450496-94d4989e6a17?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "健安雞肉飯",
    description:
      "不同一般雞肉飯是採用火雞肉,改用每天現宰的山雞肉, 所以肉質相當Q彈;滷肉則是採用黑豬的肩頸部位大鍋翻炒再以小鍋精燉,讓滷肉的香氣與膠質充分融合在醬汁裡,造就滷肉入口即化,非常順口.除了滷肉飯,鵝肉鵝腸也是店裡的招牌,當ㄖ中央環南市場現宰配送,加上特調醬料風味獨特~ 連大律師顧立雄都豎起大拇指說:(讚)",
    lat: 25.02211,
    lng: 121.54246,
    location: "大安區",
    address: "和平東路二段118巷54弄7號1樓",
    tel: "+886-2-27384881",
    images: [
      "https://images.unsplash.com/photo-1556010823-f7ceb850e123?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "Nonzero 非零",
    description:
      "Comfort food from around the world. Nonzero非零被美國每日一餐(http://www.thedailymeal.com)網站選為全亞洲最佳101家餐廳中第50名。Nonzero非零是一個世界餐廳，菜色源於世界各地的康福食物。我們希望客人不只吃到健康，還吃到幸福快樂。不管來自哪個國家，什麼樣的文化背景，Nonzero非零慢火細燉的食物都能喚起一種溫暖、康福的感覺。我們對世界充滿好奇，希望透過食物多瞭解各國文化。所以我們希望來Nonzero非零的朋友（在這裡我們希望沒有客人，只有朋友）也帶著好奇心來培養自己的味蕾，品嚐及回味我們的食物。豐富有層次感的味道可以通過大自然所提供的各種食材和香料以健康的烹飪方式體現出來。Nonzero非零的核心精神，來自我們對食材的挑選：認識農夫，支持小農，支持選擇用溫柔方式對待土地的農夫，並盡量選用有機、在地、無毒的自然農法等等栽種方式，並不只是為了自己吃得健康養生，最重要的是支持這些有心的農夫。我們相信吃也是一種快樂、歡慶人生的一種儀式。吃增進人與人之間的交流。每個文化也都是透過飲食，建立人與人之間的關係。餐廳的設計元素採用環保建材，如回收木材，廢棄大理石等，以向上再生 (upcycling)的方式體現將廢棄物變成寶物的精神。",
    lat: 25.03865,
    lng: 121.54447,
    location: "大安區",
    address: "仁愛路四段27巷4弄5號",
    tel: "+886-2-27721630",
    images: [
      "https://images.unsplash.com/photo-1580904457811-e5e87053a516?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "本燔野菜農場(台北南京店)",
    description:
      "本燔將台灣當作一個大農場，嚴選本島的農產耕種者，提供台灣最新鮮與多元的野菜來當作食材來源，期待每位饕客來此享受美食過程中，達到肉食與蔬食的自然均衡。 在享受關東壽喜燒極致的均衡鮮味時，亦體驗到最自然根本的原始感動。",
    lat: 25.05208,
    lng: 121.52291,
    location: "中山區",
    address: "南京東路一段2號2樓",
    tel: "+886-2-25677007",
    images: [
      "https://images.unsplash.com/photo-1607613982330-4acfb339788b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "蜂蜜蜜蜂咖啡豆",
    description:
      "堅持信用理念，締造優質口感蜜蜂咖啡成立於1975年，精選世界各產區優質生豆，針對各產區的咖啡豆特性。蜜蜂1975五入濾泡式咖啡蜜蜂咖啡為滿足挑剔味蕾，針對不同咖啡愛好者，精心選豆調配多款綜合咖啡，將其美味以濾泡式豐富所有人的味覺。",
    lat: 25.0313,
    lng: 121.53082,
    location: "大安區",
    address: "新生南路二段30巷23號",
    tel: "+886-2-23926652",
    images: [
      "https://images.unsplash.com/photo-1570819315819-34402866343a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "Toast Chat",
    description:
      "toast: 吐司,在這裡是以吸滿蛋液去煎烤為概念,搭配上各式麵包為基底,創造出不同風味的創意法式吐司. &quot;Toast Chat&quot; 英文的意義為喝酒聊天,在這裡除了販售美味的食物,香濃的咖啡,更提供您一種優閒舒適的生活空間,希望您在這能跟貓兒一樣慵懶的度過每個時光",
    lat: 25.03944,
    lng: 121.55553,
    location: "大安區",
    address: "光復南路290巷58號1樓",
    tel: "+886-2-27215661",
    images: [
      "https://images.unsplash.com/photo-1559422878-3444c5ce53b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjcxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "美樹館人文咖啡館",
    description:
      "位於通化街商圈的美樹館，12年來的畫都出自老闆之手的有二棵樹穿過屋頂，店內擺放大畫家的完整畫冊哥斯大黎加進口國王咖啡彩繪黃檀馬克杯禮盒在哥斯大黎加嚴格檢選最好的阿拉比卡咖啡豆，2千公尺高海拔，悠久的咖啡種植知識和百年咖啡烘焙技術混合，創造出特別的咖啡.",
    lat: 25.02769,
    lng: 121.5549,
    location: "大安區",
    address: "通化街171巷28號1樓",
    tel: "+886-2-27369879",
    images: [
      "https://images.unsplash.com/photo-1577170106871-d3b9f2a14106?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "海裕屋",
    description:
      "位在通化街的巷子內，海裕屋沒有明顯的招牌，初次探訪若不仔細查看，就會不經意錯過﹔進入餐廳後，簡樸的陳設，彷彿來到朋友家中作客，另外讓人眼睛為之一亮的，則是一大片冰櫃，裡頭裝滿了各式各樣的新鮮魚類，想吃哪種魚料理，任君挑選。為人親切的老闆娘薛惠珠說：「冰櫃內有來自北海道、加拿大、阿拉斯加等種類琳琅滿目的海鮮，其中也販賣市面鮮少的品種，好比鱈場蟹、黑磯鮑魚、青魽下巴、海膽等。」因為貨源新鮮，甚至有人遠從桃園特地前來購買鮮嫩的鱈魚，而這關鍵全出自於堅持以-50℃來冷凍，也是海裕屋生魚片好吃的主要原因。許多客人來此購買後，會順便問及老闆娘如何烹調，不藏私又熱情的她，就會教導客人如何燒出鮮美的魚料理，久而久之和客人熟識，變成了好朋友，這些好朋友們便開始呼朋引伴，生意自然也就愈來愈興隆了。",
    lat: 25.02819,
    lng: 121.55282,
    location: "大安區",
    address: "通化街170巷9號之1",
    tel: "+886-2-27364280",
    images: [
      "https://images.unsplash.com/photo-1558447828-309b45e54554?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjcwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "The Scent",
    description:
      "The Scent主要可分為兩個區域 L區﹣以源自紐約的Loft風格為設計主軸，利用紐約舊廠房現有的磚、水泥、金屬、舊管路與木頭等元素作為重點，並搭配復古配件，粗礦中流露出淡淡的人文氣息。 R區﹣為英式復古與英式搖滾的搭配，用英式皮椅沙發、小櫃子、檯燈、地燈及吊燈，散落在不同區塊，使傢俱與燈光自然融合於密閉空間，營造出高雅中帶一絲慵懶的氣息。 The Scent特別重金引進來自溫哥華的紅酒保鮮機，使用高純度惰性氣體隔絕空氣，以保存酒體的丹寧與果香。恆溫封存，在不破壞品質的情況下延長紅酒的賞味期限。The Scent的用心，只為能讓您輕鬆品嚐到單杯的高單價紅酒，也讓The Scent的侍酒師能為您搭配適合您的佐餐酒。在威士忌方面，特別選用市面上少見，由蘇格蘭威士忌協會指定生產的單一酒廠單一酒桶的威士忌原酒，做為本店的特選威士忌。從味蕾體驗每個酒廠的獨特風味，深刻烙印在腦海之中，讓每個威士忌同好能找到屬於自己的專屬威士忌。 The Scent的調酒師，除了能調製出基本的經典雞尾酒外，更要挑戰經典，創造出變形款的雞尾酒。更能依季節巧妙利用當季的食材與水果，創造出獨具一格的新鮮水果特調。在餐點的部份，The Scent料理長將針對不同性質、喜好，推出各種無國界料理，從下酒小菜到大份量餐點、精緻西式排餐、義大利麵、炸物等等，跨越世界融合在The Scent的風格之中，讓您感受到最獨特的享受。",
    lat: 25.02704,
    lng: 121.55169,
    location: "大安區",
    address: "樂利路37號",
    tel: "+886-2-23771229",
    images: [
      "https://images.unsplash.com/photo-1583359426622-5483408b031d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "雋美佳茶葉公司",
    description:
      "台灣這塊土地上有著得天獨厚的地形與氣候，帶著這份天賜的恩典孕育出無限特有風味的茶葉！近年來茶葉市場品質好壞不一，二十幾年來&rdquo;雋美佳茶業&rdquo;秉持著品質第一，價格合理、貼心服務的宗旨，融合中西文化，讓您在品茶時感受到中方典雅並融合西方先進，將茶葉保存於最佳的狀態。本著「符合您的喜好就是好茶」的新思想，陪伴您在茶的世界中尋找心中摯愛。茶代表一種人文藝術，是東方美學的精髓，藉由我們的精製推動茶葉文化，讓世界各國的旅人展現自己的品味風格，期盼能深刻傳達台灣的文化之美。",
    lat: 25.02523,
    lng: 121.54211,
    location: "大安區",
    address: "和平東路二段193號1樓",
    tel: "+886-2-27017608",
    images: [
      "https://images.unsplash.com/photo-1561019589-d51469ab4eba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjcyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "手信坊",
    description:
      "手信坊自創立以來，秉持著每一份糕點為獻給最重要的人之心意來製作，盼藉由用心製作的心意，能詳實的傳達至每一個消費者的心中！桐花綠豆糕上選綠豆，以傳統製程水洗、去殼，研磨成細如雪花的綠豆仁粉，並包裹純正蜜紅豆餡，綿密細緻、入口即化，令人回味無窮。",
    lat: 25.04185,
    lng: 121.54291,
    location: "大安區",
    address: "忠孝東路三段289號",
    tel: "+886-2-27752298",
    images: [
      "https://images.unsplash.com/photo-1498038524759-281e0dd3ac15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "蓮池閣素菜餐廳",
    description:
      "經營十九餘年，擁有寬敞舒適、乾淨明亮的用餐環境，親切的服務態度，加上對素食食材的堅持挑剔，以推廣素食生活、鼓勵素齋社會為宗旨，專業級的素菜料理師傅。相當注重料理的口感和食材挑選，在菜色口感上努力邁向年輕化，希望帶動更多年輕人喜愛素菜；食材則經過費心研究，挑選口感和營養兼具的食材，讓吃素健康美味而養生！ 六星級的高級享受 老字號的品牌保證位於信義路四段的「蓮池閣素菜餐廳」，在平日是信義商圈深受上班族所喜愛的餐廳，在假日則是家庭聚會及素食主義的首要選擇！只要$500的素食餐點、點心吃到飽及飲料無限暢飲，寬敞的空間，超過300多個位置，並設有數十個廚師，要給消費者最立即新鮮的菜餚，近百種素食料理中，分成了熱食吧、冷盤區、純湯區、點心吧、水果冰品等多種樣式提供選擇，除了要讓你品嘗到素食的美味，還可以發現素食也是可以有很多變化！非常適合家庭聚餐或是朋友聚會。周一 ~ 周五、周六、日及國定假日大人 午餐、晚餐 均一價 $500+10%服務費兒童 140公分以下 午餐、晚餐均一價 $250+ 10%服務費餐卷一本30張$13,500 ( 含稅，午餐、晚餐通用 )出家師父五折供養全年無休",
    lat: 25.03345,
    lng: 121.5499,
    location: "大安區",
    address: "信義路四段153、155號B1(彰銀巷內)",
    tel: "+886-2-27035612",
    images: [
      "https://images.unsplash.com/photo-1595673999072-29fd847a1c84?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "紅豆食府(遠企店)",
    description:
      "招牌美食：醬爆青蟹年糕、東坡肉、清炒蝦仁、蔥油筍殼魚、火丁豌豆仁、乾炸鮮筍、絲瓜小籠包、心太軟 提到『紅豆食府』，喜愛上海美食的台灣饕客絕對不會陌生。自1999年成立以來，『紅豆食府』一直堅持細選食材精心烹飪以上海料理為主軸的中華美饌。現有的七家分店各位於台灣最熱鬧的百貨商圈，室內設計採用現代美學的風格與舒適典雅的空間規劃，提供顧客高貴而不貴的全方位飲食享受。紅豆食府對於菜色非常講究，堅持採用最頂級、新鮮的食材，注重火喉，不斷地在料理上屢創新意，打造出許多膾炙人口的招牌料理，例如：清甜爽口吃得出鮮美的『清炒蝦仁』、費工以去殼新鮮甜豆仁與細切金華火腿丁一起烹煮的『火丁豌豆仁』、細火慢燉讓獨家醬汁滷透入味的綿細『東坡肉』、以豆辨醬燜煮入味香氣十足的『醬爆青蟹年糕』、特選當季鮮筍與老鹹菜酥炸的清脆『乾炸鮮筍』、堅持粒粒手工現包現蒸、鮮甜多汁的『絲瓜小籠包』及特選甘甜紅棗去心裹入糯米清蒸的招牌甜點『心太軟』等等，每道佳餚皆是充滿上海風味的經典之作! 2010年更榮獲台北市政府台北食尚好餐廳金饌店家。",
    lat: 25.02621,
    lng: 121.54926,
    location: "大安區",
    address: "敦化南路二段203號B2",
    tel: "+886-2-87321536",
    images: [
      "https://images.unsplash.com/photo-1606261040747-4e46a3d6035d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjczfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "火之舞 蓁品燒",
    description:
      "蓁品燒代表著頂級與質感的燒肉形象。火之舞秉持著一貫的終旨&rdquo;單點的品質，吃到飽的價格&rdquo;，提升燒肉品質與等級，要給更多喜愛燒肉以及嘴刁的燒肉愛好者全新的燒肉體驗。店主選用當紅牛肉的最高等級&rdquo;和牛&rdquo;做主打，並且大膽的以無限量供應的方式讓愛吃燒肉的饕客們盡情的享受這個美味，除了和牛之外當然也提供了其它prime等級的牛肉以及頂極海鮮，連生蠔以及日本大干貝也是無限供應的。菜單的每一道菜都是店主用心研發的心血，從前菜的冷菜到揚物、沙拉、食事以及重點的肉類與海鮮,從處理到調味與擺盤以及燒烤都不經他手，堅持用最好的品質與專業的態度，讓客人吃的值回票價。",
    lat: 25.04044,
    lng: 121.5534,
    location: "大安區",
    address: "忠孝東路4段216巷19弄7號",
    tel: "+886-2-87737899",
    images: [
      "https://images.unsplash.com/photo-1564350908581-4e7df28dab7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "喜之坊(光復店)",
    description:
      "喜之坊有每一口都吃得到果肉的鳳梨酥以及純手工製作，口感平衡的綠豆椪、獨步全台的圖片牛軋糖，軟香Q不黏牙，造型就像一枚銅錢，祝大家財源廣進、好運旺旺來一整年。連郝龍斌市長拜訪年貨大街都指定使用喜之坊做為伴手好禮，對喜之坊而言，烘焙是件歡喜的事。而英文名稱Lucky Gifts，也是取其幸福伴手的概念。喜之坊堅守古法製程，不使用化學合成添加物與防腐劑來延長保存期。希望所有吃到喜之坊產品的朋友們都能喜事連連、幸福永遠。喜之坊是您伴手禮最佳選擇!",
    lat: 25.03639,
    lng: 121.5574,
    location: "大安區",
    address: "光復南路422號1樓",
    tel: "+886-2-26942299",
    images: [
      "https://images.unsplash.com/photo-1570038283490-0c2b8fe95b2b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "原創花雕雞",
    description:
      "【原創花雕雞】在2000年12月21日開始營業, 至今已有13年, 然而「原創」二字就是講求原滋原味、以濃郁的花雕酒香搭配鮮嫩的雞肉，還有以各式各樣新鮮配菜製作成一鍋三吃，乾、滷、湯、三種不同吃法，另有下酒好菜、養生火鍋湯品等等好料、一 一征服你的味蕾．來到原創花雕雞，不僅提供您美味餐點，更是提供輕鬆、歡樂、親切的服務，使得每位來到這兒用餐的朋友，如置身家中一般輕鬆愉快~用完餐後都能帶著滿足的笑容返家。最原始的老味道，這箇中的滋味只有老饕能體會。您的滿意，就是我們的榮幸!",
    lat: 25.04471,
    lng: 121.55185,
    location: "大安區",
    address: "市民大道四段181號",
    tel: "+886-2-25772745",
    images: [
      "https://images.unsplash.com/photo-1593118306718-86e5530dd366?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "加州陽光複合式餐飲",
    description:
      "加州陽光Bazaar，中午12點到凌晨2點，家庭式的中式小炒，有媽媽的味道，21年歷史，經典老店。",
    lat: 25.03805,
    lng: 121.55583,
    location: "大安區",
    address: "仁愛路4段407號B1",
    tel: "+886-2-27512955",
    images: [
      "https://images.unsplash.com/photo-1564223269775-8130cb84f6e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "一品花雕雞",
    description:
      "一品花雕雞的負責人蔡啟漢原本打算進入大陸市場投資非餐飲業生意，在無意之中品嘗到「花雕雞」後，原本的生意沒做成，反而一頭栽進從未接觸過的餐飲業。「一品花雕雞」在2000年12月21日正式開幕，取名「一品」除了簡單好記、令人朗朗上口之外，更有「無人能取代的第一名」之涵意。這也反映在蔡啟漢對一品花雕雞的四大宗旨，除了要「吃得到」、「看得到」，還要能「聽得到」、「服務得到」。前兩項「吃得到」和「看得到」主要著眼在花雕雞特殊的口感和新鮮的烹調方式；而「聽得到」和「服務得到」則代表了外場服務人員另類的服務方式。從一進門到坐到座位上，服務人員會為顧客詳細地講解花雕雞的歷史、由來、做法，以及花雕酒浪漫感人的故事。這就是「聽得到」。待食材上桌之後，由服務人員在桌邊為顧客現場烹煮花雕雞，雞肉、粿條、豆腐、魚餃等，每一個階段適合煮哪一道菜，都會有專業人員為顧客服務。這就是「服務得到」。",
    lat: 25.0447,
    lng: 121.55274,
    location: "大安區",
    address: "市民大道四段207號",
    tel: "+886-2-25700388",
    images: [
      "https://images.unsplash.com/photo-1602748917994-ae7274381cd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "神旺大飯店-潮品集",
    description:
      "在台北要吃道地的潮州菜，絕不可錯過神旺飯店的潮品集；雖然它開張至今不過5年，卻是好評如潮。來自香港、出身餐飲世家的當家主廚何炳木，從祖父算起一家三代都從事潮州料理。何主廚從15歲入行，至今已近40年。他的拿手好菜首推「潮州滷鵝片」，藉著一鍋特製陳年老滷，將精選4至5公斤重的肥鵝滷得恰到好處、多汁滑嫰不乾澀，接著配上自製蒜頭醋蘸料，不管是鵝肉，還是其他滷鵝腸、鵝紅或豆腐，都不只是「可口」兩個字就可以形容得了。至於家鄉的水瓜煎，是潮品集另一道經典之作。以絲瓜配上地瓜粉、菜脯和蛋，煎得金黃香脆，頗有台灣古早味的影子，因此深得老一輩台灣人的喜愛。其它像潮州小炒、干煎鯧魚、XO醬炒河粉及鮮蝦韮菜粿等點心，及干煎伊麵灑白糖及百果芋泥等特色甜品，也都是潮品集最夯的料理。",
    lat: 25.04127,
    lng: 121.55098,
    location: "大安區",
    address: "忠孝東路四段172號2",
    tel: "+886-2-27722687#9",
    images: [
      "https://images.unsplash.com/photo-1557128729-0d13d0af8460?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjgyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "上海醉月樓",
    description:
      "美國前總統柯林頓訪台、擔任國宴場地的上海醉月樓，是香格里拉台北遠東國際大飯店最具代表性的中餐廳。時尚高雅的氛圍，烘托新派上海菜的摩登風情，用餐時，高樓美景和盤飧新趣相互輝映，為消費者提供流行元素齊備的飲饌新體驗。上海菜擁有兼容並蓄的雅量，一方面繼承傳統、保留特色，另方面又不斷開拓創新，並向世界飲食潮流靠攏，如注重低糖、低鹽、低脂、增加蔬菜攝取等，多款創意料理亦加入西餐注重排盤的美感，都是上海醉月樓規劃菜單時考量的重點。此外，上海醉月樓亦不時與姐妹飯店─上海浦東香格里拉酒店桂花樓相互切磋，以激盪出令人驚豔之作。",
    lat: 25.02652,
    lng: 121.54914,
    location: "大安區",
    address: "敦化南路二段201號39樓",
    tel: "+886-2-23788888#5970",
    images: [
      "https://images.unsplash.com/photo-1470256699805-a29e1b58598a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjg0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "滿堂紅頂級麻辣鴛鴦火鍋",
    description:
      "紅，是普獲共識的辣味代表色；滿堂紅，是饕家公認麻辣火鍋最正點的選擇。滿堂紅的消費方式雖採單點吃到飽制，卻是上菜迅速、份量豪邁，提供的食材都是上乘的優質之選，一舉顛覆同類餐廳造成的負面刻板印象，因而獲得饕家滿堂彩，迅速建立物超所值的口碑。主廚余振強師承四川重慶、成都道地麻辣鍋秘方，口感爽麻卻味透溫煦，以此鍋底涮燙美國頂級的安格斯牛肉、霜降牛肉、無骨牛小排，厚切的肉片大面積地沾附爽香的紅鍋湯汁，滋味豐美，僅此一鮮已是物超所值，不虛此行，遑論澳洲小羔羊肩胛肉、草蝦、手工鮮蝦丸、川丸子等鮮美食材通通端將上來，同桌四、五雙筷子爭先恐後的盛況。來盤滿堂紅自製「青梅苦瓜」、「百香果青木瓜」，既解膩又開胃，又可以再戰一輪，還是不要忘了留點胃納給無限供應的Haggen-Daze冰淇淋。",
    lat: 25.0374,
    lng: 121.55205,
    location: "大安區",
    address: "仁愛路四段228-4號2樓",
    tel: "+886-2-27016669",
    images: [
      "https://images.unsplash.com/photo-1580183027187-7b1ab7f9ffc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjg2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "豬跳舞 Dancing Pig",
    description:
      "在台北，想吃頓豐盛的晚餐犒賞自己一整天的辛勞，你經常會猶豫該多花一點錢吃頓好料， 還是為了省一點錢，只好對餐點的品質退而求其次？現在，你不必再為了美食和荷包的拉鋸而天人交戰囉！善於利用台灣在地食材呈現義式料理精髓的主廚 Jason，繼大肚皮義式餐坊後再推出「豬跳舞」創意西式料理，以持續推廣在地好食材的心意，讓消費者可以隨季節變化吃到最新鮮的物產，並將產季價格和低 食物里程的成本概念反應在售價上，讓「豬跳舞」成為一個隨時都能和三五好友相約在此盡情分享美食的好地方。",
    lat: 25.03947,
    lng: 121.55574,
    location: "大安區",
    address: "光復南路290巷48號",
    tel: "+886-2-27316469",
    images: [
      "https://images.unsplash.com/photo-1570806879179-3582cdacfb60?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjg3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "晶湯匙泰式主題餐廳(復興SOGO店)",
    description:
      "晶湯匙是精緻泰式料理的代名詞！『晶』　代表著「精緻」、「珍貴」與「滿意」。『湯匙』是拉近「人」與「美食」距離的工具。共同存在國際餐飲集團　給予了這根『湯匙』魔法般的新生命，藉由『晶』與『湯匙』～讓晶湯匙能完整呈現出「精緻」、「珍貴」與「滿意」的泰式料理～在晶湯匙的優雅環境中有著不同的人文主題環境，呈現出空間的多重【美】，而扎實用料與細緻做工，交緻呈現【視覺】與【味覺】的雙重饗宴美食。晶湯匙泰式主題餐廳由『泰國皇室官方單位』認證為&rdquo;全球『泰精選餐廳』&rdquo;，並榮獲『台北市政府』台北國際食尚秀『食尚奧斯卡優勝』　　　『經濟部』評鑑為『優質餐廳』　　　『內政部』評鑑為『友善餐廳』等榮耀～",
    lat: 25.04145,
    lng: 121.54324,
    location: "大安區",
    address: "忠孝東路3段300號10樓",
    tel: "+886-2-87725006",
    images: [
      "https://images.unsplash.com/photo-1583201513254-71960195849a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjg1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "紅牌牛肉麵餃子館",
    description:
      "不起眼的巷弄，風清清亮亮的，這裡卻能同時嚐到最極端的牛肉麵口味，讓人倍感幸福！紅燒湯頭的牛肉，柔軟中特別有嚼勁，清燉的配上牛的臉頰肉，筋細而入口滑嫩。從小愛吃牛肉麵的老闆，獨獨鍾情本地牛肉，因為耐煮，燒出的湯特別甜，加上中藥、香料與豆瓣醬熬煮，更顯濃郁。而此時雖然午休了，鍋裡的湯還繼續熬著。老闆娘說，清燉湯頭看來清澈，卻含有豐富細緻的滋味；那是用大骨頭和牛肉熬上一整天，再放入蕃茄、紅蘿蔔、洋蔥、芹菜等蔬菜，而訣竅即在細火慢熬，火一稍大，湯就濁；老闆如此龜毛，難怪獲2007年國際牛肉麵節網路票選一名。而師承吳抄手的擔擔麵與紅油抄手，讓你在小店也能吃到名家手藝。",
    lat: 25.02663,
    lng: 121.54188,
    location: "大安區",
    address: "和平東路二段175巷25號1樓",
    tel: "+886-2-27081772",
    images: [
      "https://images.unsplash.com/photo-1575623811814-dfbb2c13e4ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "阿成牛肉麵",
    description:
      "最近換新裝潢的阿成牛肉麵，店內裝置十分現代感，雖然沒有很寬敞，老顧客依舊很捧場，像是大家事先約好似的，總是座無虛席。阿成牛肉麵在捷運麟光站附近，交通便利。原味清燉牛肉麵大獲好評，很適合不喜歡吃辣的朋友；喜愛重口味的，則有紅燒或碳烤牛肉麵可供選擇。這裡價格十分平民化，除了滿漢牛肉麵NT120，全部100元以內。代代相傳的手工拉麵，Ｑ彈有勁，淋上帶有中藥入味的微辣湯汁，喝起來順口不油膩；鮮嫩的牛筋與牛肉燉煮得剛剛好，點一碗抓住美味精髓的牛肉麵，再加上私房小菜&hellip;&hellip;歡迎加入牛肉麵老饕的行列。",
    lat: 25.02011,
    lng: 121.55661,
    location: "大安區",
    address: "富陽街98號",
    tel: "+886-2-87333416",
    images: [
      "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjkxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "四川吳抄手",
    description:
      "在熱鬧的東區，一家有名的四川料理店，叫做四川吳抄手，裡面的師父，都是四川的同鄉，長期經營正宗川菜的料理，在臺灣、日本、香港等各地，都非常有名。以抄手為店名，當然要體驗到不同於其它家的滋味，以泡製做出來的紅油醬，色澤鮮紅，香辣的口感，讓顧客的舌頭感覺微麻，但接下來的是甘醇香味，搭配上薄又有彈性的餛飩皮，讓抄手香辣的特色豪放完整，清甜的肉餡在香辣紅油的襯托下，格外美味。除了抄手外，道地的四川美食也是這裡的特色，有著川菜「尚滋味，好辛香」的特性。像是辣味拼盤，以白肉、豬耳朵、牛肚、涼粉及雞絲，上面覆蓋細切的蔥絲及香菜增添氣味，淋上熱騰騰的辣油，讓你熱汗直流。麻婆豆腐，有著豆腐的嫩及麻婆的麻，十足川菜味道，配飯可以吃上好幾碗。紅通通的辣火鍋，麻辣的鍋底，是經過長時間的煉製，不管哪一種食材涮下去，都有著絕佳的辣度，不管是肉類還是菜類，讓湯汁滲入其中，辣刺激著味覺，讓所有時鮮都是美味。",
    lat: 25.04099,
    lng: 121.55416,
    location: "大安區",
    address: "忠孝東路4段250之3號",
    tel: "+886-2-27721707",
    images: [
      "https://images.unsplash.com/photo-1559153744-6dfeef922c1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "喜樂滿足麵食館",
    description:
      "獲得2005年牛肉麵獎前10名的喜樂滿足麵食館，就是要給顧客大大的滿足。店家選用臺灣道地的黃牛肉，切成肉片，讓肉片完全吸收湯汁的精華，由於黃牛肉的特質是較瘦，吃來相當的嫩。湯頭以特別加了有關節的牛大骨，和牛筋、牛骨髓等熬煮而成，讓湯頭更有醇潤感。除了清燉外，這兒的紅燒也是大家所喜愛的，選用澳洲進口的牛腱、牛筋及花腱混合，作成厚塊狀，比一般店家的略小，以便較容易吸收湯頭的精華，吃起來有嚼勁，越嚼越帶出牛肉的香氣。麵條也有多樣的選擇，手工的家常拉麵，帶有Q勁，另外還有細麵。店內加湯加麵不加價，讓每個來到這裡的顧客，都可以得到飽足感。這裡還提供其他的麵食與小菜，像是炸醬麵，它的味道也是非常香醇濃厚，還有鍋燒意麵、雞絲麵等等。",
    lat: 25.03518,
    lng: 121.54392,
    location: "大安區",
    address: "復興南路1段293-1號",
    tel: "+886-2-27552797",
    images: [
      "https://images.unsplash.com/photo-1595349190684-39c44feed0c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "大聲公牛肉麵",
    description:
      "不斷爆紅的大聲公牛肉麵店（臺大牛肉麵），是歷史久遠的牛肉麵店，原本似乎給人非常傳統而不起眼的印象。但自從在臺北市牛肉麵節舉辦網路票選活動中，得到第8名的殊榮後，頂著這10 大牛肉麵店的光環，大聲公口碑一流的手工麵條與湯頭，人氣指數直線上昇，成為年輕族群爭相嘗鮮的美食。熱賣商品有清燉牛肉麵、帶筋牛肉麵、半筋半肉牛肉麵。處理步驟有4：使用上等的國產黃牛肉，經過川燙去血水，待火侯慢慢燉煮後，使用牛骨湯底及特別工法，除掉多餘油脂，喝起來極為順口，清澈不油膩的湯頭，喝下去全身溫暖舒暢，心滿意足。另外，給不吃牛肉的朋友介紹兩道非常受歡迎的麵食，炸醬麵及水餃，麵和麵皮軟而不爛、QQ嚼勁讓許多愛麵族，又多了一個解饞的好去處。",
    lat: 25.02062,
    lng: 121.53391,
    location: "大安區",
    address: "新生南路3段54-6號1樓",
    tel: "+886-2-23639800",
    images: [
      "https://images.unsplash.com/photo-1597401523838-c0e30b99e0f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "紅通通韓味鍋物",
    description:
      "引進韓國鍋物美食&lt;一隻雞&gt;，採用鮮美全雞搭配韓國年糕，馬鈴薯,愛吃辣的還可以加入韓國泡菜，體驗一鍋二吃多層次美味，另外還有韓國部隊鍋,泡菜鍋，牛骨雪濃湯，一次嚐盡道地韓國好吃鍋物料裡。",
    lat: 25.03976,
    lng: 121.55557,
    location: "大安區",
    address: "光復南路280巷43號",
    tel: "+886-2-87737103",
    images: [
      "https://images.unsplash.com/photo-1592077857225-2763e85e371b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzAxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "忠南飯館",
    description:
      "忠南飯館&mdash;五十年不變的家鄉滋味隱身於仁愛路濃密的綠林，不講風雅，倒是一個個圓凳，圍著大圓桌、小方桌，人人自箇兒添飯，配著一口口菜香，盡是誰也替代不了的家鄉味；更妙的是，「忠南飯館」雖名為江浙家常菜，卻是家裡怎麼也燒不出的好滋味。餐廳大鍋大炒，清脆香甜的鮮味，非一般家庭所及；幾十人的份量，燉煮滷燴更是濃醇入味；何況對醬油、粗鹽等等作料的挑剔、費時費工的菜色，又哪兒是僅僅餵足幾口人家就願意下功夫的─「忠南飯館」的「蹄花黃豆」歷經燉煮、紅燒、冷凍、細蒸整整兩天的過程，才吃出清爽嚼勁的獨特風味；「泡菜牛肉」採自然發酵的醃製法，30年的老滷汁，風味獨到、清脆爽口&hellip;&hellip;。從民國45年至今，老歲月的足跡緩步在「忠南」的空間裡，老饕就愛這樸直熱鬧的氣氛，還有一道道端出來五十年不變的鄉愁滋味 。",
    lat: 25.03759,
    lng: 121.539,
    location: "大安區",
    address: "仁愛路3段88號",
    tel: "+886-2-27061256",
    images: [
      "https://images.unsplash.com/photo-1543484623-542877a80db5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "ICE MONSTER",
    description:
      "冰館&rarr;永康15&rarr;Ice Monster是台灣原創芒果冰的始祖，品質與口感也都是世界第一! 許多知名媒體都報導過Ice Monster(永康15/冰館).如:日本知名媒體曾報導永康15為No 1冰品店、紐約時報 (New York Times) 也曾經介紹過&ldquo;36 Hours in Taipei&rdquo;， Ice Monster(永康15/冰館)可說是全球遊客到台灣台北觀光時的 &ldquo;Must Go&rdquo; Place!十五年的累積，除了對水果和味蕾的專業，最重要的是不忘初衷：永保純粹 !Ice Monster 從台灣土地上的水果，開發了許多豐富的品項，不惜耗資重本引進新式製冰機，揉合天然健康訴求，取在地優良食材每天新鮮現作冰品，每口都可吃到滿滿鮮美心意。在搬遷至東區重新開幕後，以更年輕更用心的創意品牌包裝經營；洋溢活潑舒適的空間氛圍，成為眾多年輕人逛街歇腳的心頭好。",
    lat: 25.04158,
    lng: 121.55516,
    location: "大安區",
    address: "忠孝東路4段297號",
    tel: "+886-2-87713263",
    images: [
      "https://images.unsplash.com/photo-1564119778592-4ba489af7ecb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "東門餃子館",
    description:
      "從沿街叫賣的攤販到現在，將近50年經歷，在永康街商圈的東門餃子館，目前由第3代經營，店內有上百個座位，常常座無虛席，證明了老師傅的精湛的手藝，經過不斷地研發與創新，獲得許多饕客的肯定與喜愛。 東門餃子館的麵食種類非常多樣化，有水餃、鍋貼、蒸餃、麵食、火鍋、快炒等等。連許多外國友人也指定來這裡嚐鮮呢！ 餃子館長久以來的熱賣商品就是豬肉水餃，手桿的麵皮，韌中帶勁，加了白蘿蔔絲的餡料，皮薄餡香，說不出的美味；一品鮮肉韭菜水餃，翠綠的韭菜，清清脆脆、鮮甜可口；花素蒸餃，不油不膩、單純好吃；一品鮮蝦蒸餃吃起來脆脆的、 QQ的，很入味；愛喝湯的朋友，可以試試酸辣湯或三鮮湯，也很棒！蔥油餅也別蠻特別的，香香酥酥、不會太油；最後別忘了店家的私房菜，雞絲拉皮、麻婆豆腐、肉絲(牛肉)酸白菜等；還有獨一無二的小菜，牛肉凍、醉雞、豆干絲等，樣樣都無從挑剔起，是百吃不厭的好味道。",
    lat: 25.03285,
    lng: 121.52878,
    location: "大安區",
    address: "金山南路2段31巷37號",
    tel: "+886-2-23411685",
    images: [
      "https://images.unsplash.com/photo-1566139828235-b1609848315c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "KiKi川味餐廳",
    description:
      "KiKi川味餐廳─原來川菜也可以吃得很時髦就像宮崎駿卡通「魔女宅急便」裡善解人意的小魔女一樣，KiKi川菜也懂得現代年輕人要吃什麼樣的「辣」！魔法永遠不老，川菜也可以很時髦。在新一代主廚的調理下，KiKi川菜標榜的「新」川菜，保留了舊川菜中能讓年輕人上癮的麻辣特色，更上層樓廣用各式辣椒，挑戰年輕人的味蕾；另一方面在少油少鹽的健康訴求下，猶能做出重口味的新川菜。如招牌菜「干煸四季豆」，他們把油炸時間縮短將近一半，如此含油量少了，四季豆的香甜口感仍被保存，端上桌時更漂亮。而以特別訂製的低鹽豆鼓，搭配肉末、韭菜花做的「蒼蠅頭」，不只名字令人驚奇，吃起來爽脆香，是一道色香味俱全的好菜。其它如辣子雞丁、山藥牛腩煲等也普遍受到年輕人的喜愛。在經歷了口感的雲霄飛車後，來杯店內自製烏梅汁，解辣生津，讓味蕾得到平復，這就是KiKi讓人上癮的魔法！",
    lat: 25.03973,
    lng: 121.55537,
    location: "大安區",
    address: "光復南路280巷47號1樓",
    tel: "+886-2-27814250",
    images: [
      "https://images.unsplash.com/photo-1571937031849-b9ae1483c013?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzAyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "傑夫的燒肉",
    description:
      "&quot;教學式燒肉&quot;的理念，營造歡樂美味用餐空間！歡迎您來光臨!!喜歡燒肉的朋友千萬別錯過了，在東區一級戰場的「傑夫的燒肉」，位在捷運忠孝敦化站附近，2010開店至今頗受好評，堅持「精緻」且「平價」的消費方式，加上嚴選上等食材，讓顧客享受「單點」、「現點現切」的服務，完全顛覆吃到飽的刻板印象。除此之外店內還提供教學式燒肉，店員會為來店的每位顧客示範「燒烤的秘訣」，來這可以大口品嚐燒肉的鮮美。為了讓顧客都能品嚐到店家嚴選食材的鮮美，老闆傑夫用心的研發各類食材的專屬烤法，有如雜耍般的桌邊燒烤表演，讓你不單單在味蕾上，連視覺上都有很大的享受。",
    lat: 25.0428,
    lng: 121.55509,
    location: "大安區",
    address: "忠孝東路四段170巷6弄7號",
    tel: "+886-2-27735985",
    images: [
      "https://images.unsplash.com/photo-1596195933984-5745f77c989e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzAzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "糖朝(統領概念旗艦店)",
    description:
      "來自香港的糖朝，是一家糖水專門店。所謂的糖水就是甜湯，在飯後食用，1年4季都適合。位於忠孝東路上的糖朝，創於1991年，2003年來臺，日本也有分店。店內裝潢古色古香，有著濃厚的中國風。來到糖朝，一定要品嚐「招牌原木桶豆腐花」這道自創料理，其它如麻蓉湯圓、生手磨核桃露、鮮海帶綠豆沙、百合紅豆沙皆是很受歡迎的甜品，紅棗燉雪蛤、木瓜燉雪耳更是養顏聖品，女士們的最愛。糖朝除港式甜品外，還有各式特色小菜、點心、粥飯麵類，如君度橙花骨、炸南乳雞中翼、竹笙雙菇鮮腸粉、蜜汁叉燒飽、糖朝炒飯、燕窩鮑魚雞絲粥、南乳豬手湯麵、糖朝一品粥等，不時還有新品上市。或許是深知嘴饞的威力，糖朝的營業時間不分平常假日，一律開到凌晨2點，晚上想吃宵夜、白天想吃中式甜品，都可以到糖朝來，感受滿懷甜滋滋的幸福。",
    lat: 25.04167,
    lng: 121.55168,
    location: "大安區",
    address: "忠孝東路四段197號2樓",
    tel: "+886-2-27722889",
    images: [
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "胡同燒肉",
    description:
      "胡同開業至今承蒙饕客愛戴人潮不斷，除了堅持提供當天處理的新鮮頂級食材外，親切的態度也是原因之一。重視與食客的互動，點餐前熱心推薦菜色，上菜後詳細指導如何烤肉，並主動閒話家常，有如置身於昔日胡同街坊之間溫馨的氛圍，絕對讓每位踏進胡同的客人有如賓至如歸的感覺。2005年，由一群對餐飲服務有理想抱負的年輕人在台北市熱鬧的東區成立了1號店『胡同』燒肉夜食，近年來陸續開設2號店『古月同』、3號店『壺同』、4號店『衚同』、5號店『醐同』、6號店『瑚同』與全新品牌『侍』串燒夜食 1號店。人與人之間的橋樑是心，而不是華麗的外表！在胡同每一件事物的背後都存在著意義與故事。堅持、用心、熱情、創新是胡同想傳達給所有人的信念在胡同，我們只提供最新鮮味美的菜色給所有的顧客。只要進到店裡，胡同都當成家人朋友來招呼，因此呈獻到各位面前的每一道菜色絕對是胡同堅持與用心之下，所烹調出的美味佳餚！",
    lat: 25.04361,
    lng: 121.5501,
    location: "大安區",
    address: "敦化南路一段161巷17號",
    tel: "+886-2-27761575",
    images: [
      "https://images.unsplash.com/photo-1596723546490-2c90af7705ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzEwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "小李子蘭州牛肉拉麵館",
    description:
      "好吃的拉麵，麵條相當重要，從一塊麵糰，一拉再拉，要拉出128條，過程中會讓拉麵產生勁道，吃起來有Q感，小李子蘭州拉麵的師傅還會不時地在拉麵館外表演手工拉麵，讓顧客可以一睹拉麵的做法。除了麵條，蘭州拉麵老闆說，要具備以下5種特質，「一清、二白、三紅、四綠、五黃」的條件，就是湯頭要清、蘿蔔要白、辣油要紅、青菜要綠、麵條要黃。每種材料都是經過嚴格挑選。湯頭是以40多種中藥材燉製而成，先以牛骨高湯熬好後，將中藥灑在上頭略微滾製，把中藥的味道融入湯頭之中，讓湯頭喝起來芳香甘醇。白蘿蔔要滾後泡冷水，煮時再川燙一下，脆脆的口感，硬是不同於家裡的蘿蔔湯。辣油是由朝天椒作成，再加上各式的鮮蔬，辣度夠更帶有蔬菜淡淡的甜味。青菜也是時鮮，稍經川燙保持青綠。這裡的蘭州拉麵具備了5種特點，色香味俱全，牛肉是選用澳洲的腱子肉，有帶筋咬勁十足，香味融入其中。除了牛肉麵以外，魯大排麵及蹄花麵也都是招牌，值得一試。",
    lat: 25.02259,
    lng: 121.54291,
    location: "大安區",
    address: "和平東路2段118巷57號",
    tel: "+886-2-27369505",
    images: [
      "https://images.unsplash.com/photo-1565720490564-4ca60b055af6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "永福樓",
    description:
      "位在忠孝東路SOGO商圈的永福樓是臺北老字號的江浙餐館，但現在它最出名的菜色卻是北平烤鴨，還兼賣廣式點心，甚至連和風明蝦，也是它的招牌之一。從永福樓一路走來的變化及口碑歷久不衰，似乎也正是臺北這些年來餐飲業進步與改變的縮影。它是臺北市最早嘗試「複合式餐廳」的先驅，不僅口味「複合」，功能也很「複合」。一般散客每晚在2樓用餐時有鋼琴演奏可欣賞；包廂宴客者則可以卡拉OK無限歡唱；3、4樓大廳金碧輝煌，是大型宴客的一流場所。隨著臺北人口味的國際化，餐廳老闆還特別出國挑選數款紅、白酒獨家進口，讓客人做為佐餐的選擇。永福樓大部份廚師廚藝以江浙菜為主，但烤鴨、點心則由專門師傅負責。尤其北平烤鴨強調生鴨風乾現烤，加上獨門配方填料烤製，不僅汁多皮脆肉嫩，就連鴨骨頭都十分入味。",
    lat: 25.04182,
    lng: 121.54575,
    location: "大安區",
    address: "忠孝東路四段59號2、3F",
    tel: "+886-2-27528232",
    images: [
      "https://images.unsplash.com/photo-1583607264434-2d8e199b3a17?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzA5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "銀翼餐廳",
    description:
      "銀翼餐廳&mdash;精緻刀法重現川揚菜原汁原味10公分見方豆腐，切成5000條豆絲、加上高湯、雞絲、筍絲、火腿末，就成了這道300多年前乾隆下江南，文思和尚為其烹調的《文思豆腐》。以往這道名菜只能在滿漢全席品嚐到，老字號《銀翼餐廳》卻以精準刀工重現佳餚精髓。1947年創立，《銀翼餐廳》前身是空軍軍官俱樂部餐廳，早期在南京，之後遷到成都，過去只服務將校以上軍官，來台取名《銀翼》即為了紀念空軍時期，菜式以川揚菜為主，過去老蔣時代便時常到行館外燴，現任總統馬英九、副總統蕭萬長，也是常客。堅持傳統菜式、精準刀工與原汁原味，讓海外僑胞、大陸訪問團、老官員們總是不辭千里只為一嘗熟悉地道家鄉味，老饕必點的《肴肉風雞》、行家最愛的《回魚干絲》，還有60多種麵食，屹立一甲子的《銀翼餐廳》未來還要持續將老祖宗菜式發揚光大。",
    lat: 25.03329,
    lng: 121.52703,
    location: "大安區",
    address: "金山南路二段18號2樓",
    tel: "+886-2-23417799",
    images: [
      "https://images.unsplash.com/photo-1595007163136-82fb6da20c05?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzE2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "樂麵屋(忠孝店)",
    description:
      "到樂麵屋吃真正的九州豚骨拉麵，享受量身訂做的服務、熱鬧歡樂的氣氛和純日式口味的拉麵，就像到了日本！",
    lat: 25.04001,
    lng: 121.55221,
    location: "大安區",
    address: "忠孝東路四段216巷32弄11號",
    tel: "+886-2-87728159",
    images: [
      "https://images.unsplash.com/photo-1563870629874-eb5bf2e03d9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzE0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "九如商號",
    description:
      "還沒走進店裡，就可以聞到撲鼻而來的粽子香味。糯米可說是九如商號的精神，不管是炒年糕、湖州肉粽、酒釀湯糰，都是道地的浙江小吃。這裡的粽子是屬於長形的潮州粽，分為豆沙甜粽與豬肉鹹粽，豆沙餡料，綿密的口感，吃起來不會太甜，鹹豬肉肥瘦剛好，加上一個蛋黃，吃起來不油膩，相當順口。因為潮州粽是屬於水煮的粽子，是用生米入滾水煮到米粒酥軟為止，所以吃起來會有著QQ的感覺。九如商號的另外一個特色，就是湯糰，號稱是臺灣芝麻湯糰的鼻祖，有兩種吃法，一種是白水煮，另一種是煮酒釀蛋。酒釀是由蒸熟的糯米發酵而成，在加熱之後酒味散出，聞起來相當香，食用後會有微醺的感覺，身體也跟著熱起來，在冬季吃上一碗，相當的暖和。",
    lat: 25.03821,
    lng: 121.54696,
    location: "大安區",
    address: "仁愛路4段69號",
    tel: "+886-2-27517666",
    images: [
      "https://images.unsplash.com/photo-1421622548261-c45bfe178854?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzEyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "悅華軒酒樓",
    description:
      "悅華軒為原粵華軒改組之後，仍以港式飲茶及粵菜為主。廣東人依據時令節氣，飲食當季應景食物，且口味均衡，所以一般來說粵菜美味健康。來悅華軒必吃的是蝦仁腸粉，軟、滑、薄、透的腸粉包著粉嫩蝦仁，蝦子彈性十足，口感Q且滑潤，沾上清淡的醬汁，更顯甘甜，腸粉要好吃，祕訣在於漿的用料和蒸腸粉的時間，兩者不能過與不及，這點悅華軒做到了。廣東人愛吃魚，蒸魚也是悅華軒的強項，蒸的火候功夫好，魚肉與大骨若即若離，吃的出魚肉鮮甜，配上蒸魚醬汁，飯可以吃上好幾碗，是白飯的殺手。悅華軒的臘味煲仔飯，臘味十足，油淋乳鴿，沒有剩油味，肉鮮味美，還有出色點心，現點現做，食材新鮮，煲湯承港式口味，喝過的都說讚。悅華軒還有更多菜色，歡迎大家把這裡當自己家飯廳使用。",
    lat: 25.03544,
    lng: 121.54385,
    location: "大安區",
    address: "復興南路1段283號 2F",
    tel: "+886-2-27029988",
    images: [
      "https://images.unsplash.com/photo-1612030847972-ebbb266466bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzE5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "永康牛肉麵館",
    description:
      "「永康牛肉麵館永遠是第一名」，這是很多牛肉麵老饕的心聲，也是許多牛肉麵迷的最愛。2008年他們獲得臺北牛肉麵節的10大人氣牛肉麵店殊榮，可證明老店的魅力歷久不衰。永康牛肉麵館是道地的川味牛肉麵，他們燉越久越香的秘訣，在於使用本國黃牛腩和澳洲的牛腱子心，將大塊牛肉清蒸3小時後，切小塊放入紅燒燉煮3小時，清燉的湯頭也是同樣步驟，待完全入味，筋肉膠質溶化在湯裡，芳香四溢的好湯也終於完成。精心製作的麵點有以牛骨高湯、辣豆瓣口味的紅燒牛肉麵、原味牛肉湯的清燉半筋半肉細粉、炸得酥脆的排骨麵，香噴噴的好麵，搭配上帶點辣味的粉蒸排骨、肥腸，鬆軟綿密的黃金地瓜，這些別的地方吃不到的獨家小菜，不但佔據著老饕的胃、口，也征服了他們的心。",
    lat: 25.03291,
    lng: 121.52811,
    location: "大安區",
    address: "金山南路2段31巷17號",
    tel: "+886-2-23511051",
    images: [
      "https://images.unsplash.com/photo-1603331880549-faca2374edf3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzE3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "BIANCO 義式餐廳",
    description:
      "Bianco一家白色的義大利餐廳，在仁愛圓環上台新大樓旁巷子進去，離東區不遠，卻有東區所沒有的寧靜。",
    lat: 25.0361,
    lng: 121.54975,
    location: "大安區",
    address: "仁愛路四段112巷19號1樓",
    tel: "+886-2-23253655",
    images: [
      "https://images.unsplash.com/photo-1591920476948-da986641e66a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzE1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "青田七六",
    description:
      "位於台北市青田街七巷六號的市定古蹟－－馬廷英故居是1930年代興建的日式教授宿舍，一群台大校友本著能為台大做些甚麼的熱情，成立科普教育的展覽館，並推動文化藝術導覽工作。屬於台大校產的青田街七巷六號，台大校友以黃金種子文化公司經營方式，以租賃模式取得使用權利，自負盈虧維護這棟老房子。上午免費提供各單位申請自然科普導覽活動，中午以後提供簡餐、咖啡、茶等服務。執行長吳文雄表示，希望古蹟提供給一般親子活動空間，讓大家很容易親近這棟建築接觸這塊土地，並且能獲得自然科學的知識。黃金種子文化公司的文化長簡肇成（水瓶子）感性地說，他希望藉由這棟會呼吸的老房子，讓所有人在此講故事，並激盪更多的火花出來。台灣從日本時代，到國民政府來台，戰前戰後所發生的故事多如繁星，而我們想傳達的，是這棟老房子與老房子內的『人』交織而成的美麗故事。青田七六希望成為一個都市更新的典範，不需要整個古蹟重建後才能利用，反而藉由維修維持保留古樸的古蹟氛圍，並以現狀再使用的文化遺產精神經營，需要更多朋友的關心與光臨，若來到青田七六，不妨放慢您的腳步，安靜地觀察四周的環境，透過樹梢的風聲，在陽光下或是雨滴旁，享受不同的蟬鳴聲。",
    lat: 25.02795,
    lng: 121.53261,
    location: "大安區",
    address: "青田街七巷六號",
    tel: "+886-2-23916676",
    images: [
      "https://images.unsplash.com/photo-1552960226-639240203497?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzE4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "京星港式飲茶",
    description:
      "位於忠孝東路敦化南路口，為臺北市第一家24小時全天營業的港式飲茶，集團旗下還有3家港式飲茶分店為京星一店、京星二店、吉星。高貴平價的服務、現點現做、精選新鮮食材，是受歡迎的主因，在用餐時刻眾多人潮等候用餐是常有的現象。看看菜單，早餐有各種搭配，如主食任一加飲料任一只要69元，另外再加點心任一只要99元，看到精緻多樣又美觀的料理，有多種粥麵、點心、飲料供你選擇，真是把速食早餐比下去了！京星的菜單上有分商業午餐、精緻點心、中廚熱炒、實惠宵夜小吃，無論任何時候都可選擇菜色繁多的美味佳餚，這裡也提供素食類料理，喜愛港式飲茶的人一定會喜歡這裡，尤其在半夜的時候！",
    lat: 25.04123,
    lng: 121.54847,
    location: "大安區",
    address:
      "敦化南路1段216號2F【一館】臺北市103大安區忠孝東路4段166號2F【二館】",
    tel: "+886-2-27412625",
    images: [
      "https://images.unsplash.com/photo-1565700016723-268ea75eef75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzIwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "度小月擔仔麵",
    description:
      "臺南度小月擔仔麵，聞名全省。度小月的招牌，已有104年歷史，從洪芋頭這一代，因得名師真傳，善於烹飪。當時在臺南、安平之間，每逢4、5、9月狂風暴雨，駕船危險，因而生意清淡，俗稱小月。為渡過小月，洪芋頭擺麵攤，成為當地風味特殊的擔仔麵，店名就由此而來。擔仔麵的特色在於精緻小碗，且以百年老鍋的滷汁，經年保持高溫熬煮的肉燥，氣味香醇，搭配甜蝦頭熬成的高湯。上桌之前，先以熱水熱碗，麵稍微川燙一下，撒上豆芽、香菜，再佐以肉燥、蒜泥、黑醋、蝦仁，就成為一碗風味特殊的擔仔麵。度小月從臺南到臺北開分店，讓臺北的朋友也有口福，店內的裝潢也很別緻，兩層建築，上層以木質的桌椅擺設主要的飲食區，像是客棧，而下層佈置成古早味的麵攤，一旁用白布蓋著油麵及米粉，抓一把，用勺子入滾水川燙，空碗在攤前排排站，老闆速度之快，將麵及米粉放入其中，淋上高湯、滷汁，放上一隻蝦子，就成為一碗碗的美味擔仔麵了。在上層的顧客可以親自觀賞師父的技術，你也可以跟傳統的麵攤合照，留下深刻的回憶；這裡不只是擔仔麵，還有多種傳統小吃，像是用百年滷老鍋滷的小菜及蝦仁肉丸等，價格都相當實在，簡單的消費，讓你大大的滿足。",
    lat: 25.04071,
    lng: 121.55222,
    location: "大安區",
    address: "忠孝東路4段216巷8弄12號1樓",
    tel: "+886-2-27731244",
    images: [
      "https://images.unsplash.com/photo-1567019778516-d1db44e32904?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzIxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "喫飯食堂",
    description:
      "吃飯皇帝大，這是大家琅琅上口的一句話。吃著古早料理，滷白菜、3層滷肉、香酥的鹹魚等等，配上淋上茶油的飯，一口一口都是家鄉的感覺。喫飯就是要給顧客這樣的感覺，食堂的老闆是個從宜蘭來的鄉下小孩，帶著自己的夢想，更疼惜著臺灣這塊土地的道地古早味，所以將傳統特色的小吃作為食堂的精神，就是要讓大家吃到臺灣土地上正統的好味道。店面的裝潢上給人古早的感覺，枕木的桌子及板凳、紅毛的土板及石材製作的牆壁及裝飾，老闆說這就是自然啊。由於傳統料理在現代人的飲食習改變上有了衝擊，老闆還是堅持手工製作的食材，用傳統的技法做出「手路菜」，一點不失「古早味」。例如芋香排骨，酥脆的排骨加上大塊的芋頭去燉煮，讓芋頭的顏色及香氣滲入其中，吃起來外皮裹著芋頭沙沙黏稠的口感，將排骨甜味提升，吃起特別嫩；最特別的招牌，就是有著傳統古味的宜蘭西魯肉。西魯肉就是宜蘭人稱的雜菜湯，通常是以大白菜為底，加上配料及勾芡，再淋上一些黑醋，吃起來酸酸甜甜，非常下飯，是古早味的道地宜蘭美食。這裡選用的食材都是經過細心挑選，店內的衛生評比也都是一等一、通過GSP的優良餐廳，也是無煙餐廳的模範店，讓每位來喫飯的客人，都能有最高的品質享受。",
    lat: 25.03234,
    lng: 121.52941,
    location: "大安區",
    address: "永康街8巷5號",
    tel: "+886-2-23222632",
    images: [
      "https://images.unsplash.com/photo-1566382868173-8eb63e3a5328?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzI1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "Route 66 美式餐廳",
    description:
      "Route 66是美國橫跨8州的第一條公路，也是流行文化的元素，包括影集歌詞，及外移人口產生的新美式藝術，第一家美式餐廳也在此誕生。最具美式精神的象徵，當然就是Route 66！餐點強調新鮮現作，減少與空氣接觸的時間，保持食材原始風味，以傳統美式火烤方式烹調，不添加過多調味，呈現最原汁原味的美式餐點。其它特色：（1）戶外地板仿3D塗鴉，紐約擁有8年經驗，專畫餐廳與公共藝術的街頭塗鴉畫家操刀。（2）60年代Harley-Davidson原廠專用的加油機，是Route 66公路上加油站的加油機。（3）美國50州車牌，拼貼成一面美國地圖輪廓。（4）結合創意市集店內寄賣 。（5）正統美式調酒，一般夜店或Pub不常見。（6）免費提供藝術工作者舉辦個人作品展。",
    lat: 25.03992,
    lng: 121.55374,
    location: "大安區",
    address: "忠孝東路四段216巷27弄11號",
    tel: "+886-2-87715866",
    images: [
      "https://images.unsplash.com/photo-1570179776077-a11e86c162e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzI4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "一品山西刀削麵之家",
    description:
      "位於永康街上的一品山西刀削麵，不只在永康街已經屹立4年之久，其天母總店更是傳香街坊10 年之久的老店家。1997年在天母西路成立第一家直營店時，為了兼顧現代人追求美味、更追求健康的潮流，更開發了一系列的蕃茄料理，而以蕃茄牛肉麵為主打商品，將整顆番茄下鍋熬煮，麵條則由師傅現場刀削，麵條口感香Q滑溜、嚼勁十足。招牌除了清香不油膩的蕃茄牛肉麵之外，帶有濃濃古早味的炸醬麵、皮薄餡多的餡餅、香酥滑嫩的抓餅，還有炒餅、炒麵等等料理，都令人百吃不膩、愛不釋口。好吃的麵點，如果再配上可口的小菜，幸福指數更高！苦瓜、涼拌蓮藕&hellip;等，都是熱門商品。天母店因地利之故，深受當地外國人青睞，許多當地人更是每週必吃，可說是名副其實的遠近馳名。",
    lat: 25.0317,
    lng: 121.52953,
    location: "大安區",
    address: "永康街10-6號",
    tel: "+886-2-23931339",
    images: [
      "https://images.unsplash.com/photo-1597738713735-2e6ab2cf09bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzI2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "就是好客海鮮炭火燒肉",
    description:
      "歡迎光臨！宏亮且充滿朝氣的聲音，是踏進【就是好客】聽見的第一個問候。除此之外，親切的笑容更展現了好客每位夥伴的熱情。顧客至上、親和力、同理心、歸屬感、迅速積極的服務更是好客的首要目標。除了這些，細心、耐心、熱心更是缺一不可。貼心的給予食用建議、桌邊服務只要您有問題，總會盡最大努力幫您解決、替您拍照留念、細心的記住您的樣子，讓您下次到訪有更親切的感覺&hellip;這些看似微不足道的舉動，都是好客每位夥伴為了表現對朋友們的重視也是好客所希望傳達出去的訊息。",
    lat: 25.04137,
    lng: 121.54629,
    location: "大安區",
    address: "忠孝東路四段98號11樓【忠孝店】",
    tel: "+886-2-87728832",
    images: [
      "https://images.unsplash.com/photo-1586442368741-fe1c6f8c639f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzI5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "馬可波羅餐廳",
    description:
      "馬可波羅餐廳由義大利籍主廚領軍，菜色時時推陳出新，並定期舉辦享譽業界的飲饌盛會，奠定北市首屈一指時尚義大利餐廳的地位。馬可波羅義大利餐廳座落於香格里拉台北遠東國際大飯店38樓，居高臨下，享有眺望北市的極致視野，多年來延續締造最靈驗求婚桌、最佳約會盛地、最著名高樓餐廳、最美味異國料理等多項美名。內部陳設以亮紅、鵝白、沉黑為色彩主軸，巧妙利用原木、皮革、大理石的質感與視覺效果，結合稜角分明的幾何圖紋，建構白天活潑休閒、夜晚摩登浪漫的極簡氛圍。為營造獨一無二的流行空間，設計師亦於餐廳正中央規劃「主廚專屬桌」，以米白色大理石方桌搭配六張亮紅色絨布國王椅的尊貴造型，結合低調奢華，又突顯唯我獨尊的不凡氣宇，深受貴賓青睞。此外，可容納24位賓客的獨立貴賓廳，採用火紅色壁面飾以黑色幾何線條，強調色彩對比，既洋溢歡樂氣息，並刺激口腹之慾；左右二邊，一為高樓美景，另一邊則是酒藏縱橫交錯的透明酒窖，化身最完美的飲宴之地。",
    lat: 25.02665,
    lng: 121.54921,
    location: "大安區",
    address: "敦化南路二段201號38樓",
    tel: "+886-2-23788888",
    images: [
      "https://images.unsplash.com/photo-1587480289399-0451b9c23ecc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzI3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "長白小館",
    description:
      "座落於東區巷子內的長白小館，是一家有濃厚家鄉味的溫馨小館，內部的雕畫及書畫都是老闆自己的創作，讓店內更加有味道。故鄉於東北黑龍江的宋伯伯，將自己家鄉的酸菜白肉鍋帶來臺灣，嚴守傳統火鍋作法，酸菜是選擇煙台白菜，因為纖維粗、不易爛，再加上對水的控制，天涼時，水溫需控制在70℃，天熱則需維持30～40℃的水溫，經過這樣發酵之後，才能成為一鍋好的酸菜。酸菜白肉鍋除了酸菜外，湯頭是去皮老雞、香菇加上紅蘿蔔，耗費4個小時熬製而成，喝起來酸度剛好，也非常的鮮甜。另外酸菜白肉鍋一定要搭配兩種配料，就是五花肉及板豆腐，五花肉一頭豬大約只有6塊，上面的油光紋路剛好，吃起來鮮嫩多汁。板豆腐中間佈滿了大孔，能將湯汁的鮮美吸得飽滿透徹，也才能將清爽微酸的湯底完全封住，吃起來必較有硬度，鍋中的美味，盡在豆腐之中。這裡的沾醬也是極為用心，共有12種沾醬供顧客選用，可以多試試不同的口味，想必能找到你的最愛。",
    lat: 25.0407,
    lng: 121.55501,
    location: "大安區",
    address: "光復南路240巷53號",
    tel: "+886-2-27513525",
    images: [
      "https://images.unsplash.com/photo-1571773323606-6cf3eb0f7e75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzM0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "春天素食餐廳",
    description:
      "春天素食餐廳─有機自然的素食新文化不管吃不吃素，走進春天，看到的是歐式自助餐、開放式廚房的百多樣餐點，吃進的全都是有機健康的美食，沒有負擔的用餐，給你身體的春天，服務也春天！台北素食餐廳數量居全球之冠，但很少像春天一樣，從菜餚處理到料理，全採環保、有機路線。「說」得一口好菜的老闆朱秀卿，一手打理沒有農藥的素食文化，招牌菜「三杯猴菇」，送上桌還會發出ㄑ一ㄑ一的現炒聲，師父精緻刀工處理的「排翅」，讓人吃得到宛如真魚翅的綠竹筍風味。以過濾水、原始栽培的杏鮑菇，完全無腥味，經鐵板燒的烹調下，極具嚼勁。現炒生菜有七成來自有機農場，吃得到的美味，卻不讓你吃到味精，和任何添加物。其他如杏仁茶、擔擔麵、煎餃等，全是饕客必點名菜，老闆娘的慈濟心腸，讓服務也春天，即使不吃素，也能體會吃素的感動，連外國人也稱讚Very Good！",
    lat: 25.02652,
    lng: 121.53222,
    location: "大安區",
    address: "和平東路一段177號3樓",
    tel: "+886-2-23930288",
    images: [
      "https://images.unsplash.com/photo-1568896350325-1516a4c1e3a4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "思慕昔 Smoothie House",
    description:
      "讓人吃過一次就懷念的雪花冰，不論是春夏秋冬，幸福魅力都在永康街15號持續燃燒！自開幕以來，已經迅速累積不少人氣與話題，每每可見大排長龍、門庭若市的熱鬧景象，成為各國觀光客的必訪之地。偌大開闊的用餐環境，清爽氣氛的明亮色調，店內設計以自然、原始造型為主，融入時尚的元素且舒適的環淨空間，加上親切的服務人員，要給消費者頂級的體驗。濃純新鮮芒果醬與綿密口感煉奶秘方結合的「黃金比例」散發著清爽果香，綿密的雪花冰上層，鋪滿大量的新鮮水果，加上新鮮果肉製作的義式雪酪或綿密滑順的鮮奶酪，堅持現做現賣，細心打造五星級冰品，口感濃醇滑順、酸甜恰好，讓人吃過就懷念的好滋味。還不快走一趟永康街新地標，『思慕昔 Smoothie House』，在永康街15號等你來體驗！",
    lat: 25.03252,
    lng: 121.52981,
    location: "大安區",
    address: "永康街15號1F、2F",
    tel: "+886-2-23418555",
    images: [
      "https://images.unsplash.com/photo-1572988003368-c2068d1af2ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzM4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "驥園川菜餐廳",
    description:
      "敦化南路的驥園川菜餐廳，一走進餐廳內，就可以聞到香郁的雞湯味，1樓的廚房中，擺滿整排的砂鍋，每隻鍋裡面都放著一隻全雞，慢火烹煮，湯汁快沒了，廚師就繼續給鍋內加湯汁，讓湯汁的味道更濃郁，讓人垂涎。這裡的砂鍋雞湯湯頭是30隻老母雞熬煮8小時，隨後放入純正土雞、干貝與金華火腿續熬續熬3-4小時，湯醇濃厚，再加上鮑魚、魚翅、竹笙等上等的材料，成為一鍋鍋的美味。除了雞湯外，這裡的川菜經過改良，不再重鹹、辣，符合現代人健康概念。像是乾煸四季豆，炒至扁扁發亮的四季豆並不油膩，軟中不失自然的口感，蝦米等配料也炒得相當入味，口味極佳。另外香根牛肉絲是一道微辣順口的配飯菜，豆干絲等每一種食材都很夠味，而香菜根也保持其清脆質感，還可以夾上這裡的雞汁蔥餅。甜點推薦芋泥鍋餅，外皮酥脆，內餡熱騰騰的芋泥，吃起來鹹鹹甜甜，口感特殊。廳內的裝潢非常的大方別緻，寬敞的空間，來此用餐相當舒適。",
    lat: 25.03527,
    lng: 121.54843,
    location: "大安區",
    address: "敦化南路1段324號",
    tel: "+886-2-27083110",
    images: [
      "https://images.unsplash.com/photo-1547582538-8e3598d60244?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzM2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "卡瓦利義大利咖啡館",
    description:
      "在美食街區的永康街有一家歷史悠久的咖啡店，名叫卡瓦利。明亮的玻璃內，溫暖米色系的牆，點綴一幅幅的畫，桌椅是歐洲進口的木桌，擺放格局相當寬敞，即使客滿時落坐其中，也不會有壓迫感，格外舒適。簡單精緻的裝潢，除了畫以外，還有一個咖啡架及玻璃櫥窗，擺放咖啡及藝術品，還有一臺烘培機，讓客人可以觀賞。這裡最大特色是義大利咖啡的基底，以堅果味重的肯亞AA豆等7種生豆，自行烘培，小小一杯濃縮咖啡裡，苦中帶著甘甜，讓人意猶未盡。如果怕苦，可以選擇其他義式咖啡，例如冰摩卡，上面有一層摩卡的雪泥，搭配底下的咖啡，喝起相當特別。或是拿鐵，用細緻且滑順的奶泡，充分與咖啡融合其中，配上些許的榛果，喝起來絕妙綿密，這都是老闆親手烘培的。最後再推薦這裡的提拉米蘇，這是店內搭配咖啡的招牌點心，悠閒的午後到這裡來享受悠閒，伴著咖啡與音樂，放鬆一下緊張的心情。",
    lat: 25.03325,
    lng: 121.52947,
    location: "大安區",
    address: "永康街2巷5號",
    tel: "+886-2-23947516",
    images: [
      "https://images.unsplash.com/photo-1515711127392-4c62a99c3393?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "臺一牛奶大王",
    description:
      "臺大對面的老字號，悠久歷史，是多年來臺大人的美好回憶，下課離開學校時，邀約三五好友前來吃冰，一起度過美好的青春歲月。店家親手製作豆類配料，各種冰品料不但種類多，份量也夠，紅豆牛奶冰是超人氣商品，奶香濃厚，有粒粒鬆軟的紅豆滿滿覆蓋在上頭；巧克力布丁牛奶冰，布丁滑嫩順口，巧克力香濃，香味與口感具佳。秋冬有湯圓上市，湯圓粒粒渾圓飽滿，大到連湯匙都裝不太下，皮QQ有勁且料多實在，不論鹹肉湯圓、芝麻湯圓、花生湯圓等等，都鹹甜恰好，因此生意好的很，每到元宵節時，總是大排長龍。臺一牛奶大王不論冰品或湯圓，名氣皆響叮噹，一年四季都有精采好東西可吃。",
    lat: 25.01895,
    lng: 121.53354,
    location: "大安區",
    address: "新生南路3段82號",
    tel: "+886-2-23634341",
    images: [
      "https://images.unsplash.com/photo-1602748828261-153838b059b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzM5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "回留茶藝素食",
    description:
      "隱身於永康公園旁，標榜創意素食料理，融入各國的飲食風格，散發陣陣茶香與音樂，讓人五感皆得到滿足。在永康街區的回留素食茶藝館，外表是樸素的裝潢，簡單的灰色石牆，有著圓弧的線條，搭配黑色立牌，上面寫著「回留」2字，字體特殊，有點像是小篆加上點隸書，感覺相當的特別。入得店來，與外在的素簡又有不同的感覺，有如一個小型的展覽場，多樣的櫥窗中展示各式茶壺、茶杯及茶具，另外還有一部分是老闆精心設計的手工茶具，簡單而雅致。這裡的茶，講究的是傳統茶學，提供好茶葉、好水與樸素的器皿，將喝茶的趣味完整地提供給每位客人。回留對茶泡的方法尤其講究，有碗泡法、工夫泡與蓋杯泡3種，不同的茶葉搭配不同的泡法，讓茶喝出最佳的味道。「回留」是素食餐館，但不像一般素食店給人太油的感覺，也不使用過度加工的素食產品，完全採用當令和當地的有機蔬果作為食材，以少油、不過量的調味料去烹飪，有自然風，是讓人印象深刻的「回留料理」。",
    lat: 25.0316,
    lng: 121.53012,
    location: "大安區",
    address: "永康街31巷9號",
    tel: "+886-2-23926707",
    images: [
      "https://images.unsplash.com/photo-1504940892017-d23b9053d5d4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQ0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "大來小館(永康店)",
    description:
      "想知道哪裡有「旗艦版的滷肉飯」嗎？點一份「大來小館」大碗的滷肉飯，就可以了解幸福的滋味為何了。麗水街「大來小館」的老闆料理功夫十分了得，獲得滷肉飯節比賽「老外好吃客軍團」的冠軍寶座，由門外大排長龍的隊伍，就可看出老饕們喜愛的原因。 從事餐飲業已有卅幾年歷史的大來小館，秉持著健康與美味為飲食原則的老闆蘇龍雄、張愷芸夫婦，幾十年來，一直不斷的研究改進臺灣的料理。「滷肉飯」就是其中之一，大來小館的滷肉飯吃起來不油不膩，順口清香，有些人甚至可以一口氣吃下4、5碗。「大來小館」不但滷肉飯得到了第一名，其他的料理更是吸引老饕的讚美，大來小館大宴小酌皆宜。例如：茄子鑲肉、扁魚滷白菜、滷豬腳、大腸、豬肚、蒜泥蚵等等；而其他「手路菜」更是一絕，例如：香酥花枝捲、角瓜蒸蛤仔、煎虱目魚肚、熱炒蒜苔蝦干、久花蝦干等等不勝枚舉，聰明的老饕到店裡都會交給老闆配菜，盡情享受老闆的手藝。",
    lat: 25.03299,
    lng: 121.53015,
    location: "大安區",
    address: "永康街7巷2號",
    tel: "+886-2-23579678",
    images: [
      "https://images.unsplash.com/photo-1600188879917-5e0cebab6634?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQ3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "川味老張牛肉麵店",
    description:
      "已 有50年經歷的川味老張牛肉麵，老店原在永康街附近，現已搬遷至愛國東路、麗水街口，並新增南昌路分店。這是許多影視名人最愛的店，能夠滿足每張挑剔的嘴，也是唯一多家媒體爭相報導，相繼獲得2005臺北牛肉麵節亞軍、2006年冠軍王寶座的人氣名店。道地四川牛肉麵，師傅手桿的細麵條，淋上深褐色的濃郁湯汁，加上滷得Q軟有咬勁、晶瑩剔透的牛肉塊，再撒上 宜蘭三星蔥茉，一碗色、香、味俱全的牛肉麵，就這麼完成。加入漢方中藥、大骨熬煮的清燉牛肉麵，最受一般大眾歡迎；辣中帶勁、香香麻麻的辣味牛肉麵，最適合重口味、愛刺激的朋友。酸酸甜甜的蕃茄融入湯汁裏，超美味的極品牛肉麵，愛美的女性同胞，更為它著迷，加些口感絕佳的酸菜，無可比擬的好滋味。粉蒸小排肥腸、海帶、泡菜等拿手小菜，也別忘了一起帶走。",
    lat: 25.03151,
    lng: 121.52873,
    location: "大安區",
    address: "愛國東路105號",
    tel: "+886-2-23960927",
    images: [
      "https://images.unsplash.com/photo-1601452576514-f6144a52972d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzUyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "東區粉圓",
    description:
      "週末假期到熱鬧的忠孝商圈逛街，許多人都會來到有名的東區粉圓解饞一下。在ATT、明曜百貨附近，已有20多歷史，遵循傳統古法提煉，純手工製作，挑選上等食材，不添加任何人工香料，乾淨衛生，口味多樣化，味美的粉圓，因此獲得「消費者協會金牌獎」，「顧客滿意度金質獎」，料多味美，深獲許多愛吃甜品的民眾喜歡。東區粉圓堅持以「健康自然的」信念來製作好吃的食品。炎熱夏季消暑甜品有QQ的、超大顆的綜合粉圓冰；冷颼颼的冬天，來杯料多大碗的燒仙草，暖暖身體；好喝的綜合紅豆湯，甜甜的熱湯，感覺特別甜蜜；臺式傳統豆花，香醇的古早味，濃的化不開。熱賣的燒仙草可另外加自己想吃的料，粉圓、芋頭、芋圓、湯圓、地瓜圓、蓮子、花生、大紅豆等等，各種口味應有盡有。",
    lat: 25.03946,
    lng: 121.55285,
    location: "大安區",
    address: "忠孝東路4段216巷38號",
    tel: "+886-2-27772057",
    images: [
      "https://images.unsplash.com/photo-1600188992216-69f47487c542?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzUxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.7,
  },
  {
    name: "莫宰羊",
    description:
      "自古以來羊肉就是宮廷中的養身珍品，具溫潤滋養、補中益氣、開胃健力、助益產婦、通乳治帶、增強免疫力等營養價值，且四季皆宜品嚐。為了提供穩定的肉質及口感，「莫宰羊」的羊肉食材皆是精選紐西蘭、澳洲進口的零污染精選羊肉，運用台灣傳統的羊肉料理手法，舉凡熱炒、涼拌、紅燒、清燉、燒烤、滷製等料理方式，搭配傳統道地的豆瓣醬、豆鼓、麵線、中藥材等食材與配方，皆能創作出一道道美味可口與養身滋補的羊肉料理，十六年來已獲得顧客們的口碑認同。",
    lat: 25.02388,
    lng: 121.53446,
    location: "大安區",
    address: "新生南路三段28號",
    tel: "+886-2-23691466",
    images: [
      "https://images.unsplash.com/photo-1565018996595-4cce5ab241cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzUzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "鼎泰豐",
    description:
      "鼎泰豐─美食威名震四海八方鼎泰豐小籠包名震八方，16公克的餡料肥瘦合度，5公克的皮用18密摺封口，薄而有勁，現做現蒸，這個作業程序已然是舉世皆知的秘密，然而卻未必複製得出相同的美味。從油行轉型麵點餐廳，至發展成中華料理與江浙菜路線的跨國連鎖企業，「小籠包」、「元盅雞湯」、「蝦仁炒飯」是鼎泰豐必嚐經典，到此不嚐，不算來過。它曾受《紐約時報》譽為世界十大美食餐廳之一，也曾代表外交部出訪英、法進行美食外交，和主辦馬英九總統上任後第一個國慶酒會，其地位可見一斑。最新研發面市的「紅油抄手」，不論蝦肉餡或菜肉餡，吃來皆辣香而不嗆味，並飄散中藥材的芬芳，追求美味，腳步不止。近年，鼎泰豐更藉E化使服務更精緻，接受少油、減鹽、調整辣度等特殊要求，出菜時可完全達成客製化的目標。誠懇、踏實、零客訴，便是老店維持競爭力於不墜的成功之鑰。",
    lat: 25.03348,
    lng: 121.53011,
    location: "大安區",
    address: "信義路2段194號",
    tel: "+886-2-23218928",
    images: [
      "https://images.unsplash.com/photo-1552058461-dc1828d58bf6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzU0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "九鼎鐵板燒",
    description:
      " 九鼎的主要創辦人，是來自電子業，更是老饕中的老饕，也因為愛吃美食，嚐遍各大餐廳的兩人，深深感受到一個好的餐廳，不僅僅是經營者對於食材本身的要求、廚師的用心程度、用餐環境的佈置，乃至於服務人員的服務態度，在在都是影響口中味蕾與心中情緒的重要因素。在這樣的念頭下，從電子業榮退的幾位老饕間一番閒聊，也就促成了九鼎的產生！老闆將電子業的標準作業流程與精細成本控管的專業，應用在九鼎的內部控管，確保餐的質與量，讓每位來到九鼎的客人，無論在任何時刻都享有最好的餐點品質，最窩心與標準的桌邊服務。九鼎認為，好的服務態度不僅止於SOP的建立，更在於服務人員來自內心真誠的付出。行禮如儀的問好招呼，亦或制式的面帶微笑，已經不是唯一的標準，也不是最好的標準。九鼎的每位服務人員，除了標準的服務流程外，多了，視客如親的心態，在九鼎，常常可見小朋友與老板開心嬉戲，常常可見服務人員與客人如老友般話家常，更多的是許多老客人一進門，只需一個眼神，根本無須點餐，因為，服務人員早已知道每位客人的習慣與喜好。食材與環境 - 是餐飲服務業最基本的兩樣條件，九鼎在展店之初就已被訂為標準配備。寬敞的空間配置、兩倍噸數的空調設備、花費鉅資建造的水族箱、每日嚴選的新鮮食材，這些都是九鼎的保證。九鼎的一言九鼎：在新鮮、美味、健康、舒適、乾淨、愜意、個別、標準、感動等九項承諾，給與來店客人最愉悅的用餐經驗。",
    lat: 25.08279,
    lng: 121.55349,
    location: "中山區",
    address: "樂群三路67號",
    tel: "02-85029996",
    images: [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzU3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "3 cafe studio三福藝術鳩鵪",
    description:
      "3 cafe studio,來自於咖啡、私廚美食、藝術展間重要的三個元素結合，老闆的初衷，咖啡，要有堅持的專業加上手工溫度的沖煮味道、餐食，要有私廚跳脫框架創造獨特的料理，展覽，提供給新銳藝術家一個舞台，展現美的事物，讓光顧的客人更靠近藝術。so here is 3 cafe studio&hellip;座落於南京東路與建國北路轉角不到幾步, 就可以看到數字3的招牌，招牌內許多杯子組成像燈罩似般，透出溫暖柔和的光線, 木質明亮的裝潢空間、整面採光的落地窗與隔壁金融大廈形成強烈對比。最重要的莫過於咖啡、私廚美食、展覽空間這3個元素，而是每一位光顧3 cafe studio的客人創造並留下的故事與回憶; 在3 cafe，我們希望你在品啜咖啡享用美食當下，體會到快樂與幸福，在這裡，我們希望你透過藝術展覽，感受無設限空間內創造無限可能的夢想。3 cafe studio於2015年8月3日創立至今，我們會不斷注入新的靈感創造於咖啡、料理與藝術展間之上，誠摯邀請你與3 cafe studio共襄盛舉。",
    lat: 25.05288,
    lng: 121.53637,
    location: "中山區",
    address: "建國北路二段18號",
    tel: "02-25013322",
    images: [
      "https://images.unsplash.com/photo-1563472023321-6c8f4afff469?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzYwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "野菜家",
    description: "野菜家",
    lat: 25.05014,
    lng: 121.52753,
    location: "中山區",
    address: "林森北路119巷74號",
    tel: "02-25419068",
    images: [
      "https://images.unsplash.com/photo-1612049802717-eaa625b81697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzYzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "Sabrina紗汀娜好食",
    description:
      "享好時,伴好食,遇好事提供多樣性餐飲,美味的各式早午餐,義大利麵,歐式燉飯,沙拉,漢堡三明治手工甜點,鬆餅下午茶,有機水果茶,現榨果汁,手工咖啡,調酒等等。從早餐,下午茶到晚餐都有好食陪你過好時光~",
    lat: 25.06378,
    lng: 121.52306,
    location: "中山區",
    address: "中山北路2段183巷1之5號",
    tel: "0225931001",
    images: [
      "https://images.unsplash.com/photo-1593472307330-6e2555556e33?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzY5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "Bacchus",
    description:
      "《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.05095,
    lng: 121.52778,
    location: "中山區",
    address: "新生北路一段130號",
    tel: "02-25813640",
    images: [
      "https://images.unsplash.com/photo-1564906158130-25cc2b3bd8d4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzcyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "呷滴Jie Dee",
    description:
      "&quot;三個讀工科的智障高中同學，閒置10幾年，屋齡60年的老建築2樓，林森北旁，當鋪的樓上，隔壁是情趣用品店。好多人問我們怎麼會想把甜點店開在這裡？不管聽、或看來都顯的起來格格不入，但誰能想得到在高中操作機台做模具，成績又爛到底的3個笨蛋現在居然跑來做甜點？這就是我們選在這個有趣位置的最主要原因必須要格格不入到底啊！（嗯嗯所以店裡滿滿的blue）將近300天的籌備，不只是一個夢想，也是想帶給大家更與眾不同的甜點店。&quot;",
    lat: 25.04895,
    lng: 121.52573,
    location: "中山區",
    address: "長安東路1段45之2號",
    tel: "0225717676",
    images: [
      "https://images.unsplash.com/photo-1581706295818-79604988926a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzc1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "查理安咖啡",
    description: "餐點美味、環境舒適",
    lat: 25.06348,
    lng: 121.52311,
    location: "中山區",
    address: "民權東路一段7巷14號1樓",
    tel: "0225918900",
    images: [
      "https://images.unsplash.com/photo-1571172044766-ad9a38cc6d7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzc0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "沖繩料理美麗島居酒屋",
    description: "美ら島沖繩料理居酒屋",
    lat: 25.05119,
    lng: 121.52299,
    location: "中山區",
    address: "中山北路一段121巷8號",
    tel: "02-25368597",
    images: [
      "https://images.unsplash.com/photo-1577065362004-d1cf34a6063f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzgxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "遇見美好",
    description:
      "遇見美好行天宮旁的有機早午餐‧健康安心食材‧鐵鍋蛋餅、自家烘焙！",
    lat: 25.06393,
    lng: 121.53393,
    location: "中山區",
    address: "農安街166巷11號",
    tel: "0225018292",
    images: [
      "https://images.unsplash.com/photo-1562815198-3b5ce9fe9329?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzg4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "丼亭",
    description: "CP值高高的平價定食",
    lat: 25.05962,
    lng: 121.53914,
    location: "中山區",
    address: "合江街134號1樓",
    tel: "0225165432",
    images: [
      "https://images.unsplash.com/photo-1570322282981-8e0a7e23951c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzg3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "火鍋世家德惠店",
    description:
      "就是比其它的火鍋世家分店好吃給的食材份量硬生生比較多, 湯頭也更加甘甜, 海鮮超級新鮮, 無限供應的飲料一點都不虎乎, 感受的到老闆很用心經營。雖然家裡附近就有兩間火鍋世家, 但還是會專程去德惠店, 掛的招牌雖然都一樣, 價錢也一樣, 但吃起來就是不同等級的。",
    lat: 25.0666,
    lng: 121.52529,
    location: "中山區",
    address: "德惠街22號1樓",
    tel: "0225956666",
    images: [
      "https://images.unsplash.com/photo-1589472500123-b60f8455740b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzkxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "明水然鐵板燒 大直店",
    description: "明水然鐵板燒 大直店",
    lat: 25.08311,
    lng: 121.55123,
    location: "中山區",
    address: "明水路636號2樓之6",
    tel: "02-85027019",
    images: [
      "https://images.unsplash.com/photo-1603951864615-11e5530ce4ee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzk0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "超越活魚活蟹涮涮鍋",
    description: "超越活魚活蟹涮涮鍋",
    lat: 25.05962,
    lng: 121.53731,
    location: "中山區",
    address: "建國北路２段119號",
    tel: "02-25000168",
    images: [
      "https://images.unsplash.com/photo-1601606903106-8cee0dc66cdc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDAwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "御代櫻日本料理",
    description:
      "御代櫻壽司割烹-日本料理，是在台北市中山 區松江路297巷6號的日本料理餐廳，以日式 板前握壽司及Omakase無菜單創作料理( 料理 長套餐之【楓】、【櫻】系列套餐 )聞名。御代櫻壽司割烹中的「割烹（かっぽう）」是 日文漢字，詞義為烹飪。在日本料理也意謂著 「板前（いたまえ）料理」的意思，而這正也是屬於御代櫻壽司割烹的料理特色，由專任日本料理廚師親自在餐檯板前為客人操刀執鼎。料理長套餐屬於Omakase無菜單創作料理， 承襲日式板前（いたまえ）料理特有的精神， 從進貨、事前準備、刀工，乃至於對蒸、煮、 煎、炒、烘、烤、炸&hellip;等的日本料理割烹，全 部經由精通日式料理手法的專任日本料理廚師 ，依照當季蔬菜、海鮮料理搭配，活用食材的 原味與季節性，發揮 Omakase無菜單創作料理（おまかせ）中的精緻料理創意與特色，配合客人的偏好當場在板前量身訂做呈現客制化風味，這也是品嚐御代櫻壽司割烹料理長套餐料理原汁原味的重點所在。料理長套餐共有二個價位，分別是【楓】套餐 1200元、【櫻】套餐1800元，依當日進貨食 材配有七至八道菜。 御代櫻壽司割烹除Omakase無菜單創作料理的料理長套餐外，同時提供午間限定的商業午餐定食料理套餐。更多詳細資料圖片請上官網 ~",
    lat: 25.06101,
    lng: 121.53408,
    location: "中山區",
    address: "松江路297巷6號",
    tel: "+886-2-25178553",
    images: [
      "https://images.unsplash.com/photo-1587285440612-917fc80cf249?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDAzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "正捷金咖啡",
    description:
      "經營即溶咖啡、即溶飲品、咖啡豆、綠茶等，並提供OEM、批發、零售、團購及網路線上訂購，宅配貨到服務國外各地。金咖啡金咖啡第一支最早引進台灣的自有品牌人參咖啡，深受國人喜愛。",
    lat: 25.06731,
    lng: 121.53985,
    location: "中山區",
    address: "龍江路394巷29號",
    tel: "+886-2-25953033",
    images: [
      "https://images.unsplash.com/photo-1580654842920-37b786f32bfc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzk5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "洪師父牛肉麵",
    description:
      "師父本人學藝，已有20多年，並取得國家廚師乙級證照，有著對美食的執著與用心，每一樣料理都以做到最好為自己的精神，堅持篩選牛肉最優質部位來做牛肉麵，多年的專業烹調經驗與技術，做出最具特殊風味牛肉麵。於2006年臺北牛肉麵節獲得紅燒與清燉雙口味的亞軍，2007年，經過一年的努力用心投入，終於獲得臺北國際牛肉麵節比賽的雙冠軍！牛肉麵以清燉與紅燒味道為主，紅燒的「紅燒獨當一麵」選用的牛腱心，是取自牛隻運動量較大的後腿肌肉，燉煮熟透後，肉質紋路一層一層，吃起來有嚼勁，內質也結實。清燉口味的也很特別，是「清燉酸白菜牛肉細粉」，以酸菜和蔬菜熬煮的湯頭，嚐起來清爽中帶有甘甜，搭配上細河粉，兩種搭起來特別的口感，是一種說不出的好味道。除了牛肉麵外，這裡還推薦蔥燒包，以大團的豬肉餡，混著青蔥，吃起來，滿滿的湯汁慢慢的滲出，相當厚實可口。另外還有超濃的薏仁漿，自然香純，有著健康的好滋味。。",
    lat: 25.05488,
    lng: 121.53645,
    location: "中山區",
    address: "建國北路二段72號",
    tel: "+886-2-25006850",
    images: [
      "https://images.unsplash.com/photo-1560295850-8bd34cb263e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDA0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "鑫紅林鐵板燒",
    description: "待補資料",
    lat: 25.0661,
    lng: 121.52437,
    location: "中山區",
    address: "雙城街23-3號B1",
    tel: "+886-2-25911155",
    images: [
      "https://images.unsplash.com/photo-1567745219000-b99afacf5ef6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDA3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "正捷金咖啡 啡茶不可",
    description:
      "正捷主以經營即溶咖啡、人參咖啡、白咖啡、榴槤咖啡、咖啡豆、濾掛咖啡、即溶飲品、日月潭紅茶、台灣蜜香紅茶、阿里山紅茶、台灣高山茶、南非國寶茶、竹薑檸檬水、秋葵水、黑豆茶、茶包系列、薑品系列、紅藜系列、北埔客家擂茶系列、原味蔬果乾系列、餅乾零嘴系列產品，特以國人品味口感調製產品，廣受消費大眾喜愛；並提供OEM、經銷批發、零售、團購及網路線上訂購、宅配貨到收款服務，並銷售國內外各地。系列產品包含人參咖啡、金咖啡、銀咖啡、白咖啡、黑咖啡、榴槤咖啡、綠茶咖啡、無糖咖啡、咖啡豆、濾掛咖啡、研磨咖啡、日月潭紅茶、阿里山紅茶、蜜香紅茶、玫瑰紅茶、白茶、梨山茶、大禹嶺茶、奇萊山茶、桂花、南非國寶茶、薑紅茶、竹薑片、竹薑粉、薑母糖、紅棗桂圓薑母糖、四物薑母糖、薑黃薑母黑糖、薑黃粉、肉桂茶、油切綠茶、綠兒茶、冷泡茶、紫花苜蓿茶、山苦瓜輕纖茶、檸檬茶、黑豆茶、秋葵水、竹薑檸檬水、紅藜水、肉骨茶、可可、麥片、紅藜麥片、藜麥麵、藜麥棒、黑芝麻粉、亞麻仁籽、100%純膠原蛋白粉、北埔客家擂茶系列等飲品、原味蔬果乾系列、餅乾零嘴系列。",
    lat: 25.06731,
    lng: 121.53985,
    location: "中山區",
    address: "龍江路394巷29號1樓",
    tel: "2595-3033",
    images: [
      "https://images.unsplash.com/photo-1596024066892-80218db55240?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDEwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "kokoro串燒",
    description:
      "有著許多可愛貓咪擺飾的KOKORO串燒小酒館，位於林森北路八條通上，被日本客人稱為「貓咪天堂」，店長Misa甚至還在門口放有餵食流浪貓的小碗。充滿濃厚日式風情，料理選擇相當豐富，有串燒、海鮮、炸物、炒物等，無酒精類和酒精類的紅白酒、清酒、威士忌、水果酒也都一應俱全，不論是貓奴或是下班休假，就來KOKORO串燒居酒屋愜意放鬆一晚吧。",
    lat: 25.05102,
    lng: 121.52592,
    location: "中山區",
    address: "林森北路133巷15號1樓",
    tel: "02-25230828",
    images: [
      "https://images.unsplash.com/photo-1570144012614-593410bbc2f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDE4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "藝奇新日本料理台北中山北店",
    description: "旬料理  鮮食材  經典日料  創意呈現",
    lat: 25.06388,
    lng: 121.52263,
    location: "中山區",
    address: "中山北路二段185號2樓",
    tel: "(02)25988780",
    images: [
      "https://images.unsplash.com/photo-1591867192758-04eeaf1c30f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDIxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "SMOR GAFE",
    description:
      "SMOR GAFE所塑造出的氛圍是一種與眾不同的「藝廊．咖啡館」的概念；既不是純粹的藝廊，也不是單純的咖啡館。在這極簡樸素的空間內，所有的藝術作品不會只被賦予「裝飾品」的象徵意義，而是回歸其「藝術」的靈魂與本質。在這裡，就連座位的擺設都是門藝術。因為您不需要側身才可以離開座位，也無需因為擦撞到別人而跟他桌的客人說聲不好意思，更不需要聽清楚隔壁桌客人在講什麼流言蜚語。個人、好友或家人的私密時光在這可以完全地享用，而不受到干擾。這堅持，是因為我們相信「有距離才是最美！」歡迎來到這輕鬆自在、無拘無束的藝術空間，感受我們發自內心、真心誠意與各位分享所有的美好。",
    lat: 25.0631,
    lng: 121.5307,
    location: "中山區",
    address: "吉林路299巷6號1樓",
    tel: "+886-2-25860080",
    images: [
      "https://images.unsplash.com/photo-1601583023781-1f5aaca9c41e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDE5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "波赫士領地有限公司",
    description:
      "我們是一家精品咖啡館、馬小姐(老闆)對食材、器皿、服務、特別挑剔、我們的咖啡、早午餐、午餐晚餐、手作餅乾蛋糕精緻甜點、皆為老闆嚴選咖啡機品牌使用Victoria Arduin咖啡杯使用歐洲第一名瓷meissen環境高挑明亮餐點精緻好吃門外還有翅膀可以拍照唷三立新聞報導:",
    lat: 25.07746,
    lng: 121.54977,
    location: "中山區",
    address: "明水路441號1樓",
    tel: "0225329990",
    images: [
      "https://images.unsplash.com/photo-1572019846776-8a8c27b0c868?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDIzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "Via24 Bar",
    description:
      "低調現代復古溫馨的空間，以友誼為招牌，裝滿著人情味。Via24佔地一樓及B1。地下室可隨時變身為藝文展演空間及私人活動包場。全店以播放英搖為主，也可因現場氣氛變化出涵蓋各世代經典曲風。本店Bartender更是店裡的一大特色，除了基本的烈酒、啤酒一應俱全外，更可隨客人的喜好或心情故事客製化專屬Cocktail，從暖人心意的美酒嗅到最真實的人情味。B1地下室占地40坪，硬體設備一應俱全。可提供獨立樂團或個人表演、私人派對、各類展覽講座排演、公司會議尾牙等活動場地。Play！Unplugged，American pool，K歌Bar。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.05315,
    lng: 121.5364,
    location: "中山區",
    address: "建國北路二段24號",
    tel: "02-25065609",
    images: [
      "https://images.unsplash.com/photo-1602936555526-21e3b545de1e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDMzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "銅猴子 復興店",
    description:
      "在巴里島巡迴賽之旅某個星期六夜晚 ，兩名台北猴王橄欖球隊隊員坐在Sari Club裡討論在台灣開一家運動酒吧的可能性。這兩位好友-- Peter Chworowsky，長期居住台灣的成功美籍企業家，以及Max Murphy，才剛從上海搬至台灣的澳洲人，一邊喝著巴里島的當地啤酒Bintang，一邊徹夜長談。（此時其他的同隊隊員們正在旁邊喝酒跳舞。）這天正好是2002年10月12日，誰也沒想到再過不久，兩名激進恐怖份子會在Paddy&rsquo;s Bar和Sari Club放置炸彈，這場悲劇奪走了202條人命以及數百人受傷。很不幸地，五名台北猴王隊隊員也在此事件中喪命。大約兩個月後，Max問道: &rdquo;Peter，你還記得當晚我們在談的事情嗎？&rdquo;Peter答: &rdquo;Yes。&rdquo;Max提出: &rdquo;我們就這麼做吧！&rdquo;於是，六個分別來自澳洲、加拿大、英國、紐西蘭及美國的好友，加入Max與Peter打算開始這項計畫。他們來自不同工作領域，以各自的專長投入準備工作，而銅猴子在2003年2月28日就這麼誕生了！我們將銅猴子視為對那些罹難好友們的致敬方式，並希望這個地方可以提供台北居民及訪客享受他們喜愛的運動節目，或與三五好友相聚的最佳處所。",
    lat: 25.05367,
    lng: 121.54385,
    location: "中山區",
    address: "復興北路166號",
    tel: "02-25475050",
    images: [
      "https://images.unsplash.com/photo-1586517770081-77420c480505?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDI5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "A Train Leads The Way To Jazz",
    description:
      "三五好友的秘密基地放肆自己的緊張步調星期日~星期四PM18:30 - AM02:00星期五~星期六PM18:30 - AM03:00夜晚給你,爵士夜爵士樂,飲酒,食菜,給自己一個釋放躲藏的小客廰**本場所為酒吧餐廳,販賣酒類及供應餐點的營業場所****請勿攜帶外食飲料及非本店販售的酒類及各式飲品入內飲用**(生日蛋糕除外)**一經發現將著收 $500 垃圾清潔費****烈酒開瓶費 $2000****葡萄酒開瓶費 $1000**以上事項若造成不便敬請見諒《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04691,
    lng: 121.54054,
    location: "中山區",
    address: "八德路二段233號",
    tel: "02-27212322",
    images: [
      "https://images.unsplash.com/photo-1563536995-c77648ba4d60?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDM2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "CHANer 禪那創益空間",
    description:
      "關於禪那CHANer禪那健康事業股份有限公司，秉持著『將生機、健康、簡單的飲食以及禪文化的生活理念，傳達給每個努力使生活更美好，永續耕耘的朋友們，讓下一代生生不息。』我們希冀公平對待每個人事物，並且關懷弱勢，結合公益回饋與幫助社會，發揮正面的社會影響力。我們希望消費者來到禪那創益空間時，能靜下心來，感受自然閑靜的氛圍，品味經典咖啡的時刻，享受屬於自己的禪味時光。在這裡，您消費的不僅僅是我們用心挑選的商品，而是我們努力選擇良品的堅持，以及立志做公益的志業。我們努力耕耘發掘好的商品，並決心將營業額的5%用來作為公益回饋。您的消費，不僅僅是擁有健康，更重要的是幫助了弱勢及需要援助的朋友。除了在此可以品嚐經典手沖咖啡外，還有多元的課程在此舉辦。包含青年創業輔導課程、心靈講座、媒合座談會、公益講座、烹飪教室、以及演奏會等。期許讓如此多元的複合式空間，能夠成為忙碌現代人心靈停靠的港灣，讓這氛圍迂迴在城市中的每一個角落。將這樣子的幸福與用心, 傳給每一位消費者，一起從心出發。禪那創益空間擁有多元的複合式空間，提供給創業者以及商務人士一個交流、辦公及公開發表的場合，我們期許能引領潮流，串聯不同的應用產業達成更大的效益，展望未來進而放眼國際，一同為未來永續努力向前。",
    lat: 25.04728,
    lng: 121.53366,
    location: "中山區",
    address: "松江路25巷5號",
    tel: "+886-2-25019200",
    images: [
      "https://images.unsplash.com/photo-1574700401348-5fb0e3644ee9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDM4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "旋轉木馬食品有限公司",
    description:
      "2011年Francis展開實現夢想的旅程，在台北大直明水路開啟P&acirc;tisserie Francis旋轉木馬點心坊第一家實體門市，以法式鳳梨酥等伴手禮及喜餅、彌月禮盒，向您獻上幸福滿溢的滋味。期待每個來到Francis旋轉木馬的朋友如同乘上旋轉木馬起伏轉動，每轉一度都會看到不同的風景，就像是每嚐一口Francis的糕點帶給大家不同的驚奇感受。",
    lat: 25.08341,
    lng: 121.5521,
    location: "中山區",
    address: "明水路672巷46號",
    tel: "+886-2-85022600",
    images: [
      "https://images.unsplash.com/photo-1612372794762-9db112b83783?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "優美飯店  -  餐廳",
    description: "MFT=Muslim-Friendly Tourism 穆斯林友善餐旅早餐/住宿",
    lat: 25.05788,
    lng: 121.52404,
    location: "中山區",
    address: "民生東路1段28號",
    tel: "+886-2-25255678",
    images: [
      "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQ5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "和逸飯店  臺北民生",
    description: "MFT=Muslim-Friendly Tourism 穆斯林友善餐旅早餐/住宿",
    lat: 25.05765,
    lng: 121.53625,
    location: "中山區",
    address: "民生東路2段178號",
    tel: "+886-2-77063391",
    images: [
      "https://images.unsplash.com/photo-1604328703693-18313fe20f3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQ3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "雀客旅館",
    description:
      "台北清真寺認證穆斯林友善便利旅館B級新加坡新月國際穆斯林旅遊評比網(Crescent Rating)星月評等4級「CHECK inn雀客旅館」座落在臺北市松江路，是臺北市首間精品旅館結合咖啡廳形式的複合式旅館，內部裝潢以簡約不造作的紐約LOFT工業風格為整體調性，自2014年開幕以來深受國內外旅客喜愛，躍身為臺北知名的設計旅店。為了將這份紐約味帶入台灣在地特色，CHECK inn走進擁有臺灣迷人傳統文化的中山舊城區，打造出中西合併、新舊混搭的精品旅館。不僅交通便利，緊臨捷運行天宮站、機場巴士接駁站和公車站，附近還有許多傳統小吃，讓每位入住的旅客都能一次感受到紐約的經典和台灣的真善美。",
    lat: 25.05947,
    lng: 121.53336,
    location: "中山區",
    address: "松江路253號1至13樓",
    tel: "+886-2-25007100",
    images: [
      "https://images.unsplash.com/photo-1555992457-720eb4e75880?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQ2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "大地清旅",
    description:
      "台北清真寺認證穆斯林友善便利旅館C級大地清旅：新加坡新月國際穆斯林旅遊評比網(Crescent Rating)星月評等4級",
    lat: 25.04816,
    lng: 121.54321,
    location: "中山區",
    address: "長安東路2段246號4至5樓",
    tel: "+886-2-27110120",
    images: [
      "https://images.unsplash.com/photo-1606626367155-5d23349572ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDUzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "伸適商務旅館",
    description:
      "台北清真寺認證穆斯林友善便利旅館C級新加坡新月國際穆斯林旅遊評比網(Crescent Rating)星月評等4級",
    lat: 25.06086,
    lng: 121.52592,
    location: "中山區",
    address: "林森北路477號",
    tel: "+886-2-77431000",
    images: [
      "https://images.unsplash.com/photo-1544739313-6fad02872377?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDUxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "新凱飯店",
    description:
      "清真寺輔導旅館新加坡新月國際穆斯林旅遊評比網(Crescent Rating)星月評等3級",
    lat: 25.06676,
    lng: 121.52745,
    location: "中山區",
    address: "新生北路三段76之1號1至10樓",
    tel: "+886-2-25855000",
    images: [
      "https://images.unsplash.com/photo-1567850175261-da47cf429ce4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDU2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "台北葡萄酒展",
    description:
      "台灣年度最盛大的葡萄酒饗宴台北葡萄酒展 Wine &amp; Gourmet Taipei不負各界引頸企盼，全台最受矚目的葡萄酒專業級展會《台北葡萄酒展》於2017年6月29日至7月1日在台北世貿三館再度隆重登場。《台北葡萄酒展》網羅最完整的葡萄酒產業供應鏈，各大業者傾囊展出紅酒、白酒、冰酒、香檳、波特酒、雪利酒等新舊世界與稀有產區葡萄酒款，以及酒杯、醒酒瓶、酒櫃、製酒架等頂級品飲器具。展場精心挑選老饕級美食，提供消費者豐富多元的葡萄酒品飲體驗。現場有多項限量酒款品飲、酒莊新酒發表等奢華精品主題活動，另有滿額抽獎與舞台活動表演，熱鬧非凡。會展亮點「酒與味蕾大師講座」、「年度嚴選」，特聘國內外知名品飲大師，引領消費者體驗葡萄酒的多層次口感與馥郁芬芳，結合品飲智識與生活美學，創造出專屬於葡萄酒的文化氛圍。《台北葡萄酒展》是提供專業酒商、進出口業者、餐飲相關業者的最佳採購平台，更是消費者增進葡萄酒品飲智識、豐富生活體驗的難逢良機，是您不可錯過的葡萄酒年度朝聖饗宴！",
    lat: 25.06682,
    lng: 121.52502,
    location: "中山區",
    address: "德惠街9號8樓之3",
    tel: "+886-2-25954212",
    images: [
      "https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDYyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "彩匯自助餐廳palette",
    description:
      "palette is like an amusement park featuring cuisines from around the world. Guests can satisfy their taste buds with Chinese style, Japanese style, Western style and many other types of dishes. palette guarantees to fuel your energy with deliciousness.",
    lat: 25.08043,
    lng: 121.55377,
    location: "中山區",
    address: "區樂群二路55號",
    tel: "+886-2-77223399",
    images: [
      "https://images.unsplash.com/photo-1599464587396-6ede5ce42934?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDY3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "臺北老爺大酒店 - 咖啡廳",
    description: "MFT=Muslim-Friendly Tourism 穆斯林友善餐旅",
    lat: 25.05386,
    lng: 121.52291,
    location: "中山區",
    address: "中山北路2段37-1號",
    tel: "+886-2-25423266",
    images: [
      "https://images.unsplash.com/photo-1592219930701-ec7df1dceda9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDY4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "臺北有園飯店",
    description: "MFT=Muslim-Friendly Tourism 穆斯林友善餐旅",
    lat: 25.05181,
    lng: 121.53765,
    location: "中山區",
    address: "南京東路3段16號",
    tel: "+886-2-25061001",
    images: [
      "https://images.unsplash.com/photo-1569338663306-00221314dca1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDc1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "圓山大飯店 - 菁英廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳",
    lat: 25.07861,
    lng: 121.52629,
    location: "中山區",
    address: "中山北路4段1號",
    tel: "+886-2-28868888",
    images: [
      "https://images.unsplash.com/photo-1603684006325-c64f75644213?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDcxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "臺北國賓大飯店 - 阿眉咖啡廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳",
    lat: 25.05658,
    lng: 121.52313,
    location: "中山區",
    address: "中山北路二段63號",
    tel: "+886-2-25511111",
    images: [
      "https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDc5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "印度香料王餐廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳 印度香料王餐廳",
    lat: 25.0697,
    lng: 121.52243,
    location: "中山區",
    address: "玉門街1號花博公園集食行樂廣場",
    tel: "+886-985-147888",
    images: [
      "https://images.unsplash.com/photo-1553630113-b4da5832c3d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDg2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "番紅花城土耳其餐廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.05183,
    lng: 121.52994,
    location: "中山區",
    address: "南京東路2段60號1-2樓",
    tel: "+886-2-25222939",
    images: [
      "https://images.unsplash.com/photo-1561911046-23cbdd6cea0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDk4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "阿里巴巴的廚房",
    description: "MR=Muslim Restaurant 穆斯林餐廳",
    lat: 25.05179,
    lng: 121.52977,
    location: "中山區",
    address: "南京東路2段56號2樓",
    tel: "+886-2-25677163",
    images: [
      "https://images.unsplash.com/photo-1560117272-339aabc30075?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTA5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "這一鍋皇室秘藏鍋物 中山北殿",
    description:
      "這一鍋皇室秘藏鍋物取歷史傳說鍋物「鳳凰回巢鍋」重現於今，並將民眾熱愛的「御膳麻辣鍋」及「一品酸菜鍋」結合皇室風格呈現，精選多種新鮮、實在的食材搭配御選鍋物，「神仙牛肉」肩胛肉，油花多，帶有彈Q嚼勁；雪花牛肉」選用如雪花般上等牛胸腹肉，吃起來鮮嫩多汁；適口大小的「放山雞」，川燙後沾上御用私房醬汁更突顯細緻鮮嫩的肉質；魚蝦貝類等豐富海產以及各式丸滑類、豆品、滷味等食材，每一道在入鍋後，都能吸收飽滿的湯汁，在口中呈現豐富好滋味。這一鍋以新鮮食材、御膳美饌，加上現代新東方用餐氛圍、選用融合中西美學精緻餐具，期許成為美食鍋物的服務者。",
    lat: 25.0657,
    lng: 121.52251,
    location: "中山區",
    address: "中山北路三段31號",
    tel: "+886-2-66131336",
    images: [
      "https://images.unsplash.com/photo-1590660105340-840e6929412e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTEzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "WooGo加州果昔專賣店",
    description:
      "讓在台灣許多外國朋友念念不忘的加州果昔(Smoothies)到底是什麼? 五個來自不同國籍的帥哥們，為了想讓台灣消費者一同體驗加州果昔的飲品新魅力，因此他們在2013年，於台北東區創立了WooGo加州果昔(Smoothies)專賣店。WooGo加州果昔(Smoothies)專賣店，提供消費者高品質的新鮮產品！由手工製作的零脂優格搭配各樣鮮凍水果和義大利雪泥(Sorbet)，創造出最豐富美好的滋味，WooGo加州果昔對原料的品質堅持，就是我們不需要另外加糖和太多冰塊的秘密武器！除了天然營養外，加州果昔(Smoothies)更富有令人滿意的飽足感，不同於一般刻板印象中的天然飲品，加州果昔(Smoothies)十分清爽順口，還有各種獨特口味任君挑選！像是&ldquo;花生果醬三明治&rdquo;就是以花生醬配上鮮凍草莓，帶出豐富的層次，還有喝了上天堂、瘋芒畢露、般若波羅阿密陀佛等。快來位在台北東區的WooGo加州果昔吧！這裡的每個員工絕對會用最開朗的笑容迎接您！",
    lat: 25.05273,
    lng: 121.52063,
    location: "中山區",
    address: "南京西路1號1F(中山南西店)",
    tel: "+886-2-25677657",
    images: [
      "https://images.unsplash.com/photo-1561847500-77db8fe23978?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTEyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "宜而香肉脯店",
    description:
      "宜而香傳統食品，低脂肉鬆、海苔肉鬆、嬰兒肉鬆、低脂肉脯、豬肉絲、豬肉條、香腸、臘腸、等六十餘種產品。原味肉紙上選飽實的蒜粒、入味薄切的肉紙、美味蒜香豬肉紙、風乾酥脆很爽口。 100元/包",
    lat: 25.05515,
    lng: 121.54193,
    location: "中山區",
    address: "龍江路179巷21號1樓",
    tel: "+886-2-25026515",
    images: [
      "https://images.unsplash.com/photo-1593472329525-b197b89613a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTE4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "滋美珍肉脯店",
    description:
      "成立於1975年 秉持傳統認真態度精心排選新鮮後腿豬肉，純手工烘培，獨家手法製造，保持自然纖維口感。黑胡椒黃金肉條精選後腿肉最軟嫩的部位，條狀切法，灑上黑胡椒粒，香氣十足，再加上獨特蜜汁烘烤，保留原有肉汁香氣，Q彈軟嫩中帶著紮實口感，是本店暢銷商品。",
    lat: 25.0601,
    lng: 121.53175,
    location: "中山區",
    address: "錦州街222號松江市場1樓5號",
    tel: "+886-2-25630606",
    images: [
      "https://images.unsplash.com/photo-1602748828157-6cb2b371e881?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTIxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "凱樂烘培食品",
    description:
      "凱樂烘焙食品從長安店創始至今已45年始終堅持以顧客為導向。最近一次的比賽中榮獲2011年臺北中秋月餅大賽&rdquo;芋頭酥金牌獎&rdquo;及&rdquo;綠豆椪銀牌獎&rdquo;的獎項。香菇滷肉綠豆椪榮獲2011年臺北中秋月餅大賽&rdquo;綠豆椪銀牌獎&rdquo;精選上等五花肉及香菇，並掺入獨特配方精燉多時，展現清香不油膩的肉香，在配上香美的純綠豆內餡，甜鹹恰如其分。",
    lat: 25.04851,
    lng: 121.5363,
    location: "中山區",
    address: "長安東路二段131-4號",
    tel: "+886-2-25073891",
    images: [
      "https://images.unsplash.com/photo-1600759101398-6268f961549b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTI0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "泰板燒Thaipanyaki",
    description:
      "品牌故事 : 『羅阿明』創作鐵板料理達人，年近半百懷抱老頑童般的理想，這一次決定放棄高薪做一件驚天動地的人生決定&hellip; 『Vincent』一個單純追求真善美的半個泰國人，因熱衷而愛上泰國美食的熱情，2012年選擇讓自己歸零，開啟新的人生跑道&hellip; 『智群帷幄』一個深耕品牌差異化的工作團隊，超越第一的態度與追求唯一的經營理念，在2012遇到了『羅阿明』與『Vincent』&hellip; 泰國＝ Thai 鐵板燒＝ Teppanyaki 泰板燒＝ Thai＋Teppanyaki＝Thaipanyaki 鐵三角由夢想領軍，進入充滿驚奇的餐飲市場，於是『Thaipanyaki』誕生了，用最高端技術的『鐵板燒料理手法』烹調最受歡迎的『泰國菜』。在『Thaipanyaki』用餐，視覺享受內斂熱情的泰國風味與鐵板技法，嗅覺隨著『香料』溫度的變化、冉冉升起的『香氣』、徐徐飄來的『香味』，彷彿置身泰國市郊，讓人芳香自在。羅阿明對食材的堅持與獨樹一格的鐵板料理技法，Vincent對品質的要求加上『智群帷幄』的創新與專業，一個好吃好玩的新型態飲食文化正在發芽，讓我們的喜悅與快樂在您的心中開花結果。",
    lat: 25.04722,
    lng: 121.54323,
    location: "中山區",
    address: "八德路二段328號",
    tel: "+886-2-27017755",
    images: [
      "https://images.unsplash.com/photo-1597252395096-30cd2dcd628c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTI2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "香港私宅打邊爐",
    description:
      "中菜西吃的私宅打邊爐精品火鍋茶餐廳，承習1994年龍江路的Bagel Bagel私宅餐廳法義料理之精神延伸，隆重推出中式餐廳進入屋內中西混搭的新私宅飲食風格，火鍋及炒菜兩吃有招牌港式黃金香濃咖哩火鍋湯頭、及又香又麻辣湯頭鍋底等選擇一試成麻辣癡，和西洋菜皮蛋清湯鍋搭爐邊涮涮美國肥牛和沙朗牛肉片,再搭各式各樣手工丸子及金牌鮮蝦雲吞、鳳城水餃搭配著吃，主廚燃手粵式小炒如招牌金沙蝦、XO醬炒松阪豬非常獨特，還有師傅xo醬炒海鮮公仔麵這裡更有別處。吃不到的現捏招牌手工蝦丸、手工花枝丸、鳳城水餃、手打飛魚軟海鮮漿，蝦仁、花枝塊塊分明，口感獨特，特調的沙爹source不會越煮越鹹，沙茶直衝腦門的香勁竄入腦門中繚繞，搭配現炒的精緻小炒,再搭配有紅白酒、啤酒等供客佐餐，還有現沖各式各樣水吧飲料香港茶餐廳飲料有凍檸茶、鹹檸七、蜂蜜檸檬水、檸檬利賓納.....等,更是一絕開起台北業界飲食新風潮。",
    lat: 25.04815,
    lng: 121.54025,
    location: "中山區",
    address: "長安東路二段174-1號二樓",
    tel: "+886-2-87725728",
    images: [
      "https://images.unsplash.com/photo-1554228979-5347e875e439?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTI1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "欣葉呷哺呷哺",
    description:
      "原味之美嚴選新鮮食材、肥美海鮮、香嫩肉片，汆燙鎖住精華，釋出自然的鮮甜，品嚐原味、健康、營養不流失的真誠美味。情感在你涮、我汆圍爐形式中流竄。",
    lat: 25.06576,
    lng: 121.52427,
    location: "中山區",
    address: "雙城街26號",
    tel: "+886-2-25955595",
    images: [
      "https://images.unsplash.com/photo-1573730785755-99c3d194bc4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTMyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "秋吉串燒(林森店)",
    description:
      "全台串燒店的創始者-秋吉串燒，於20年前自日本福井本店引進，承襲最道地的日式串燒風味，店內串燒大部分採用鹽燒方式燒烤而成。將嚴選的各式上等肉料，經上選木炭、攝氏六百度高溫燒烤，在師傅的巧手與用心下，散發出陣陣誘人的炭香&hellip;，搭配著以日式醬油、蒜泥及各種獨家材料調製而成的沾醬，更能凸顯出原味的鮮美與柔嫩的口感。走進秋吉，撲鼻而來的燒烤炭香，以及以超大L型吧台為主的空間設計，讓您仿若置身在日式傳統串燒店中，感受著散溢在空氣中那股熱絡愉快的氣氛&hellip;。家人歡聚、好友狂歡的時刻，就到「秋吉串燒」，讓您盡情歡暢、輕鬆體驗酣暢淋漓的炭燒美味!",
    lat: 25.06193,
    lng: 121.52555,
    location: "中山區",
    address: "林森北路502號",
    tel: "+886-2-25417977",
    images: [
      "https://images.unsplash.com/flagged/photo-1554629861-39e84902c53a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTM0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "三燔美麗華",
    description:
      "「三燔美麗華」位於美麗華百樂園五樓，內部裝潢延續三燔的風格，滿溢著日本京都的懷舊氛圍，菜色內容方面則是集合了三燔最受歡迎的頂級涮涮鍋、壽喜燒吃到飽、握壽司吃到飽等業態，再依據商圈特性加入了物超所值的精緻日本定食料理，期望以五星級的一貫品質與美味，服務更多不同的消費客群。",
    lat: 25.08321,
    lng: 121.55766,
    location: "中山區",
    address: "敬業三路20號5樓(大直美麗華百樂園本館5樓)",
    tel: "+886-2-25328338",
    images: [
      "https://images.unsplash.com/photo-1582125944059-5ed8e46c230c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTM3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "奇華餅家",
    description:
      "奇華餅家1983年由黃業榮先生創辦，第一間店舖開設於油麻地上海街。經歷過半世紀，現時奇華餅家全球總共擁有近五十間分店，產品總類多達五百款，主要分為中秋月餅、嫁喜禮餅、家鄉餅食及麵包西餅四大類。奇華餅家的中式餅食，精選優質上乘材料製造，奇華餅家為甚具時代氣色，摩登與典雅並存之中式禮餅專家。中式餅食已成為旅客必買的伴手禮之ㄧ，奇華餅家推出的伴手禮系列以中華卡通，表現唐餅現代化的新古典主義精神，將奇華未來經營方向立足中華，放眼世界的唐餅進化論內涵，展露無疑。奇華的鳳梨酥使用紐西蘭進口安佳奶油，及關田上等的鳳梨，揉合製做出顆顆皮薄餡豐，鳳梨纖維細緻，不黏牙，甜而不膩，為自用送禮兩相宜的禮盒。",
    lat: 25.06137,
    lng: 121.52317,
    location: "中山區",
    address: "中山北路二段127號1F",
    tel: "+886-2-25367106",
    images: [
      "https://images.unsplash.com/photo-1582240758439-05b63293cdbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTQyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "D & C Bistro",
    description:
      "有著鐵板達人、牛排教父封號的國內資深名廚鄧有癸，去年在台北四維路打造一間用自己名字和共同打拼的團隊夥伴來命名的店『Danny &amp; Company』，以高檔鐵板料理成功的打響D&amp;C這塊精緻餐飲品牌之後，2011年11月以新西餐餐飲風格於台北大直推出另一全新力作D&amp;C Bistro。D&amp;C Bistro的菜色有人稱之「跨界」料理，有人定位在「無國界」料理，而出身鐵板燒師傅的鄧有癸，由於是屬法國系統的日本鐵板料理，所以要說他的手藝是西餐料理一點也不為過，不過正因非正統法義廚房出身，鄧有癸反而可以不受任何一種國度料理框架的束縛而大玩創意，也因鐵板燒料理須與客人近距離的直接互動，所以鄧有癸非常了解客人喜好，什麼樣的味道是在地客人最能接受的味道。吃過鄧有癸的料理都知道，他的菜色不花俏，簡潔中愈能看見功力。D&amp;C Bistro食材新鮮講究、菜色則融合中、西、日式料理，在這裡您可以看到法國料理的基礎、日本料理對於&rdquo;鮮&rdquo;的講究還有紐約的摩登感！",
    lat: 25.08205,
    lng: 121.55308,
    location: "中山區",
    address: "敬業二路69巷55、57號",
    tel: "+886-2-85025779",
    images: [
      "https://images.unsplash.com/photo-1562664348-cb222fdcfa86?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTQzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "奪愛印度咖哩",
    description:
      "奪愛餐廳總店位於仁愛路，從1990年營業至今已有二十多年，分店設立於台北市中山區錦西街4之3號。奪愛印度咖哩的醬汁製作不僅非常得講究並且兼顧健康概念，咖哩醬是由二十餘種印度香料加入洋蔥及多種蔬菜打成泥，耗費多時精燉熬製而成的香濃咖哩，還有多種不同風味的印度餅可供選擇，有：印度麥餅、印度Q餅、印度煎餅 、印度烤餅；餐點方面有：香氣濃郁的乾燒咖哩、酸甜的茄汁咖哩、奶香的奶油、口感溫和的燴煮咖哩。奪愛印度咖哩中山店有一、二樓空間寬敞可供包場聚餐，歡迎洽詢。",
    lat: 25.06029,
    lng: 121.52226,
    location: "中山區",
    address: "錦西街4之3號(近馬偕醫院)",
    tel: "+886-2-25217238",
    images: [
      "https://images.unsplash.com/photo-1585894710622-8d3c86bbd857?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTQ3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "欣葉咖哩匠(中山店)",
    description:
      "健康．好吃．生活．有趣針對不同食材，開發多樣醬汁，以優格、椰奶、巧克力和水果豐富咖哩的層次，繽紛的味覺之旅，在咖哩匠展開！",
    lat: 25.05628,
    lng: 121.5225,
    location: "中山區",
    address: "中山北路二段52 號B1",
    tel: "+886-2-25217177",
    images: [
      "https://images.unsplash.com/photo-1553194588-6ba2cd5b410f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTUyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "茗窖茶莊 Caoly Tea Shop (中山一店)",
    description:
      "深研極品，與您共享茶香。We carry exotic tea of the finest quality.最高級を深く追求しました、あなたもこのお茶の香りを一緒に楽しみましょう。早期無論好茶來自何處，大稻埕就是北台灣的茶業集散重地，遠方來的茶葉，經師傅透過經驗與專業來為消費者挑選本季品質優良的茶葉，再經過一項重要的工序-茶葉精緻烘焙工序，讓茶葉的香味、韻味、存放度、穩定度，達到最高標準，再以簡單的紙質、麻繩包裝，用最好的服務送入消費者手中。然而今日，無論好茶來自何處，茗窖茶莊就是您挑選茶葉的重地，遠方來的茶葉，經過傳統的工序，以最好的品質送入您的手中。獎項2003鐵觀音頭等獎2004榮獲台灣包裝之星設計最大獎2005榮獲台灣國家設計品質金獎入圍前十名2006阿里山高山茶頭等獎2007阿里山高山茶頭等獎2008阿里山高山茶頭等獎2009阿里山高山茶頭等獎2009榮獲 4 顆星英語服務標章認證2010阿里山高山茶頭等獎2010榮獲 4 顆星英語服務標章認證2010榮獲金點包裝設計獎2011鐵觀音二等獎、三等獎2011台北茶最佳伴手禮2012鐵觀音二等獎、三等獎2012台北茶最佳伴手禮2013阿里山高山茶頭等獎2013榮獲金點包裝設計獎2014阿里山高山茶頭等獎2014茶葉通過 SGS 農檢合格Contact ushttp://www.caolytea.net/32879320972510520497-contact.html",
    lat: 25.05177,
    lng: 121.52518,
    location: "中山區",
    address: "林森北路154號",
    tel: "+886-2-25815472",
    images: [
      "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTU1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "一郎臺(日)式料理",
    description:
      "佔地數百坪企業團體大型宴會活動首選超便利的大型停車場提供免費停車用美味征服每個來賓的心超值的價格體貼您的荷包",
    lat: 25.06755,
    lng: 121.53722,
    location: "中山區",
    address: "民族東路336號5樓(臺北農產公司5樓)(濱江店)",
    tel: "+886-2-25027542",
    images: [
      "https://images.unsplash.com/photo-1596230003863-c7216ea8e07c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTUzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "Dobos 多柏思麵包蛋糕",
    description:
      "進入多柏思印入眼簾的是以粉紅色牆為主搭配著巧克力色的麵包架, 負責人表示粉紅色是代表溫暖的色系和剛出爐的麵包可以互相呼應，而巧克力是蛋糕中非常重要的基本原料，所以就使用這兩種顏色當作多柏思的象徵色。在多柏思您可以發現許多不同類型麵包，由甜麵包、丹麥類、法式類、三明治和小西點組合成多樣化產品，並提供餐盒、餐燴大量訂購。而多柏思的蛋糕名稱皆為音樂的曲名，是認為音樂的和諧就如同多柏思蛋糕順口滑潤的口感，而音樂的美妙就像是蛋糕的華麗外表，內外兼具為由。在台北市有４家門市據點皆在捷運站附近，而多柏思原材料選配更是不計成本多從國外進口為主，再搭配上全台稀有的西德進口百萬烤箱，強調口感的美味度和健康為第一優先。店內最具招牌的法式蒜味麵包每月皆可賣出上萬條，酥脆的法式麵包搭配自製的蒜泥醬為老饕的最愛。丹麥麵包具有豐富的層次口感，丹麥波蘿系列、丹麥鮪魚、丹麥起士卷更為老主顧必選產品。遊客必帶的多寶小酥禮盒為特選純正土鳳梨自製成純天然鳳梨酥，皮酥薄內含豐富的鳳梨纖維，口口散發出香甜氣味。",
    lat: 25.06041,
    lng: 121.5224,
    location: "中山區",
    address: "錦西街1-4號(本店-近中山北路口、馬偕醫院)",
    tel: "+886-2-25421195",
    images: [
      "https://images.unsplash.com/photo-1592027052401-9759166c7b2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTU3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "壹品宴",
    description:
      "壹品宴(原彭園南京店)，第一飯店二樓，以湘、粵料理聞名，擁有典雅用餐空間，以平實價格，提供五星級佳餚。",
    lat: 25.05223,
    lng: 121.53023,
    location: "中山區",
    address: "南京東路二段63號2樓(第一飯店2樓)",
    tel: "+886-2-25419102",
    images: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTYzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "仁和齋食尚喜宴會場",
    description:
      "仁和齋為台北市第一首選素食餐廳,本餐廳擁有挑高六米大飯店等級的空間氛圍，高科技影音系統，專業舞台燈光特效，備有500人的大型宴會廳及300吋大螢幕，舞台、閃亮星光大道以及特別聘請於素齋界享有18年經驗的行政主廚-陳進儀師傅帶領的廚師團隊，精心打照獨特的婚、喜、壽宴與聚餐場所，仁和齋的用心值得您來體會。本餐廳的精緻套餐.茶點小吃既健康且養生又別具特色風味，讓您擺脫傳統素食的想法，在仁和齋您將體驗到~素齋也可這麼特別好吃喔~",
    lat: 25.08249,
    lng: 121.55809,
    location: "中山區",
    address: "樂群三路218號4樓(大直家樂福4樓)",
    tel: "+886-2-85023168",
    images: [
      "https://images.unsplash.com/photo-1580199882412-9cb877308b86?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTYxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "欣葉台菜(創始店)",
    description:
      "道地的台灣料理保存記憶中的台菜古早味，融入新的技法與觀念，以細緻而健康的方式，呈現兼具傳統與現代感的台菜料理。是旅居海外的台灣遊子最深層的思念，也是外籍友人訪台的指定首選。",
    lat: 25.06651,
    lng: 121.52418,
    location: "中山區",
    address: "雙城街34-1號",
    tel: "+886-2-25963255",
    images: [
      "https://images.unsplash.com/photo-1568018508399-e53bc8babdde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTcwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "新葡苑",
    description:
      "裝潢風雅的餐廳裡案几素樸，簡約潔淨的杯盅透顯雅緻品味，新葡苑由廣式海鮮酒樓轉型，匯集粵式點心、港式燒臘、滬式私房菜以及日式甜品於一家，是以服裝為主業的老闆對創新中式飲食的lifestyle，略盡棉薄。傳統之中有新意，創新之中有道地，許是新葡苑美饌的最佳詮釋。如製程繁複的「鎮江肴豬手」，主廚別出心裁地變化出可蒸可炸的創意，可以品嚐油炸後的皮脆肉彈牙，或親近蒸食的軟嫩與原汁原味，若怕錯過任何一種感動，可以選擇蒸、炸兩吃，避免遺憾；又如「白菜獅子頭煲」、「麻辣水煮牛肉」、「杭州魚麵筋」等風味料理，只怕「清、鮮、滑、嫩、爽、香」六個字，尚道不盡新葡苑裡的好滋味。新葡苑經營逾20載，已累積出菜式廣博而工藝精到的烹調哲學，並隨季調整菜單，冬濃醇而夏清淡地將五湖四海之味一網打盡。",
    lat: 25.0539,
    lng: 121.52245,
    location: "中山區",
    address: "中山北路2段24-3號",
    tel: "+886-2-25682768",
    images: [
      "https://images.unsplash.com/photo-1512805147242-c3e79caf64bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTcyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "國賓飯店川菜廳",
    description:
      "位於臺北國賓大飯店12樓之川菜廳，是臺北5星級飯店中少數以川菜為主的餐廳之一。擁有絕佳視野，几淨明亮的落地窗、黃黑色系的室內裝潢，再加上柔和的燈光，讓川菜廳更顯得溫馨雅緻；另提供典雅靜謐之包廂，適合大宴小酌。享譽中外的正宗川菜料理，吸引許多老饕慕名而來，更讓日本旅客們讚不絕口，招牌菜色包括：四季豆薄餅、宮保雞丁、麻婆豆腐等。除了提供傳統川菜，為了滿足您追求美味極致的味蕾，臺北國賓不定期的皆會派遣師傅遠赴大陸四川取經、研習道地川味，將巴蜀美饌精髓引進臺灣，融合成具傳統特色又富新意的新川菜料理，讓顧客在不同時期都能體驗品嚐百變川菜的迷人風味。",
    lat: 25.05658,
    lng: 121.52313,
    location: "中山區",
    address: "中山北路2段63號12樓",
    tel: "+886-2-21002100#2383",
    images: [
      "https://images.unsplash.com/photo-1559035714-efa945a346f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTkyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "華泰王子大飯店九華樓",
    description:
      "九華樓以皇鮑、魚翅最為出名，使用著名的Wedgewood骨磁盤，裝盤各式精緻粵式菜餚，在優雅的氣氛下，由專業人員為你服務。 主廚烹調的一道道美餚珍饈包括招牌菜土雞燉鮑翅、紅燒大排翅，和北京烤鴨等，不論單點或主廚設計的桌菜，都深受歡迎。各美饌手續繁複，如土雞燉鮑翅，得花12個小時燉老母雞和金華火腿，然後在高湯放進魚翅與土雞肉一同煨煮；紅燒大排翅是用小火煲6個小時，然後以高湯煨煮，釋放膠質。最有名的北京烤鴨，稱為「華泰片皮鴨」，有酥脆的外皮、多汁的肉質。片皮鴨有3吃，一是搭配蔥段、麵餅、甜醬、酸薑片來吃，二為生菜鴨鬆或以鴨肉、雪菜、米粉、湯頭製成小吃，三為鴨骨粥。午餐可品嚐多種道地的粵式飲茶點心，或新推出的商業套餐。干貝XO醬、佛跳牆、排翅、燕窩全年供應外賣，也有提供年菜及冬季進補餐點外賣。",
    lat: 25.05786,
    lng: 121.52576,
    location: "中山區",
    address: "林森北路369號2樓",
    tel: "+886-2-25818111#1521",
    images: [
      "https://images.unsplash.com/photo-1603054561024-94791fafdc58?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTk1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "牛爺蕃茄牛肉麵店",
    description:
      "蕃茄和牛肉是絕配，牛爺的牛肉麵，讓你吃到煮透的蕃茄，湯頭中有著濃郁的蕃茄香，喝起來酸甜酸甜的，中和了牛肉的味道，兩者互補，讓湯頭更加清甜，喝起來也更健康，這就是吃蕃茄牛肉麵的好處。牛爺的牛肉採用進口的上等牛肋條，配上各種作料，煮起來相當入味，吃起來滑嫩中帶有一點嚼勁，搭配上豐富口感的拉麵條，是許多老饕及名人的最愛。除了牛肉麵外，這裡最具特色的是清蒸的麻辣臭豆腐，豐富的配料，麻辣的滋味，加上豆腐的綿密，有著絕佳的口感，難怪是許多人推薦的加味菜。",
    lat: 25.05264,
    lng: 121.53121,
    location: "中山區",
    address: "松江路124巷19號",
    tel: "+886-2-25118239",
    images: [
      "https://images.unsplash.com/photo-1557798748-7d978487e2f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjA1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "平衡點咖啡 Balance Coffee",
    description:
      "喝一杯咖啡 重要的不外乎是味覺，觸覺，味覺在酸甜苦的平衡，而觸覺則是著重在口感。看是相同的東西卻是可以比分開成獨立的個體，酸甜苦也是在咖啡入口後 第一個會感受到的，雖然每個人酸甜苦接受度不同，但是如果可以達到平衡,也會是一杯很順口的咖啡!!配合節奏迅速的城市生活，Balance Coffee成為了咖啡愛好者們的外賣咖啡店。Balance Coffee聚集喜好咖啡的熱血夥伴，店裡的裝修注重舒適和簡潔，以褐色為主色調，除了店內12個無吸菸座位，還設置了戶外 18個可吸菸座位。 *(僅此一家，暫無分店)提供生活的平衡點是我們的宗旨。平衡點想讓消費者知道我們的服務團隊有著不斷精進的精神，為的是提供消費者不同深度的咖啡體驗。 從義式綜合豆至單品豆的品嚐，不同產地造就多層次的味蕾感受， 義大利半自動咖啡機與手沖咖啡的服務,更讓消費者了解平衡點是個不斷成長學習更多咖啡沖煮手法。 另外，除了咖啡以外的品項，我們也提供自製手工的甜點與輕食。 每當季節的變更，我們更持續研發最新產品與DM，讓消費者有著不同且新奇的感受。 也許平衡點咖啡不是最好的，但不斷的成長進而分享是平衡點咖啡所追求的。 Free Pour Latte art!!!",
    lat: 25.0457,
    lng: 121.54255,
    location: "中山區",
    address: "八德路二段300巷56號",
    tel: "+886-2-27763001",
    images: [
      "https://images.unsplash.com/photo-1613450408538-b3aa1b2c6954?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjA4fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "晶華酒店-Silk House晶華軒",
    description:
      "位於臺北晶華酒店3樓的Silk House晶華軒 ，餐廳內融合了中國傳統書法藝術和現代的燈光、玻璃造景，從包廂透明玻璃上可以看到書法，如「醉月雲飄飛，舞蝶賞霞露」，也可從外看到裡面桌椅全景，結合古典美學與低調奢華的時尚氛圍，古今兼具，非常有美感，為一重裝潢外觀的飲食場所。一道道精緻的正宗川粵料理，從菜名到擺盤都非常講究，在每個小細節中，盡是中式料理的精華！ 10間包廂可舉辦4～24人的宴會，殷勤的服務、極緻的品味，使其成為台北社交圈最耀眼的宴飲場所。",
    lat: 25.05431,
    lng: 121.52377,
    location: "中山區",
    address: "中山北路二段39巷3號3樓",
    tel: "+886-2-25231387",
    images: [
      "https://images.unsplash.com/photo-1570890193787-9bd376f38a85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjE0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "冇有有麵攤",
    description:
      "「就是愛吃滷肉飯！」相信很多人都有同感，尤其是「冇有有麵攤」，更是非吃不可。曾獲得入圍「老外好吃客夜市趴趴走」及「尋找臺北黃金滷肉飯」，最後得到滷肉飯冠軍王的殊榮。看起來像海鮮快炒店的「冇有有麵攤」，是38年古早味的的名店，偏好臺菜的顧客更是定時來這裡報到。這兒的滷肉飯採用頭部肉加以爆香炒過，再用文火燉煮2個鐘頭，讓滷肉的膠質完全融入湯裡。香、甜、鹹的滷汁，淋上白白胖胖QQ的米飯，加上清脆爽口的港式泡菜，酸酸甜甜的滋味，越吃越對味，好胃口擋不住。店內牆上醒目的菜單寫著各種怪怪、有趣名稱的料理，麻醬口味的口水雞；香香酥酥的百花油條；新鮮味美的三杯怪物；沙茶口味的牛肉燴飯；燒燙燙的鐵板牛柳；裹上鹹蛋黃的蛋黃蝦子等等，菜色豐盛美味，這樣口齒留香的好味道，真是太超值了！",
    lat: 25.04903,
    lng: 121.54205,
    location: "中山區",
    address: "遼寧街48號",
    tel: "+886-2-27760443",
    images: [
      "https://images.unsplash.com/photo-1599579134411-bd068f77d4d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjEzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "明福餐廳",
    description:
      "明福餐廳精選最高級的食材，如鮑魚、大排翅、干貝、魚唇、松茸等，熬製成高湯，慢火燉煮6個小時以上，湯汁清，味道鮮，讓日本觀光客爭相來品嘗，店內只有6張圓桌，所以來到這裡，一定要記得訂位。明福有許多的招牌菜，第一名的就是佛跳牆，一甕從3000元到9000元，高級的食材，魚翅、鮑魚、九孔、干貝、松茸、雞胇仔、白果、冬蟲夏草等，用這些高級食材熬煮高湯，慢慢熬，使高湯與食材的味道結合，喝一口清澈的湯頭，氣味出乎意料的甘甜，成片的魚翅、清脆的鮑魚、厚實的冬菇、滑軟的豬肚，每種材料都是真材實料，處理的恰到好處。這裡的料理都是出自老闆兼主廚的阿明師，除了佛跳牆外，還有多樣的臺式料理，像是蒜泥蚵仔、烤烏魚子、野菜山蘇、脆皮肥腸等，不管是怎樣的菜色，在阿明師父的料理下，都成為美味的佳餚，客人來可以點一鍋佛跳牆，其他的由阿明師父親自推薦當令最好吃的時鮮，讓人每次來，都有不同的回味。",
    lat: 25.06163,
    lng: 121.52422,
    location: "中山區",
    address: "中山北路2段137巷18-1號",
    tel: "+886-2-25629287",
    images: [
      "https://images.unsplash.com/photo-1566917583425-fca09416f4bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjIyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "神仙川味牛肉麵",
    description:
      "神仙川味牛肉麵-中山店坐落於中山北路上，國賓飯店正對面，馬偕醫院旁；現代雅淨的設計，舒適潔淨的用餐環境，再外加明亮潔淨的開放式廚房，跟一般印象中油膩窄小的牛肉麵店大異其趣。老師傅在退休前將在台灣流傳了五十年的牛肉麵傳授下來，麵只要一端上桌，香氣襲人，湯頭清徹而香濃。牛肉的部份，牛腱切片，腱子肉帶筋，軟嫩中帶韌勁又爽口，令人回味無窮，勾起幼時的回憶。因此，該店甫營業三個月即受推薦，並榮獲2010台北國際牛肉麵節十大好店。很快餐廳聲名遠播，吸引了許多各國旅客前來品嘗，日本擁有百年歷時的蒟蒻老店更將此餐廳的招牌料理-神仙川味牛肉麵製成泡麵口味在日本販售;雖然一碗僅200cc大的泡麵要價高達300日圓，但上市第一天即在日本狂賣2萬餘份，造成轟動。這是全台唯一可以同時享受到「牛肉麵老店風味」及「飯店風味」的餐廳。每天聞香及慕名而來的饕客總是絡繹不絕，讓您在舒適的用餐環境中，可以享受傳統的好滋味。神仙川味牛肉麵-延吉店台北市大安區延吉街68-4號02 -2752 5226營業時間: 10:30~22:00 (無空班，全年無休)忠孝敦化站步行約7分鐘  國父紀念館站步行約5分鐘",
    lat: 25.05725,
    lng: 121.52262,
    location: "中山區",
    address: "中山北路二段78-2號",
    tel: "+886-2-25620931",
    images: [
      "https://images.unsplash.com/photo-1571509408872-778eb548d35b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjIzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.3,
  },
  {
    name: "梅子餐廳南京店",
    description:
      "服務親切的梅子餐廳以道地台菜及新鮮海鮮料理聞名當您蒞臨梅子餐廳我們的服務人員會帶您到海鮮區讓您親自挑選您最喜歡的海鮮料理在專業服務人員的介紹下提供您最優的菜色搭配選擇絕對讓您嚐到最鮮美的海鮮料理。",
    lat: 25.05176,
    lng: 121.53581,
    location: "中山區",
    address: "南京東路二段206號B1",
    tel: "+886-2-25067858",
    images: [
      "https://images.unsplash.com/photo-1576753092241-37d18f12f898?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjI2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "小張龜山島",
    description:
      "小張龜山島─享受忠於原味的海鮮多年前，打漁郎小張在船上把剛剛從深海300米以下捕撈到的野生海蝦，剝殼沾上醬油芥末醬送進嘴裡時，心裡還老是想著，總有一天一定要開家海產店，教教那些都市人什麼才是享受忠於原味的海鮮。現在，台北遼寧街一整排的海產店中，「小張龜山島」成了饕客口中的金字招牌。小張不做漁夫改當老闆兼大廚，用來自媽媽的古早味，和最原始的烹調方式做海鮮給台北人吃。每天早上小張都到宜蘭海港，挑選當天捕獲最新鮮、特別的海產運回台北，風雨無阻除非刮颱風。他曾是漁夫，很清楚宜蘭海域四季的特產；甜蝦、盲鰻整年都有，春天有黃雞魚、夏天吃紅目鰱、秋天是紅喉，冬天則有黑喉。所以他店門口的案上排列的海產總比別人新鮮又有特色，再加上令人窩心超公道的價錢，所以想吃他店裏當天的好料，手腳要快一點，否則去晚了好貨就沒囉！",
    lat: 25.04933,
    lng: 121.54228,
    location: "中山區",
    address: "遼寧街73號",
    tel: "+886-936-751861",
    images: [
      "https://images.unsplash.com/photo-1548763577-6c30af0ffaa4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjMwfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "孚羅起士蛋糕咖啡",
    description:
      "這兒有著世界各地來的精巧小物，讓你踏進孚羅，就像是出國旅行一樣，內心充滿喜悅及驚奇。「孚羅」是一家結合手工蛋糕與義大利咖啡的咖啡館。對咖啡相當有研究的老闆董先生，調製出獨特的孚羅式咖啡，香醇順口，利用的是義大利Lavazza、Musetti及Martinez3大品牌的咖啡豆，綜合其特色，滿滿的咖啡香圍繞在店裡。這裡的手工蛋糕，都是選自澳洲進口的頂級奶油乳酪製作的起士蛋糕，吃起來濃濃的起士香，及綿密的口感，是顧客最愛的點心，在融合創意後而製成各樣不同的口味，每種都有其不同的感覺。有著濃濃起士香的「紐約起士」人氣第一，有著濃濃巧克力味的「濃巧克力起士」也很受歡迎，或是「焦糖胡桃起士」，有胡桃並在上面鋪上一層焦糖，烤過的胡桃搭配自製的焦糖醬，口感豐富，脆脆的口感，加上一點微甜，是許多小姐的最愛。孚羅對衛生清潔相當注重，每天都有安排人用最傳統的方式打掃，加上這裡每天販售的新鮮水果茶，在品質上絕對保證新鮮，不管是喝下午茶、小憩、看書都是好地方。",
    lat: 25.05993,
    lng: 121.54199,
    location: "中山區",
    address: "龍江路281巷21號",
    tel: "+886-2-25038456",
    images: [
      "https://images.unsplash.com/photo-1601313365958-2b35807578ae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjMyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "台北圓山大飯店圓苑餐廳",
    description:
      "搶眼的紅柱金瓦宮殿式大樓，是早年兩蔣招待重要外賓的主要場所，客房典雅，並匯聚中西精緻美食，可品嘗蔣宋美齡夫人最愛的紅豆松糕。環境舒適，餐點美味，散發古意的圓苑餐廳就在氣派非凡的圓山飯店內。餐廳內可容納140人，另設有包廂一間，方正的木桌子整齊擺放，搭配小巧板凳，來到圓苑就像到了北方小館，不豪華但有氣質的裝潢，服務人員殷勤招呼，十足北方客棧韻味。餐廳廚房採開放式設計，可以看到料理過程，料理以北方點心、小吃、麵點為主，可以選用不同茶品來配餐，精緻的菜色包括小籠湯包、雞湯、春捲、蟹殼黃、炒麵、蒸餃、炒年糕、煎餃、煨麵、炒青菜等等，都頗受歡迎。這裡的紅豆鬆糕，更是遠近馳名招牌甜點，深受蔣宋美齡女士的喜愛，製作過程繁複，需要兩天才能完成，糕點鬆軟吃起來不膩，是送禮最佳選擇。",
    lat: 25.0785,
    lng: 121.52654,
    location: "中山區",
    address: "中山北路四段1號",
    tel: "+886-2-28861818#1241",
    images: [
      "https://images.unsplash.com/photo-1586319006018-071768f0558a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjQzfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "夢見哈比屯",
    description:
      "結合魔戒故事與巴峇島風格的設計概念，創造了哈比屯餐廳，讓嚮往魔戒故事中哈比人那種悠閒、樂觀和善美食的顧客們，來此店就能彷彿身歷其境，悠閒而愉快。夢見．哈比屯所嚮往的是哈比人每天享受美食(哈比人一天吃六餐喔)以及美酒的生活,在這一到五層的空間中,每層樓的風格主題都不一樣,不論是溫馨的用餐區或是想擁有私人空間的包廂都會讓你耳目一新!",
    lat: 25.05283,
    lng: 121.52378,
    location: "中山區",
    address: "中山北路二段11巷7之2號",
    tel: "+886-2-25810826",
    images: [
      "https://images.unsplash.com/photo-1563512449174-5e39364a2f33?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjQyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 3.8,
  },
  {
    name: "威尼斯義大利餐廳",
    description:
      "&quot;威尼斯義大利餐廳&quot;在各式佳餚中適當的融入義式特殊香料， 每日採用最新鮮的食材，經過挑選才能變成烹煮的主角，保持材料原味的烹飪法，讓醬料與香料來襯托出食物本來的美味，&quot;義大利麵&quot;的軟硬度也是美味關鍵，沸水煮急速冷凍，讓每條義麵都活起來，輕彈齒間，加上新鮮蕃茄慢火熬煮的醬汁與威尼斯的香料秘方，或濃郁美味的焗奶，口口都有驚奇的發現，每道義式料理除了講究色香味，更給來店裡的客人都吃得有營養、開心、健康。",
    lat: 25.05896,
    lng: 121.53428,
    location: "中山區",
    address: "松江路235巷19號1樓",
    tel: "+886-2-25024093",
    images: [
      "https://images.unsplash.com/photo-1561586003-e1bcd340f5d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjQ3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "蘭軒中國菜",
    description:
      "於實踐大學旁，以雲南小吃、泰國菜、川菜為主，平價且精緻的家常菜餐廳。「ㄧ吃成主顧」是蘭軒最貼切的寫照。",
    lat: 25.08342,
    lng: 121.54622,
    location: "中山區",
    address: "大直街70號",
    tel: "+886-2-25322442",
    images: [
      "https://images.unsplash.com/photo-1542654260-aaa251bf70a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjQ1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "好記擔仔麵",
    description:
      "好記擔仔麵─台灣味、古早味、人情味、山珍海味中午時分，人群聚攏在那飛簷、匾額、祥獅與公媽桌等等的空間裝飾，加上店前擺了林林總總、五彩繽紛包裝的台灣各地土產，「好記擔仔麵」熱鬧如廟會。 強調「台灣味、古早味、人情味、山珍海味」的「好記擔仔麵」，就這麼鑼鼓喧天似地開了十六年，憑藉的就是不冰不凍的新鮮食材&mdash;澎湖的魚、東北角的紅蟳、布袋的蚵仔、鹽水吳郭魚&hellip;全是當天空運北上；還有烏魚子、魚翅裙、佛跳牆等特產，都創造極好的口碑。正因食材新鮮，端上的佳餚小菜都得原味呈現，台灣古早時興的醃漬醬料不過添點清香滋味罷了。蒜泥蚵仔，顆顆肥美滑嫩，沾些蒜泥薑汁，酸甜鮮美。每天熱銷2000碗的擔仔麵，用50斤草蝦、大骨和秘方細熬湯汁，更覺鮮甜；麵上的肉燥又炒又滷，輕輕一拌，風味絕佳&hellip;。這些來自客家、閩南、原住民的熱炒涼菜，全都代表台灣。",
    lat: 25.05518,
    lng: 121.53025,
    location: "中山區",
    address: "吉林路79號",
    tel: "+886-2-25215999",
    images: [
      "https://images.unsplash.com/photo-1566107553066-323b8b689223?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjUyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "天廚菜館",
    description:
      "天厨菜館&mdash;老台北的老北平滋味自軍旅退役的天廚菜館創始人，因經常招待五院八部的達官顯赫，對京派菜式積累了能品能烹的心得，終於開創以北方私房菜為主的天廚，以外燴起家，待客源穩定，外燴服務才功成身退。在明亮寬敞的空間享受帝王家的口味、大眾化的價位，是天廚菜館所以能夠貴客雲集、獲獎無數的神秘配方。天廚菜館菜色多元，馳名中外的「北平烤鴨」，傳承了北平老師傅一絲不茍的純正廚藝，烤出油亮香脆的麒麟皮與鮮嫩多汁的鴨肉，搭配荷葉餅與微嗆的宜蘭三星蔥，口感豐富卻層次和諧，是鎮店的招牌料理。其他如「鮮豆雞絲」、「梨山芹菜」、「天廚老豆腐」、「京蔥燒烏參」等館裡的人氣美饌，點滴盡是料理真功夫。 一嚐北平烤鴨，能透視北平料理嚴謹考究、重視原味的精奧；浸淫屹立37年的天廚菜館，能細數味勝天廚的老北平滋味。",
    lat: 25.0525,
    lng: 121.52192,
    location: "中山區",
    address: "南京西路1號3至4樓",
    tel: "+886-2-25632171",
    images: [
      "https://images.unsplash.com/photo-1533052286801-2385cb274342?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjU5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "晶華酒店-柏麗廳",
    description:
      "柏麗廳位於晶華酒店1樓，挑高的空間設計，利用大片玻璃採光，讓廳內顯得明亮清爽。自助餐檯就像料理劇場，推出開放式美食，多國的創意料理，包含中、西、日之各式美饌佳餚，有如嘉年華般創造出各具特色的饗宴，讓食客恣意品嚐美味餐點。受歡迎的美食包括西式的燒烤牛肉、日式生魚片、每日現送的海產和當季新鮮時蔬等。柏麗廳的廚師們以注重食材原味為原則，提供各式新鮮且健康的食物。在女孩最愛的甜點區，令人眼花撩亂的甜品和新鮮水果，以及多款Haggen Dazz冰淇淋，更是琳琅滿目，美不勝收，歡迎大家盡情大啖。",
    lat: 25.05415,
    lng: 121.52468,
    location: "中山區",
    address: "中山北路2段39巷3號1樓",
    tel: "+886-2-77017711",
    images: [
      "https://images.unsplash.com/photo-1577346892907-16d3e4278548?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjYxfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.1,
  },
  {
    name: "海霸王旗艦店",
    description:
      "海霸王旗艦店，位於中山北路與民族東路口。佔地約3000坪，由英國知名設計師設計。獨具摩登現代的風格，大片觀景窗設計可遠眺圓山大飯店，黃昏時刻遠方彩雲飛舞，如夢似幻！1樓『金牌火鍋』以口感細緻的湯頭，搭配豐富海鮮、肉品，滿足您的味蕾。2樓『鱻宴百匯』素有美食集散地之稱，歐式沙拉吧、日式料理、臺式熱炒，多國料理應有盡有。 店內設有龍翅鮑餐廳，提供新鮮現做的頂級料理；臺灣小吃讓您吃到最道地的傳統料理；還有外燴服務，可在指定地點辦理外燴。海霸王也是舉辦婚宴的好地方，專業場地以及服務人員為新人規劃婚禮流程，讓每對新人在海霸王盡情打造夢想中的婚禮。",
    lat: 25.0686,
    lng: 121.52315,
    location: "中山區",
    address: "中山北路3段59號",
    tel: "+886-2-25963141",
    images: [
      "https://images.unsplash.com/photo-1571172044791-25a5b2c7e255?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjYyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "黃記魯肉飯",
    description:
      "原在雙城街夜市的美食小吃，即使搬遷也不減其魅力，老饕都愛吃。30多年歷史的黃記魯肉飯，讓人念念不忘，即使下雨，也要來吃上一碗。料好實在香香甜甜的魯汁，一口接一口，停不了的美味。黃記魯肉飯榮獲「臺北ㄙㄟˇ夜市！來碗滷肉飯」大吃客獲最佳造型獎。魯肉飯好吃的秘方，在於加入蹄膀一起滷，膠質融化在滷汁，香噴噴的味道，特別好吃；單純好吃的蹄膀、焢肉飯，Q勁十足、肥而不膩；Q彈有勁帶筋的香菇肉羹，喝起來清甜甘美，再配上筍絲和香菇，美味的不得了。店裡熱賣的小吃，軟嫩順口的白菜魯，別處找不到；也別忘了點臺灣味的魯筍絲、魯蛋。全家大小來黃記魯肉飯吃飯，省錢又大碗的魯肉飯加肉羹湯，也是不錯的選擇。",
    lat: 25.06368,
    lng: 121.52413,
    location: "中山區",
    address: "中山北路二段183巷28號",
    tel: "+886-2-25958396",
    images: [
      "https://images.unsplash.com/photo-1603055021980-7a6e8abd9bd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjY0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "呂桑食堂",
    description:
      "結合宜蘭特色小吃製作菜餚：不僅可以吃到如豬油拌飯等臺灣的古早味，新鮮的海鮮與道地的臺灣味，令人大快朵頤。愛上最真的宜蘭味日據時期稱作「福住町」的永康街，生活氛圍寧靜閒適，卻是北市美食的超級戰區。呂桑食堂以來自蘭陽的地方料理，在華洋激戰的永康街，溫順暖和地攏絡朝聖者的美食信仰。木桌、木椅、紅磚牆，呂桑食堂的飲食空間洋溢著質樸的古早氣息。老闆姓方，十來歲便學廚藝，舉凡江浙、廣東、台菜、日本料理，都受過師傅的指點，做了宜蘭女婿後，又得泰水親授傳統宜蘭菜，開了食堂，名為呂桑，正是岳家經營的體系。以麵粉包覆雞湯凍油炸的「宜蘭糕渣」，富含膠質，是蘭陽地方作工繁複的筵席菜，與「蒸豆子魚」、「紅糟肉」、「白斬雞腿」、「宜蘭粉肝」等，同為呂桑食堂的人氣美饌。眼見台北四方小吃雲集，獨少蘭陽美食館，呂桑力推宜蘭菜，不私藏祖傳之祕，就像外溫內熱的糕渣，要以滿腔熱情讓宜蘭的手藝和美味傳承下去。",
    lat: 25.03144,
    lng: 121.52945,
    location: "大安區",
    address: "永康街12-5號",
    tel: "+886-2-23513323",
    images: [
      "https://images.unsplash.com/photo-1610932858286-db3c8fd4e648?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjY2fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.9,
  },
  {
    name: "嘉義雞肉滷肉飯",
    description:
      "超過25年的好味道，由一對姊妹花經營的嘉義雞肉飯，手藝極佳，人也非常阿撒力。在雙城街、農安街口的雙城街夜市，嘉義雞肉飯平民化的價格，超讚的美味，確實擄獲不少忠實顧客一再地上門。得到2007年「臺北ㄙㄟˇ夜市，來碗魯肉飯」比賽佳作和票選人氣獎。可看出老字號的美味，歷久不衰，經得起時間的考驗。嘉義雞肉的滷肉飯，滷汁加入豆腐乳，濃郁香醇的醬汁，淋在特別好吃的白飯上，好吃到沒話說。滷的入味的焢肉飯，加上筍絲，單純好吃；招牌的雞肉飯，滿滿一層的雞肉絲、香菇絲，再淋一點油蔥雞油，口齒留香，再來一碗也不嫌多；清甜的香菇雞湯，超大雞腿，相當鮮嫩可口，而且加湯不加價；熟客最愛的麻油赤肉湯，厚厚一片赤肉，用薑絲入味，是冬令進補時不可缺少的美食；愛吃海鮮的朋友，無刺虱目魚湯也很值得嘗試。",
    lat: 25.06479,
    lng: 121.52428,
    location: "中山區",
    address: "農安街2巷18號(雙城街夜市27攤位)",
    tel: "+886-2-25997536",
    images: [
      "https://images.unsplash.com/photo-1551657008-b19b2a484592?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjczfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "丹麥之屋(龍江總店)",
    description:
      "於1999年開創的丹麥之屋，店內的靈魂人物高志忠師傅，在烘焙界服務已有26年的經歷，曾赴日本、瑞士、德國各地研習各種麵包技術，以堅持及用心，加上自己的創意，做出引領風騷，轟動麵包界的商品，像是菠蘿可頌麵包，外皮有著酥脆的口感，裡面帶著濃濃的奶油香氣，是許多人來這裡一定會買的商品。這裡也是專賣歐法雜糧麵包以及蛋糕，在烘焙原物料的使用上，丹麥之屋相當堅持品質，採用的都是新鮮的食材，當天製作隔夜就丟棄的做法，讓麵包新鮮與品質永遠保持最高水準，奠定丹麥之屋的好口碑。這裡的招牌，除了可頌麵包外，還有非常特殊的墨魚法式麵包，黑黑的外皮，吃起來的口感有著濃濃的墨魚香氣，裡面包裹著培根及起士，搭配起來的味道像是吃墨魚的意大利麵，有著特殊的口感。除了麵包以外，多樣的商品，像是蛋糕、月餅、宴會點心等，這裡也都有。",
    lat: 25.05244,
    lng: 121.54028,
    location: "中山區",
    address: "龍江路98號",
    tel: "+886-2-25189036",
    images: [
      "https://images.unsplash.com/photo-1558688460-d35215366eca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjcyfHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 5.0,
  },
  {
    name: "牛易館",
    description:
      "位於台北市四平街的「牛易館」，取「易經」的易字為名，就是希望能以「簡易」的方式，提供「變易」的服務與「不易」的品質。這裡的牛肉麵有兩種湯頭，紅燒與清燉，湯頭僅以蔥、薑、蒜&hellip;等基本元素與獨家醬料，加入牛大骨、牛肉熬煮4～5小時，凝聚最鮮甜的滋味，過程中完全不加酒跟味精，呈現食材自然原味；牛肉選用肉質耐燉煮的&ldquo;澳洲牛&rdquo;，並以手工切割來保持肉質完整；麵條則配合食材特性，特別向製麵老舖訂做專用麵條，嚼勁、彈性皆與眾不同；最特別的是，老闆融合易經精神所創出的『太極牛肉麵』，用太極形狀的碗同時盛裝紅燒與清燉兩種口味，但別以為這樣就結束，店內另外提供&ldquo;麻辣&rdquo;與&ldquo;咖哩&rdquo;口味的醬汁，四種味道與乾、湯吃法，就變化出「牛易館」獨創的『一麵六吃』招牌料理。",
    lat: 25.05359,
    lng: 121.53192,
    location: "中山區",
    address: "四平街30號",
    tel: "+886-2-25238732",
    images: [
      "https://images.unsplash.com/photo-1597032430896-ec2e004b7652?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njg0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "金仙魚丸滷肉飯",
    description:
      "對上班族來說，每天中午該吃什麼？總是很傷腦筋。四平陽光商圈的金仙魚丸生意總是很好，有20年魯肉飯經驗的老店，得到2007年北市「尋找臺北黃金滷肉飯」比賽的冠軍王，金仙魚丸的蝦仁捲排骨飯也非常好吃，還有多家媒體採訪報導。現在經過這裡都有許多人排隊，常常要排隊才能買到。金仙魚丸的魯肉飯，滷汁鹹鹹甜甜，淋在飯上面，很下飯；人氣商品蝦捲飯，外表炸得金黃香酥，裡面蝦肉卻很柔軟，加了荸薺十分清爽。另外排骨飯也很不錯，多附一條蝦捲，薄薄的排骨不會太厚，炸的很入味，加個滷鴨蛋一起吃，超值又美味。還有肉燥乾麵、肉燥米粉、湯麵、魚丸湯、蝦仁羹等等，最後特別推薦蝦仁羹，喝起來甘甜鮮美，簡單順口。",
    lat: 25.05332,
    lng: 121.53388,
    location: "中山區",
    address: "南京東路2段115巷3弄1-2號",
    tel: "+886-2-25080013",
    images: [
      "https://images.unsplash.com/photo-1565262353533-b183c89a4f33?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njg5fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.7,
  },
  {
    name: "古典玫瑰園",
    description:
      "英國在西元1650年後期開始喝茶，當時茶葉是昂貴的，只有貴族、有錢的紳士、上流階級的淑女才能享用。現在，我們可以在古典玫瑰園，體驗一下那種維多利亞時代的浪漫時光。創辦人對玫瑰有莫名的熱愛，對茶有著無可救藥的浪漫，所以開了古典玫瑰園，推廣優質的英式下午茶，還成了玫瑰的畫家。英國百年瓷器名廠Aynsley一款維多利亞系列的玫瑰瓷器，茶杯、點心盤、壺，就是創辦人的作品，是235年來唯一非英籍的設計師。來到古典玫瑰園，就像到了城堡大宅，有維多利亞時代的裝潢，包圍在沉靜的氛圍裡，藍色的招牌外觀透露出寧靜，在古典玫瑰園是禁止大聲喧嘩的，古典玫瑰園也禁煙，因為享用英式下午茶，就是要優雅。喜歡古典玫瑰園的英國茶文化嗎？不論是英國茶、花草茶、餐點、高級瓷器，喜歡的都可買回家。",
    lat: 25.05216,
    lng: 121.53223,
    location: "中山區",
    address: "南京東路2段95號",
    tel: "+886-2-55713972",
    images: [
      "https://images.unsplash.com/photo-1602748828360-59db5155f87a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njk3fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.6,
  },
  {
    name: "青葉餐廳",
    description:
      "很久以前，創辦人沈雲英女士，覺得在中國的傳統美食中獨缺臺菜一詞，令人遺憾，於是多方收集資訊，試圖找尋臺灣料理的特色。她說：「臺灣菜餚是巧妙的融合各省各幫的家常菜，擷其粹並加入臺菜本身溫潤的味道，使各色菜餚能有臺灣人包容醇厚的色、香、味」。青葉餐廳，就是在這樣的領會下創立的。店內的感覺是屬於溫色系的，咖啡色的木桌木椅，搭配黃色燈光，暖暖色調，帶出青葉餐廳的溫情；這裡的菜色相當多樣，像是道地家常菜，菜圃蛋、紅燒豆腐、糖醋排骨、蔭鼓蚵、鹽酥蝦、嚕肉，都是店內的招牌，並且融合各地菜餚之長，隨之變化，像是小魚花生、炒四絲、玉碧蝦卷、蚵卷、金錢蝦餅等，多達200多種菜色。這裡的服務更是沈雲英女士特別著重的，她強調法式服務的嚴謹與浪漫、日式服務的溫柔婉約、美式服務的開朗簡潔、中式服務的親切，只願每個顧客都能感覺到賓至如歸。",
    lat: 25.0506,
    lng: 121.52349,
    location: "中山區",
    address: "中山北路1段105巷10號",
    tel: "+886-2-25713859",
    images: [
      "https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzA0fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.4,
  },
  {
    name: "台北犁記",
    description:
      "台北犁記在臺北市長安東路2段，是臺灣最知名的餅鋪之一。綠豆椪是台北犁記的人氣商品，烤的金黃飽滿的外皮，內餡是特級粉綠的綠豆，和豬肉製成的滷肉、北港的紅蔥頭、本土的芝麻組成，香味從酥酥的餅皮中散發出來。綠豆椪之外，還有綠豆與奶油完美組合的綠豆小月餅，和餅皮香酥內餡軟Q的太陽餅等數十種糕點。犁記的鳳梨酥也很有名，順口不膩、香酥好吃；許多觀光客都會來店裡買鳳梨酥，帶回去送給親朋好友；另外一種金玉滿堂，有3種口味，金色的鳳梨酥、碧綠的哈密瓜酥和代表喜氣的梅香酥。因為較大塊，奶油成份也較多，高雅精緻的包裝，很適合當作佳節贈禮，也受到大眾的歡迎。",
    lat: 25.0485,
    lng: 121.53398,
    location: "中山區",
    address: "長安東路2段67號",
    tel: "+886-2-25062255",
    images: [
      "https://images.unsplash.com/photo-1593459857252-f94f3b2ff6fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzA1fHxyZXN0YXVyYW50fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    ],
    rating: 4.0,
  },
  {
    name: "上城糕餅小舖",
    description:
      "咖啡色木頭質感營造的歐式風格，是上城糕餅的獨特氣氛，也是深受上班族、家庭主婦喜愛的原因。每天剛出爐的麵包，芳香從店舖飄散出來，垂涎欲滴的糕餅麵包陳列在櫥窗前，令人食指大動。服務於金融界的老闆洪泉平先生，原本是西北大學的MBA，憑藉著對美食的熱情，開設了「上城糕餅小舖」，這名字是由英文「uptown」而來，店家自我期許要以「天然、單純、味美」作為麵包的本質。除了創意金賞獎的鳳梨酥之外，特別推薦最具特色的舊金山老麵麵包，利用天然酵母，經過長時間發酵，香Q富彈性，好吃極了；草莓鮮酪軟糕，鮮乳酪與香草戚風交疊，以蔬菜及香料為主的羅勒田園野菜麵包、減糖低脂的湯種紅豆、養生芝麻紅豆、鹹口味的哈斯和調理吐司等&hellip;&hellip;麵包本來就是一種無法用言語形容的幸福感，看到櫥窗裡琳瑯滿目，讓人每樣都想買回家。",
    lat: 25.0606,
    lng: 121.54387,
    location: "中山區",
    address: "復興北路368號1樓",
    tel: "+886-2-25006002#311",
    images: [
      "https://images.unsplash.com/photo-1529022805552-1c88a713c1c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "你家我家客家菜",
    description:
      "30多年的好口碑，你家我家客家菜就是要給你道地的客家風味。老闆是中壢的客家人，因為家族都是客家人的關係，從小就是吃傳統客家菜長大。來到臺北開店想把客家的美食及風味帶給所有的顧客，要讓大家吃到傳統道地的客家味。這裡的裝潢相當別緻，從門口開始就是精心的設計，布簾及兩盞黃燈有著溫暖的感覺，一入內微暗的燈光，打在一幅幅畫作之上，聽說這些畫都是老闆親自畫的。室內佈局開闊，每位顧客都可以舒適地享用佳餚，這裡的招牌菜有許多，像是薑絲大腸，嚼勁十足的大腸，搭配著細細的薑絲，加上白醋的酸味每咬一口，就刺激你的舌頭一次，讓你一吃再吃非常下飯，這是品嘗客家美食一定要吃的。而客家的梅菜扣肉，使用醃漬後呈現黑綠色的梅菜酸菜，特有的味道加上美味的五花肉拌炒，吃起來梅菜甘甜甘甜，用湯汁拌飯也是很消化。這裡還有其它很多樣的客家料理，都是老闆30多年累積的經驗，像是客家小炒、紅燒蹄膀、酸菜肉片湯等，都是老顧客所喜愛的。",
    lat: 25.05834,
    lng: 121.53035,
    location: "中山區",
    address: "吉林路135號",
    tel: "+886-2-25611869",
    images: [
      "https://images.unsplash.com/photo-1610561537285-280dbb01f62f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    ],
    rating: 5.0,
  },
  {
    name: "肥前屋",
    description:
      "在林森北路的七條通，在午餐及晚餐時刻，整條街道都瀰漫著烤鰻魚的香味，原來是從一家有歷史的日本料理店肥前屋傳出來的。排隊等待入店用餐的人群，這種在日本拉麵店出現的現象，在臺灣重現了。來肥前屋要吃超人氣鰻魚飯，夏天吃鰻魚是日本的傳統，據說可以補充元氣，油脂豐富的鰻魚肉浸泡醬汁後，放置炭火上烤熟，新鮮柔嫩光亮誘人，串燒便宜又好吃，多點幾串荷包也不會大失血，人氣串燒烤鰻魚肝有著甜甜醬汁，新鮮美味，通常很快就賣光，要吃要趁早。生魚片、煎蛋捲也深受大家喜愛，是必點菜色，生魚片大塊新鮮，煎蛋捲手工製作，切成3塊，溫熱上桌，吃的出蛋汁原味，還有多種日本料理，歡迎品嚐。日本觀光客還有明星，都常前來用餐，若你不想排隊太久，請早點出發！",
    lat: 25.05115,
    lng: 121.52361,
    location: "中山區",
    address: "中山北路1段121巷13號",
    tel: "+886-2-25617859",
    images: [
      "https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.9,
  },
  {
    name: "牧牧沙拉 MoooSalad",
    description:
      "牧牧沙拉是城市遊牧者的一小方綠洲。在爵士樂伴隨的乾淨簡單空間中，您能在此安心喘息。按照節氣調整的多彩沙拉，給您每天不同的驚喜，並輕易達到每日十蔬果的健康管理；自製的各式沙拉醬也兼顧美味與安心；手工麵包與手作三文治，及各式自製蘇打、養身飲讓您滿足肉體的饑與渴。我們賣的不只是沙拉，而是人情味與人生態度!Taiwan&#39;s most popular top three salad restaurant! Mooo salad is a small oasis of urban nomads. You can feel at ease in the clean and simple space where jazz is accompanied. In accordance with the throttle adjustment of the colorful salad, give you a different surprise every day, and easily reach the daily ten fruits and vegetables of the health management; homemade salad dressers also take into account the delicious and peace of mind; hand bread and hand-made sandwiches, and all kinds of homemade soda,. We sell not only salads, but human touch and life attitude!",
    lat: 25.06038,
    lng: 121.54663,
    location: "松山區",
    address: "敦化北路222巷70號",
    tel: "02-25472225",
    images: [
      "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "小龍飲食",
    description:
      "經過這裡的人，都會帶上滷味，順道探望好友，小酌一番。嫌不夠盡興的，再殺進店裡，麵食、水餃、火鍋、熱炒、小菜，應有盡有，難怪入夜了，「小龍飲食」還是燈火通明，高朋滿座，好不暢快。從民國55年，「小龍」就以滷味聞名。傳家之寶的老滷汁，足足熬出20年的精華，特別香醇鮮甜。何況三、四個不同的滷鍋，豆干、海帶、牛筋、牛腸、墨魚等等各有其所，廚師還得根據氣候的溫度、濕度，拿捏火候的控制，滷量多寡、滷汁高度、食材的口感與色澤，一樣得細細打算，非真功夫不成。「怪味雞」也是獨門一絕，除淋上現打的蔬菜醬外，40年累積經驗改良的辣油，更是多種作料配方，屬新式口味怪味雞；熟客愛極了這怪味醬，還特別要求拌麵拌飯。「小龍」菜色多元，風味獨特，難怪舊雨新知常要來回味一番。",
    lat: 25.04789,
    lng: 121.55927,
    location: "松山區",
    address: "光復南路13巷31號1樓",
    tel: "+886-2-27685661",
    images: [
      "https://images.unsplash.com/photo-1584909879935-f1dd09ba1806?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80",
    ],
    rating: 4.3,
  },
  {
    name: "御蓮齋",
    description:
      "我們是一家多國百匯歐式自助餐，供應 200多種各式精緻蔬食素食料理，食材高級、餐點多樣。精選異國頂極料理：中式傳統熱炒素食、高級西餐料理素食、浪漫義式風味菜餚素食、精緻日式冷盤素食、新鮮生菜沙拉吧、頂級蘑菇濃湯、酥皮濃湯和披薩、古早味擔仔麵、現燙時蔬及菇類料理、特製火鍋、養生藥膳、道地中式餐點、美味港式飲茶素食、素食精緻西點糕點、香醇冰滴咖啡、哈根達斯與明治冰淇淋等&hellip;所有的湯品與藥膳皆以高級海藻及蔬果燉煮而成；御蓮齋用心創造頂級蔬食素食饗宴推薦，竭誠為您服務，歡迎共享美饌佳餚！台北訂位專線：(02)27612277",
    lat: 25.05104,
    lng: 121.56361,
    location: "松山區",
    address: "南京東路五段188號地下1樓之1",
    tel: "+886-2-2761-2277",
    images: [
      "https://images.unsplash.com/photo-1590335714561-3beab91d9b79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.3,
  },
  {
    name: "1010湘",
    description:
      "湘菜，就是湖南菜，是中國八大菜系之一，最迷人的特色就是～辣。吃辣，已經變成現代人舒壓的一種方式，層次豐富的辣，可以辣到舌尖、嗆到腦門、鬆到全身毛孔，在辣遍全身的過程中，一起舒解了快節奏生活帶來的緊繃。1010湘做的湖南菜，是傳統與時尚的融合，色香味面面俱到。1010湘的廚師團隊，遠赴上海集中密訓，深度鑽研、精確調理，把傳統湖南家鄉菜，以現代美食觀感重新詮釋，呈現出新風貌，希望將湖南菜千年的美味、與湘菜文化的精髓，提供給所有喜愛美食的消費者有更多的認識與體驗。1010有什麼樣的意味呢？如同0101代表著數位語言，1010即代表著「美味分子」，當美味分子凝聚在一起，就有十全十美的意涵。【1010湘】，就是十全十美的湖南菜。美食餐廳獎項肯定2013年 蟬連經濟部 102年度台灣優質餐廳2013年 The Miele Guide頂級亞洲美食指南評鑑 台灣區第3名2012年 榮獲經濟部 101年度台灣優質餐廳",
    lat: 25.05819,
    lng: 121.54442,
    location: "松山區",
    address: "復興北路301號",
    tel: "+886-2-27136345",
    images: [
      "https://images.unsplash.com/photo-1573532645102-ab07f16f91ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    ],
    rating: 3.8,
  },
  {
    name: "老乾杯(慶成店)",
    description:
      "老乾杯 澳洲和牛專門店本店位於光復南路，提供燒肉餐飲、滿壽泉日本清酒，為和牛專賣店和滿壽泉直營店。室內環境設計為日本著名商業空間設計師道下浩樹先生的作品，四周環繞著竹林、礫石、厚木等等裝潢，散發著濃濃日式時尚，低調而優雅。老乾杯使用的牛肉是澳洲直運來臺的黑毛和種澳洲和牛，這種牛講究養殖方式，所以生產供應量較少而珍貴，老乾杯優先購買品質最優良的澳洲和牛，在這裡提供給您盡情享用。優質的牛肉，尚需美酒來陪襯，老乾杯獨家代理倫敦IWC金獎的日本吟釀酒－滿壽泉，芳醇帶果香的限定純米大吟釀，讓牛肉更顯鮮美。除了燒肉，總料理長研發各式前菜及釜飯，釜飯是採用日本進口釜鍋，以日本傳統技法完成；另外，甜點則是由乾杯集團專屬的甜點師傅所開發出的，集團中最頂尖的人才，創造出老乾杯的精緻饗宴。為使賓主盡歡，使用的食材一向嚴格要求品質，店內營造歡愉的氣氛，每位服務人員都擁有服務熱忱，表現出傳統日式服務精神。",
    lat: 25.05404,
    lng: 121.5456,
    location: "松山區",
    address: "慶城街29號(捷運南京復興站)",
    tel: "+886-2-27139000",
    images: [
      "https://images.unsplash.com/photo-1598354276567-0b5ef7ef6bbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "回館 回回私家菜",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.04632,
    lng: 121.55114,
    location: "松山區",
    address: "八德路3段12巷51弄9號",
    tel: "+886-979-488007",
    images: [
      "https://images.unsplash.com/photo-1584631445225-88a19d8ab4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "鄧師傅(微風南京店)",
    description:
      "『大內滷味、精緻名菜』正是鄧師傅滷味膾炙人口的最佳寫照。源自大內祕傳老滷與烹調手法，鄧師傅把不同材料的各個細部本質，全部「滷」出來，色澤紅亮，香醇爽口，令人食不停筷，讚不絕口。精研廚藝至今四十多年的鄧師傅，曾遠赴日本、香港習藝，更由中法菜式與料理技術中，研發出鄧師傅口味的各式精緻「功夫菜」。百餘菜色分季推出，將家庭⋯⋯中經常食用之菜色與材料，烹調成風味雋永、齒頰留香的道道佳餚。每一道菜皆流露著「家庭風」的懷念滋味，讓各界人士蒞臨享受佳餚的同時，感受到鄧師傅－善待顧客的心、接待親友的情。面對未來，鄧師傅希望藉由顧客的監督，在美食研發上精益求精，塑造國際連鎖餐廳特色，並呈現最優質顧客用餐體驗。餐飲工作是良心與道德之事業。",
    lat: 25.05201,
    lng: 121.54829,
    location: "松山區",
    address: "南京東路三段337號B2",
    tel: "02-27172822",
    images: [
      "https://images.unsplash.com/photo-1603319374274-739f81535b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.4,
  },
  {
    name: "海男煮",
    description: "近捷運南京三民站～【海男煮】全新開幕 !",
    lat: 25.04986,
    lng: 121.56616,
    location: "松山區",
    address: "南京東路５段250巷18弄2之1號",
    tel: "0227423908",
    images: [
      "https://images.unsplash.com/photo-1560130934-590b85fc08e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80",
    ],
    rating: 4.9,
  },
  {
    name: "J12咖啡",
    description: "無國界料理",
    lat: 25.05649,
    lng: 121.56103,
    location: "松山區",
    address: "延壽街324號",
    tel: "02-87871621",
    images: [
      "https://images.unsplash.com/photo-1586214115272-4921bdec8913?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "Vis cafe窩是咖啡南京三號店",
    description:
      "Vis原文為古拉丁文「活力」之意希望藉著Vis提供的咖啡、餐點，讓你在這個空間裡感受到家的溫暖與自由",
    lat: 25.05029,
    lng: 121.56429,
    location: "松山區",
    address: "八德路４段245巷48號1樓",
    tel: "0966129149",
    images: [
      "https://images.unsplash.com/photo-1582143565907-6b8c074be35e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 3.8,
  },
  {
    name: "肉多多 健康店",
    description: "肉多多 健康店",
    lat: 25.05276,
    lng: 121.55254,
    location: "松山區",
    address: "健康路7巷1號",
    tel: "02-87123030",
    images: [
      "https://images.unsplash.com/photo-1567384029516-91df05a2bd15?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 5.0,
  },
  {
    name: "明水然鐵板燒 慶城店",
    description: "明水然鐵板燒 慶城店",
    lat: 25.05326,
    lng: 121.54548,
    location: "松山區",
    address: "慶城街18號之一2樓",
    tel: "02-27188818",
    images: [
      "https://images.unsplash.com/photo-1563268916-683884a37264?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.9,
  },
  {
    name: "Zero café",
    description: "ZERO CAFE&#39;塔羅牌特色餐廳",
    lat: 25.05218,
    lng: 121.55906,
    location: "松山區",
    address: "南京東路五段23巷6弄29號",
    tel: "0237655331",
    images: [
      "https://images.unsplash.com/photo-1578261313043-ea8712de9c27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2380&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "富錦樹353咖啡",
    description:
      "以「大家的庭院」為概念的生活提案型咖啡，與榮獲2016世界盃咖啡師大賽冠軍的吳則霖合作，希望每個客人都能依邊享受嚴選的咖啡豆與自家烘焙的甜點，一邊享受美好放鬆的空間氛圍。",
    lat: 25.06067,
    lng: 121.55778,
    location: "松山區",
    address: "富錦街353號",
    tel: "02-27495225",
    images: [
      "https://images.unsplash.com/photo-1606066352252-93e4d325787b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "御華興食品股份有限公司-八德門市",
    description:
      "<!--華興糕餅舖在松山饒河街是一家有名的老店，民國68年第二代的長子蘇祖賜夫婦接下了傳承，並在民國81年改制為『御華興食品股份有限公司』，民國87年獲臺北市政府頒發【臺北老店】證書。民國93年第三代長女蘇芳萱承繼了這家老店，決心將台灣糕點的文化繼續發揚傳承，希冀讓大家都了解台灣傳統糕點的美味，以及背後深遠的文化意涵。大桔大利新式小月餅可愛嗎？不但外型是可愛的橘子，連內餡都是加入新鮮橘子及橘皮熬製的內餡喔！並加入些許進口君度橙酒，不但讓您嚐到新鮮的橘子味，還有淡淡的橙酒香味，吃一口保證讓您愛不釋手！-->「御華興食品」於民國35年由第一代創始人蘇宗居先生創辦，原名「華興糕餅舖」，民國81年擴大營運登記改制為「御華興食品股份有限公司」。早期以生產台灣漢式傳統糕餅與祭祀食品為主，如麵龜、壽桃、酥餅、花生老、芝麻老等等，門市亦有販售精緻麵包、生日蛋糕等烘培美食。近年來，除推廣傳統美食外，另增設咖啡餐飲部門，致力將台灣漢式傳統糕餅優良之處與烘培產品之美傳遞出去。附近行程推薦:推薦行程",
    lat: 25.0507,
    lng: 121.57756,
    location: "松山區",
    address: "八德路四段755號",
    tel: "02-2742-3655",
    images: [
      "https://images.unsplash.com/photo-1596732595226-988363084ec6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.4,
  },
  {
    name: "宜蘭正常鮮肉小籠湯包",
    description:
      "宜蘭正常鮮肉小籠湯包，創立於民國六十年左右，其店名為何取『正常』，大家都非常的疑惑及好奇？來源：當時的小籠湯包都是厚皮的，但創始人覺得小籠包應該是要簿皮的、裡面還要有湯汁才能算是正常的小籠湯包，因此才將店名取為『正常』二字。又採用宜蘭特有的三星蔥，故在店名前在加上宜蘭二字， 所以後來的遊客到宜蘭及花蓮遊玩時，便有了 『宜蘭吃正常，到花蓮吃公正』這句順口溜了。",
    lat: 25.05153,
    lng: 121.57789,
    location: "松山區",
    address: "松河街214號 / 饒河街132號前",
    tel: "+886-2-27478776",
    images: [
      "https://images.unsplash.com/photo-1610024412371-c2da8993c99e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.1,
  },
  {
    name: "家途中啤酒屋 Way Home Beer House",
    description:
      "選瓶好酒啤酒，是生活態度。在回家途中，自在，自我，恣意的憩息，是中心精神。挑上符合當刻心情的啤酒、讀物，點首想聽的歌曲，扮或伴著能夠分享生活的好友，人生的美好時光，不過如此。在家途中，沒有太多束縛框架與設限，即使只有一個人，也只是不擁擠不寂寞的剛好。家途中，擱淺著，做自己。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04885,
    lng: 121.55512,
    location: "松山區",
    address: "八德路三段155巷10號",
    tel: "02-25798578",
    images: [
      "https://images.unsplash.com/photo-1589211455453-ee68cde3382d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "德古拉 吸血鬼主題餐廳",
    description:
      "店內服務人員身穿華麗的中世紀晚宴服及俏麗女僕裝扮為您服務，再搭配極具特色的西洋棺材餐桌、奴隸人形盛酒器皿及精緻美饌都會為來店的貴賓營造出視覺、味覺大呼過癮《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04851,
    lng: 121.56169,
    location: "松山區",
    address: "八德路四段138號",
    tel: "02-37622020",
    images: [
      "https://images.unsplash.com/photo-1579706053560-52f970ae1728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "Standing Room",
    description:
      "バー＆レストランStandingRoomです。お客様は日本人、台湾人、欧米人と多種多様です。スタンディングスタイルで自由な空間に身をおき、おいしいお酒、お食事をお楽しみください！いろんな楽しい出会いがあるかも。。。フードメニューは日本人シェフのもと和を基本としていますが、和洋中と幅広くサラダ、メイン、オリジナルアペタイザーをご用意しております。こだわりのＳＲオリジナルから揚げは一番の人気メニューです。仕事帰りにふらっと、友達とワイワイ、一人がさびしくなったときは是非ＳＲへ！Standing Room是一間結合餐廳與bar的複合式餐廳。客源有台灣人、日本人與歐美人....等，非常多元化。歡迎大家有來這開心的喝酒交朋友~《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.05438,
    lng: 121.5477,
    location: "松山區",
    address: "長春路508號",
    tel: "02-87120879",
    images: [
      "https://images.unsplash.com/photo-1570345302822-83ac4c39fbae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80",
    ],
    rating: 5.0,
  },
  {
    name: "我的家餐廳",
    description:
      "Located in the heart of the commercial district of Fuxing North Rd and Minsheng East Rd, and only a one-minute walk from the Sherwood Hotel, this pub has managed to find that elusive quality that turns a bar into a real pub.My Other Place serves up great Asian and Western food such as fish &amp; chips, pasta and our outstanding American style BBQ ribs.The neighbourhood feel of this pub, with its friendly staff and big screen TV, creates a comfortable and fun atmosphere for both locals and expatriates. So come in and try a trendy cocktail or relax over a scotch on the rocks and chat with friends.",
    lat: 25.05826,
    lng: 121.54436,
    location: "松山區",
    address: "復興北路303號",
    tel: "02-27187827",
    images: [
      "https://images.unsplash.com/photo-1590094924368-e700c3558c01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "Hooters Taipei",
    description:
      "HOOTERS TAIPEI 提供最棒的食物.清涼的啤酒及親切的服務!HOOTERS美式餐廳,創立於1983年4月1日愚人節.當時是由六位美國佛羅里達州商人,共同建立這個顛覆傳統餐飲新觀念的餐廳.1997年10月9日HOOTERS以獨特的餐飲風格和經營方式登陸台灣台北.捷運文湖線捷運 松山新店線南京復興站出口6號or7號 走路約1分鐘《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.05329,
    lng: 121.54542,
    location: "松山區",
    address: "慶城街18號",
    tel: "02-27165168",
    images: [
      "https://images.unsplash.com/photo-1542006651252-141b6a9624af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1686&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "台北敦北店 Gordon Biersch",
    description:
      "「新鮮、手工鮮釀的啤酒及頂級、現做的佳餚&hellip;，在歡樂友善的氣氛中供您盡情享受用餐時光─這就是道地的Gordon Biersch生活體驗。」緣起 How It All Began這是一個緣起於20多年前的夢想：創造一個提供新鮮、鮮釀的啤酒及頂級、現做的手工佳餚的地方，這個地方就是Gordon Biersch，一個橫跨美國東西岸，越過太平洋到夏威夷及台灣（台北、台中）的連鎖餐廳。這個擁有絕佳啤酒與美味食物的夢想，在1988年7月6日隨著第一家Gordon Biersch於Palo Alto, California 開幕時成真。從1999年Big River Brewing Company併購之後至今，Gordon Biersch在全美國與夏威夷已經有29個據點。除此之外，2008年6月成立亞洲第一家分店--台北信義店；2009年6月前進中台灣成立台中店。Gordon Biersch每天都在我們的各個據點新鮮供應鮮釀的啤酒與美味的食物，和您分享美好的歡聚時光。手工現做的風味美食 Made-From-Scratch堅持只以最新鮮、最頂級的食材入菜，並以季節性菜單、每日精選，以及經常性的調整固定菜單，來滿足喜愛美食的您，並以此展現我們對食物的熱忱。兼具美式食物並兼顧國際化無國界料理的風格，Gordon Biersch在您用餐的經驗中，提供您更多元豐富的菜單選擇。獨一無二的用餐體驗 Unique各地的Gordon Biersch鮮釀餐廳皆具備獨一無二的裝潢與氣氛，無論是社交聚會或是朋友聚餐，皆能滿足您的需求。此外，還提供開放的空間、手工精緻美式餐點與鮮釀啤酒，讓您的派對更加分！各店皆有獨立場地可舉辦私人派對，另外還可提供客製化派對菜單。在美國，大多數的Gordon Biersch店內都設有小型啤酒釀酒廠，由釀酒師為當地客人釀造許多得獎無數的鮮釀啤酒，以及季節限定的啤酒。當季節啤酒要推出前，各店會舉辦新酒上市派對(Tapping Party)，不但正式宣佈季節啤酒即將上市，更透過這個派對推出新的季節菜單。鮮釀，才叫啤酒！ Beer Like It Ought To BeGordon Biersch供應完美手工釀造的德式啤酒，包括拉格(Lager)與愛爾(Ale)兩種類型啤酒，全心全力為您提供最新鮮的啤酒。秉持著這份只供應最頂級、鮮釀啤酒的堅持，為我們贏得無數啤酒大賽的獎項。時刻把握，時刻享受 Every Guest, Every Time我們希望能給每位前來用餐的您，都能享受到超乎您期待的用餐經驗。從您進入餐廳的那一刻起，到享用手工現作的美食佳餚，每一個小細節，我們都期待能給您賓至如歸的獨特用餐體驗。針對每位客人的特殊需求，我們也將盡所能款待，讓您隨時隨地感受到「時刻把握，時刻享受」的精神。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.05334,
    lng: 121.54848,
    location: "松山區",
    address: "敦化北路102號",
    tel: "02-27135288",
    images: [
      "https://images.unsplash.com/photo-1591401119145-8099f9ffa604?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.9,
  },
  {
    name: "Beeru",
    description:
      "市民大道是大台北人眾所皆知的「燒肉一條街」而現在bEEru（台語：嗶魯）主打著自釀、精釀啤酒為主的創意台菜，讓喜愛啤酒的酒客多了「特別」的選擇，所謂的「特別」將顛覆暢飲啤酒的概念，結合客製化之神秘酒器給您前所未有的沁涼體驗；誰說台菜一定Local到Low？ bEEru就是要帶給您創新的家常料理新面向，美味料理配上大口喝酒.大口吃肉!店內所有啤酒的設備由bEEru團隊精心設計研發，啤酒管路設計是餐飲業界的創舉，設計安裝更是世界首創，神秘酒器安裝於餐桌上，每桌有數種不同口味的精釀啤酒，客人只要打開神秘酒器即可自己倒酒，愛喝多少由自己決定，不須透過服務人員倒酒，省去等待時間，飲用數量也在餐桌上直接顯示，準確度達到cc數，以量計價減少爭議。店內精釀啤酒配送過程皆全程控溫、控壓，保持啤酒的鮮度，而店內保存方式更保證恆溫、恆壓，沒有一般冰水機的缺失，經過店內神秘酒器連續倒酒時，冷度保持在精釀啤酒飲用的最佳溫度上。《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.04496,
    lng: 121.5502,
    location: "松山區",
    address: "市民大道四段129號號",
    tel: "02-25771815",
    images: [
      "https://images.unsplash.com/photo-1504981983529-9ed8031ade7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 3.8,
  },
  {
    name: "一千零一夜水煙館",
    description:
      "一千零一夜提供全台灣最頂級品質的水煙專業俄羅斯鋼管舞者每週定期表演專業肚皮舞舞者以及多種異國表演不定期演出專業DJ、調酒師駐場尚有各式紅白酒、調酒、伊朗紅茶、咖啡以及雪茄供您選擇歡迎包場舉辦私人派對《台北旅遊網》提醒您：未成年請勿飲酒，飲酒過量，有害健康。營業時間、價格與消費方式若有異動，以店家公告為主。",
    lat: 25.05131,
    lng: 121.55833,
    location: "松山區",
    address: "南京東路五段8號",
    tel: "02-27651122",
    images: [
      "https://images.unsplash.com/photo-1580826388538-98c404ad9cd8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "阿巴得印度廚房",
    description: "MR= Muslim Restaurant,印度料理",
    lat: 25.05185,
    lng: 121.55713,
    location: "松山區",
    address: "光復北路130號",
    tel: "+886-2-25460440",
    images: [
      "https://images.unsplash.com/photo-1558942594-0f34b1d36599?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "臺北西華飯店 - 清廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳",
    lat: 25.0582,
    lng: 121.54574,
    location: "松山區",
    address: "民生東路3段111號",
    tel: "+886-2-27181188",
    images: [
      "https://images.unsplash.com/photo-1599412405527-1e09a44bcd06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    ],
    rating: 5.0,
  },
  {
    name: "城市商旅南東館 - 馬迪諾",
    description:
      "MFR = Muslim-Friendly Restaurant 穆斯林友善餐廳MFT = Muslim-Friendly Tourism　穆斯林友善餐旅",
    lat: 25.05155,
    lng: 121.56996,
    location: "松山區",
    address: "南京東路5段411號",
    tel: "+886-2-27425888",
    images: [
      "https://images.unsplash.com/photo-1565720643550-4577a062b20e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.4,
  },
  {
    name: "清真昆明園餐廳",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.0511,
    lng: 121.54519,
    location: "松山區",
    address: "復興北路81巷26號",
    tel: "+886-2-27516776",
    images: [
      "https://images.unsplash.com/photo-1560569203-a7120e77abd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.3,
  },
  {
    name: "清真泰富豪",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.0495,
    lng: 121.55277,
    location: "松山區",
    address: "北寧路36號",
    tel: "+886-2-25790528",
    images: [
      "https://images.unsplash.com/photo-1605492071176-08c38459e063?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "泰鄉雲店",
    description: "MR=Muslim Restaurant 穆斯林餐廳 ",
    lat: 25.04974,
    lng: 121.55277,
    location: "松山區",
    address: "北寧路40號1樓",
    tel: "+886-2-25779271",
    images: [
      "https://images.unsplash.com/photo-1544738122-52d63216e052?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "阿金台菜海鮮餐廳",
    description:
      "中歐混血風海鮮餐廳新地標富麗堂皇的裝潢設計，將台灣在地文化與歐洲中古元素巧妙鑲嵌，陳列擺設細膩講究，從優雅的水晶吊燈、復刻鋼琴到一比一的臨摹掛畫，打造奢華復古意境，宛若置身古堡般的尊榮禮遇。聯合國饗宴舞動舌尖的海洋協奏曲老闆秉持對美食的信念，特別重視用餐環境、餐點設計及食材品質，並顛覆大眾對台式海鮮餐廳的印象，打造中、日、法的飲食複合式餐廳。中式海鮮台菜澎湃大器，嚐一口明太子龍蝦，大海的鮮甜味讓人意猶未盡，擺盤精心雅緻，頂級食材結合精湛廚藝，譜出台菜美妙新篇章；日式慢食經典寫意，啜飲一杯熱茶，搭配新鮮現切生魚片，快意十足；法式下午茶典雅美味，甜點拼盤彷彿藝術品般的精緻。",
    lat: 25.04879,
    lng: 121.54476,
    location: "松山區",
    address: "南京東路三段256巷46號",
    tel: "+886-2-27520442",
    images: [
      "https://images.unsplash.com/photo-1571585835576-170807b5878e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.6,
  },
  {
    name: "10號廚房",
    description:
      "舒適明亮的10號廚房-食尚料理(敦北店)悠閒復古的英式工業風格裝潢讓厭倦了城市的喧囂及工作疲憊的您能夠恣意放鬆，盡情享受愜意自在的氛圍不管是三五好友姐妹聚會，或是享受獨自的個人時光都可以前來探索一番多元豐富的美味餐點義大利麵、燉飯、焗烤飯、排餐、食尚料理還有大眾喜愛的蛋糕甜點、飲料、咖啡提供客製化包場服務商家並提供免費高速光纖上網提供一次滿足您的需求期待在這座城市的樂園與您交會~10號廚房店內環景",
    lat: 25.05442,
    lng: 121.5508,
    location: "松山區",
    address: "敦化北路155巷10號",
    tel: "+886-2-25466100",
    images: [
      "https://images.unsplash.com/photo-1583122545534-2949fdf8d897?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "Salvatore Cuomo & Bar",
    description:
      '本店的主廚Salvatore Cuomo是讓拿坡里比薩風靡全亞洲的第一人，在他所經營的義大利菜餐廳，嚴選在義大利十分稀少珍貴的水牛奶所製成的馬滋瑞拉起司、及拿坡里當地特調的番茄醬汁等食材，除了可品嚐到以當地傳統作法高溫烘烤出來的皮薄富有嚼勁，造就絕妙好滋味的拿坡里比薩外，還可輕鬆愜意地享用香醇紅酒，因而擄獲所有饕客的心。在日本擁有80間以上的分店，於上海及首爾也都有設點，如今在台灣微風廣場也有設店。本店提供以新鮮蔬菜、海鮮及肉類製成的義大利佳餚，風味一絕獨具特色，午餐時間採自助 buffet，晚餐時間則為點餐方式。唯有Salvatore Cuomo &amp; Bar，才能給您道地美味的拿坡里比薩及最正統的絕品美味。歡迎您與親朋好友來此品嚐美食，感受拿坡里的熱情洋溢。粉絲專頁<span lang="EN-US" style="font-size:12.0pt;font-family:">https://www.facebook.com/salvatorecuomo.taipei<table border="0" cellpadding="0" cellspacing="0" class="MsoNormalTable" style="border-collapse:collapse;mso-table-layout-alt:fixed;mso-yfti-tbllook: 1184;mso-padding-alt:0cm 0cm 0cm 0cm"><table border="0" cellpadding="0" cellspacing="0" class="MsoNormalTable" style="border-collapse:collapse;mso-table-layout-alt:fixed;mso-yfti-tbllook: 1184;mso-padding-alt:0cm 0cm 0cm 0cm">',
    lat: 25.04585,
    lng: 121.5443,
    location: "松山區",
    address: "復興南路一段39號 b1(微風廣場G樓)",
    tel: "+886-2-87727465",
    images: [
      "https://images.unsplash.com/photo-1560316128-46beeb24ace5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1506&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "漢堡控館 / Burger Control Bistro",
    description:
      "大份量的美式漢堡，肉排堅持手工拍打，保存肉汁跟紮實口感，每一份端上桌的漢堡不只有美味，更有滿滿的用心與堅持。",
    lat: 25.05787,
    lng: 121.55513,
    location: "松山區",
    address: "民生東路四段112巷ㄧ弄15號",
    tel: "+886-2-87121005",
    images: [
      "https://images.unsplash.com/photo-1562835155-1fa627c69744?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "LA LUPA 羅馬義廚",
    description:
      "LA LUPA 羅馬義廚 有義大利主廚Claudio為大家帶來 道地羅馬料理 和新鮮現流海鮮 是個適合家庭朋友聚餐 品酒聊天的地方另有提供包場與外燴服務 特色料理:羅馬家鄉料理 義大利主廚自製香腸與火腿 現流海鮮通過「OSPITALITA ITALIANA」義大利餐廳認證 全球編號NO.2044 http://10q.it/strutture_scheda_rim.php?gourmet&amp;id=2044&amp;paese=825&amp;citta=413&amp;idPag=10",
    lat: 25.04956,
    lng: 121.55496,
    location: "松山區",
    address: "寧安街7巷7號",
    tel: "+886-2-25701860",
    images: [
      "https://images.unsplash.com/photo-1581639385666-ef6b02b08227?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2378&q=80",
    ],
    rating: 4.1,
  },
  {
    name: "咖哩本色—日式咖哩豬排專賣店",
    description:
      "「咖哩本色」日式豬排堅持材料，堅持品質，明亮乾淨，給予舒適的用餐環境，讓顧客愉悅的享受美食。鑒於台灣飼養之豬肉質地極適合製作日式豬排，在1980年將正統日式豬排及日式咖哩之烹調技術引進台灣，在臺北市敦化北路155巷設立第一家日式豬排，咖哩專賣店，正統的風味 對材料、品質的堅持，深獲廣大顧客的肯定。「咖哩本色」日式豬排美味的秘訣是，堅守傳統的技術與嚴選素材豬肉，含有豐富的蛋白質以及高於牛肉十倍以上之維生素B1。本店僅採用部位柔嫩風味佳之大小裡肌，日式炸豬排是店內的人氣料理，外酥內軟多汁，淋上特製的日式咖哩醬，滿足許多顧客的味蕾。每種炸品套餐均附上味噌湯，爽口小菜，甜點，飲料。還有鹽烤系列，烏龍麵，手工可樂餅可選擇。",
    lat: 25.05439,
    lng: 121.55118,
    location: "松山區",
    address: "敦化北路155巷16號1樓",
    tel: "+886-2-27195866",
    images: [
      "https://images.unsplash.com/photo-1600261701148-cab9668a1052?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "金葉蛋糕",
    description:
      "始終堅持「健康、品質、創新」的經營理念，領導市場潮流。提供「高品質」及「合理價格」的服務與商品，一直是金葉蛋糕奉行不渝的信念。我們對品質的用心因而備受各界肯定，供應精緻美食予國內外各大航空公司之空中往來的旅客，有口皆碑，不僅遠近馳名，更揚名國際。中秋旺月禮盒 特色商品介紹 累積30年的深厚精研功夫，製作傳統道地港式手藝月餅；皮薄餡厚，香濃滑順，令人讚不絕口。 中秋旺月禮盒, 累積30年的深厚精研功夫，製作傳統道地港式手藝月餅；皮薄餡厚，香濃滑順，令人讚不絕口。",
    lat: 25.04814,
    lng: 121.55642,
    location: "松山區",
    address: "八德路三段201號(近監理站)",
    tel: "+886-2-25773456",
    images: [
      "https://images.unsplash.com/photo-1572223711178-9bd0a268a7ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "十里安手麵館(慶城店)",
    description:
      "甘其食、美其服、安其居、樂其俗是我們提倡的信念。十里安創立於2012年七月， 招募了數名國內頂尖內場人員與研發專業的製麵技術 ; 創立短短期間已擁有為數不 少的忠實客戶群。本公司擁有優秀的經營團隊，秉持著「提昇國人麵食文化」的 經營理念，追求企業永續經營及成長 ; 除了目前三家分店外，也將陸續擴展更多家 分店。十里安提倡養身之道，重視少油、低鹽並挑選最頂級食材製作，並接受顧客調整餐點辣度及飲品酸甜度，讓顧客更加品嚐到最佳口感。短短不到一年時間的十里安，秉持著給顧客賓至如歸的環境，並以高規格服務訓練，至今已受廣大美食部落網友們紛紛討論，這也是至今十里安已拓展到三家分店的原由。強調精緻美食讓人不禁一再品嚐的料理，蛤蜊絲瓜煨麵，濃郁高湯配上手工Q麵，絲瓜蝦仁湯包，鮮味十足，清新不油膩，川味嗆麵，獨家調配醬料，辣嗆爽口，元盅雞湯，清鮮香甜，流沙包，特色小點，獨特口感。",
    lat: 25.0528,
    lng: 121.5446,
    location: "松山區",
    address: "慶城街1號2樓",
    tel: "+886-2-87123863",
    images: [
      "https://images.unsplash.com/photo-1596986922243-e9fb46ff0a5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80",
    ],
    rating: 4.6,
  },
  {
    name: "裕珍馨食品",
    description:
      "四十五年精湛的餅藝，不僅是誠品書店網路票選之「台灣第一伴手禮」，更是Discovery頻道介紹的「台灣傳統糕餅名店」，同時還通過由SGS檢驗合格的ISO22000/HACCP國際認證，兼顧食品安全與美味！紫玉酥，特色商品介紹 以馳名全省之「大甲香芋」所熬製之芋泥為餡，將大甲在日本時代最有名的「雙溪米」所煮成之麻糬為核心。「紫玉酥」香脆的酥皮入口即化，馥郁的芋泥、Q軟的麻糬，在芋泥香中更透著濃濃的原鄉味與風土情。紫玉酥,以馳名全省之「大甲香芋」所熬製之芋泥為餡，將大甲在日本時代最有名的「雙溪米」所煮成之麻糬為核心。「紫玉酥」香脆的酥皮入口即化，馥郁的芋泥、Q軟的麻糬，在芋泥香中更透著濃濃的原鄉味與風土情。",
    lat: 25.0514,
    lng: 121.55703,
    location: "松山區",
    address: "南京東路四段180號",
    tel: "+886-2-25779025",
    images: [
      "https://images.unsplash.com/photo-1556608172-2686a65519ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.6,
  },
  {
    name: "China Pa 中國父音樂餐廳",
    description:
      "推開China Pa厚重銅門，猶如走入時光隧道，踏入秦朝歷史，憶起秦贏政的一生偉業; 從書同文、車同軌、 度量衡 、平定六國而一統天下。並建造世界八大奇蹟---築萬里長城、 秦始皇陵兵馬俑。China Pa 中國父的料理，保留傳統文化的精隨及融合現代口味的藝術理念，引領出一道道令人激賞的新中華料理。雲南冷牛肉-雲南十八怪，獨缺這一怪，怪在甜辣酸香不獨沽，盡在薄、嫩、鮮、涼間使壞，美國進口Choice級薄切菲力拌 美味果真無可比擬西汁青芥蝦球-嚴選特A級的新鮮大蝦仁，彈Q美味的蝦球裹上粉綠魅人的辛香甘甜，絕對是饕家們人氣美食的首選嫩烤青醬羊肋排-馥郁的香蔬、惑人的香料，獨家祕汁醃製熟成，鮮嫩多汁 美味竟能如此悸動 邀您一同賞味!每晚 Live Band從古典、 爵士 、搖滾、嘻哈流行等現場樂團表演, 精采好秀輪番登場。",
    lat: 25.0485,
    lng: 121.56243,
    location: "松山區",
    address: "八德路四段138號",
    tel: "+886-2-37621919",
    images: [
      "https://images.unsplash.com/photo-1604805219776-2923cf880b31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "櫻之田野養生野菜鍋",
    description:
      "您多久沒有體內環保了？圍爐火鍋一直是中華飲食文化的精髓，台灣火鍋吃到飽店雨後春筍四處林立，除非是具有知名品牌足以吸引饕客上門，而這家店與其他常見的肉類海鮮吃到飽的火鍋店不同，提供的是野菜吃到飽，養生自然的排毒野菜是老天爺賜給人們最棒的禮物，都是從花蓮宅配過來的尤其是原住民種植，口感與常見的蔬菜不同，內含高纖維質、高維生素、高葉綠素等豐富成分，搭配無油低鹽的健康湯底，讓您在享受美食之餘，也能輕鬆協助身體養生清腸排毒做體內環保，很多人常說多吃菜少吃肉但都言易行難，這家店與眾不同，養生理念付諸行動，值得推薦！歡迎您來認識野菜，享受天上掉下來的大自然原味。九種養生湯頭＋來自花蓮每天新鮮宅配的野菜吧無限供應（葷素皆有）！一定要來品嚐試試看喔！尤其是創業開店老闆為聽障人士，不受聽力障礙限制，勇於突破限制創業擁有屬於自己的事業，創業不易守成更難，值得給予支持！",
    lat: 25.05129,
    lng: 121.56806,
    location: "松山區",
    address: "南京東路五段318號(寶清街口)",
    tel: "+886-2-27486931",
    images: [
      "https://images.unsplash.com/photo-1590097722369-ff08607cdfa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80",
    ],
    rating: 4.9,
  },
  {
    name: "糜家莊",
    description:
      "一個充滿中式古老文化的料理，用大米混合其他糧食及高級食材的粥，加以中藥秘方，長時間熬煮的養生美食。",
    lat: 25.05912,
    lng: 121.53016,
    location: "中山區",
    address: "【市民店】延吉街67號2樓【吉林店】吉林路226號",
    tel: "+886-2-25701577",
    images: [
      "https://images.unsplash.com/photo-1565895319717-c8cc0dd526db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "GABEE.",
    description:
      "即將邁入第十周年，位在民生社區的「GABEE.咖啡店」，一直以來都是以專業、技術、人文與服務為導嚮的專業義式咖啡店。創辦人、同為2004與2006年台灣咖啡師大賽冠軍的林東源先生，在經歷近二十年的積累經驗，於咖啡領域裡不斷地投入努力與心血，經焠鍊、醞釀與獲得無數獎項的肯定，如今讓GABEE.成為台灣專業咖啡的代名詞。我們相信您只要踏進GABEE.裡就能立刻感受的到我們的用心。舒適寬敞的室內瀰漫著烘豆師精心烘焙出來的濃郁咖啡香；專業的咖啡師用心製作每一杯咖啡；親切的服務人員滿心微笑地在第一時間為您服務。我們特地為顧客準備了北義和南義風味的咖啡豆供顧客選擇。一種是風味帶有水果般的清新奔放風味；另一種帶有焦糖可可的風格，希望能藉由這一杯咖啡，提供給顧客最喜愛、最無微不至的享受。咖啡豆的香醇，沒有一絲雜味，香氣絕妙的與明亮的環境融合在一起。期待您來到「GABEE.咖啡店」，品嚐用代表台灣本土特色的農作物－地瓜，所特製作的「啡你莫薯」創意咖啡，相信您一定會發出讚嘆的聲音！「GABEE.咖啡店」的拉花拿鐵，可謂拉花藝術之代表。不論在牛奶打發的技術；咖啡與牛奶的融合以及拉花圖案的呈現上，我們都用百分百的專注與精神的注入，才能夠做出那杯奶泡極為細緻綿密、如同藝術般拉花的咖啡。這一切，只是希望帶給每位來到這裡的顧客，無限的共鳴。特色咖啡： 啡你莫薯與拿鐵咖啡GABEE.官網： http://www.gabee.cc/",
    lat: 25.05924,
    lng: 121.54623,
    location: "松山區",
    address: "民生東路三段113巷21號",
    tel: "+886-2-27138772",
    images: [
      "https://images.unsplash.com/photo-1570721142776-141ce5165f08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.1,
  },
  {
    name: "荷風中國菜",
    description:
      "荷風中國菜─道地滇味的極致開業10年，以上海風格、華洋並重為主要設計品味的「荷風中國菜」，是台北眾多中餐館裡的一頁傳奇。開在眷村40多年的雲南小吃店，是荷風的前身，道地滇味如雲南酸筍燜牛肉，雲南豆豉五花肉則來自上一代對傳統的堅持，所以店內使用的豆豉、蝦醬和蕎頭等配料，都是自家醃製。再加上第二代掌門人對時代潮流改變又極其敏感，於是咕咾肉裡的糖被仙人掌糖及龍舌蘭花蜜所取代，甜度輕、熱量低；而最受客人津津樂道的風乾蕃茄炒蛋，則直接購自優良農家的牛蕃茄，去皮後低溫烘乾八至十小時，配上優質蛋快炒而成。再加上店內每道菜只使用美國進口的礦鹽取代一般精製鹽，因此不需太多調味，就是一道道健康無負擔，高貴不貴的佳餚。在堅持一定要好吃和最好的食材品質下，荷風在傳統及創新取得良好的平衡，不僅抓住了本地人的胃，也讓絡繹不絕的外國食客們驚豔不已。",
    lat: 25.05966,
    lng: 121.54482,
    location: "松山區",
    address: "民權東路三段106巷32號",
    tel: "+886-2-25453536",
    images: [
      "https://images.unsplash.com/photo-1520099940286-947795ff7b42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "兄弟大飯店-梅花廳",
    description:
      "兄弟飯店梅花廳是一粵菜飲茶餐廳，長久以來受到老顧客喜愛，也是許多觀光民眾必吃之處，每到用餐時刻，座無虛席。梅花廳的港式飲茶由推車叫賣，用餐民眾可享受道地飲茶方式，挑選自己想吃的點心，點心種類繁多，如筍尖鮮蝦餃、紫菜海鮮捲、蟹黃蒸燒賣、玫瑰燒賣、雲腿魚翅餃、特製小龍包、香酥芝麻球等等，腐皮炸蝦捲、腸粉、烤白菜、脆皮豆腐、蜜汁火腿，是很受歡迎的點心，海鮮灌湯包料鮮味美，是用餐民眾必點菜色。這兒的場地適合舉行酒席、文定、喜宴，酒席菜色眾多，如塔香九孔帶子、蟹肉燴魚翅、翡翠天蠶蝦、沙公蟹八寶飯、百合白果時蔬、杏仁凍豆腐、竹笙干貝燉雞等等，可由餐廳為您配菜，是舉辦宴席的好地方。",
    lat: 25.05215,
    lng: 121.54448,
    location: "松山區",
    address: "南京東路3段255號2-3樓",
    tel: "+886-2-27123456",
    images: [
      "https://images.unsplash.com/photo-1607664794096-176cd60beb2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "哈亞極品咖啡",
    description:
      "哈亞咖啡為了服務台灣的咖啡愛好者，Specialty &amp; Premium咖啡專門店於2000年開業。哈亞提供能表現產地芳香特徵到最極限的Specialty Coffee 及對於基礎概念的啟蒙。所以對於一般流通的低價格商業咖啡或雖有附加價值但是極端話題性，品杯時的芳香與其價格難以平衡的咖啡豆是哈亞自開業以來不會去購買的品項。並不拘泥於「什麼都有．．．」，在精不在多，堅持嚴選世界各優良栽種地區的農園主所栽種的優秀豆，僅提供&rdquo;真正的Specialty Coffee&rdquo; 給咖啡愛好族品嚐。承蒙客戶的愛護與眾多地迴響：&rdquo;哈亞咖啡,又芳香又好喝！！&rdquo;&rdquo;比在其他的店所喝的果然不一樣！！&rdquo;今後亦將秉持一貫精神理念，提供世界級最高品質咖啡豆及內容更濃厚的服務。敬請期待來自世界各優良栽種地區所採收最高品質咖啡所奔放的魅人芳香。咖啡的品質，我來保證!!",
    lat: 25.05858,
    lng: 121.5497,
    location: "松山區",
    address: "敦化北路307號",
    tel: "+886-2-27151646",
    images: [
      "https://images.unsplash.com/photo-1558711123-d55131edb406?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "小上海",
    description:
      "經過民生東路，就會看到白煙帶著香氣從一疊疊的蒸籠竄出來，原來就是小上海餐廳的大灶。這裡的湯包，是用干貝為主要香味，吃起來有著海鮮的鮮甜，加上絲絲的口感及濃郁的湯汁，難怪吸引著許多老饕來這品嘗。除了湯包之外，這裡的另外一個招牌菜，就是三角形的湖州粽，綿密的糯米飯，吃起來不會太爛，內餡是有瘦肉肥肉的搭配，吃起來不油膩，每一口，就帶有著濃濃的竹香，不用加上任何的調味品，吃起來就相當地自然美味。還有這裡的紅燒牛內麵，紅燒的湯頭比較清淡，大塊的帶筋牛肉吸收著湯汁的精華，吃起來十分快意。小上海餐廳沒有太華麗的裝潢，簡單的桌椅，以白色和棕色搭配，店內相當的整潔，每一位服務人員都帶著白色的廚師帽，確保衛生品質。服務也相當迅速，飢腸轆轆時，不用久等就可以馬上享用美食。",
    lat: 25.0578,
    lng: 121.55193,
    location: "松山區",
    address: "民生東路4段62號",
    tel: "+886-2-27185783",
    images: [
      "https://images.unsplash.com/photo-1542372397-8cd13367dcdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    ],
    rating: 4.7,
  },
  {
    name: "點水樓(南京店)",
    description:
      "說起台灣美食，當屬揚名海內外的小籠包。點水樓以文化典故做出道地的上海麵點、江浙菜餚：榮獲《2010年北台灣餐館評鑑》5顆星殊榮。點水樓─小橋、流水、江浙好滋味小橋、流水、江南人家精緻點心好茶水。坐在點水樓的木雕窗花下，品嚐這濃濃蘇杭風味，飲食昇華為一種文化品味，甚至是一種文學意境。從金庸的英雄、群俠宴，到張愛玲、徐志摩宴，點水樓以文化入菜讓食客驚艷，而它傳承江浙道地慢工細活的烹調方式，也讓幾乎消失的老菜得以重獲新生。「富貴叫化雞」得先醃上一整天，再披土烤上4個小時，不先預約不行。而小籠包更是來點水樓不可錯過的招牌點心。十九摺的小籠包，提起來像透明燈籠，放下去則是百摺菊花，黑毛豬腿肉內餡還加入了老母雞高湯；每天現用沙公、沙母的蟹肉和蟹黃做成「蟹黃小籠包」更是鮮甜；記住了品嚐時的要訣：「輕輕夾、左右晃、匙接包、先品湯、後嚐餡」。還有更別忘了杭卅第一名菜「西湖醋魚」&hellip;&hellip;在繁忙的城市中，還有什麼是比品嚐一桌江南佳餚更悠閒的事情呢？",
    lat: 25.05183,
    lng: 121.55282,
    location: "松山區",
    address: "南京東路四段61號1樓",
    tel: "+886-2-87126689",
    images: [
      "https://images.unsplash.com/photo-1559311047-e26a66d1b7af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "兄弟大飯店-蘭花廳",
    description:
      "位於兄弟飯店，是臺北第一家5星級臺菜海鮮餐廳，供應的臺菜料理、清粥小菜，深受消費者喜愛，用餐環境精緻高雅，尤其適合舉辦喜宴及尾牙、春酒等。清粥小菜價格合宜，各種小菜如粉腸和各種黑白切，每份120元起，清粥38元可吃到飽，各式臺南小吃如臺南米糕、擔仔麵、清湯麵等65元起，設有沙卡里巴料理檯，可於檯前現點現切現炒，洋溢傳統小吃的氛圍。有30年以上經驗的主廚，做出的每道宴席料理，更是一絕，紅燒大散翅、花好月常圓、雀巢鴛鴦蝦、蟳腿燒烏參、層香九孔帶子、清蒸活石斑、干貝芥菜膽、烤鰻扒米糕、鮑魚四寶湯、鮮菇扒時蔬、上蟳扒米糕、竹笙燉雞湯等，道道精緻，展現臺菜料理的高水準。改良過的甘瓜排骨、滷肉、瓜仔肉等小吃，不油不膩，有健康觀念，虱目魚肚慢火香煎、油脂恰到好處，大家都愛吃，歡迎大家來用。",
    lat: 25.05213,
    lng: 121.54448,
    location: "松山區",
    address: "南京東路3段255號2-3樓",
    tel: "+886-2-27123456",
    images: [
      "https://images.unsplash.com/photo-1572170630926-da7db608f0a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    ],
    rating: 4.9,
  },
  {
    name: "雲城泰緬美食",
    description:
      "今晚想來點南洋風味餐嗎？來雲城就對了，這兒有最道地的泰緬美食。創立12年來，講求的是家鄉口味，菜色上既用心且多樣，其中自製緬式蝦醬，是經過許多道反覆的動作，讓蝦子的香味更加濃郁，拿來拌炒空心菜，蝦醬與空心菜莖充分混合，吃起來青菜脆且香，是這裡的招牌菜。另外月亮蝦餅，厚度適中、外皮酥脆，吃起來不會油膩且爽口，也是招牌之一。這裡的菜色多樣，像是青醬香酥鱸魚、雲拌椒麻雞、炒河粉、雲醬茄子及雲南大薄片等等，包含雲南、泰國及緬甸3大美食，口味道地，價格實在，服務也很好。店內的裝潢相當有特色，最特別的是連餐具瓷盤也選的極為有味道，桌上有雲城特製的桌巾，黑色的線條紋路，有點邊疆風味，也有點原住民的圖騰感覺，加上店內較幽暗的燈光，用起餐來，彷彿帶著點神秘、深入祕境，探尋異域的心情呢。",
    lat: 25.057,
    lng: 121.54459,
    location: "松山區",
    address: "復興北路231巷2號",
    tel: "+886-2-27196527",
    images: [
      "https://images.unsplash.com/photo-1605285931615-e01bd027b9c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 5.0,
  },
  {
    name: "天仁喫茶趣",
    description:
      "以茶詩『七碗受至味，一壺得真趣，空持百千偈，不如喫茶去』之趣，命名為喫茶趣。復興店以「和平」為文化主題，有茶館和販售的茗茶部，5道落地玻璃門和牆上一幅各式篆刻茶字，將極簡明亮的設計與中國氣質融合為一，獨創的茶飲、茶點、茶膳，讓茶料理的飲食精神發揮到極致。復興店供應各式單品和茶套膳，套膳有茶早餐系列、精緻套膳、喫茶套膳。下午茶，從甜品、冰品、湯品、茶點、麵食到茶膳，幾乎每樣餐點都用到茶葉。店內最有人氣的是抹茶冰淇淋、喫茶菁、普洱牛肉麵、包種高麗菜等，歡迎大家來品嚐。喫茶趣不時有新品上市，最新的餐點有茶王龍鱈魚與鮮桂蔓越，這裡也有提供素食，如素玄米海帶芽湯、碧螺春素蒸餃、包種茶油麵線、綠茶茄蔬拌麵、茶油時蔬，每當季節更換時也有季節料理推出。來，來，來，來一碗茶，度過漫長的時間，忘卻平日的煩惱！",
    lat: 25.05287,
    lng: 121.54382,
    location: "松山區",
    address: "復興北路152號",
    tel: "+886-2-27199900",
    images: [
      "https://images.unsplash.com/photo-1511214053397-d6c97488c8f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.0,
  },
  {
    name: "異塵希勒餐廳",
    description:
      "低調 &ndash; 奢華走進異塵Cellar彷彿進入了另一個境界，獨立的空間感、珠簾隔空，隱約在流瀑銀線當中。徜徉12尺的大吧檯是Lounge Bar中所罕見的，回歸到地窖原始風貌，酒瓶有如崁在石洞裡陳年醞釀，霎時讓人有如時空交錯的幻覺，精心設計的空間，會讓您覺到這裡有強烈的視覺震撼。在這裡您可以喝到多種香醇的威士忌，也可以穿梭在透明大酒窖裡，細細挑選各種不同產區的紅酒白酒，打開您對葡萄酒的渴望，更可以依照您個人的口味、風格由Bartender為您特製一杯Cocktail。料理 &ndash; 細膩考究除了靜心品酒外，這裡還有各式精緻餐點，對於餐點的講究，相信絕對可以滿足您挑剔的味蕾。美食配美酒，值得您親自來細細品嘗。",
    lat: 25.05192,
    lng: 121.55019,
    location: "松山區",
    address: "南京東路4段19號B1",
    tel: "+886-2-27129319",
    images: [
      "https://images.unsplash.com/photo-1569757715099-0895f9af3721?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    ],
    rating: 4.7,
  },
];

export default ShopData;
