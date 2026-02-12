#!/bin/bash
# Download all news images for the FCCI website project
# Each image is saved as news_{id}.ext into the images/news/ directory

DEST_DIR="$(dirname "$0")/images/news"
mkdir -p "$DEST_DIR"

echo "Downloading news images to: $DEST_DIR"
echo "=========================================="

# ID 5079 - 2026 亞洲鏈結論壇
curl -L -o "$DEST_DIR/news_5079.jpg" "https://www.fcci.org.tw/wp-content/uploads/2026/01/主視覺4.jpg"
echo "[1/119] news_5079.jpg"

# ID 4940 - 泰國大選後的位數商機焦點與合作機會
curl -L -o "$DEST_DIR/news_4940.jpg" "https://www.fcci.org.tw/wp-content/uploads/2023/06/泰國大選後的數位商機焦點與合作機會.jpg"
echo "[2/119] news_4940.jpg"

# ID 4924 - 2023 台印度合作論壇暨交流晚宴
curl -L -o "$DEST_DIR/news_4924.jpg" "https://www.fcci.org.tw/wp-content/uploads/2023/05/1600x290_表頭.jpg"
echo "[3/119] news_4924.jpg"

# ID 4921 - Cross-Border Cooperation in Digital Skilling and Innovation Webinar
curl -L -o "$DEST_DIR/news_4921.jpg" "https://www.fcci.org.tw/wp-content/uploads/2023/04/0418-CACCI-Webinar.jpg"
echo "[4/119] news_4921.jpg"

# ID 4855 - TWIN Dialogue: 印度綠能商機媒合會
curl -L -o "$DEST_DIR/news_4855.jpg" "https://www.fcci.org.tw/wp-content/uploads/2023/03/1290x600_大頭版EDM.jpg"
echo "[5/119] news_4855.jpg"

# ID 4849 - 2023 台灣-東協合作論壇
curl -L -o "$DEST_DIR/news_4849.jpg" "https://www.fcci.org.tw/wp-content/uploads/2023/03/0331_ATCF-主視覺_II.jpg"
echo "[6/119] news_4849.jpg"

# ID 4839 - TWIN Dialogue: NIELIT/CSF MoU交流
curl -L -o "$DEST_DIR/news_4839.jpg" "https://www.fcci.org.tw/wp-content/uploads/2023/01/01132.jpg"
echo "[7/119] news_4839.jpg"

# ID 4833 - 印度化學品、化妝品、染料貿易洽談會
curl -L -o "$DEST_DIR/news_4833.jpg" "https://www.fcci.org.tw/wp-content/uploads/2022/12/擷取.jpg"
echo "[8/119] news_4833.jpg"

# ID 4819 - 活動邀請：2022 GO SMART DAY
curl -L -o "$DEST_DIR/news_4819.jpg" "https://www.fcci.org.tw/wp-content/uploads/2022/02/擷取.jpg"
echo "[9/119] news_4819.jpg"

# ID 4789 - 印度商情資訊-NASSCOM Technology & Leadership Forum 2022
curl -L -o "$DEST_DIR/news_4789.jpg" "https://www.fcci.org.tw/wp-content/uploads/2022/01/擷取.jpg"
echo "[10/119] news_4789.jpg"

# ID 4774 - Wisdom Gathering Consulting Co., Ltd. | InfoComm Southeast Asia 2021 GoVirtual
curl -L -o "$DEST_DIR/news_4774.png" "https://www.fcci.org.tw/wp-content/uploads/2021/12/3.png"
echo "[11/119] news_4774.png"

# ID 4769 - FUNTEK Software Inc. | InfoComm Southeast Asia 2021 GoVirtual
curl -L -o "$DEST_DIR/news_4769.png" "https://www.fcci.org.tw/wp-content/uploads/2021/12/2.png"
echo "[12/119] news_4769.png"

# ID 4756 - Dp Smart Technology Co., Ltd | InfoComm Southeast Asia 2021 GoVirtual
curl -L -o "$DEST_DIR/news_4756.png" "https://www.fcci.org.tw/wp-content/uploads/2021/12/1.png"
echo "[13/119] news_4756.png"

