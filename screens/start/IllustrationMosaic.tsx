import * as React from "react";
import { View, StyleSheet, Image, Text, Dimensions, Platform } from "react-native";
import * as Asset from 'expo-asset';

type MosaicItemProps = {
  imageSource: string, 
  text: string
}

const MosaicItem: React.FC<MosaicItemProps> = ({imageSource, text}) => {
  return (
    <View style={styles.itemFrame}>
      <View style={styles.itemContent}>
        <Image source={{ uri: imageSource }} style={{ height: 64, width: 64, ...(Platform.OS === 'web' ? { height: 112, width: 112 } : {}) }} />
        <Text style={{ fontSize: 10, ...(Platform.OS === 'web' ? { whiteSpace: 'nowrap', fontSize:16, marginTop: 20, marginBottom: -10, } : {}) }}>{text}</Text>
      </View>
    </View>
  )
}

const IllustrationMosaic = () => {

  const itemProps: MosaicItemProps[] = [
    { imageSource: Asset.Asset.fromModule(require("@/assets/images/img-mosaic-0.png")).uri, text: "All In One Place" },
    { imageSource: Asset.Asset.fromModule(require("@/assets/images/img-mosaic-1.png")).uri, text: "Fast Responses" },
    { imageSource: Asset.Asset.fromModule(require("@/assets/images/img-mosaic-2.png")).uri, text: "Tailored to You" },
    { imageSource: Asset.Asset.fromModule(require("@/assets/images/img-mosaic-3.png")).uri, text: "Guidance & Support" },
  ]
  const { width } = Dimensions.get('window');
  const isDesktop = width >= 768 && Platform.OS === 'web';

  return (
    <View style={[styles.container, isDesktop && styles.desktopContainer]}>
      {
        itemProps.map ( (value) => <MosaicItem imageSource={value.imageSource} text={value.text} /> )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  desktopContainer: {
    flexDirection: 'row',
    padding: 40,
  },
  itemContent: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
    ...Platform.select({
      web: {
        marginHorizontal:-5,
        marginVertical: 0,
        paddingVertical: 30,
      }
    })
  },
  itemFrame: {
    width: '50%',
    ...Platform.select({
      web: {
        width: '25%',
      }
    })
  }
})

export default IllustrationMosaic