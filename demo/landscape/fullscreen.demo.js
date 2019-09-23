import React from 'react';
import { Text, View } from 'react-native';
import { MDLandscape, MDButton } from 'mand-mobile-rn';
import sty from './style'

export default class FullScreenDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: ''}
  }

  render () {
    return (
      <View>
        <MDButton style={sty.margin} onPress={()=>this.setState({show: 'FullScreen'})}>全屏</MDButton>
        <MDLandscape isVisible={this.state.show === 'FullScreen'} fullScreen>
          <Text style={sty.text}>
            今天晚上，很好的月光。
          </Text>
          <Text style={sty.text}>
            我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？
          </Text>
          <Text style={sty.text}>
            我怕得有理。
          </Text>
          <Text style={sty.text}>
            今天全没月光，我知道不妙。早上小心出门，赵贵翁的眼色便怪：似乎怕我，似乎想害我。还有七八个人，交头接耳的议论我，张着嘴，对我笑了一笑；我便从头直冷到脚根，晓得他们布置，都已妥当了。
          </Text>
          <Text style={sty.text}>
            我可不怕，仍旧走我的路。前面一伙小孩子，也在那里议论我；眼色也同赵贵翁一样，脸色也铁青。我想我同小孩子有什么仇，他也这样。忍不住大声说，“你告诉我！”他们可就跑了。
          </Text>
          <Text style={sty.text}>
            我想：我同赵贵翁有什么仇，同路上的人又有什么仇；只有廿年以前，把古久先生的陈年流水簿子⑶，踹了一脚，古久先生很不高兴。赵贵翁虽然不认识他，一定也听到风声，代抱不平；约定路上的人，同我作冤对。但是小孩子呢？那时候，他们还没有出世，何以今天也睁着怪眼睛，似乎怕我，似乎想害我。这真教我怕，教我纳罕而且伤心。
          </Text>
          <Text style={sty.text}>
            我明白了。这是他们娘老子教的！
          </Text>
          <Text style={sty.text}>
            晚上总是睡不着。凡事须得研究，才会明白。
          </Text>
          <Text style={sty.text}>
            他们——也有给知县打枷过的，也有给绅士掌过嘴的，也有衙役占了他妻子的，也有老子娘被债主逼死的；他们那时候的脸色，全没有昨天这么怕，也没有这么凶。
          </Text>
          <Text style={sty.text}>
            最奇怪的是昨天街上的那个女人，打他儿子，嘴里说道，“老子呀！我要咬你几口才出气！”他眼睛却看着我。我出了一惊，遮掩不住；那青面獠牙的一伙人，便都哄笑起来。陈老五赶上前，硬把我拖回家中了。
          </Text>
          <Text style={sty.text}>
            拖我回家，家里的人都装作不认识我；他们的脸色，也全同别人一样。进了书房，便反扣上门，宛然是关了一只鸡鸭。这一件事，越教我猜不出底细。
          </Text>
          <Text style={sty.text}>
            前几天，狼子村的佃户来告荒，对我大哥说，他们村里的一个大恶人，给大家打死了；几个人便挖出他的心肝来，用油煎炒了吃，可以壮壮胆子。我插了一句嘴，佃户和大哥便都看我几眼。今天才晓得他们的眼光，全同外面的那伙人一模一样。
          </Text>
        </MDLandscape>
      </View>
    )
  }
}
