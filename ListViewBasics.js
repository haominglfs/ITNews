import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View ,TouchableHighlight,Alert,Navigator,
  DeviceEventEmitter,ToolbarAndroid} from 'react-native';
import WebViewExample from './WebViewExample'
export default class ListViewBasics extends Component {


  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      // dataSource: ds.cloneWithRows([
      //   'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      // ])
        dataSource:ds,
        data:null
    };
  }

  static navigationOptions = {
    title:'ITNews',
  }

  componentDidMount() {        // 组件将要被卸载
    this.subscription = DeviceEventEmitter.addListener('changeList',this._getData.bind(this));
    this._getData();
}

_getData(){
  console.log('进入数据')
  fetch('https://api.leancloud.cn/1.1/classes/csdnblog',{
   method:'GET',
   headers:{
     'X-LC-Id':'wCALUa8ixi6bA585I6Lem3CH-gzGzoHsz',
     'X-LC-Key':'gyuNsb8OMLd1fNywfBApzOpC',
     'Content-Type': 'application/json',
   }
 }).then((response) => {
      return response.json();
     })
   .then((responseJson) => {
     console.log('结果：'+responseJson.results)
     console.log('返回的条数:'+responseJson.results.length)
     this.setState({
       data:responseJson.results
     });
   })
   .catch((error) => {
     console.error(error);
   });
}

componentWillUnmount(){
  this.subscription.remove();
};

  _pressRow(url,id){
    console.log(url+'====='+id); 
    const { navigate } = this.props.navigation;
    navigate('Detail',{url:url,id:id,});
  }

  _rendRow(rowData){
    return (
      <TouchableHighlight 
      onPress={this._pressRow.bind(this,rowData.url,rowData.objectId)}>
        <Text style={{height:60,borderWidth:1,borderColor:'red',padding:5}}>
        {rowData.title}</Text>
      </TouchableHighlight>)
  }

  // _pressRow(url){
  //   this.props.navigator.push({
  //     title:'详情',
  //     component:DetailView,
  //     params:{
  //       url:url
  //     }
  //   })
  // }

  render() {
    console.log(this.state.dataSource)
    if(this.state.data){
      return (
        <View style={ {flexDirection:'column',backgroundColor:"darkgray",
        marginTop:0,flexWrap:'wrap',height:500,borderColor:'red',borderWidth:1}}>
          <View style={{paddingTop: 22}}>
            <ListView
              dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
              renderRow={this._rendRow.bind(this)}
            />
          </View>
        </View>
      );
    }else{
      return (
        <View style={{paddingTop: 22}}>
          <Text>加载数据</Text>
        </View>)
    }
    
  }
}