# ID 4747 - 印度商情資訊-2020 北方邦 電子製造政策
curl -L -o "$DEST_DIR/news_4747.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/12/擷取-1.jpg"
echo "[14/119] news_4747.jpg"

# ID 4730 - 印度商情資訊-大規模電子製造的生產掛鉤激勵計劃 (PLI)
curl -L -o "$DEST_DIR/news_4730.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/12/擷取.jpg"
echo "[15/119] news_4730.jpg"

# ID 4720 - 12/1 臺灣智慧新科技 共創東協好食機
curl -L -o "$DEST_DIR/news_4720.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/11/官網1290x560-2.jpg"
echo "[16/119] news_4720.jpg"

# ID 4698 - 12/1 臺灣智慧新科技 共創東協好食機
curl -L -o "$DEST_DIR/news_4698.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/11/Webex封面-1.jpg"
echo "[17/119] news_4698.jpg"

# ID 4683 - 臺印度線上對談: 台印度智慧城市 概念驗證分享會
curl -L -o "$DEST_DIR/news_4683.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/11/擷取.jpg"
echo "[18/119] news_4683.jpg"

# ID 4652 - 台印度線上對談: 新創協同力-台印度生態系新未來
curl -L -o "$DEST_DIR/news_4652.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/11/03.-Group-Photo-2.jpg"
echo "[19/119] news_4652.jpg"

# ID 4628 - Hello Taiwan 數位內容創作營
curl -L -o "$DEST_DIR/news_4628.png" "https://www.fcci.org.tw/wp-content/uploads/2021/11/Hello-Taiwan-logo.png"
echo "[20/119] news_4628.png"

# ID 4606 - 台北市電腦公會攜手GO SMART InfoComm SEA 2021
curl -L -o "$DEST_DIR/news_4606.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/11/Webex封面.jpg"
echo "[21/119] news_4606.jpg"

# ID 4546 - 2021國際智慧醫院院長論壇
curl -L -o "$DEST_DIR/news_4546.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/10/245990279_963912577496202_8380468165667912792_n-1.jpg"
echo "[22/119] news_4546.jpg"

# ID 4541 - 台商印度經驗分享線上講座
curl -L -o "$DEST_DIR/news_4541.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/10/擷取-2.jpg"
echo "[23/119] news_4541.jpg"

# ID 4534 - 台北市電腦公會攜手GO SMART InfoComm SEA 2021
curl -L -o "$DEST_DIR/news_4534.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/10/Webex封面.jpg"
echo "[24/119] news_4534.jpg"

# ID 4499 - 臺印度線上對談: 新創協同力-台印度生態系新未來
curl -L -o "$DEST_DIR/news_4499.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/10/擷取.jpg"
echo "[25/119] news_4499.jpg"

# ID 4473 - 2021 歐盟投資論壇現已開放註冊
curl -L -o "$DEST_DIR/news_4473.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/10/123.jpg"
echo "[26/119] news_4473.jpg"

# ID 4387 - 2021 InnoVEX 科技部 Inno AI Program主題館
curl -L -o "$DEST_DIR/news_4387.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/09/edm_r1_c1.jpg"
echo "[27/119] news_4387.jpg"

# ID 4366 - 9/30 台灣與雪蘭莪中小企業數位商業媒合會
curl -L -o "$DEST_DIR/news_4366.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/09/Edited_EDM-1.jpg"
echo "[28/119] news_4366.jpg"

# ID 4343 - ITCF 2021: Mr. Frankwell Lin, Andes Technology
curl -L -o "$DEST_DIR/news_4343.png" "https://www.fcci.org.tw/wp-content/uploads/2021/09/Mr.-Frankwell-Lin-Andes-Tech.png"
echo "[29/119] news_4343.png"

# ID 4334 - ITCF 2021: Dr. Wen-Kuan Yeh, TSRI
curl -L -o "$DEST_DIR/news_4334.png" "https://www.fcci.org.tw/wp-content/uploads/2021/09/Dr.-Wen-Kuan-Yeh-TSRI.png"
echo "[30/119] news_4334.png"

