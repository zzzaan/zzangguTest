var num=2;
var q = {
    2 : {"title": "채성아 선생님이 내일 미술 도구를 준비하라 하셨다. 이럴때 보통 나는....", "type": "JP", "A": "하루 전날 준비를 완료해두고 가방까지 싸둔다.", "B": "아 맞다! 정신을 차리니 짱구랑 같이 손들고 벌을 서고있다."},
    3 : {"title": "신혼부부 민희가 정훈이랑 싸운듯 하다.", "type": "TF", "A": "어떤일로 다투었는지 들어보고 누구 잘못인지 생각해본다.", "B": "위로해주고 옆에서 힘이 되어준다."},
    4 : {"title": "유리가 인형을 패고있다.", "type": "none", "A": "나도 맞을지도 모르지만... 말을 걸어본다.", "B": "무슨 일 있는건가...? 일단 도망가자."},
    5 : {"title": "신형만에게 액션상사로 서류봉투를 전달해야 한다. 근처까진 왔는데...", "type": "SN", "A": "낯선곳은 위험해.    지도를 찾아보고 확실한 위치를 알아낸다.", "B" : "내 직감을 믿어.    도시구경도 하면서 직감으로 찾아본다."},
    6 : {"title": "짱아가 마지막 남은 초코비를 몰래 먹었다.", "type": "SN", "A": "짱아가 먹을수도 있지. 엄마랑 다시 사온다.", "B": "짱아에게 복수하자. 짱아가 아끼는 요구르트를 원샷한다."},
    7 : {"title": "내가 좋아하는 액션가면 페스티벌이 열린다고 한다.", "type": "EI", "A": "아껴두었던 액션가면 코스튬을 입고 사람들과 함께 즐긴다.", "B": "집에서도 충분히 즐길 수 있어! 온라인으로 즐기자."},
    8 : {"title": "와르르멘션에서 오랜만에 맹구, 훈이랑 놀고있는데 계단에서 삐그덕 소리가 들린다.", "type": "SN", "A": "위험할지도 모르니, 나중에 놀기로 하고 우선 수리방법을 찾아본다.", "B": "친구들에게 주의를 준 뒤, 함께 놀고 집으로 보낸뒤 방법을 찾아본다."},
    9 : {"title": "짱구와 놀던 와중, 짱구가 누나 둘에게 \"우유 한잔 하러갈래요?\"를 시전하였다.", "type": "JP", "A": "나랑 놀기로 했으면서...불편하다.", "B": "오히려 좋아. 같이 간다."},
    10 : {"title": "주말에 철수가 우리집에 놀러 온다고 하며 어떻게 가는지 묻는다.", "type": "TF", "A": "\"너네 집에서 나와서 오른쪽으로 200미터.....으로 100미터 가량 오면 돼.\"", "B": "\"너네 집에서 나와서 쭉 가면 나오는 액션마트에서....떡잎약국 건너편이야.\""},
    11 : {"title": "신형만이 나에게 어떻게 하면 승진을 빨리 할 수 있을지 물어보았다. 나의 대답은?", "type": "EI", "A": "직장내 스터디와 커뮤니티를 활용해보자.", "B": "독서와 자기계발을 통해 스스로의 가치를 올려보자."},
    12 : {"title": "떡잎마을 방범대의 조장으로써 성과가 없는것 같다.", "type": "JP", "A": "원장선생님과 떡잎마을을 위해 무엇을 할 수 있을지 상의해본다.", "B": "떡잎마을 방범대 출동! 마을을 돌아다니며 도움이 필요한 사람을 찾는다."},
    13 : {"title": "훈이 : \"옆반 치타때문에 축구에서 졌어. 너무 슬퍼 흐애애앵....\"", "type": "TF", "A": "\"치타가 누구야? 축구를 그렇게 잘해?\"", "B": "\"힝 ㅠㅠ 속상하겠다ㅠㅠ 다친데는 없지?? 다음에는 꼭 이기자!!!!!\""},
    14 : {"title": "신형만씨가 낯선 미녀랑 대화를 하고있다.", "type": "none", "A": "아니 머선129!? 짱구엄마 에게 일른다.", "B": "길을 물어봤을수도 있잖아, 그냥 지나가자."},
}
var result = {
    "ESTJ" : {"character" : "타고난 리더십 봉미선", "explain" : "당신은 눈치백단 고집쟁이!<br>자기 확신 뚜렷한, 호불호 확실한 사람이에요. 모임 같은 건 좋아하지만 리더 하는 건 너무 싫어요. 근데 막상 시키면 또 잘해요.<br>항상 명확한 사실에 근거하여 일을 처리해요. 현실적이고 꼼꼼해서 계획은 철저한데 융통성이 제로예요, 황소고집은 덤. 물론 능력은 뛰어나 남들이 보기에 힘든 일도 차근차근 잘 수행해 나가요.<br>눈치가 빠르고 말도 잘해서 말싸움은 져본 적이 없어요. 겉과 속이 다른 사람? 다 보여요, 바로 아웃이에요.<br>다만 공감능력은 부족해서 친구가 속상해 해도 위로는 잘 못해줘요. 참견하는거 싫어해서 말하진 않지만 속으로 누가 옳고 그른지 항상 판단하고 있어요.<br><br>한국인중 10.7%에 해당하고 있어요.", "img" : "/img/Mom.png"},
    "ESTP" : {"character" : "행동대장 신혼부부", "explain" : "당신은 인싸 그 자체!<br>생각보단 행동으로 실천하는 행동대장이에요. 언제나 자신감 넘치고 쾌활한 성격이 장점. 말 돌려하는 거 못해요. 솔직한게 편하고 좋아요.<br>생각이 단순하다는 평을 들을 때도 있지만 또 눈치는 백 단이에요. 순발력이 좋고 임기응변에 능해 사회생활은 잘하지만 가끔 욱할 때가 있어요. 다혈질이에요.<br>싫어하는건 진지한 분위기랑 원리원칙. 즉흥적이고 자유분방한 게 좋아요. 스릴넘치는 스카이다이빙, 번지점프는 버킷리스트에 꼭 올라가 있어요.<br>유혹에 약해요. 남들은 할 일 미룬다고 뭐라 하지만 일단 미뤄두면 나중의 내가 알아서 할 거예요. 나는 나를 믿어요. 내일의 나보단 오늘의 내가 행복한 게 중요해요.<br><br>한국인중 4.4%에 해당하고 있어요.", "img" : "/img/BuBu.png"},
    "ESFJ" : {"character" : "따뜻한 가장 신형만", "explain" : "당신은 호불호 없는 친목 마스터!<br>어느 모임에 가도 환영받는 핵인싸예요. 자연스럽게 분위기를 주도하는 리더십이 있어요. 어디에서도 잘 융화되고, 사려깊고 믿음직스러운 사람이라 항상 여기저기 불려 다니느라 바빠요.<br>공감능력이 뛰어나 인기도 좋아요. 누군가 도움이 필요한 순간에 따듯한 마음으로 대화 상대가 되어줄 준비가 항상 되어있어요.<br>티는 안내지만 상당히 예민하고 쉽게 상처 받아요. 사람들이 나를 비판하는 경우가 생기면 혼자 속앓이 엄청 심하게 해요. 사실 사람들은 잘 모를 거예요. 낯은 잘 안 가리면서 내 속마음이 허락하기 전까지는 내 본모습을 절대 보여주지 않아요.<br><br>한국인중 6.6%에 해당하고 있어요.", "img" : "/img/Dad.png"},
    "ESFP" : {"character" : "천방지축 흥부자 짱구", "explain" : "당신은 인기만점 슈퍼스타!<br>사교적이고 언제나 낙천적인 에너자이저예요. 언제나 발랄한 언변으로 주위 사람들을 매료시켜요.<br>아끼는 사람들과 희로애락을 함께하며 몇 시간이나 수다를 떨곤 해요. 친구들을 위로하고 용기를 북돋아 주는 데 이들보다 더 많은 시간과 에너지를 소비하는 사람 없을 거예요.<br>사회생활도 만랩, 어느 무리에서든 분위기 메이커를 담당하며 인기를 독차지해요. 하지만 누군가에겐 시끄럽고 불편한 친구일 수도 있어요.<br>개방적이고 자유로운 영혼의 소유자라서 틀에 얽매이는 건 너무 싫어해요. 그래서인지 뛰어난 미적 감각 또한 가지고 있어요. 외모를 가꾸는 데에서부터 , 집안을 예쁘게 꾸미는 인테리어 능력까지 뛰어나요.<br>다만 해야 할 일을 미루는 경향이 있어 게으르다는 평을 들을 때도 있어요.<br><br>한국인중 5.3%에 해당하고 있어요.", "img" : "/img/ZzangGu.png"},
    "ENTJ" : {"character" : "타고난 리더십 나미리", "explain" : "당신은 카리스마 뿜뿜 리더!<br>자신감 넘치고 비효율이 제일 싫은 승부사예요. 겉은 차갑지만 속내는 따뜻해서 주위에 사람들이 몰려들어요.<br>항상 바쁜삶을 살고 있고 똑똑해서 일처리를 잘하곤 해요. 다만 우유부단하거나 능력 없는 사람들과 함께 하느니, 혼자 일하는 게 편하다며 본인보다 똑똑하지 않으면 무시하는 경향이 있기도 해요. 나는 피해 안 줄 테니 남들도 제발 나한테 피해만 안 줬으면 좋겠어요.<br>승부욕이 강해서 한번 마음먹으면 엄청난 끈기와 책임감으로 성과를 이뤄내요. 주위에 해보지도 않고 못한다는 사람들 보면 답답하긴 한데 딱히 신경은 안 써요. 내 인생은 아니니깐요.<br><br>한국인중 3.8%에 해당하고 있어요.", "img" : "/img/NaMiRi.png"},
    "ENTP" : {"character" : "오직 나의 길을 간다 철수", "explain" : "당신은 마이웨이 직진러!<br>남의 시선은 신경 안 쓰는, 새로운 시도를 좋아하는 도전가예요. 독립심이 강해 혼자서 돌아다니는 거 좋아해요. 밖에 나가면 잘 노는데 집도 좋아요.<br>여러방면에 관심이 많아서 남 눈치 안 보고 이것저것 다 해봐요. 근데 뒷심과 집중력이 부족해 흐지부지 되는 경우가 많아요. 그래도 자기 합리화를 잘해 스트레스는 잘 안 받아요. 포기를 잘하는 것도 능력이에요.<br>솔직한 게 좋아요. 말을 예쁘게 순화시키는 건 내 스타일 아니에요. 남들이 세심하지 못한 사람이라 하더라도 전혀 개의치 않아요. 비슷한 성향을 가진 사람과는 또 문제없이 잘 지내요.<br><br>한국인중 3.5%에 해당하고 있어요.", "img" : "/img/CheolSu.png"},
    "ENFJ" : {"character" : "정의 구현자 유리", "explain" : "당신은 프로 설득러!<br>말로 사람들을 움직이게 하는 능력이 탁월해요. 낯도 안 가리는데 말을 이쁘게 하고 사람들을 홀려 대인관계가 좋고 인기가 많아요. 무리에 속해있어도 마이웨이를 달리는데 밉지가 않아요. 사람을 잘 믿고 정이 많지만 배신당하면 칼같이 아웃시켜요.<br>근데 능력치를 말빨에 몰빵 했는지 숫자에는 약해요. 수학은 나의 적. 수학을 주기자.<br>감수성이 풍부해 가끔 이성적인 판단을 못할 때가 있어요, 고집도 있는 편이라 내 의견이 무시당하면 분노가 치밀어 올라요, 짜증내고 나중에 후회하는 경우가 많아요.<br><br>한국인중 3.5%에 해당하고 있어요.", "img" : "/img/YuRi.png"},
    "ENFP" : {"character" : "활발한 귀염둥이 흰둥이", "explain" : "당신은 자유로운 아이디어 뱅크!<br>표현력이 풍부해 대화하는 걸 즐기는 리액션쟁이예요. 자유로운 영혼이라 톡톡 튀는 아이디어도 많지만 주의가 산만하다는 말도 자주 들어요. 친구들이 돌+I라고 놀리는 게 나한테는 극찬이에요.<br>누가 나서지 않으면 답답해서라도 내가 손 들어버려요. 지루하고 반복되는 일상은 싫어요. 하루하루가 즐겁고 재밌으면 좋겠어요.<br>싫고 좋은게 감정에서 잘 드러나요. 싫어하는 사람에게 아부하기? 나랑은 다른 세계 일이에요.<br>나를 위해 돈을 쓰고 싶을 땐 걱정 않고 FLEX 해버려요. 한번 사는 인생인데요 뭘. 가만히 집콕하는거 싫어요. 코시국 너무 힘들어요.<br><br>한국인중 8.4%에 해당하고 있어요.", "img" : "/img/White.png"},
    "ISTJ" : {"character" : "현실주의 선생님 채성아", "explain" : "당신은 신중한 현실주의자!<br>차분하고 어른스러운 사람이에요. 진지하고 책임감이 많아 장남 장녀 취급을 많이 받아요. 말이 느린편이고 매사에 신중을 거듭해요.<br>고집도 쎄서 다른 사람 말 잘 안 들어요, 내가 맞는 거 같아요. 남이보기엔 칼 같고 차가워 보이지만 알고 보면 따뜻해요, 사실 엄청 능글맞아요.<br>항상 무덤덤 하고 표정 변화가 거의 없어 감정이 없는 건가 싶지만 속으론 생각이 많아요. 근데 어떻게 표현을 할지 모르겠어요. 내 얘기를 하는것도, 남 얘기를 듣는 것도 힘들어요. 혼자 내버려두면 알아서 잘해요.<br>어떤 일이든 쉽게 가정하여 결론 내지 않아요. 객관적인 분석을 통해 현실적으로 실행 가능한 계획을 세우는 걸 좋아해요.<br>싫어하는 건 약속 어기는 사람, 특히 시간 약속은 어기면 연을 끊어버릴지도 몰라요. 시끄럽고 감정 풍부한 친구들과도 안 맞아요, 텐션 높은 친구들이랑 있으면 기 빨려요.<br><br>한국인중 14.7%에 해당하고 있어요.", "img" : "/img/ChaeSeongA.png"},
    "ISTP" : {"character" : "만능 재주꾼 옆집아줌마", "explain" : "당신은 시니컬의 결정체!<br>현실적이고 직설적인 사람이에요. 주위 친구들에 비해 어른스럽다는 이야기를 많이 듣곤 해요. 가장 잘하는 건 선긋기! 나말고 다른 사람에게 별 관심 없어요, 사실 자신에게도 관심 없는 거 같기도 해요.<br>남에게 피해주기도, 피해받기도 싫어요. 특히나 찡찡이들이랑은 상성이 최악이에요, 걔네랑은 어떻게 대화를 해야할지 모르겠어요.<br>자립심도 쎄고 연락도 먼저 잘 안 해서 오해를 받지만 은근 활동적인 거 좋아해요. 아 물론 집밖으로 나가는 건 또 큰 결심이 필요해요. 이불 밖은 위험하거든요.<br><br>한국인중 4.7%에 해당하고 있어요.", "img" : "/img/Azim.png"},
    "ISFJ" : {"character" : "다정다감한 원장선생님", "explain" : "당신은 꼼꼼한 공감쟁이!<br>상식과 조화를 중시하는 어른스러운 사람이에요. 기본적으론 내성적인데 상황에 따라 달라요. 나서는건 싫지만 관심받는 건 좋아해요. 내가 이뤄낸 성과를 다른 사람에게 직접 알리는 건 부끄러운데 또 알아주면 기분이 좋아져요.<br>인간관계가 좁지만 깊어요. 마음 맞는 친구들 몇 명으로만 평생 가요. 연애도 마찬가지, 가벼운 연애 질색이에요.<br>감정을 잘 캐치해 공감을 잘해줘요, 물론 쓸데없는 감정 소모는 싫어서 적당히 치고 빠져요. 뛰어난 기억력으로 주위 사람들에게 감동을 종종 주기도 해요.<br>계획대로 해야 마음이 편해요. 기억해야 할 것들은 메모하는 습관이 있어요. 상식이 안 통하는 사람들 안 좋아해요.<br><br>한국인중 8.4%에 해당하고 있어요.", "img" : "/img/WonZang.png"},
    "ISFP" : {"character" : "무한 긍정 짱아", "explain" : "당신은 순둥순둥한 순둥이!<br>사람 만나는 걸 좋아하면서도 싫어하는, 집들어가면 연락 두절되는 조용한 관종이에요.<br>개인시간과 개인 공간은 내가 살아가는 이유, 그 누구도 침범해선 안돼요. 모든 일에 의욕이 부족해요. 시작 하면 제대로 하긴 하는데 일단 최대한 미뤄볼래요.<br>어디로 튈지 모르는 탱탱볼 같은 매력이 있어요. 제일 힘든건 미래 설계하기, 당장 내일 점심에 무슨 일이 일어날지도 모르는 세상인데요.<br>인간 관계에선 눈치가 빨라 섬세한 부분까지 잘 캐치해요. 그래서인지 남들이 날 편하다고 느껴요. <br>싫어하는건 어색한 사이, 소리지르며 싸우는 건 최악이에요. 문제나 갈등은 어떻게든 피하고 싶어요.<br><br>한국인중 5.9%에 해당하고 있어요.", "img" : "/img/ZzangA.png"},
    "INTJ" : {"character" : "호불호 확실한 수지", "explain" : "당신은 허당미 츤데레!<br>효율성을 중시하는 이상주의 괴짜예요. 단체활동은 싫어하지만 하게 되면 주도적인 역할 담당이에요.<br>친해지는데 시간이 걸리고 관계정리는 칼 같아서 친구가 많지는 않아요. 확실한 내 사람한테만 잘 해줘요. 겉으로는 차갑지만 엄청 츤데레예요. 선의의 거짓말보단 진심 어린 팩트 폭행이 더 마음 편해요.<br>남들 눈치 안 보고 한번 꽂히면 깊게 빠져들어요. 감정에 휘둘리는 건 싫어요. 내 고집을 꺾기 위해선 타당한 이유가 있어야 해요.<br>원리원칙을 중요시하고 다양한 시야로 일을 해석, 해결하려 노력해요. 기발한 아이디어와 뛰어난 논리력은 내 최고 무기예요.<br>내성적이라 티는 잘 안 나지만 은근히 관종이에요. 수다 떠는 걸 좋아해요. 의외로 허당끼가 있어 내 주위 사람들과 낯선 사람들 평가가 많이 달라요.<br><br>한국인중 5.5%에 해당하고 있어요.", "img" : "/img/SuZi.png"},
    "INTP" : {"character" : "사려깊은 몽상가 맹구", "explain" : "당신은 게으른 천재!<br>직설적이고 공감능력 없는 자발적 아싸에요. 혼자인게 가장 행복해요. 정말 친한 친구 아니면 나를 이해하기 힘들 거예요. 평소엔 말 한마디 없다가 내 관심분야 나오면 TMT로 변신해요.<br>귀차니즘의 끝판왕, 연락두절은 기본이고 나보다 미루기를 잘하는 사람은 없어요. 그런데 한번 시작하면 결과를 보고야 마는 천재예요 게을러서 시작을 잘 안 할 뿐이지.<br>남이 내 욕 하든 말든 신경 안 써요. 관심 없어요. 근데 내 앞에서 무논리는 펼치지 말아 줘요, 거기다 목소리까지 크면 최악이에요.<br><br>한국인중 4.3%에 해당하고 있어요.", "img" : "/img/MaengGu.png"},
    "INFJ" : {"character" : "외유내강 차은주", "explain" : "당신은 섬세한 이상주의 괴짜!<br>사려 깊고 성숙한 사람이에요. 감수성이 풍부하고 생각이 많아요. 일처리를 할 때엔 혼자 부지런히 하는 게 좋아요.<br>내성적이고 조용해서 남들은 잘 모르는데 엄청 관종이에요. 관심이 쏠리면 부끄러운데 큰 무대에는 서보고 싶어요. 내적 갈등이 심해요.<br>평소 말투는 나긋나긋, 하지만 옳다고 생각되는 일에는 확실한 의견을 피력해요. 전형적인 외유내강의 표본이에요.<br>계획적이고 예리하지만 가끔씩 나오는 허당미가 매력이에요. 공감을 잘해서 고민상담을 잘해주는데 가끔 감정이입을 너무 심하게 할 때가 있어요.<br>남들과 스스럼 없이 잘 어울리지만, 가끔식 마음의 평점심을 잃지 않게 하기 위해 혼자만의 재충전 시간이 필요해요. 예의없이 선 넘는 사람이 제일 싫어요.<br><br>한국인중 3.8%에 해당하고 있어요.", "img" : "/img/ChaEnZu.png"},
    "INFP" : {"character" : "울보 중재자 훈이", "explain" : "당신은 감수성 넘치는 예술가!<br>발랄하고 섬세한, 순수한 영혼의 소유자예요. 내적 갈등이 심해요. 나는 완벽하다 생각해서 창대하게 시작했는데 끝은 흐지부지 인 경우가 많아요. 현실에 적응을 못하는거 같기도 해요.<br>자기애가 강하지만 자존감이 낮아요. 한번씩 너무 우울해져요. 유리멘탈 인가 봐요. 사소한 일에 혼자 감동했다가 충격받고 그래요.<br>멀티플레이는 안돼요. 의미 있다고 판단되는 한두 가지 뚜렷한 목표에만 관심 몰빵 할래요.<br>의사소통 능력은 뛰어나요. 근데 처음보는 사람한텐 말 잘 거는데 이상하게 조직생활 안에선 그게 안돼요. 남한테 의지하는것도 싫어서 내 얘기 잘 안 해요. 싫은데 또 폐 끼치는 것도 싫어요. 이런 잡생각때문에 예민 보스인가 봐요.<br><br>한국인중 6.5%에 해당하고 있어요.", "img" : "/img/HunYi.png"},
}
var resultchem ={
    "ESTJ" : {"character" : "타고난 리더십 봉미선", "img" : "/imgmini/Mom.png"},
    "ESTP" : {"character" : "행동대장 신혼부부", "img" : "/imgmini/BuBu.png"},
    "ESFJ" : {"character" : "따뜻한 가장 신형만", "img" : "/imgmini/Dad.png"},
    "ESFP" : {"character" : "천방지축 흥부자 짱구", "img" : "/imgmini/ZzangGu.png"},
    "ENTJ" : {"character" : "타고난 리더십 나미리", "img" : "/imgmini/NaMiRi.png"},
    "ENTP" : {"character" : "오직 나의 길을 간다 철수", "img" : "/imgmini/CheolSu.png"},
    "ENFJ" : {"character" : "정의 구현자 유리", "img" : "/imgmini/YuRi.png"},
    "ENFP" : {"character" : "활발한 귀염둥이 흰둥이", "img" : "/imgmini/White.png"},
    "ISTJ" : {"character" : "현실주의 선생님 채성아", "img" : "/imgmini/ChaeSeongA.png"},
    "ISTP" : {"character" : "만능 재주꾼 옆집아줌마", "img" : "/imgmini/Azim.png"},
    "ISFJ" : {"character" : "다정다감한 원장선생님", "img" : "/imgmini/WonZang.png"},
    "ISFP" : {"character" : "무한 긍정 짱아", "img" : "/imgmini/ZzangA.png"},
    "INTJ" : {"character" : "호불호 확실한 수지", "img" : "/imgmini/SuZi.png"},
    "INTP" : {"character" : "사려깊은 몽상가 맹구", "img" : "/imgmini/MaengGu.png"},
    "INFJ" : {"character" : "외유내강 차은주", "img" : "/imgmini/ChaEnZu.png"},
    "INFP" : {"character" : "울보 중재자 훈이", "img" : "/imgmini/HunYi.png"},
}
var questionimg ={
    2 : {"img":"/imgspecial/q2.jpg"},
    3 : {"img":"/imgspecial/q3.jpg"},
    4 : {"img":"/imgspecial/q4.jpg"},
    5 : {"img":"/imgspecial/q5.jpg"},
    6 : {"img":"/imgspecial/q6.jpg"},
    7 : {"img":"/imgspecial/q7.jpg"},
    8 : {"img":"/imgspecial/q8.jpg"},
    9 : {"img":"/imgspecial/q9.jpg"},
    10 : {"img":"/imgspecial/q10.jpg"},
    11 : {"img":"/imgspecial/q11.jpg"},
    12 : {"img":"/imgspecial/q12.jpg"},
    13 : {"img":"/imgspecial/q13.jpg"},
    14 : {"img":"/imgspecial/q14.jpg"},
}
function start(){
    $('.start').hide();
    $('.question').show();
}
function resultshow(){  
    $(".calculate").hide();
    $(".result").show();
}

