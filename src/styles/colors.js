// import store from "../redux/store"
const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
export default{
    themeColor :randomColor(),    
    buttonText:"white",
    whiteColor:'#fff',
    placeholderText:"gray",
    valueText:"black",
    name:'#494949',
    textInputBg:"white",
    greyTextColor:'#5e5c5c',
    ListBottomColor:'#e8e8e8',
    darkGreyColor:'#333333',
    LightBlue:'#ADD8E6',
    Alien_Green:'#6CC417',
    Deep_Peach:'#FFCBA4',
    Fire_Red:'#F62817',
    Crimson:'#E238EC',
    Iridium:'#3D3C3A',
    Royal_Blue:'#2B60DE',
    Cyan_or_Aqua:'#00FFFF',
    pie_char_color:'rgba(134, 65, 244, 0.8)',
    modalColorRgba:'rgba(0,0,0,0.5)'
    
}