# ID 4332 - Taiwan – ASEAN Digital Linking, E-Commerce Great Leap Forward
curl -L -o "$DEST_DIR/news_4332.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/09/擷取.jpg"
echo "[31/119] news_4332.jpg"

# ID 4305 - ITCF 2021: Ms. Rituparna Mandal, MediaTek India
curl -L -o "$DEST_DIR/news_4305.png" "https://www.fcci.org.tw/wp-content/uploads/2021/09/Ms.-Rituparna-Mandal-MediaTek.png"
echo "[32/119] news_4305.png"

# ID 4294 - ITCF 2021: Mr. K Krishna Moorthy, IESA
curl -L -o "$DEST_DIR/news_4294.png" "https://www.fcci.org.tw/wp-content/uploads/2021/09/Mr.-K-Krishna-Moorthy-IESA.png"
echo "[33/119] news_4294.png"

# ID 4288 - ITCF 2021: Mr. Saurabh Gaur, MeitY
curl -L -o "$DEST_DIR/news_4288.png" "https://www.fcci.org.tw/wp-content/uploads/2021/09/Mr.-Saurabh-Gaur-MeitY.png"
echo "[34/119] news_4288.png"

# ID 4282 - ITCF 2021: Dr. Kai-An Cheng, MIC
curl -L -o "$DEST_DIR/news_4282.png" "https://www.fcci.org.tw/wp-content/uploads/2021/09/Dr.-Kai-An-Cheng-MIC.png"
echo "[35/119] news_4282.png"

# ID 4274 - ITCF 2021: Mr. Rajeev Khushu, IESA
curl -L -o "$DEST_DIR/news_4274.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Mr.-Rajeev-Khushu-IESA.png"
echo "[36/119] news_4274.png"

# ID 4268 - ITCF 2021: Dr. Wen Kuan Yeh, TSRI
curl -L -o "$DEST_DIR/news_4268.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Dr.-Wen-Kuan-Yeh-TSRI-2.png"
echo "[37/119] news_4268.png"

# ID 4260 - ITCF 2021: Dr. V K Saraswat, NITI Aayog
curl -L -o "$DEST_DIR/news_4260.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Dr.-VK-Saraswat-NITI-Aayog.png"
echo "[38/119] news_4260.png"

# ID 4214 - 跨國商業研討會 資料新商機
curl -L -o "$DEST_DIR/news_4214.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/08/1.jpg"
echo "[39/119] news_4214.jpg"

# ID 4212 - ATCF 2021 Panel Discussion Challenges for 5G Development
curl -L -o "$DEST_DIR/news_4212.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Panel-Discussion-5.png"
echo "[40/119] news_4212.png"

# ID 4189 - ITCF 2021: 第十屆台印度合作論壇
curl -L -o "$DEST_DIR/news_4189.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/1.-Group-Photo-1.png"
echo "[41/119] news_4189.png"

# ID 4172 - ATCF 2021 Panel Discussion Foreign Assistance in ASEAN 5G
curl -L -o "$DEST_DIR/news_4172.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Panel-Discussion-4.png"
echo "[42/119] news_4172.png"

# ID 4167 - ATCF 2021 Panel Discussion 5G Opportunities for Taiwanese Startups
curl -L -o "$DEST_DIR/news_4167.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Panel-Discussion-3.png"
echo "[43/119] news_4167.png"

# ID 4159 - ATCF 2021 Panel Discussion most popular 5G applications
curl -L -o "$DEST_DIR/news_4159.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Panel-Discussion-2.png"
echo "[44/119] news_4159.png"

# ID 4133 - ATCF 2021 Panel Discussion ASEAN 5G Government Initiatives
curl -L -o "$DEST_DIR/news_4133.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/Panel-Discussion-1....png"
echo "[45/119] news_4133.png"

