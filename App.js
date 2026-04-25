import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const opcao = "Tela2"; 

  const corAzul = "#5dade2";
  const corVerde = "#2ecc71";
  const corTexto = "#666";

  if (opcao === "Tela1") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={{ padding: 20 }}>
          <View style={styles.searchContainer}>
            <View style={styles.searchCircle} />
            <Text style={{ color: corAzul, fontWeight: 'bold' }}>Search</Text>
          </View>

          <View style={styles.row}>
            <View style={[styles.chip, { backgroundColor: corAzul }]}>
              <Text style={{ color: "#fff" }}>🎓 Education</Text>
            </View>
            <View style={styles.iconBox}><Text style={{fontSize: 18}}>+</Text></View>
            <View style={styles.iconBox}><Text style={{fontSize: 18}}>🌱</Text></View>
            <View style={styles.iconBox}><Text style={{fontSize: 18}}>🐾</Text></View>
          </View>

          <Text style={styles.resultsText}>300 Results</Text>

          <View style={styles.listItem}>
            <View style={[styles.imgWrapper, { backgroundColor: corAzul }]}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/item1/200' }} 
                style={styles.imgIcon} 
              />
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.loremText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</Text>
              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: '40%', backgroundColor: corAzul }]} />
              </View>
            </View>
          </View>

          <View style={styles.listItem}>
            <View style={[styles.imgWrapper, { backgroundColor: corAzul }]}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/item2/200' }} 
                style={styles.imgIcon} 
              />
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={styles.loremText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</Text>
              <View style={styles.progressBg}>
                <View style={[styles.progressFill, { width: '70%', backgroundColor: corVerde }]} />
              </View>
            </View>
          </View>

          <View style={styles.bigCard}>
            <View style={[styles.bigCardTop, { backgroundColor: corAzul }]}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/main/400/200' }} 
                style={{ width: '100%', height: '100%' }} 
              />
            </View>
            <View style={{ padding: 15 }}>
              <Text style={styles.loremText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: corAzul }}>
        <View style={styles.headerT2}>
          <Text style={styles.backBtn}>{"<"}</Text>
          <Image 
            source={{ uri: 'https://picsum.photos/seed/profile/200' }} 
            style={styles.avatarT2} 
          />
          <Text style={styles.backBtn}>🔍</Text>
        </View>

        <View style={styles.bodyT2}>
          <Text style={styles.titleT2}>Lorem ipsum dolor</Text>
          <Text style={styles.descT2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</Text>
          
          <View style={styles.priceBox}>
            <Text style={styles.priceText}>$120.00</Text>
          </View>

          <TextInput 
            style={styles.inputT2} 
            placeholder="ENTER TEXT HERE" 
            placeholderTextColor="#ccc"
            multiline 
          />

          <TouchableOpacity style={[styles.btnDonate, { backgroundColor: corVerde }]}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>DONATE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#eaf2f8',
    height: 45,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20
  },
  searchCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#5dade2',
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  chip: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center'
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultsText: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 15
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center'
  },
  imgWrapper: {
    width: 85,
    height: 85,
    borderRadius: 15,
    overflow: 'hidden'
  },
  imgIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  loremText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18
  },
  progressBg: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginTop: 10
  },
  progressFill: {
    height: '100%',
    borderRadius: 4
  },
  bigCard: {
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  bigCardTop: {
    height: 180
  },
  headerT2: {
    height: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    alignItems: 'flex-start'
  },
  avatarT2: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    borderWidth: 4,
    borderColor: '#fff'
  },
  backBtn: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'
  },
  bodyT2: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 30,
    alignItems: 'center'
  },
  titleT2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5dade2',
    marginBottom: 12
  },
  descT2: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    lineHeight: 20
  },
  priceBox: {
    marginVertical: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 15
  },
  priceText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2ecc71'
  },
  inputT2: {
    width: '100%',
    height: 80,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    textAlignVertical: 'top',
    color: '#333'
  },
  btnDonate: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  }
});

export default App;