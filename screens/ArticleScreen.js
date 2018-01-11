import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, WebView } from 'react-native';

export default class ArticleScreen extends React.Component {
  static navigationOptions = {
  };

  render() {
    return (
      /* OR:
          <WebView 
      source={{uri: 'http://www.dailyprincetonian.com/article/2018/01/princeton-adds-curling-mini-golf-and-madden-to-list-of-di-sports-claims-titles-in-all-3.html'}}
      />
      */
      <ScrollView style={styles.container}>
        <Text style={styles.articleTitleText}>
          Minor earthquake tremors felt in U. buildings
        </Text>

        <View style={styles.divider}>
        </View>

        <Text style={styles.articleAuthorText}>
          By Allie Spensley and Benjamin Ball
        </Text>

        <Text style={styles.articleDateText}>
          Nov 30, 2017
        </Text>

        <Image
          source={require('../assets/images/article.png')}
          resizeMode="cover"
          fadeDuration={0}
          style={styles.articleImage}
        />

        <Text style={styles.articleCaptionText}>
          Delaware Earthquake signal detected at Guyot Hall, Princeton University.
        </Text>

        <Text style={styles.articleParagraphText}>
          The University found itself taking after the typical James Bond martini order — shaken, not stirred —  when minor tremors were felt on campus on Thursday afternoon.
        </Text>

        <Text style={styles.articleParagraphText}>
          The tremors were produced by an earthquake of a preliminary magnitude of 4.4 centered about ten miles from Dover, Del. Initially the U.S. Geological Survey reported the magnitude to of the quake as 5.1, before later revising it to a 4.4. The earthquake struck at 4:47 p.m.
        </Text>

        <Text style={styles.articleParagraphText}>
          Students on campus reported feeling the tremors, and some also noticed an impact off campus at 693 Alexander Rd. According to an article by the Office of Communications, University officials checked the buildings where the tremors were reported, including Nassau Hall, Morrison Hall, New South Building, Stanhope Hall, and the Arts Tower at the Lewis Arts complex. Unlike your typical 007 outing, however, no damage was reported. 
        </Text>

        <View style={styles.divider}>
        </View>

        <WebView source={{html: decodeURIComponent('%3Cp%3EThe%20women%E2%80%99s%20and%20men%E2%80%99s%20basketball%20teams%20play%20games%20back-to-back%20at%20home%20in%20Jadwin%20Gymnasium%20on%20Wednesday%2C%20Nov.%2027.%20The%20women%E2%80%99s%20game%20against%20No.%2025%20Villanova%20will%20tip%20first%20at%205%3A30%20p.m.%20and%20will%20be%20immediately%20followed%20by%20the%20men%E2%80%99s%20game%20at%20approximately%208%20p.m.%20against%20Lehigh.%3C%2Fp%3E%0A%3Cp%3EFor%20the%20women%20%283%E2%80%941%29%2C%20the%20game%20will%20be%20important%20as%20they%20face%20what%20is%20their%20biggest%20challenge%20yet%20this%20season%2C%20playing%20a%20ranked%20Villanova%20team.%20The%20Tigers%20have%20played%20close%20games%20all%20year%20so%20far%2C%20which%20could%20give%20them%20the%20confidence%20that%20they%20need%20to%20be%20able%20to%20defeat%20a%20talented%20Wildcats%20team.%20Princeton%20is%20led%20by%20its%20underclassmen%20with%20two%20freshmen%2C%20guard%20Abby%20Meyers%20and%20guard%20Carlie%20Littlefield%2C%20winning%20the%20last%20three%20Ivy%20Rookie%20of%20the%20Week%20awards.%20In%20addition%20to%20these%20two%20freshmen%20phenoms%2C%20sophomore%20forward%20Bella%20Alarie%2C%20last%20year%E2%80%99s%20Ivy%20League%20Rookie%20of%20the%20Year%2C%20is%20averaging%20nearly%20a%20double-double%20in%20her%20last%2022%20games%20at%2014.1%20points%20and%209.0%20rebounds.%20In%2019%20of%2022%20those%20games%2C%20Alarie%20has%20scored%20in%20double%20figures%20and%20has%20had%20nine%20double%20doubles%20in%20the%20same%20stretch.%3C%2Fp%3E%0A%3Cp%3EFor%20Villanova%20%285%E2%80%940%29%2C%20who%20has%20an%20early%20season%20marquee%20win%20over%20No.%2011%20Duke%2C%20the%20key%20has%20been%20their%20defense%20and%20three-point%20shooting.%20Villanova%E2%80%99s%20defense%20is%20in%20the%20top%2020%20in%20three-point%20percentage%2C%20field-goal%20percentage%2C%20blocked%20shots%2C%20and%20scoring%20defense.%20Just%20one%20of%20their%20opponents%20has%20scored%2060%20points%20this%20season.%20The%20three-point%20shooting%20for%20Villanova%20has%20sparked%20their%20offense%20all%20year%20with%20both%20of%20their%20top%20scorers%2C%20Adrianna%20Hahn%20and%20Kelly%20Jekot%2C%20shooting%20better%20than%2030%20percent%20from%20beyond%20the%20ark.%20Shutting%20this%20down%20will%20be%20a%20key%20for%20the%20Tigers.%3C%2Fp%3E%0A%3Cp%3EOn%20the%20men%E2%80%99s%20%282%E2%80%943%29%20side%2C%20Princeton%20will%20be%20looking%20to%20stretch%20its%20winning%20streak%20to%20three%20after%20a%200%E2%80%943%20start.%20All-time%2C%20the%20Tigers%20lead%20Lehigh%2031%E2%80%944%20in%20the%20series%2C%20including%20winning%20the%20last%2017%20games%20that%20they%20played%20the%20Mountain%20Hawks%20at%20home.%20Princeton%20is%20led%20on%20offense%20by%20its%20trio%20of%20junior%20guard%20Myles%20Stephens%2C%20junior%20guard%20Devin%20Cannady%2C%20and%20senior%20guard%20Amir%20Bell%20who%20have%20accounted%20for%20at%20least%2055.6%20percent%20of%20the%20team%E2%80%99s%20points%20in%20each%20game%20so%20far%20this%20year.%20Before%20the%20game%20against%20Lafayette%2C%20these%20three%20had%20been%20the%20only%20players%20to%20score%20in%20double%20figures%20this%20season%20when%20they%20were%20joined%20by%20freshman%20forward%20Sebastian%20Much.%3C%2Fp%3E%0A%3Cp%3ELehigh%20%283%E2%80%943%29%20will%20be%20coming%20to%20Jadwin%20on%20Wednesday%20night%20looking%20to%20rebound%20after%20back-to-back%20losses%20to%20No.%2010%20USC%20and%20Pitt%2C%20both%20major%20conference%20foes.%20The%20Mountain%20Hawks%20so%20far%20this%20year%20have%20struggled%20on%20the%20glass%2C%20having%20been%20outrebounded%20by%20all%20five%20of%20its%20D1%20opponents%20so%20far%20this%20season.%20This%20is%20certainly%20an%20area%20that%20Princeton%20will%20be%20highlighting%2C%20having%20won%20the%20rebound%20battle%20twice%20so%20far%20this%20season%20after%20having%20been%20outrebounded%20last%20year%20by%20Lehigh.%3C%2Fp%3E%0A%3Cp%3EIf%20you%E2%80%99re%20unable%20to%20make%20the%20trip%20down%20to%20Jadwin%2C%20both%20games%20will%20be%20streamed%20on%20the%20Ivy%20League%20Digital%20Network%20and%20the%20men%E2%80%99s%20game%20will%20be%20broadcast%20on%20NBC%20Sports%20Philadelphia.%20In%20addition%2C%20the%20men%E2%80%99s%20game%20will%20be%20available%20on%20WPRB%20103.3%20locally%20in%20Princeton%20and%20through%20the%20TuneIn%20app%20online.%20You%20can%20follow%20the%20women%E2%80%99s%20game%20live%20on%20their%20Twitter%2C%20%40PrincetonWBB%2C%20and%20the%20men%E2%80%99s%20game%20live%20on%20their%20Twitter%2C%20%40Princeton_Hoops.%3C%2Fp%3E')}} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  articleTitleText: {
    fontSize: 32,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingRight: 15,
    paddingLeft: 15,
  },
  articleAuthorText: {
    fontSize: 16,
    fontFamily: 'Times New Roman',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
  },
  articleDateText: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
  },
  articleImage: {
    maxWidth: '100%',
    maxHeight: 300,
    paddingTop: 10,
  },
  articleCaptionText: {
    fontSize: 12,
    fontFamily: 'Arial',
    fontStyle: 'italic',
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  articleParagraphText: {
    fontSize: 18,
    fontFamily: 'Times New Roman',
    paddingTop: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 10,
  },
});