# ID 4114 - India uses diplomatic route to help car makers procure chips
curl -L -o "$DEST_DIR/news_4114.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/08/car_manufacturing_bccl.jpg"
echo "[46/119] news_4114.jpg"

# ID 4097 - ATCF 2021: Mr. Yong Kai Ping, Sidec
curl -L -o "$DEST_DIR/news_4097.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/vZpy1aZw.png"
echo "[47/119] news_4097.png"

# ID 4093 - ATCF 2021: Dr. Supakorn Siddhichai, DEPA
curl -L -o "$DEST_DIR/news_4093.png" "https://www.fcci.org.tw/wp-content/uploads/2021/08/rQPmGXKg.png"
echo "[48/119] news_4093.png"

# ID 4075 - 2021 SHE智慧醫療國際論壇 session 2
curl -L -o "$DEST_DIR/news_4075.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/08/20210722142043.jpg"
echo "[49/119] news_4075.jpg"

# ID 3986 - 2021 SHE智慧醫療國際論壇
curl -L -o "$DEST_DIR/news_3986.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/07/SHE-edm.jpg"
echo "[50/119] news_3986.jpg"

# ID 3942 - ITCF 2021 第十屆台印度合作論壇：晶圓之交
curl -L -o "$DEST_DIR/news_3942.jpeg" "https://www.fcci.org.tw/wp-content/uploads/2021/07/ITCF-虛擬背景-1280x720-1.jpeg"
echo "[51/119] news_3942.jpeg"

# ID 3933 - 7/15 東協合作論壇: 東協5G新世代
curl -L -o "$DEST_DIR/news_3933.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/07/Webex封面.jpg"
echo "[52/119] news_3933.jpg"

# ID 3897 - 7/15 東協合作論壇: 東協5G新世代
curl -L -o "$DEST_DIR/news_3897.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/07/官網首頁大圖.jpg"
echo "[53/119] news_3897.jpg"

# ID 3877 - Joint Roundtable on Semiconductors and Supply Chains
curl -L -o "$DEST_DIR/news_3877.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/TCSS活動EDM-1.jpg"
echo "[54/119] news_3877.jpg"

# ID 3768 - IndieTale: Talent Cultivation and Recruitment in India
curl -L -o "$DEST_DIR/news_3768.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/IndieTale-YouTube-縮圖02.png"
echo "[55/119] news_3768.png"

# ID 3604 - Thinkspace, Singapore | Smart Dialogue
curl -L -o "$DEST_DIR/news_3604.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/Thinkspace-Pitch-Singapore_0.png"
echo "[56/119] news_3604.png"

# ID 3594 - 緬甸政變對緬甸經濟與臺商之影響
curl -L -o "$DEST_DIR/news_3594.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/緬甸會議海報-2.png"
echo "[57/119] news_3594.png"

# ID 3610 - EQUO, Vietnam | Smart Dialogue
curl -L -o "$DEST_DIR/news_3610.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/EQUO-Pitch-Vietnam.png"
echo "[58/119] news_3610.png"

# ID 3615 - WEALTHI, Thailand | Smart Dialogue
curl -L -o "$DEST_DIR/news_3615.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/WEALTHI-Pitch-Thailand_0.png"
echo "[59/119] news_3615.png"

# ID 3621 - 2read, Thailand | Smart Dialogue
curl -L -o "$DEST_DIR/news_3621.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2read-Pitch-Thailand.png"
echo "[60/119] news_3621.png"

# ID 3625 - Just Car, Thailand | Smart Dialogue
curl -L -o "$DEST_DIR/news_3625.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/Just-Car-Pitch-Thailand.png"
echo "[61/119] news_3625.png"

# ID 3382 - Chaintope Inc., Malaysia | Smart Dialogue
curl -L -o "$DEST_DIR/news_3382.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/Chaintope-Inc.-Pitch-Malaysia.png"
echo "[62/119] news_3382.png"

# ID 3630 - Pasar Segar, Malaysia | Smart Dialogue
curl -L -o "$DEST_DIR/news_3630.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/Pasar-Segar-Pitch-Malaysia-.png"
echo "[63/119] news_3630.png"

