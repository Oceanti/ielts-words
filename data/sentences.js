// 长难句数据库 — 六大句子成分标注
// 主=subject  谓=predicate  宾=object  定=attributive  状=adverbial  补=complement
window.SENTENCES_DATA = [
  // ======= 1-40：原有句集，重新标注 =======
  {id:1,en:"That sex ratio will be favored which maximizes the number of descendants an individual will have and hence the number of gene copies transmitted.",
zh:'那种性别比例能在最大程度上增加一个个体所能拥有的后代数量，并因此能在最大程度上增加所传递到后代身上去的基因复制品的数量。',
breakdown:[
  {role:"subject",text:"That sex ratio"},
  {role:"predicate",text:"will be favored"},
  {role:"attributive",text:"which maximizes the number of descendants"},
  {role:"attributive",text:"an individual will have"},
  {role:"object",text:"and hence the number of gene copies transmitted"}
],keywords:["sex ratio","maximize","descendants","gene copies"],source:"GRE经典"},

  {id:2,en:"A desire to throw over reality a light that never was might give away abruptly to the desire on the part of what we might consider a novelist-scientist to record exactly and concretely the structure and texture of a flower.",
zh:'一种照亮现实的欲望可能会突然让位于另一种欲望——即记录一朵花的结构与纹理的欲望，后者我们可以将其部分理解为一位兼任小说家和科学家的人所追求的。',
breakdown:[
  {role:"subject",text:"A desire"},
  {role:"attributive",text:"to throw over reality a light"},
  {role:"attributive",text:"that never was"},
  {role:"predicate",text:"might give away abruptly to the desire"},
  {role:"attributive",text:"on the part of what we might consider a novelist-scientist"},
  {role:"attributive",text:"to record exactly and concretely the structure and texture of a flower"}
],keywords:["give away to","novelist-scientist","exactly and concretely"],source:"GRE经典"},

  {id:3,en:"However, when we look at the 100 billion stars in our galaxy (the Milky Way), and 100 billion galaxies in the observable Universe, it seems inconceivable that at least one of these planets does not have a life form on it.",
zh:'然而，当我们注视着银河系中一千亿颗恒星以及可观测宇宙中一千亿个星系时，似乎难以想象这些行星中连一个有生命形式的都没有。',
breakdown:[
  {role:"adverbial",text:"However"},
  {role:"adverbial",text:"when we look at the 100 billion stars and 100 billion galaxies"},
  {role:"attributive",text:"in our galaxy, in the observable Universe"},
  {role:"subject",text:"it"},
  {role:"predicate",text:"seems inconceivable"},
  {role:"subject",text:"that at least one of these planets does not have a life form on it"}
],keywords:["galaxy","observable Universe","inconceivable","life form"],source:"剑9 Test 1 Passage 2"},

  {id:4,en:"An alien civilisation could choose many different ways of sending information across the galaxy, but many of these either require too much energy, or else are severely attenuated while traversing the vast distances across the galaxy.",
zh:'一个外星文明可以选择多种方式在银河系中传送信息，但其中许多方式要么需要太多能量，要么在穿越银河系的遥远距离时会被严重衰减。',
breakdown:[
  {role:"subject",text:"An alien civilisation"},
  {role:"predicate",text:"could choose"},
  {role:"object",text:"many different ways of sending information across the galaxy"},
  {role:"subject",text:"but many of these"},
  {role:"predicate",text:"either require too much energy, or else are severely attenuated"},
  {role:"adverbial",text:"while traversing the vast distances across the galaxy"}
],keywords:["alien civilisation","attenuated","traversing","vast distances"],source:"剑9 Test 1 Passage 2"},

  {id:5,en:"Second, we make a very conservative assumption that we are looking for a life form that is pretty well like us, since if it differs radically from us we may well not recognise it as a life form, quite apart from whether we are able to communicate with it.",
zh:'其次，我们做了一个非常保守的假设：我们正在寻找的生命形式和我们在很大程度上相似，因为如果它和我们截然不同，我们很可能无法认出它是一种生命形式，更不用说能否与它交流了。',
breakdown:[
  {role:"adverbial",text:"Second"},
  {role:"subject",text:"we"},
  {role:"predicate",text:"make"},
  {role:"object",text:"a very conservative assumption"},
  {role:"attributive",text:"that we are looking for a life form"},
  {role:"attributive",text:"that is pretty well like us"},
  {role:"adverbial",text:"since if it differs radically from us we may well not recognise it as a life form"},
  {role:"adverbial",text:"quite apart from whether we are able to communicate with it"}
],keywords:["conservative assumption","differs radically","recognise","communicate"],source:"剑9 Test 1 Passage 2"},

  {id:6,en:"At various points in evolutionary history, enterprising individuals within many different animal groups moved out onto the land, sometimes even to the most parched deserts, taking their own private seawater with them in blood and cellular fluids.",
zh:'在进化史上的不同时期，许多不同动物群体中具有冒险精神的个体迁移到了陆地上，有时甚至到了最干旱的沙漠，在血液和细胞体液中带着它们自己的私人海水。',
breakdown:[
  {role:"adverbial",text:"At various points in evolutionary history"},
  {role:"subject",text:"enterprising individuals within many different animal groups"},
  {role:"predicate",text:"moved out onto the land"},
  {role:"adverbial",text:"sometimes even to the most parched deserts"},
  {role:"adverbial",text:"taking their own private seawater with them in blood and cellular fluids"}
],keywords:["evolutionary","enterprising","parched","cellular fluids"],source:"剑9 Test 1 Passage 3"},

  {id:7,en:"An accident that occurred in the skies over the Grand Canyon in 1956 resulted in the establishment of the Federal Aviation Administration (FAA) to regulate and oversee the operation of aircraft in the skies over the United States, which were becoming quite congested.",
zh:'1956年大峡谷上空发生的一起事故导致了美国联邦航空管理局（FAA）的成立，以监管美国上空日益拥挤的飞机运行。',
breakdown:[
  {role:"subject",text:"An accident"},
  {role:"attributive",text:"that occurred in the skies over the Grand Canyon in 1956"},
  {role:"predicate",text:"resulted in"},
  {role:"object",text:"the establishment of the Federal Aviation Administration"},
  {role:"adverbial",text:"to regulate and oversee the operation of aircraft"},
  {role:"attributive",text:"which were becoming quite congested"}
],keywords:["resulted in","establishment","regulate","oversee","congested"],source:"剑8 Test 1 Passage 2"},

  {id:8,en:"They based their calendars on three natural cycles: the solar day, marked by the successive periods of light and darkness as the earth rotates on its axis; the lunar month, following the phases of the moon as it orbits the earth; and the solar year, defined by the changing seasons.",
zh:'他们的历法基于三个自然周期：太阳日（地球自转产生的昼夜交替）、太阴月（月球绕地球公转的相位变化）和回归年（季节变化所定义）。',
breakdown:[
  {role:"subject",text:"They"},
  {role:"predicate",text:"based"},
  {role:"object",text:"their calendars on three natural cycles"},
  {role:"attributive",text:"the solar day, marked by the successive periods of light and darkness"},
  {role:"attributive",text:"the lunar month, following the phases of the moon"},
  {role:"attributive",text:"the solar year, defined by the changing seasons"}
],keywords:["calendars","successive","axis","orbits","defined by"],source:"剑8 Test 1 Passage 1"},

  {id:9,en:"The revolutionary aspect of this new timekeeper was neither the descending weight that provided its motive force nor the gear wheels that transferred the power; it was the part called the escapement.",
zh:'这种新型计时器的革命性方面既不是提供动力的下降重锤，也不是传递动力的齿轮，而是被称为擒纵机构的部分。',
breakdown:[
  {role:"subject",text:"The revolutionary aspect of this new timekeeper"},
  {role:"predicate",text:"was neither the descending weight nor the gear wheels; it was the escapement"},
  {role:"attributive",text:"that provided its motive force"},
  {role:"attributive",text:"that transferred the power"},
  {role:"attributive",text:"called the escapement"}
],keywords:["revolutionary","descending weight","motive force","gear wheels","escapement"],source:"剑8 Test 1 Passage 1"},

  {id:10,en:"The scent she carried in her samples and on her body was a message to the other bees that this was the one they were looking for.",
zh:'她携带在样本中和身上的气味向其他蜜蜂传递了一个信息：这就是它们正在寻找的那一个。',
breakdown:[
  {role:"subject",text:"The scent"},
  {role:"attributive",text:"she carried in her samples and on her body"},
  {role:"predicate",text:"was a message to the other bees"},
  {role:"attributive",text:"that this was the one"},
  {role:"attributive",text:"they were looking for"}
],keywords:["scent","samples","message","looking for"],source:"剑4 General Training Test B"},

  {id:11,en:"These fracture zones, where the collisions occur, are where earthquakes happen.",
zh:'这些发生碰撞的断裂带就是地震发生的地方。',
breakdown:[
  {role:"subject",text:"These fracture zones"},
  {role:"attributive",text:", where the collisions occur,"},
  {role:"predicate",text:"are"},
  {role:"complement",text:"where earthquakes happen"}
],keywords:["fracture zones","collisions","earthquakes"],source:"剑4 Test 3 Passage 2"},

  {id:12,en:"When studying their mother tongue, linguists act as their own informants, judging the ambiguity, acceptability, or other properties of utterances against their own intuitions.",
zh:'在研究母语时，语言学家充当自己的信息提供者，根据自己的直觉判断话语的歧义性、可接受性或其他属性。',
breakdown:[
  {role:"adverbial",text:"When studying their mother tongue"},
  {role:"subject",text:"linguists"},
  {role:"predicate",text:"act as their own informants"},
  {role:"adverbial",text:"judging the ambiguity, acceptability, or other properties of utterances against their own intuitions"}
],keywords:["mother tongue","linguists","informants","ambiguity","utterances","intuitions"],source:"剑4 Test 3 Passage 3"},

  {id:13,en:"If you plot the amount of time a juvenile devotes to play each day over the course of its development, you discover a pattern typically associated with a 'sensitive period' — a window of opportunity during which the brain can actually be modified in ways that are not possible earlier or later in life.",
zh:'如果你绘制出幼年动物在成长过程中每天用于玩耍的时间量变化图，你会发现一种通常与「敏感期」相关的模式——一个机会窗口，在此期间大脑实际上可以以生命中更早或更晚时期不可能的方式被改变。',
breakdown:[
  {role:"adverbial",text:"If you plot the amount of time"},
  {role:"attributive",text:"a juvenile devotes to play each day over the course of its development"},
  {role:"subject",text:"you"},
  {role:"predicate",text:"discover"},
  {role:"object",text:"a pattern"},
  {role:"attributive",text:"typically associated with a 'sensitive period' — a window of opportunity"},
  {role:"attributive",text:"during which the brain can actually be modified in ways"},
  {role:"attributive",text:"that are not possible earlier or later in life"}
],keywords:["plot","juvenile","sensitive period","window of opportunity","modified"],source:"剑4 Test 2 Passage 3"},

  {id:14,en:"It seems simple enough to distinguish between the organism and the surrounding environment and to separate forces acting on an organism into those that are internal and biological and those that are external and environmental.",
zh:'区分有机体和周围环境似乎很简单，把作用于有机体的力量分为内在生物力量和外在环境力量似乎也很简单。',
breakdown:[
  {role:"subject",text:"It"},
  {role:"predicate",text:"seems simple enough"},
  {role:"subject",text:"to distinguish between the organism and the surrounding environment"},
  {role:"subject",text:"and to separate forces acting on an organism into those"},
  {role:"attributive",text:"that are internal and biological"},
  {role:"attributive",text:"and those that are external and environmental"}
],keywords:["organism","surrounding environment","separate forces","internal","external"],source:"新航道经典例句"},

  {id:15,en:"Behaviorists suggest that the child who is raised in an environment where there are many stimuli which develop his or her capacity for appropriate responses will experience greatly intellectual development.",
zh:'行为主义者认为，在拥有众多刺激（这些刺激能培养孩子做出适当反应的能力）的环境中长大的孩子将经历极大的智力发展。',
breakdown:[
  {role:"subject",text:"Behaviorists"},
  {role:"predicate",text:"suggest"},
  {role:"object",text:"that the child ... will experience greatly intellectual development"},
  {role:"attributive",text:"who is raised in an environment"},
  {role:"attributive",text:"where there are many stimuli"},
  {role:"attributive",text:"which develop his or her capacity for appropriate responses"}
],keywords:["behaviorists","stimuli","capacity","appropriate responses","intellectual development"],source:"雅思经典"},

  {id:16,en:"The International Institute of Noise Control Engineering (I-INCE), on the advice of the World Health Organization, has established an international working party, which includes New Zealand, to evaluate noise and reverberation control for school rooms.",
zh:'国际噪声控制工程学会（I-INCE）在世界卫生组织的建议下，成立了一个包括新西兰在内的国际工作组，以评估教室的噪声和混响控制。',
breakdown:[
  {role:"subject",text:"The International Institute of Noise Control Engineering (I-INCE)"},
  {role:"adverbial",text:", on the advice of the World Health Organization,"},
  {role:"predicate",text:"has established"},
  {role:"object",text:"an international working party"},
  {role:"attributive",text:", which includes New Zealand,"},
  {role:"adverbial",text:"to evaluate noise and reverberation control for school rooms"}
],keywords:["noise control","World Health Organization","reverberation","school rooms"],source:"剑9 Test 2 Passage 1"},

  {id:17,en:"Children in low-income families and poor communities are less likely to take organized youth sports for granted because they often lack the resources needed to pay for participation fees, equipment, and transportation to practices and games.",
zh:'来自低收入家庭和贫困社区的孩子不太可能将组织化的青少年体育视为理所当然，因为他们常常缺乏支付参与费用、设备和往返训练及比赛交通所需的资金。',
breakdown:[
  {role:"subject",text:"Children in low-income families and poor communities"},
  {role:"predicate",text:"are less likely to take organized youth sports for granted"},
  {role:"adverbial",text:"because they often lack the resources"},
  {role:"attributive",text:"needed to pay for participation fees, equipment, and transportation to practices and games"}
],keywords:["low-income","take for granted","participation fees","transportation"],source:"新航道经典例句"},

  {id:18,en:"The number of colonies in the study area was not limited by availability of suitable trees, and a clumped or regular distribution of colonies was not due to an underlying clumped or regular distribution of potential nest sites.",
zh:'研究区域中群落数量并不受合适树木可用性的限制，而群落的聚集或规则分布也并非由于潜在的巢址的聚集或规则分布。',
breakdown:[
  {role:"subject",text:"The number of colonies in the study area"},
  {role:"predicate",text:"was not limited by availability of suitable trees"},
  {role:"subject",text:"and a clumped or regular distribution of colonies"},
  {role:"predicate",text:"was not due to an underlying clumped or regular distribution of potential nest sites"}
],keywords:["colonies","availability","clumped","regular distribution","nest sites"],source:"剑4 Test 2 Passage 1"},

  {id:19,en:"The full import may take a while to sink in: the NT Rights of the Terminally Ill law has left physicians and citizens alike trying to deal with its moral and practical implications.",
zh:'该法案的深刻含义可能需要一段时间才能被充分理解：北领地晚期病人权利法让医生和公民都在努力应对其道德和实践层面的影响。',
breakdown:[
  {role:"subject",text:"The full import"},
  {role:"predicate",text:"may take a while to sink in"},
  {role:"attributive",text:"the NT Rights of the Terminally Ill law has left physicians and citizens alike trying to deal with its moral and practical implications"}
],keywords:["import","sink in","terminally ill","implications"],source:"雅思阅读经典"},

  {id:20,en:"With economic growth has come centralization; fully 76 percent of Japan's 119 million citizens live in cities where community and the extended family have been abandoned in favor of isolated, two-generation households.",
zh:'随着经济增长而来的是集中化；日本1.19亿人口中足有76%居住在城市，在那里社区和几世同堂的大家庭已被抛弃，取而代之的是孤立的两代之家。',
breakdown:[
  {role:"adverbial",text:"With economic growth"},
  {role:"predicate",text:"has come"},
  {role:"subject",text:"centralization"},
  {role:"subject",text:"fully 76 percent of Japan's 119 million citizens"},
  {role:"predicate",text:"live in cities"},
  {role:"attributive",text:"where community and the extended family have been abandoned in favor of isolated, two-generation households"}
],keywords:["centralization","extended family","abandoned","two-generation households"],source:"考研英语经典"},

  {id:21,en:"Accompanying such a growth in trade and commerce were the establishment of guilds and the improvement in monetary systems, which, in turn, further enhanced the trade expansion.",
zh:'伴随着贸易和商业的增长，同业公会得以建立，货币体系得以完善；相应地，这也进一步促进了贸易的扩张。',
breakdown:[
  {role:"predicate",text:"Accompanying such a growth in trade and commerce were"},
  {role:"subject",text:"the establishment of guilds and the improvement in monetary systems"},
  {role:"attributive",text:", which, in turn, further enhanced the trade expansion"}
],keywords:["accompanying","guilds","monetary systems","trade expansion"],source:"剑4 Test 1 Passage 1"},

  {id:22,en:"Whales (including the small whales we call dolphins), and dugongs with their close cousins the manatees, ceased to be land creatures altogether and reverted to the full marine habits of their remote ancestors.",
zh:'鲸类（包括我们称之为海豚的小型鲸类）以及儒艮和它们近亲海牛，完全不再是陆地生物，重新恢复了它们遥远祖先的完全海洋习性。',
breakdown:[
  {role:"subject",text:"Whales, and dugongs with their close cousins the manatees"},
  {role:"attributive",text:"(including the small whales we call dolphins)"},
  {role:"predicate",text:"ceased to be land creatures altogether and reverted to the full marine habits"},
  {role:"attributive",text:"of their remote ancestors"}
],keywords:["dugongs","manatees","ceased","reverted","marine habits","remote ancestors"],source:"剑9 Passage 3"},

  {id:23,en:"Among the kinds of social gestures most significant for second-language teachers are those which are identical in form but different in meaning in the two cultures.",
zh:'对于第二语言教师来说，最具重要性的社交手势中，有那些在两种文化中形式相同但含义不同的手势。',
breakdown:[
  {role:"complement",text:"Among the kinds of social gestures most significant for second-language teachers"},
  {role:"predicate",text:"are"},
  {role:"subject",text:"those"},
  {role:"attributive",text:"which are identical in form but different in meaning in the two cultures"}
],keywords:["social gestures","second-language","identical","cultures"],source:"雅思阅读经典"},

  {id:24,en:"The remains of the infants and children in the prehistoric burial sites are so limited that the archaeologists have had to rely on assumptions and inferences, rather than direct evidence, to understand ancient childhood.",
zh:'史前墓葬遗址中婴幼儿的遗骸非常有限，因此考古学家不得不依靠假设和推断，而非直接证据，来了解古代的童年。',
breakdown:[
  {role:"subject",text:"The remains of the infants and children in the prehistoric burial sites"},
  {role:"predicate",text:"are so limited that the archaeologists have had to rely on assumptions and inferences"},
  {role:"adverbial",text:", rather than direct evidence,"},
  {role:"adverbial",text:"to understand ancient childhood"}
],keywords:["remains","prehistoric","burial sites","assumptions","inferences"],source:"剑4 Test 1 Passage 1"},

  {id:25,en:"In a significant tightening of legal controls over the press, Lord Irvine, the Lord Chancellor, will introduce a draft bill that will propose making payments to witnesses illegal and will strictly control the amount of publicity that can be given to a case before a trial begins.",
zh:'在对新闻界进行法律控制的重大收紧中，大法官欧文勋爵将提出一项草案，该草案将提议向证人支付报酬为非法，并将严格控制审判开始前可给予案件的公开报道量。',
breakdown:[
  {role:"adverbial",text:"In a significant tightening of legal controls over the press"},
  {role:"subject",text:"Lord Irvine, the Lord Chancellor,"},
  {role:"predicate",text:"will introduce"},
  {role:"object",text:"a draft bill"},
  {role:"attributive",text:"that will propose making payments to witnesses illegal and will strictly control the amount of publicity"},
  {role:"attributive",text:"that can be given to a case"},
  {role:"adverbial",text:"before a trial begins"}
],keywords:["tightening","legal controls","draft bill","witnesses","publicity","trial"],source:"雅思阅读经典"},

  {id:26,en:"His thesis works relatively well when applied to discrimination against Blacks in the United States, but his definition of racial prejudice as racially-based negative prejudgments against a group can be interpreted as also including hostility toward such ethnic groups as the Chinese in California and the Jews in medieval Europe.",
zh:'他的论点应用于美国针对黑人的歧视时相对有效，但他将种族偏见定义为基于种族的对某个群体的负面预判，这也可以被理解为包含了对加州华人和中世纪欧洲犹太人等族群的敌视态度。',
breakdown:[
  {role:"subject",text:"His thesis"},
  {role:"predicate",text:"works relatively well"},
  {role:"adverbial",text:"when applied to discrimination against Blacks in the United States"},
  {role:"subject",text:"but his definition ... can be interpreted as also including hostility"},
  {role:"attributive",text:"of racial prejudice as racially-based negative prejudgments against a group"},
  {role:"attributive",text:"toward such ethnic groups as the Chinese in California and the Jews in medieval Europe"}
],keywords:["thesis","discrimination","racial prejudice","prejudgments","hostility","ethnic groups"],source:"GRE/雅思经典"},

  {id:27,en:"A modern hard-core sociobiologist might even go so far as to claim that this aggressive instinct evolved as an advantageous trait, having been of survival value to our ancestors in their struggle against the hardships of life on the plains and in the caves, ultimately finding its way into our genetic make-up as a remnant of our ancient animal ways.",
zh:'现代强硬派社会生物学家甚至可能声称，这种攻击性本能是作为一种有利特征进化而来的，在祖先与平原和洞穴中艰难生活的斗争中被赋予了生存价值，最终作为我们远古动物方式的残余进入了我们的基因构成。',
breakdown:[
  {role:"subject",text:"A modern hard-core sociobiologist"},
  {role:"predicate",text:"might even go so far as to claim"},
  {role:"object",text:"that this aggressive instinct evolved as an advantageous trait"},
  {role:"adverbial",text:"having been of survival value to our ancestors"},
  {role:"adverbial",text:"in their struggle against the hardships of life on the plains and in the caves"},
  {role:"adverbial",text:"ultimately finding its way into our genetic make-up as a remnant of our ancient animal ways"}
],keywords:["sociobiologist","aggressive instinct","advantageous trait","survival value","genetic make-up","remnant"],source:"剑5 Test 1 Passage 2"},

  {id:28,en:"There are many different formats of the land deed, but in all of them the pattern is the same: the seller first declares that he is the legitimate owner of the property and that he has the authority to sell it, then describes the property boundaries in detail.",
zh:'地契有许多不同的格式，但所有格式的模式都相同：卖方首先声明他是该财产的合法所有者且拥有出售权，然后详细描述财产边界。',
breakdown:[
  {role:"predicate",text:"There are"},
  {role:"subject",text:"many different formats of the land deed"},
  {role:"adverbial",text:"but in all of them"},
  {role:"subject",text:"the pattern"},
  {role:"predicate",text:"is the same"},
  {role:"attributive",text:"the seller first declares that he is the legitimate owner and that he has the authority to sell it, then describes the property boundaries in detail"}
],keywords:["formats","land deed","legitimate owner","authority","boundaries"],source:"剑4 Test 3 Passage 1"},

  {id:29,en:"On the other hand, the construction of a modern building is so complex and costly that it inevitably requires the involvement of a large number of different experts - architects, structural engineers, quantity surveyors, and so on.",
zh:'另一方面，现代建筑的建设如此复杂且昂贵，以至于不可避免地需要大量不同专家的参与——建筑师、结构工程师、工程量估算师等等。',
breakdown:[
  {role:"adverbial",text:"On the other hand"},
  {role:"subject",text:"the construction of a modern building"},
  {role:"predicate",text:"is so complex and costly that it inevitably requires the involvement of a large number of different experts"},
  {role:"attributive",text:"- architects, structural engineers, quantity surveyors, and so on"}
],keywords:["construction","complex","costly","involvement","quantity surveyors"],source:"剑5 Test 3 Passage 2"},

  {id:30,en:"A few years ago, in one of the most fascinating and disturbing experiments in behavioural psychology, Stanley Milgram of Yale University tested 40 subjects from all walks of life for their willingness to obey instructions given by a 'leader' in a situation in which the subjects might feel a personal distaste for the actions they were called upon to perform.",
zh:'几年前，在行为心理学中最引人入胜也最令人不安的实验之一中，耶鲁大学的斯坦利·米尔格拉姆测试了来自各行各业的40名受试者，测试他们在可能对要求执行的行为感到个人厌恶的情况下，服从「领袖」指令的意愿。',
breakdown:[
  {role:"adverbial",text:"A few years ago, in one of the most fascinating and disturbing experiments"},
  {role:"subject",text:"Stanley Milgram of Yale University"},
  {role:"predicate",text:"tested"},
  {role:"object",text:"40 subjects from all walks of life"},
  {role:"adverbial",text:"for their willingness to obey instructions given by a 'leader'"},
  {role:"attributive",text:"in which the subjects might feel a personal distaste for the actions"},
  {role:"attributive",text:"they were called upon to perform"}
],keywords:["fascinating","disturbing","behavioural psychology","subjects","all walks of life","willingness","obey","distaste"],source:"剑5 Test 1 Passage 2"},

  {id:31,en:"Those who believe that science is ultimately beneficial for society will point out that without scientific progress, many of the diseases that plague humanity today would still be untreatable, and our quality of life would be far worse.",
zh:'那些相信科学最终对社会有益的人会指出，没有科学进步，许多当今困扰人类的疾病仍然无法治疗，我们的生活质量将糟糕得多。',
breakdown:[
  {role:"subject",text:"Those"},
  {role:"attributive",text:"who believe that science is ultimately beneficial for society"},
  {role:"predicate",text:"will point out"},
  {role:"object",text:"that without scientific progress, many of the diseases would still be untreatable, and our quality of life would be far worse"},
  {role:"attributive",text:"that plague humanity today"}
],keywords:["ultimately beneficial","scientific progress","plague","untreatable","quality of life"],source:"雅思写作经典"},

  {id:32,en:"The fact that the hard-won discoveries of scientists like Kepler or Einstein become the commonplace knowledge of schoolchildren demonstrates that their minds are not different from our own.",
zh:'像开普勒或爱因斯坦这样的科学家来之不易的发现变成了学童的常识，这一事实证明了他们的思维与我们的并无不同。',
breakdown:[
  {role:"subject",text:"The fact"},
  {role:"attributive",text:"that the hard-won discoveries of scientists like Kepler or Einstein become the commonplace knowledge of schoolchildren"},
  {role:"predicate",text:"demonstrates"},
  {role:"object",text:"that their minds are not different from our own"}
],keywords:["hard-won","discoveries","commonplace knowledge","schoolchildren","demonstrates"],source:"新航道经典"},

  {id:33,en:"The idea that a city should be planned as a whole, with all its various parts functioning together in a harmonious relationship, is a relatively recent one in the history of urban development.",
zh:'城市应该作为一个整体来规划，其各个部分以和谐的关系共同运作，这一理念在城市发展史上是相对较新的。',
breakdown:[
  {role:"subject",text:"The idea"},
  {role:"attributive",text:"that a city should be planned as a whole"},
  {role:"adverbial",text:"with all its various parts functioning together in a harmonious relationship"},
  {role:"predicate",text:"is a relatively recent one"},
  {role:"adverbial",text:"in the history of urban development"}
],keywords:["planned as a whole","harmonious relationship","relatively recent","urban development"],source:"剑6 Test 1 Passage 1"},

  {id:34,en:"Not only did the new transport system make it possible for people to live farther away from their workplaces, but it also led to a fundamental change in the way cities were structured, with the emergence of distinct residential and commercial zones.",
zh:'新的交通系统不仅使人们能够住得离工作地点更远，而且还导致了城市结构方式的根本性变化，出现了明显的住宅区和商业区。',
breakdown:[
  {role:"subject",text:"the new transport system"},
  {role:"predicate",text:"Not only did ... make it possible, but it also led to a fundamental change"},
  {role:"adverbial",text:"for people to live farther away from their workplaces"},
  {role:"attributive",text:"in the way cities were structured"},
  {role:"adverbial",text:"with the emergence of distinct residential and commercial zones"}
],keywords:["transport system","fundamental change","residential","commercial zones","emergence"],source:"剑6 Test 1 Passage 1"},

  {id:35,en:"Although the term 'globalisation' is relatively new, the process of globalisation itself is not, and has been going on, in various forms, for centuries if not millennia.",
zh:'尽管「全球化」这个术语相对较新，但全球化进程本身并非如此，它已经以各种形式进行了几百年甚至几千年。',
breakdown:[
  {role:"adverbial",text:"Although the term 'globalisation' is relatively new"},
  {role:"subject",text:"the process of globalisation itself"},
  {role:"predicate",text:"is not new, and has been going on for centuries if not millennia"},
  {role:"adverbial",text:", in various forms,"}
],keywords:["globalisation","relatively new","process","various forms"],source:"雅思写作经典"},

  {id:36,en:"The extent to which a building contributes to the quality of the urban environment depends not only on its architectural merit but also on how well it relates to its surroundings and to the needs of the people who use it.",
zh:'一栋建筑对城市环境质量的贡献程度不仅取决于其建筑价值，还取决于它与其周围环境以及使用它的人的需求之间的关系好坏。',
breakdown:[
  {role:"subject",text:"The extent"},
  {role:"attributive",text:"to which a building contributes to the quality of the urban environment"},
  {role:"predicate",text:"depends not only on its architectural merit but also on how well it relates"},
  {role:"adverbial",text:"to its surroundings and to the needs of the people"},
  {role:"attributive",text:"who use it"}
],keywords:["contributes to","architectural merit","relates to","surroundings"],source:"剑6 Test 3 Passage 1"},

  {id:37,en:"While the number of species on Earth is unknown, scientists estimate that we are currently losing species at a rate that is far greater than the natural background extinction rate, primarily as a result of human activities such as habitat destruction and climate change.",
zh:'虽然地球上的物种数量未知，但科学家估计我们目前正在以远超自然本底灭绝率的速度失去物种，这主要是由栖息地破坏和气候变化等人类活动造成的。',
breakdown:[
  {role:"adverbial",text:"While the number of species on Earth is unknown"},
  {role:"subject",text:"scientists"},
  {role:"predicate",text:"estimate"},
  {role:"object",text:"that we are currently losing species at a rate"},
  {role:"attributive",text:"that is far greater than the natural background extinction rate"},
  {role:"adverbial",text:"as a result of human activities such as habitat destruction and climate change"}
],keywords:["species","extinction rate","habitat destruction","climate change","background extinction"],source:"剑7 Test 1 Passage 1"},

  {id:38,en:"The research suggests that the most effective way to improve a child's reading ability is not through rote learning or repetitive drilling, but through encouraging a genuine love of reading by providing access to a wide range of interesting and age-appropriate books.",
zh:'研究表明，提高儿童阅读能力最有效的方法不是通过死记硬背或重复训练，而是通过提供各种有趣且适龄的书籍来鼓励真正的阅读兴趣。',
breakdown:[
  {role:"subject",text:"The research"},
  {role:"predicate",text:"suggests"},
  {role:"object",text:"that the most effective way ... is not through rote learning or repetitive drilling, but through encouraging a genuine love of reading"},
  {role:"attributive",text:"to improve a child's reading ability"},
  {role:"adverbial",text:"by providing access to a wide range of interesting and age-appropriate books"}
],keywords:["research","reading ability","rote learning","repetitive drilling","age-appropriate"],source:"剑7 Test 2 Passage 2"},

  {id:39,en:"Education should aim not only at imparting knowledge but also at cultivating the capacity to think critically and independently, for it is these skills that enable individuals to adapt to a rapidly changing world and to contribute meaningfully to society.",
zh:'教育的目标不仅在于传授知识，还在于培养批判性和独立思考的能力，因为正是这些技能使个体能够适应快速变化的世界并对社会做出有意义的贡献。',
breakdown:[
  {role:"subject",text:"Education"},
  {role:"predicate",text:"should aim not only at imparting knowledge but also at cultivating the capacity"},
  {role:"attributive",text:"to think critically and independently"},
  {role:"adverbial",text:"for it is these skills that enable individuals to adapt to a rapidly changing world and to contribute meaningfully to society"}
],keywords:["imparting knowledge","cultivating","think critically","adapt","contribute meaningfully"],source:"雅思写作经典"},

  {id:40,en:"Despite the fact that computers have become increasingly powerful and sophisticated, the human brain remains far more complex than any machine yet devised, possessing capacities for creativity, emotion, and self-awareness that continue to elude scientific replication.",
zh:'尽管计算机已变得越来越强大和精密，但人脑仍然远比任何已发明的机器复杂得多，拥有着创造力、情感和自我意识等能力，这些能力仍然无法被科学复制。',
breakdown:[
  {role:"adverbial",text:"Despite the fact that computers have become increasingly powerful and sophisticated"},
  {role:"subject",text:"the human brain"},
  {role:"predicate",text:"remains far more complex than any machine yet devised"},
  {role:"adverbial",text:"possessing capacities for creativity, emotion, and self-awareness"},
  {role:"attributive",text:"that continue to elude scientific replication"}
],keywords:["sophisticated","complex","creativity","emotion","self-awareness","elude","scientific replication"],source:"雅思写作经典"},

  // ======= 41-60：新航道/剑桥真题 =======
  {id:41,en:"As audiences grew, so did the places where films were shown, finishing up with the 'great picture palaces' of the 1920s, which rivaled, and occasionally superseded, theatres and opera-houses in terms of opulence and splendour.",
zh:'随着观众数量的增长，放映电影的地方也越来越多，最终在20世纪20年代出现了「宏伟的电影宫殿」，其在富丽堂皇方面可与剧院和歌剧院媲美，甚至偶尔超越之。',
breakdown:[
  {role:"adverbial",text:"As audiences grew"},
  {role:"subject",text:"the places"},
  {role:"predicate",text:"so did"},
  {role:"attributive",text:"where films were shown"},
  {role:"adverbial",text:"finishing up with the 'great picture palaces' of the 1920s"},
  {role:"attributive",text:"which rivaled, and occasionally superseded, theatres and opera-houses in terms of opulence and splendour"}
],keywords:["audiences","picture palaces","rivaled","superseded","opulence","splendour"],source:"剑4 General Training Test A"},

  {id:42,en:"It was above all the French, followed by the Americans, who were the most passionate exporters of the new invention, helping to start cinema in China, Japan, Latin America and Russia.",
zh:'首先是法国人，其次是美国人，他们是这项新发明最热情的推广者，帮助在中国、日本、拉丁美洲和俄罗斯开创了电影业。',
breakdown:[
  {role:"subject",text:"It"},
  {role:"predicate",text:"was above all the French ... who were the most passionate exporters"},
  {role:"adverbial",text:", followed by the Americans,"},
  {role:"attributive",text:"of the new invention"},
  {role:"adverbial",text:"helping to start cinema in China, Japan, Latin America and Russia"}
],keywords:["French","exporters","invention","cinema"],source:"剑4 General Training Test A"},

  {id:43,en:"In terms of artistic development it was again the French and the Americans who took the lead, though in the years before the First World War, Italy, Denmark and Russia also played a part.",
zh:'就艺术发展而言，再次是法国人和美国人占据了领先地位，尽管在第一次世界大战之前的年代里，意大利、丹麦和俄罗斯也发挥了一定作用。',
breakdown:[
  {role:"adverbial",text:"In terms of artistic development"},
  {role:"subject",text:"it"},
  {role:"predicate",text:"was again the French and the Americans who took the lead"},
  {role:"adverbial",text:"though in the years before the First World War, Italy, Denmark and Russia also played a part"}
],keywords:["artistic development","took the lead","played a part"],source:"剑4 General Training Test A"},

  {id:44,en:"The rest of the world survived partly by learning from Hollywood and partly because audiences continued to exist for a product which corresponded to needs which Hollywood could not supply.",
zh:'世界其他地区得以幸存，部分原因在于向好莱坞学习，部分原因在于观众仍然需要一种符合好莱坞无法满足的需求的产品。',
breakdown:[
  {role:"subject",text:"The rest of the world"},
  {role:"predicate",text:"survived"},
  {role:"adverbial",text:"partly by learning from Hollywood and partly because audiences continued to exist for a product"},
  {role:"attributive",text:"which corresponded to needs"},
  {role:"attributive",text:"which Hollywood could not supply"}
],keywords:["survived","learning from","corresponded to","supply"],source:"剑4 General Training Test A"},

  {id:45,en:"As well as popular audiences, there were also increasing audiences for films which were artistically more adventurous or which dealt with the issues in the outer world.",
zh:'除了大众观众之外，还有越来越多的观众喜欢那些在艺术上更具冒险精神或涉及外部世界问题的电影。',
breakdown:[
  {role:"adverbial",text:"As well as popular audiences"},
  {role:"predicate",text:"there were also increasing audiences for films"},
  {role:"attributive",text:"which were artistically more adventurous"},
  {role:"attributive",text:"or which dealt with the issues in the outer world"}
],keywords:["popular audiences","artistically","adventurous","dealt with","issues"],source:"剑4 General Training Test A"},

  {id:46,en:"They turned their back on the past, leaving the style of the pre-war Russian cinema to the emigres who fled westwards to escape the Revolution.",
zh:'他们背弃了过去，把战前俄罗斯电影的风格留给了那些向西逃亡以躲避革命的流亡者。',
breakdown:[
  {role:"subject",text:"They"},
  {role:"predicate",text:"turned their back on the past"},
  {role:"adverbial",text:"leaving the style of the pre-war Russian cinema to the emigres"},
  {role:"attributive",text:"who fled westwards to escape the Revolution"}
],keywords:["turned their back","pre-war","emigres","fled","escape"],source:"剑4 General Training Test A"},

  {id:47,en:"Soon he would also discover a number of other remarkable facts about how bees communicate and, in doing so, revolutionize the study of animal behavior generally.",
zh:'不久他还将发现关于蜜蜂如何交流的一系列其他显著事实，并在此过程中彻底改变对动物行为的研究。',
breakdown:[
  {role:"adverbial",text:"Soon"},
  {role:"subject",text:"he"},
  {role:"predicate",text:"would also discover ... and revolutionize"},
  {role:"object",text:"a number of other remarkable facts about how bees communicate"},
  {role:"adverbial",text:", in doing so,"},
  {role:"object",text:"the study of animal behavior generally"}
],keywords:["remarkable","communicate","revolutionize","animal behavior"],source:"剑4 General Training Test B"},

  {id:48,en:"There had, of course, been dictionaries in the past, the first of these being a little book of some 120 pages, compiled by a certain Robert Cawdray, published in 1604 under the title A Table Alphabeticall 'of hard usual English words'.",
zh:'当然，过去也曾有过词典，其中最早的一本是一本约120页的小书，由一位名叫罗伯特·考德雷的人编纂，于1604年出版，书名为《难解常用英语词字母表》。',
breakdown:[
  {role:"predicate",text:"There had been"},
  {role:"subject",text:"dictionaries in the past"},
  {role:"adverbial",text:", of course,"},
  {role:"attributive",text:"the first of these being a little book of some 120 pages"},
  {role:"attributive",text:"compiled by a certain Robert Cawdray"},
  {role:"attributive",text:"published in 1604 under the title A Table Alphabeticall"}
],keywords:["dictionaries","compiled","published","table alphabeticall"],source:"剑5 Test 1 Passage 1"},

  {id:49,en:"It is highly appropriate that Dr Samuel Johnson, the very model of an eighteenth-century literary man, as famous in his own time as in ours, should have published his Dictionary at the very beginning of the heyday of the middle class.",
zh:'塞缪尔·约翰逊博士——这位18世纪文人的典范，在其时代和在我们时代同样著名——恰好在中产阶级鼎盛时期之初出版了他的词典，这是非常恰当的。',
breakdown:[
  {role:"subject",text:"It"},
  {role:"predicate",text:"is highly appropriate"},
  {role:"subject",text:"that Dr Samuel Johnson ... should have published his Dictionary"},
  {role:"attributive",text:", the very model of an eighteenth-century literary man,"},
  {role:"attributive",text:", as famous in his own time as in ours,"},
  {role:"adverbial",text:"at the very beginning of the heyday of the middle class"}
],keywords:["literary man","heyday","middle class","dictionary"],source:"剑5 Test 1 Passage 1"},

  {id:50,en:"His approach to the problems that had worried writers throughout the late seventeenth and early eighteenth centuries was intensely practical.",
zh:'他处理那些困扰了17世纪末至18世纪初作家的种种问题的方式是极其务实的。',
breakdown:[
  {role:"subject",text:"His approach to the problems"},
  {role:"attributive",text:"that had worried writers throughout the late seventeenth and early eighteenth centuries"},
  {role:"predicate",text:"was intensely practical"}
],keywords:["approach","practical","worried writers"],source:"剑5 Test 1 Passage 1"},

  {id:51,en:"He was to be paid 1,575 pounds in installments, and from this he took money to rent 17 Gough Square, in which he set up his 'dictionary workshop'.",
zh:'他将以分期付款的方式获得1575英镑的报酬，并从中拿出钱来租下了高夫广场17号，在那里建立了他的「词典工坊」。',
breakdown:[
  {role:"subject",text:"He"},
  {role:"predicate",text:"was to be paid 1,575 pounds in installments"},
  {role:"subject",text:"and from this he"},
  {role:"predicate",text:"took money to rent 17 Gough Square"},
  {role:"attributive",text:", in which he set up his 'dictionary workshop'"}
],keywords:["installments","rent","dictionary workshop"],source:"剑5 Test 1 Passage 1"},

  {id:52,en:"A popular explanation of play has been that it helps juveniles develop the skills they will need to hunt.",
zh:'关于玩耍的一种流行解释是，它有助于幼年动物发展它们将来捕猎所需的技能。',
breakdown:[
  {role:"subject",text:"A popular explanation of play"},
  {role:"predicate",text:"has been"},
  {role:"complement",text:"that it helps juveniles develop the skills"},
  {role:"attributive",text:"they will need to hunt"}
],keywords:["popular explanation","play","juveniles","hunt"],source:"剑4 Test 2 Passage 3"},

  {id:53,en:"Comparing measurements for fifteen orders of mammal, he and his team found larger brains (for a given body size) are linked to greater playfulness.",
zh:'通过对15个哺乳动物目的测量数据进行比较，他和他的团队发现（在给定体型下）更大的大脑与更强的嬉戏性相关。',
breakdown:[
  {role:"adverbial",text:"Comparing measurements for fifteen orders of mammal"},
  {role:"subject",text:"he and his team"},
  {role:"predicate",text:"found"},
  {role:"object",text:"larger brains are linked to greater playfulness"},
  {role:"adverbial",text:"(for a given body size)"}
],keywords:["comparing","measurements","mammal","playfulness"],source:"剑4 Test 2 Passage 3"},

  {id:54,en:"Taree offers the Veterinary Assistant program and has introduced 'Agristudy', which enables students to learn flexibly and by correspondence, using a mixture of student learning guides, telephone tutorials, information sessions and workshops.",
zh:'塔里学院提供兽医助理课程并推出了「Agristudy」项目，该项目通过混合使用学生学习指南、电话辅导、信息宣讲会和研讨会等方式，使学生能够灵活地通过函授进行学习。',
breakdown:[
  {role:"subject",text:"Taree"},
  {role:"predicate",text:"offers the Veterinary Assistant program and has introduced 'Agristudy'"},
  {role:"attributive",text:", which enables students to learn flexibly and by correspondence,"},
  {role:"adverbial",text:"using a mixture of student learning guides, telephone tutorials, information sessions and workshops"}
],keywords:["veterinary","Agristudy","flexibly","correspondence","mixture"],source:"剑4 General Training Test B"},

  {id:55,en:"People talk abnormally when they know they are being recorded, and sound quality can be poor.",
zh:'当人们知道自己在被录音时，说话会不正常，而且音质也可能很差。',
breakdown:[
  {role:"subject",text:"People"},
  {role:"predicate",text:"talk abnormally"},
  {role:"adverbial",text:"when they know they are being recorded"},
  {role:"subject",text:"and sound quality"},
  {role:"predicate",text:"can be poor"}
],keywords:["abnormally","recorded","sound quality"],source:"剑4 Test 3 Passage 3"},

  {id:56,en:"Gutman argues convincingly that the stability of the Black family encouraged the transmission of the Black heritage of folklore, music, and religious expression from one generation to another, a heritage that slaves were continually fashioning out of their African and American experiences.",
zh:'古特曼令人信服地论辩道，黑人家庭的稳定有助于黑人文化遗产——包括民间传说、音乐和宗教表达——代代相传，而对于这种文化遗产，黑奴们不断地从其非洲和美洲的经历中予以丰富发展。',
breakdown:[
  {role:"subject",text:"Gutman"},
  {role:"predicate",text:"argues convincingly"},
  {role:"object",text:"that the stability of the Black family encouraged the transmission of the Black heritage"},
  {role:"attributive",text:"of folklore, music, and religious expression"},
  {role:"attributive",text:"from one generation to another"},
  {role:"attributive",text:"a heritage that slaves were continually fashioning out of their African and American experiences"}
],keywords:["convincingly","stability","transmission","heritage","fashioning"],source:"GRE/雅思经典"},

  {id:57,en:"This preference for exogamy, Gutman suggests, may have derived from West African rules governing marriage, which, though they differed from one tribal group to another, all involved some kind of prohibition against unions with close kin.",
zh:'古特曼表示，这种对于外部通婚的偏爱可能源于西非地区制约婚姻的规则，尽管这些规则因部落群体而异，但都涉及某种对近亲联姻的禁止。',
breakdown:[
  {role:"subject",text:"This preference for exogamy"},
  {role:"adverbial",text:", Gutman suggests,"},
  {role:"predicate",text:"may have derived from West African rules governing marriage"},
  {role:"attributive",text:", which all involved some kind of prohibition against unions with close kin"},
  {role:"adverbial",text:", though they differed from one tribal group to another"}
],keywords:["exogamy","derived from","governing","prohibition","close kin"],source:"GRE/雅思经典"},

  {id:58,en:"Although Gutman admits that forced separation by sale was frequent, he shows that the slaves' preference, revealed most clearly on plantations where sale was infrequent, was very much for stable monogamy.",
zh:'虽然古特曼承认因买卖而导致的被迫分离很常见，但他指出，奴隶们的偏好——在买卖不频繁的种植园中表现得最为明显——是倾向于稳定的一夫一妻制。',
breakdown:[
  {role:"adverbial",text:"Although Gutman admits that forced separation by sale was frequent"},
  {role:"subject",text:"he"},
  {role:"predicate",text:"shows"},
  {role:"object",text:"that the slaves' preference was very much for stable monogamy"},
  {role:"attributive",text:", revealed most clearly on plantations,"},
  {role:"attributive",text:"where sale was infrequent"}
],keywords:["forced separation","revealed","plantations","infrequent","monogamy"],source:"GRE/雅思经典"},

  {id:59,en:"With the conclusion of a burst activity, the lactic acid level is high in the body fluids, leaving the large animal vulnerable to attack until the acid is reconverted, via oxidative metabolism, by the liver into glucose, which is then sent back to the muscles for glycogen resynthesis.",
zh:'随着爆发性活动的结束，体液中乳酸水平会变得很高，使大型动物易于受到攻击，直到乳酸通过有氧代谢被肝脏转化为葡萄糖，而葡萄糖随后被输送回肌肉以重新合成糖原。',
breakdown:[
  {role:"adverbial",text:"With the conclusion of a burst activity"},
  {role:"subject",text:"the lactic acid level"},
  {role:"predicate",text:"is high in the body fluids"},
  {role:"adverbial",text:"leaving the large animal vulnerable to attack"},
  {role:"adverbial",text:"until the acid is reconverted by the liver into glucose"},
  {role:"adverbial",text:", via oxidative metabolism,"},
  {role:"attributive",text:", which is then sent back to the muscles for glycogen resynthesis"}
],keywords:["lactic acid","body fluids","vulnerable","oxidative metabolism","glucose","glycogen"],source:"GRE经典"},

  {id:60,en:"Islamic law is a phenomenon so different from all other forms of law that its study is indispensable in order to appreciate adequately the full range of possible legal phenomena.",
zh:'伊斯兰法是一种与所有其他法律形式如此不同的现象，以至于要充分理解所有可能的法律现象，对其研究必不可少。',
breakdown:[
  {role:"subject",text:"Islamic law"},
  {role:"predicate",text:"is a phenomenon so different from all other forms of law"},
  {role:"complement",text:"that its study is indispensable"},
  {role:"adverbial",text:"in order to appreciate adequately the full range of possible legal phenomena"}
],keywords:["Islamic law","phenomenon","indispensable","legal phenomena"],source:"GRE经典"},

  // ======= 61-80：自然/科学/文学类 =======
  {id:61,en:"Although these molecules allow radiation at visible wavelengths, where most of the energy of sunlight is concentrated, to pass through, they absorb some of the longer-wavelength, infrared emissions radiated from the Earth's surface.",
zh:'虽然这些分子允许可见波长（太阳光的大部分能量集中于此）的辐射通过，但它们会吸收从地球表面辐射出的较长波长的红外辐射。',
breakdown:[
  {role:"adverbial",text:"Although these molecules allow radiation to pass through"},
  {role:"attributive",text:"at visible wavelengths"},
  {role:"attributive",text:", where most of the energy of sunlight is concentrated,"},
  {role:"subject",text:"they"},
  {role:"predicate",text:"absorb"},
  {role:"object",text:"some of the longer-wavelength, infrared emissions"},
  {role:"attributive",text:"radiated from the Earth's surface"}
],keywords:["molecules","visible wavelengths","infrared emissions","radiated"],source:"GRE/学术经典"},

  {id:62,en:"The role those anthropologists ascribe to evolution is not of dictating the details of human behavior but one of imposing constraints on ways of feeling, thinking, and acting that come naturally in archetypal situations in any culture.",
zh:'这些人类学家归诸于进化的作用不是规定人类行为的细节，而是施加约束——即在任何文化的典型情境中自然流露的情感、思维和行为方式。',
breakdown:[
  {role:"subject",text:"The role"},
  {role:"attributive",text:"those anthropologists ascribe to evolution"},
  {role:"predicate",text:"is not of dictating the details of human behavior but one of imposing constraints"},
  {role:"attributive",text:"on ways of feeling, thinking, and acting"},
  {role:"attributive",text:"that come naturally in archetypal situations in any culture"}
],keywords:["anthropologists","ascribe to","dictating","imposing constraints","archetypal"],source:"GRE/学术经典"},

  {id:63,en:"The best evidence for the layered-mantle thesis is the well-established fact that volcanic rocks found on oceanic islands are composed of material fundamentally different from that of the mid-ocean ridge system, whose source, most geologists contend, is the upper mantle.",
zh:'地幔分层论最好的证据是一个公认的事实：在海洋岛屿上发现的火山岩由与洋中脊系统物质根本不同的物质构成，大多数地质学家认为后者的来源是上地幔。',
breakdown:[
  {role:"subject",text:"The best evidence for the layered-mantle thesis"},
  {role:"predicate",text:"is"},
  {role:"complement",text:"the well-established fact"},
  {role:"attributive",text:"that volcanic rocks ... are composed of material fundamentally different from that of the mid-ocean ridge system"},
  {role:"attributive",text:"found on oceanic islands"},
  {role:"attributive",text:", whose source, most geologists contend, is the upper mantle"}
],keywords:["layered-mantle","thesis","well-established","volcanic rocks","mid-ocean ridge","upper mantle"],source:"GRE/学术经典"},

  {id:64,en:"Some geologists, on the basis of observations concerning mantle xenoliths, argue that the mantle is not layered, but that heterogeneity is created by fluids rich in incompatible elements percolating upward and transforming portions of the upper mantle irregularly.",
zh:'一些地质学家基于对地幔捕虏岩的观察指出，地幔并非分层，异质性是由富含不相容元素的流体向上渗透并不规则地改变上地幔部分区域所造成的。',
breakdown:[
  {role:"subject",text:"Some geologists"},
  {role:"adverbial",text:", on the basis of observations concerning mantle xenoliths,"},
  {role:"predicate",text:"argue"},
  {role:"object",text:"that the mantle is not layered, but that heterogeneity is created by fluids"},
  {role:"attributive",text:"rich in incompatible elements"},
  {role:"attributive",text:"percolating upward and transforming portions of the upper mantle irregularly"}
],keywords:["geologists","xenoliths","heterogeneity","incompatible elements","percolating"],source:"GRE/学术经典"},

  {id:65,en:"The methods that a community devises to perpetuate itself come into being to preserve aspects of the cultural legacy that that community perceives as essential.",
zh:'一个社会创造的使自己永续存在的方法得以形成，是为了保存在该社会看来具有本质意义的文化遗产的各个方面。',
breakdown:[
  {role:"subject",text:"The methods"},
  {role:"attributive",text:"that a community devises to perpetuate itself"},
  {role:"predicate",text:"come into being"},
  {role:"adverbial",text:"to preserve aspects of the cultural legacy"},
  {role:"attributive",text:"that that community perceives as essential"}
],keywords:["devises","perpetuate","come into being","preserve","cultural legacy","perceives"],source:"GRE/学术经典"},

  {id:66,en:"Open acknowledgement of the existence of women's oppression was too radical for the United States in the fifties, and Beauvoir's conclusion that change in women's economic condition, though insufficient by itself, remains the basic factor in improving women's situation, was particularly unacceptable.",
zh:'公开承认妇女压迫的存在对于50年代的美国来说过于激进，而波伏娃的结论——妇女经济状况的改变尽管本身不够充分，但仍是改善妇女地位的根本因素——尤其令人无法接受。',
breakdown:[
  {role:"subject",text:"Open acknowledgement of the existence of women's oppression"},
  {role:"predicate",text:"was too radical for the United States in the fifties"},
  {role:"subject",text:"and Beauvoir's conclusion was particularly unacceptable"},
  {role:"attributive",text:"that change in women's economic condition remains the basic factor"},
  {role:"adverbial",text:", though insufficient by itself,"},
  {role:"attributive",text:"in improving women's situation"}
],keywords:["oppression","radical","Beauvoir","economic condition","unacceptable"],source:"GRE/学术经典"},

  {id:67,en:"The very richness and complexity of the meaningful relationships that kept presenting and rearranging themselves on all levels, from abstract intelligence to profound dreamy feelings, made it difficult for Proust to set them out coherently.",
zh:'各种有意义的联系在所有层面上——从抽象理性到深刻的梦幻感受——不断呈现并重新排列组合，正是这些联系的丰富性和复杂性使普鲁斯特难以将它们连贯地表达出来。',
breakdown:[
  {role:"subject",text:"The very richness and complexity of the meaningful relationships"},
  {role:"attributive",text:"that kept presenting and rearranging themselves on all levels"},
  {role:"adverbial",text:", from abstract intelligence to profound dreamy feelings,"},
  {role:"predicate",text:"made it difficult for Proust to set them out coherently"}
],keywords:["richness","complexity","rearranging","coherently","Proust"],source:"GRE经典"},

  {id:68,en:"However, recent scholarship has strongly suggested that those aspects of early New England culture that seem to have been most distinctly Puritan were not even typical of New England as a whole, but were largely confined to the two colonies of Massachusetts and Connecticut.",
zh:'然而，最近的学术研究强烈表明，早期新英格兰文化中那些看似最具有清教徒特征的方面，就整体而言甚至不是新英格兰的典型特征，而是主要局限于马萨诸塞和康涅狄格这两个殖民地。',
breakdown:[
  {role:"adverbial",text:"However"},
  {role:"subject",text:"recent scholarship"},
  {role:"predicate",text:"has strongly suggested"},
  {role:"object",text:"that those aspects ... were not even typical of New England as a whole, but were largely confined to the two colonies"},
  {role:"attributive",text:"of early New England culture"},
  {role:"attributive",text:"that seem to have been most distinctly Puritan"}
],keywords:["scholarship","Puritan","typical","confined to","colonies"],source:"GRE/学术经典"},

  {id:69,en:"Portrayals of the folk of Mecklenburg County, North Carolina, whom he remembers from early childhood, of the jazz musicians and tenement roofs of his Harlem days, of Pittsburgh steelworkers, and his reconstruction of classical Greek myths in the guise of the ancient Black kingdom of Benin, attest to this.",
zh:'那些关于他自幼记忆中的北卡罗来纳州梅克伦堡县民众的描绘、关于他哈莱姆岁月里的爵士乐手和公寓屋顶的描绘、关于匹兹堡钢铁工人的描绘，以及他假借古代贝宁黑人王国对古希腊神话的重构，都证明了这一点。',
breakdown:[
  {role:"subject",text:"Portrayals ... attest to this"},
  {role:"attributive",text:"of the folk of Mecklenburg County, North Carolina"},
  {role:"attributive",text:", whom he remembers from early childhood,"},
  {role:"attributive",text:"of the jazz musicians and tenement roofs of his Harlem days"},
  {role:"attributive",text:"of Pittsburgh steelworkers"},
  {role:"attributive",text:"and his reconstruction of classical Greek myths in the guise of the ancient Black kingdom of Benin"}
],keywords:["portrayals","tenement","reconstruction","in the guise of","attest"],source:"GRE经典"},

  {id:70,en:"Traditionally, pollination by wind has been viewed as a reproductive process marked by random events in which the vagaries of the wind are compensated for by the generation of vast quantities of pollen, so that the ultimate production of new seeds is assured at the expense of producing much more pollen than is actually used.",
zh:'传统上，风媒传粉被视为一种以随机事件为特征的繁殖过程，其中风的反复无常被产生的大量花粉所补偿，从而确保最终能产生新的种子，代价是产生比实际用量多得多的花粉。',
breakdown:[
  {role:"adverbial",text:"Traditionally"},
  {role:"subject",text:"pollination by wind"},
  {role:"predicate",text:"has been viewed as a reproductive process"},
  {role:"attributive",text:"marked by random events"},
  {role:"attributive",text:"in which the vagaries of the wind are compensated for by the generation of vast quantities of pollen"},
  {role:"adverbial",text:"so that the ultimate production of new seeds is assured"},
  {role:"adverbial",text:"at the expense of producing much more pollen than is actually used"}
],keywords:["pollination","reproductive","random","vagaries","compensated for","pollen"],source:"GRE/学术经典"},

  {id:71,en:"Not only are liver transplants never rejected, but they even induce a state of donor-specific unresponsiveness in which subsequent transplants of other organs from that donor are accepted permanently.",
zh:'肝脏移植不仅从未被排斥，它们甚至诱导出一种供体特异性无应答状态，在这种状态下，来自同一供体的其他器官的后续移植会被永久接受。',
breakdown:[
  {role:"subject",text:"liver transplants"},
  {role:"predicate",text:"Not only are never rejected, but they even induce a state"},
  {role:"attributive",text:"of donor-specific unresponsiveness"},
  {role:"attributive",text:"in which subsequent transplants of other organs from that donor are accepted permanently"}
],keywords:["liver transplants","rejected","donor-specific","unresponsiveness","permanently"],source:"GRE/学术经典"},

  {id:72,en:"As rock interfaces are crossed, the elastic characteristics encountered by seismic waves generally change abruptly, which causes part of the energy to be reflected back to the surface, where it is recorded by seismic instruments.",
zh:'当穿过岩石界面时，地震波所遇到的弹性特征通常会发生突然变化，这使得一部分能量被反射回地表，在那里被地震仪器记录下来。',
breakdown:[
  {role:"adverbial",text:"As rock interfaces are crossed"},
  {role:"subject",text:"the elastic characteristics encountered by seismic waves"},
  {role:"predicate",text:"generally change abruptly"},
  {role:"attributive",text:", which causes part of the energy to be reflected back to the surface"},
  {role:"attributive",text:", where it is recorded by seismic instruments"}
],keywords:["rock interfaces","elastic characteristics","seismic waves","reflected","seismic instruments"],source:"GRE/学术经典"},

  {id:73,en:"In order to understand the nature of the ecologist's investigation, we may think of the density-dependent effects on growth parameters as the signal ecologists are trying to isolate and interpret, one that tends to make the population increase from relatively low values or decrease from relatively high ones.",
zh:'为了理解生态学研究的本质，我们可以把作用于增长参数的密度依赖效应视为生态学家试图分离和解释的「信号」，这个信号倾向于使种群从相对较低的值增长，或从相对较高的值减少。',
breakdown:[
  {role:"adverbial",text:"In order to understand the nature of the ecologist's investigation"},
  {role:"subject",text:"we"},
  {role:"predicate",text:"may think of the density-dependent effects on growth parameters as the signal"},
  {role:"attributive",text:"ecologists are trying to isolate and interpret"},
  {role:"attributive",text:", one that tends to make the population increase from relatively low values or decrease from relatively high ones"}
],keywords:["ecologist","density-dependent","growth parameters","isolate","interpret"],source:"GRE/学术经典"},

  {id:74,en:"Inheritors of some of the viewpoints of early twentieth-century Progressive historians such as Beard and Becker, these recent historians have put forward arguments that deserve evaluation.",
zh:'作为20世纪早期进步派史学家（如比尔德和贝克尔）某些观点的继承者，这些近期史学家提出的观点值得评价。',
breakdown:[
  {role:"attributive",text:"Inheritors of some of the viewpoints of early twentieth-century Progressive historians"},
  {role:"attributive",text:"such as Beard and Becker"},
  {role:"subject",text:"these recent historians"},
  {role:"predicate",text:"have put forward arguments"},
  {role:"attributive",text:"that deserve evaluation"}
],keywords:["inheritors","viewpoints","Progressive","historians","evaluation"],source:"GRE经典"},

  {id:75,en:"But the play's complex view of Black self-esteem and human solidarity as compatible is no more contradictory than Du Bois' well-considered ideal of ethnic self-awareness coexisting with human unity, or Fanon's emphasis on an ideal internationalism that also accommodates national identities and roles.",
zh:'但该剧关于黑人自尊与人类团结可以共存的复杂观点，并不比杜波伊斯深思熟虑的民族自觉与人类大同共存的理想，或法农强调的同时容纳民族身份与角色的理想国际主义更为矛盾。',
breakdown:[
  {role:"adverbial",text:"But"},
  {role:"subject",text:"the play's complex view"},
  {role:"attributive",text:"of Black self-esteem and human solidarity as compatible"},
  {role:"predicate",text:"is no more contradictory than Du Bois' ideal or Fanon's emphasis"},
  {role:"attributive",text:"of ethnic self-awareness coexisting with human unity"},
  {role:"attributive",text:"on an ideal internationalism"},
  {role:"attributive",text:"that also accommodates national identities and roles"}
],keywords:["self-esteem","solidarity","compatible","contradictory","internationalism","accommodates"],source:"GRE经典"},

  {id:76,en:"A low number of algal cells in the presence of a high number of grazers suggested, but did not prove, that the grazers had removed most of the algae.",
zh:'在存在大量食草动物的情况下藻类细胞数量很少，这暗示——但并未证明——食草动物已清除了大部分藻类。',
breakdown:[
  {role:"subject",text:"A low number of algal cells in the presence of a high number of grazers"},
  {role:"predicate",text:"suggested, but did not prove,"},
  {role:"object",text:"that the grazers had removed most of the algae"}
],keywords:["algal cells","grazers","suggested","removed"],source:"GRE经典"},

  {id:77,en:"Perhaps the fact that many of these first studies considered only algae of a size that could be collected in a net, a practice that overlooked the smaller phytoplankton that we now know grazers are most likely to feed on, led to a de-emphasis of the role of grazers in subsequent research.",
zh:'也许这样一个事实——许多这样的最初研究只考虑了能够用网捕捞的大小的藻类，这一做法忽视了现在已知的食草动物最可能以之为食的更小的浮游植物——导致了在后续研究中低估了食草动物的作用。',
breakdown:[
  {role:"adverbial",text:"Perhaps"},
  {role:"subject",text:"the fact ... led to a de-emphasis of the role of grazers"},
  {role:"attributive",text:"that many of these first studies considered only algae of a size"},
  {role:"attributive",text:"that could be collected in a net"},
  {role:"attributive",text:", a practice that overlooked the smaller phytoplankton"},
  {role:"attributive",text:"that we now know grazers are most likely to feed on"},
  {role:"adverbial",text:"in subsequent research"}
],keywords:["algae","net phytoplankton","overlooked","phytoplankton","de-emphasis","grazers"],source:"GRE经典"},

  {id:78,en:"Hardy's weakness derived from his apparent inability to control the comings and goings of these divergent impulses and from his unwillingness to cultivate and sustain the energetic and risky ones.",
zh:'哈代的缺陷一方面源于他明显无力控制那些不同创作冲动的穿梭往来，另一方面源于他不愿意培养和维持那些充满活力和风险的创作冲动。',
breakdown:[
  {role:"subject",text:"Hardy's weakness"},
  {role:"predicate",text:"derived from his apparent inability ... and from his unwillingness"},
  {role:"attributive",text:"to control the comings and goings of these divergent impulses"},
  {role:"attributive",text:"to cultivate and sustain the energetic and risky ones"}
],keywords:["weakness","derived from","inability","divergent impulses","cultivate","sustain"],source:"GRE经典"},

  {id:79,en:"Virginia Woolf's provocative statement about her intentions in writing Mrs. Dalloway has regularly been ignored by the critics, since it highlights an aspect of her literary interests very different from the traditional picture of the poetic novelist concerned with examining states of reverie and vision.",
zh:'弗吉尼亚·伍尔夫关于创作《黛洛维夫人》意图的发人深省的陈述一直被评论家们所忽视，因为它突出了她文学兴趣中与人们对「诗性」小说家的传统看法截然不同的一个方面——即关注审视幻想与视觉的状态。',
breakdown:[
  {role:"subject",text:"Virginia Woolf's provocative statement"},
  {role:"attributive",text:"about her intentions in writing Mrs. Dalloway"},
  {role:"predicate",text:"has regularly been ignored by the critics"},
  {role:"adverbial",text:"since it highlights an aspect of her literary interests"},
  {role:"attributive",text:"very different from the traditional picture of the poetic novelist"},
  {role:"attributive",text:"concerned with examining states of reverie and vision"}
],keywords:["provocative","intentions","ignored","highlights","reverie","vision"],source:"GRE经典"},

  {id:80,en:"As she put it in The Common Reader, it is safe to say that not a single law has been framed or one stone set upon another because of anything Chaucer said or wrote; and yet, as we read him, we are absorbing morality at every pore.",
zh:'正如她在《普通读者》中所言：可以肯定地说，没有哪一条法律被制定出来，也没有哪一块砖石被垒起是因为乔叟说了或写了什么；然而，当我们读他的作品时，我们每一个毛孔都在吸收道德。',
breakdown:[
  {role:"adverbial",text:"As she put it in The Common Reader"},
  {role:"subject",text:"it"},
  {role:"predicate",text:"is safe to say"},
  {role:"object",text:"that not a single law has been framed or one stone set upon another because of anything Chaucer said or wrote"},
  {role:"subject",text:"and yet, we"},
  {role:"predicate",text:"are absorbing morality at every pore"},
  {role:"adverbial",text:"as we read him"}
],keywords:["framed","stone set upon another","Chaucer","absorbing morality","pore"],source:"GRE经典"}
];
