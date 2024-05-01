import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import * as Asset from 'expo-asset';

type MosaicItemProps = {
  imageSource: string, 
  text: string
}

const MosaicItem: React.FC<MosaicItemProps> = ({imageSource, text}) => {
  return (
    <View style={styles.itemFrame}>
      <View style={styles.itemContent}>
        <Image source={{ uri: imageSource }} style={{ height: 64, width: 64 }} />
        <Text style={{ fontSize: 10 }}>{text}</Text>
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

  return (
    <View style={styles.container}>
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
    // marginHorizontal: 4
  },
  itemContent: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8
  },
  itemFrame: {
    width: '50%',
  }
})

export default IllustrationMosaic