# ID 3107 - HariGaji, Malaysia | Smart Dialogue
curl -L -o "$DEST_DIR/news_3107.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/HariGaji-Pitch-Malaysia_0.png"
echo "[64/119] news_3107.png"

# ID 3103 - FutureLab, Malaysia | Smart Dialogue
curl -L -o "$DEST_DIR/news_3103.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/FutureLab-Pitch-Malaysia.png"
echo "[65/119] news_3103.png"

# ID 3097 - Ones Awan Pitch, Malaysia | Smart Dialogue
curl -L -o "$DEST_DIR/news_3097.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/Ones-Awan-Pitch-Malaysia.png"
echo "[66/119] news_3097.png"

# ID 3082 - Imagine AI Pitch, Malaysia | Smart Dialogue
curl -L -o "$DEST_DIR/news_3082.png" "https://www.fcci.org.tw/wp-content/uploads/2021/06/Imagine-AI-Pitch-Malaysia.png"
echo "[67/119] news_3082.png"

# ID 2656 - InnoVEX Forum 2021
curl -L -o "$DEST_DIR/news_2656.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/擷取-19.jpg"
echo "[68/119] news_2656.jpg"

# ID 2566 - 2021 商貿亞洲創新館
curl -L -o "$DEST_DIR/news_2566.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/1290x560.jpg"
echo "[69/119] news_2566.jpg"

# ID 2548 - New Market Opportunity and Data Economy Forum on Transportation/Logistics
curl -L -o "$DEST_DIR/news_2548.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/Data-Economy-Forum.jpg"
echo "[70/119] news_2548.jpg"

# ID 2492 - ASEAN Panel Discussion Smart City and Industry Development
curl -L -o "$DEST_DIR/news_2492.png" "https://www.fcci.org.tw/wp-content/uploads/2021/05/0304-Panel.png"
echo "[71/119] news_2492.png"

# ID 2998 - International Partners Sharing | Smart Dialogue
curl -L -o "$DEST_DIR/news_2998.png" "https://www.fcci.org.tw/wp-content/uploads/2021/05/International-Partners.png"
echo "[72/119] news_2998.png"

# ID 2413 - Ms.Hong Sin Kwek, GRO (ACIOA) | Smart Dialogue
curl -L -o "$DEST_DIR/news_2413.png" "https://www.fcci.org.tw/wp-content/uploads/2021/05/0304-ACIOA.png"
echo "[73/119] news_2413.png"

# ID 2420 - Ms. Joy Chuang, Director, FCCI | Smart Dialogue
curl -L -o "$DEST_DIR/news_2420.png" "https://www.fcci.org.tw/wp-content/uploads/2021/05/0304-joy.png"
echo "[74/119] news_2420.png"

# ID 2365 - 數位經濟共榮時代 東協科技創新商機
curl -L -o "$DEST_DIR/news_2365.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/3.jpg"
echo "[75/119] news_2365.jpg"

# ID 2360 - 2021/5/5 數位經濟共榮時代 東協科技創新商機
curl -L -o "$DEST_DIR/news_2360.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/04/Webex封面圖.jpg"
echo "[76/119] news_2360.jpg"

# ID 2277 - Meet the Companies: ITRI (工研院) | Career Seminar 2021
curl -L -o "$DEST_DIR/news_2277.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/04/2555.jpg"
echo "[77/119] news_2277.jpg"

# ID 2259 - 2021/5/5 Smart Dialogue 數位經濟共榮時代 東協科技創新商機
curl -L -o "$DEST_DIR/news_2259.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/04/Webex封面圖.jpg"
echo "[78/119] news_2259.jpg"

# ID 2236 - 台印經貿人才講座
curl -L -o "$DEST_DIR/news_2236.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/04/擷取.jpg"
echo "[79/119] news_2236.jpg"

# ID 2229 - Meet the Companies: Neurelli (耐銳利科技) | Career Seminar 2021
curl -L -o "$DEST_DIR/news_2229.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/04/89.jpg"
echo "[80/119] news_2229.jpg"