function zzanggu(){
    $("#calc").attr("src",result["ESFP"]["img"]);
}
function azim(){
    $("#calc").attr("src",result["ISTP"]["img"]);
}
function bubu(){
    $("#calc").attr("src",result["ESTP"]["img"]);
}
function chaenzu(){
    $("#calc").attr("src",result["INFJ"]["img"]);
}
function chaeseonga(){
    $("#calc").attr("src",result["ISTJ"]["img"]);
}
function dad(){
    $("#calc").attr("src",result["ESFJ"]["img"]);
}
function hunyi(){
    $("#calc").attr("src",result["INFP"]["img"]);
}
function maenggu(){
    $("#calc").attr("src",result["INTP"]["img"]);
}
function mom(){
    $("#calc").attr("src",result["ESTJ"]["img"]);
}
function namiri(){
    $("#calc").attr("src",result["ENTJ"]["img"]);
}
function suzi(){
    $("#calc").attr("src",result["INTJ"]["img"]);
}
function white(){
    $("#calc").attr("src",result["ENFP"]["img"]);
}
function wonzang(){
    $("#calc").attr("src",result["ISFJ"]["img"]);
}
function yuri(){
    $("#calc").attr("src",result["ENFJ"]["img"]);
}
function zzanga(){
    $("#calc").attr("src",result["ISFP"]["img"]);
}
function cheolsu(){
    $("#calc").attr("src",result["ENTP"]["img"]);
}
function next(){
    if(num==15){
        $(".question").hide();
        $(".calculate").show();
        setTimeout(azim,100);
        setTimeout(bubu,200);
        setTimeout(chaenzu,300);
        setTimeout(chaeseonga,400);
        setTimeout(cheolsu,500);
        setTimeout(dad,600);
        setTimeout(hunyi,700);
        setTimeout(maenggu,800);
        setTimeout(mom,900);
        setTimeout(namiri,1000);
        setTimeout(suzi,1100);
        setTimeout(white,1200);
        setTimeout(wonzang,1300);
        setTimeout(yuri,1400);
        setTimeout(zzanga,1500);
        setTimeout(zzanggu,1600);
        setTimeout(azim,1700);
        setTimeout(bubu,1800);
        setTimeout(chaenzu,1900);
        setTimeout(chaeseonga,2000);
        setTimeout(cheolsu,1200);
        setTimeout(dad,2200);
        setTimeout(hunyi,2300);
        setTimeout(maenggu,2400);
        setTimeout(mom,2500);
        setTimeout(namiri,2600);
        setTimeout(suzi,2700);
        setTimeout(white,2800);
        setTimeout(zzanggu,3000);
        setTimeout(resultshow,3000);
        var mbti="";
        var goodmbti="";
        var badmbti="";
        ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
        ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
        ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
        ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
        $("#img").attr("src",result[mbti]["img"]);
        $("#character").html(result[mbti]["character"]);
        $("#explain").html(result[mbti]["explain"]);

        if(mbti=="ESFP"){
            goodmbti = "ISTJ";
            badmbti = "ISFP";
        }
        if(mbti=="ISTP"){
            goodmbti = "ESTJ";
            badmbti = "INFJ";
        }
        if(mbti=="ESTP"){
            goodmbti = "ISFJ";
            badmbti = "ENTJ";
        }
        if(mbti=="INFJ"){
            goodmbti = "ENFP";
            badmbti = "ISTP";
        }
        if(mbti=="ISTJ"){
            goodmbti = "ESFP";
            badmbti = "INFP";
        }
        if(mbti=="ESFJ"){
            goodmbti = "INFP";
            badmbti = "INTP";
        }
        if(mbti=="INFP"){
            goodmbti = "ESFJ";
            badmbti = "ISTJ";
        }
        if(mbti=="INTP"){
            goodmbti = "ENTJ";
            badmbti = "ESFJ";
        }
        if(mbti=="ESTJ"){
            goodmbti = "ISTP";
            badmbti = "INFJ";
        }
        if(mbti=="ENTJ"){
            goodmbti = "INTP";
            badmbti = "ESTP";
        }
        if(mbti=="INTJ"){
            goodmbti = "ENTP";
            badmbti = "ESTJ";
        }
        if(mbti=="ENFP"){
            goodmbti = "INFJ";
            badmbti = "ESTP";
        }
        if(mbti=="ISFJ"){
            goodmbti = "ESTP";
            badmbti = "ENFP";
        }
        if(mbti=="ENFJ"){
            goodmbti = "ISFP";
            badmbti = "ENTP";
        }
        if(mbti=="ISFP"){
            goodmbti = "ENFJ";
            badmbti = "ESFP";
        }
        if(mbti=="ENTP"){
            goodmbti = "INTJ";
            badmbti = "ISFP";
        }
        $("#goodimg").attr("src",resultchem[goodmbti]["img"]);
        $("#badimg").attr("src",resultchem[badmbti]["img"]);
        $("#goodcharacter").html(resultchem[goodmbti]["character"]);
        $("#badcharacter").html(resultchem[badmbti]["character"]);
    }
    else{
        $("#qimg").attr("src",questionimg[num]["img"]);
        $(".progress-bar").attr('style','width: calc(100/14*'+num+'%)')
        $('#title').html(q[num]["title"]);
        $('#type').val(q[num]["type"]);
        $('#A').html(q[num]["A"]);
        $('#B').html(q[num]["B"]);
        num++;
    }
}

$("#A").click(function(){
    var type = $("#type").val();
    var prevalue = $('#'+type).val();
    $('#'+type).val(parseInt(prevalue)+1);
    next();
});
$("#B").click(function(){
    next();
});