import React, { Component } from 'react';  
import {  
  StyleSheet,  
  View,  
  WebView,  
  Dimensions,
  TouchableHighlight,
  Text,
  DeviceEventEmitter  
} from 'react-native';  
  
const {width, height} = Dimensions.get('window');


export default class WebViewExample extends Component {  
  
  constructor(props) {  
    super(props);
    console.log(this.props.url) 
    this.state={
      url : 'url站位',
      id:'',
    } 
  }  
  
  componentDidMount(){
    const { params } = this.props.navigation.state;
    this.setState({
        url:params.url,
        id:params.id
    });
  }

  componentWillUnmount(){
    console.log('删除文章');
    this._deleteBlog();
  }

  _deleteBlog(){
    const { params } = this.props.navigation.state;
    let url = 'https://api.leancloud.cn/1.1/classes/'+params.tab+'/'+this.state.id;
    console.log(url);
    return fetch(url,{
      method:'DELETE',
      headers:{
        'X-LC-Id':'wCALUa8ixi6bA585I6Lem3CH-gzGzoHsz',
        'X-LC-Key':'gyuNsb8OMLd1fNywfBApzOpC'
      }
    }).then((response) => {
      DeviceEventEmitter.emit('changeList'+params.tab,params.tab);
     })
    .catch((error) => {
        console.error(error);
      });
  }

  render() {  
    return (
          <View style={{flex:1}}>
            <WebView  
            style={{width:width,height:height-20,backgroundColor:'gray'}}  
            source={{uri:this.state.url,method: 'GET'}}  
            javaScriptEnabled={true}  
            domStorageEnabled={true}  
            scalesPageToFit={false} 
            ref={webView=>this.webView=webView}
            />
          </View>
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#f2f2f2',  
    paddingTop:20,  
  },  
});  