# ID 2143 - 第19屆台印度經濟合作會議
curl -L -o "$DEST_DIR/news_2143.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/04/unnamed.jpg"
echo "[81/119] news_2143.jpg"

# ID 2126 - New Market, New Opportunity: Data Economy Forum on E-Commerce/Fintech
curl -L -o "$DEST_DIR/news_2126.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/03/881354-1.jpg"
echo "[82/119] news_2126.jpg"

# ID 2094 - 印度政府PLI Scheme補助案
curl -L -o "$DEST_DIR/news_2094.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/03/PLI-scheme-Image-13-11-11-2020.jpg"
echo "[83/119] news_2094.jpg"

# ID 2076 - Career Seminar 2021 活動回顧
curl -L -o "$DEST_DIR/news_2076.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/03/2021319-Career-Seminar_210322_18.jpg"
echo "[84/119] news_2076.jpg"

# ID 2059 - Career Seminar 2021 Meet the International Panel Speakers
curl -L -o "$DEST_DIR/news_2059.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/03/160513875_837451876808940_7786655501188186428_n1.jpg"
echo "[85/119] news_2059.jpg"

# ID 2049 - Open Positions Career Seminar 2021
curl -L -o "$DEST_DIR/news_2049.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/03/157755357_833504753870319_813709036704165164_n.jpg"
echo "[86/119] news_2049.jpg"

# ID 1620 - Career Seminar 2021 第十屆國際人才交流暨產業行銷說明會
curl -L -o "$DEST_DIR/news_1620.png" "https://www.fcci.org.tw/wp-content/uploads/2021/02/111.png"
echo "[87/119] news_1620.png"

# ID 1866 - Smart Dialogue 2021年東協智慧產業合作機會展望 (回顧)
curl -L -o "$DEST_DIR/news_1866.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/03/030410.jpg"
echo "[88/119] news_1866.jpg"

# ID 1776 - Smart Dialogue 2021年東協智慧產業合作機會展望
curl -L -o "$DEST_DIR/news_1776.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/03/ACIOA-Sample-0304.jpg"
echo "[89/119] news_1776.jpg"

# ID 2314 - 臺星智慧合作對談 智慧農業新科技
curl -L -o "$DEST_DIR/news_2314.jpg" "https://www.fcci.org.tw/wp-content/uploads/2020/11/124995107_768660540354741_6976797760428418519_n.jpg"
echo "[90/119] news_2314.jpg"

# ID 2336 - 臺緬攜手打造緬甸電子競技產業
curl -L -o "$DEST_DIR/news_2336.jpg" "https://www.fcci.org.tw/wp-content/uploads/2020/11/123944115_766264787260983_5345447040202071188_n.jpg"
echo "[91/119] news_2336.jpg"

# ID 3116 - 臺緬智慧合作對談 開啟緬甸智慧漁業新契機
curl -L -o "$DEST_DIR/news_3116.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/123559539_760048014549327_8987692491822326803_n.jpg"
echo "[92/119] news_3116.jpg"

# ID 2000 - 臺緬合作論壇 數位轉型浪潮起
curl -L -o "$DEST_DIR/news_2000.jpg" "https://www.fcci.org.tw/wp-content/uploads/2020/09/120445565_733598190527643_2243311123026413966_n-1.jpg"
echo "[93/119] news_2000.jpg"

# ID 2442 - 台印度對談：台印新創瘋電競
curl -L -o "$DEST_DIR/news_2442.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/TW-Speaker-Group-Photo.jpg"
echo "[94/119] news_2442.jpg"

# ID 3548 - 緯創印度招募說明會
curl -L -o "$DEST_DIR/news_3548.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/IMG_1438-scaled.jpg"
echo "[95/119] news_3548.jpg"

# ID 2448 - 台印度對談: 供應重組大風吹
curl -L -o "$DEST_DIR/news_2448.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/TW-Panelists.jpg"
echo "[96/119] news_2448.jpg"

# ID 2455 - ITCF 2020 第九屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2455.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/All-speakers.jpg"
echo "[97/119] news_2455.jpg"

# ID 2322 - 台灣東協智慧合作研討 後疫情時代
curl -L -o "$DEST_DIR/news_2322.jpg" "https://www.fcci.org.tw/wp-content/uploads/2020/06/104325414_663823250838471_1588312756516169909_n.jpg"
echo "[98/119] news_2322.jpg"

# ID 2043 - 開啟緬甸智慧農業新契機
curl -L -o "$DEST_DIR/news_2043.jpg" "https://www.fcci.org.tw/wp-content/uploads/2020/05/100060970_651096365444493_8091916254807326720_n.jpg"
echo "[99/119] news_2043.jpg"

# ID 2462 - 疫情下的數位商機研討會
curl -L -o "$DEST_DIR/news_2462.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/S__2023475.jpg"
echo "[100/119] news_2462.jpg"

# ID 3013 - Career Seminar 2020
curl -L -o "$DEST_DIR/news_3013.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/1.jpg"
echo "[101/119] news_3013.jpg"

# ID 2472 - 台印度對談: 新冠病毒大流行
curl -L -o "$DEST_DIR/news_2472.png" "https://www.fcci.org.tw/wp-content/uploads/2020/04/Mr.-Biswapriya-Bhattacharjee-2.png"
echo "[102/119] news_2472.png"

# ID 2435 - 東協台灣攜手型 新創商機探未來
curl -L -o "$DEST_DIR/news_2435.jpg" "https://www.fcci.org.tw/wp-content/uploads/2020/03/91780696_614634132424050_6529027086571536384_n.jpg"
echo "[103/119] news_2435.jpg"

# ID 3163 - 台印度對談：新創商機大探索
curl -L -o "$DEST_DIR/news_3163.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/201910-TWIN-DIALOGUE_210603_1.jpg"
echo "[104/119] news_3163.jpg"

# ID 3133 - 台印度對談：2019-2020年印度國家預算剖析
curl -L -o "$DEST_DIR/news_3133.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/201909-TWIN-DIALOGUE_210603_3.jpg"
echo "[105/119] news_3133.jpg"

# ID 2490 - ITCF 2019 第八屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2490.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/ITCF@2019_210526_1.jpg"
echo "[106/119] news_2490.jpg"

# ID 3318 - STCF 2019 臺新智慧產業合作論壇
curl -L -o "$DEST_DIR/news_3318.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2019-STCF_210607_11.jpg"
echo "[107/119] news_3318.jpg"

# ID 3406 - Career Seminar 2019 Your Career Aspiration
curl -L -o "$DEST_DIR/news_3406.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/031560v1-scaled.jpg"
echo "[108/119] news_3406.jpg"

# ID 3304 - MTCF 2019 透視緬甸數位願景
curl -L -o "$DEST_DIR/news_3304.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2019-MTCF_210607_0.jpg"
echo "[109/119] news_3304.jpg"

# ID 3241 - 印度古吉拉特全球高峰會
curl -L -o "$DEST_DIR/news_3241.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2019-VGGS_210604_21-1.jpg"
echo "[110/119] news_3241.jpg"

# ID 3546 - 台緬產業合作論壇 智慧商務研討會
curl -L -o "$DEST_DIR/news_3546.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2018-MTCF_210610_8.jpg"
echo "[111/119] news_3546.jpg"

# ID 2553 - ITCF 2018 第七屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2553.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/ITCF@2018_210526_6.jpg"
echo "[112/119] news_2553.jpg"

# ID 3525 - 臺新智慧產業合作論壇 合作再升級
curl -L -o "$DEST_DIR/news_3525.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2018-STCF_210610_2.jpg"
echo "[113/119] news_3525.jpg"

# ID 3341 - 智慧醫療無國界 南向醫衛拓商機
curl -L -o "$DEST_DIR/news_3341.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/20180327-smart_210608_12.jpg"
echo "[114/119] news_3341.jpg"

# ID 3196 - Career Seminar 2018 Your Career Aspiration
curl -L -o "$DEST_DIR/news_3196.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/201803-Career_210604_1.jpg"
echo "[115/119] news_3196.jpg"

# ID 3748 - 台緬資通訊業合作中心專案 電子商務教育訓練課程
curl -L -o "$DEST_DIR/news_3748.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/MGL2666-2.jpg"
echo "[116/119] news_3748.jpg"

# ID 3742 - 2017緬甸國際汽機車零配件展
curl -L -o "$DEST_DIR/news_3742.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/IMG_0523-scaled.jpg"
echo "[117/119] news_3742.jpg"

# ID 3698 - 台緬資通訊業合作中心專案 中小企業教育訓練課程
curl -L -o "$DEST_DIR/news_3698.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/IMG_9365-scaled.jpg"
echo "[118/119] news_3698.jpg"

# ID 2604 - ITCF 2017 第六屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2604.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/ITCF@2017_210526_6.jpg"
echo "[119/119] news_2604.jpg"

# ID 3640 - 台緬產業交流論壇 洞悉新時局
curl -L -o "$DEST_DIR/news_3640.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2017-MTCF_89-scaled.jpg"
echo "[120/133] news_3640.jpg"

# ID 3722 - 台緬資通訊業合作中心專案 赴緬甸交流回顧
curl -L -o "$DEST_DIR/news_3722.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/IMAG5234-scaled.jpg"
echo "[121/133] news_3722.jpg"

# ID 3635 - 墾拓東協沃土-緬甸智慧農業發展商機
curl -L -o "$DEST_DIR/news_3635.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/台緬第三國合作.jpg"
echo "[122/133] news_3635.jpg"

# ID 3843 - 2016年緬甸電機電子暨電力設備展
curl -L -o "$DEST_DIR/news_3843.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/7-1.jpg"
echo "[123/133] news_3843.jpg"

# ID 3829 - 數位援助課程 Myanmar Taiwan Cooperation Workshop
curl -L -o "$DEST_DIR/news_3829.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/6-1.jpg"
echo "[124/133] news_3829.jpg"

# ID 3818 - 仰光雲南商會研討會 Transforming to e-nation
curl -L -o "$DEST_DIR/news_3818.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/1-3.jpg"
echo "[125/133] news_3818.jpg"

# ID 3808 - 曼德勒商會研討會 Transforming to e-nation
curl -L -o "$DEST_DIR/news_3808.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/2-1.jpg"
echo "[126/133] news_3808.jpg"

# ID 3794 - 台灣電子化政府 電子化發展經驗分享
curl -L -o "$DEST_DIR/news_3794.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/4-scaled.jpg"
echo "[127/133] news_3794.jpg"

# ID 2612 - ITCF 2016 第五屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2612.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/ITCF@2016_210526_5.jpg"
echo "[128/133] news_2612.jpg"

# ID 3781 - 台灣農業技術推廣合作課程
curl -L -o "$DEST_DIR/news_3781.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/06/IMG_1545.jpg"
echo "[129/133] news_3781.jpg"

# ID 2627 - ITCF 2015 第四屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2627.jpg" "https://www.fcci.org.tw/wp-content/uploads/2021/05/ITCF@2015_210526_6.jpg"
echo "[130/133] news_2627.jpg"

# ID 2631 - ITCF 2014 第三屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2631.jpg" "https://www.fcci.org.tw/wp-content/uploads/2014/06/ITCF@2014_210526_5.jpg"
echo "[131/133] news_2631.jpg"

# ID 2638 - ITCF 2013 第二屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2638.jpg" "https://www.fcci.org.tw/wp-content/uploads/2013/06/ITCF@2013_210526_4-1.jpg"
echo "[132/133] news_2638.jpg"

# ID 2646 - ITCF 2012 第一屆台印度合作論壇
curl -L -o "$DEST_DIR/news_2646.jpg" "https://www.fcci.org.tw/wp-content/uploads/2012/11/ITCF@-2012_210526_7.jpg"
echo "[133/133] news_2646.jpg"

echo ""
echo "=========================================="
echo "Download complete! All images saved to: $DEST_DIR"
