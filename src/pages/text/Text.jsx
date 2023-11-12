import React from 'react';
import './text.css'; 
import poliImage from "../../Images/poli.png"
import semaImage from "../../Images/sema.png"
import nilImage from "../../Images/nil.png"
import sulaImage from "../../Images/sula.png"
import eleImage from "../../Images/ele.png"
import loviImage from "../../Images/lovi.png"
import guruImage from "../../Images/guru.png"
import babaImage from "../../Images/baba.png"
import isiImage from "../../Images/isi.png"



const postsData = [
  {
    title: 'පොලියානා',
    imageUrl: poliImage,
    description: 'ඔයා දන්නවද, ඒත් මම නං කැමති පල්ලි යන්න. ඒ තාත්තා හින්දා. ඔයා දන්නවනේ එයා ස්වාමි කෙනෙක්. ඇත්තටම කියනවානම් එයා අම්මයි, අනිත් අයයි එක්ක එකතු වෙන්න ස්වර්ගෙට ගියා. ඉතින් මම මෙහෙ ඉඳගෙන ඒ ගොල්ලෝ හිතෙන් මවා ගන්න ගොඩක් වෙලාවට උත්සහා කරනවා...ඒත් පල්ලියට ගිහින් ස්වාමිගේ දේශනාව අහගෙන ඉන්නකොට ඒක කරන්න හරි ලේසී.....මම ඇස් දෙක වහගෙන හිතා ගන්නවා මගේ තාත්තා තමයි ඉස්සරහ ඉන්නේ කියලා. ඒක ලොකූ සැනසීමක්. මට හරි සතුටුයි අපිට සමහර දේවල් හිතෙන් මවාගන්න පුලුවන් වෙන එකට.',
  },
  {
    title: 'නිල් කට්රොල්',
    imageUrl:nilImage ,
    description: 'ගෑනියෙකුට දරා ගන්ඩම බැරි හැගීම මොකක්ද දන්නවාද..මොකක්ද....එයා මිනිහෙකුට ආදරේ කරනවාට වඩා, ඒ මිනිහා එයාට ආදරේ කරනවාය කියල දැනෙන හැඟීම.',
  },
  {
    title: ' කන්දක් සේමා',
    imageUrl: semaImage,
    description: 'ඔයා කවදා හරී දැකලා තියෙනවා ද පිරිමි බෝනික්කෝ .....කොහේ දකින්න ද ....බෝනික්කෝ නම් ඔක්කොම ගෑනු ....බෝනික්කෝ හදන්නේ ගෑනු වගේ උනාට ගෑනු කියන්නේ බෝනික්කෝ නෙමෙයි ',
  },
  {
    title: 'සුළඟ වගේ ඇවිදින්',
    imageUrl:sulaImage,
    description: 'මම ගෙදරින් එළියට බහිනකොටත් හත පහුවෙලා. දැන් මහරගමට ගිහින් අල්ලන්න වෙන්නේ ස්කූල් බස් එකේ වලිගේ තමයි. ජයරත්න එක ඉස්සරහට ඇවිත් බැලුවා. බේතකටවත් අපේ එකෙක් ඉඳියි ද කියලා.....එකෙක්වත් නෑ…දැන් ඉතින් තනියම කාපංකෝ ටින්කිරි......ඒ හුලගේ තිබුනේ ඔයාගේ සුවද විතරමයි අරුණි  අක්කේ..',
  },
  {
    title: 'මිනිත්තු එකොළහේ කතන්දරේ',
    imageUrl:  eleImage,
    description: 'පිරිමියෙක් මුණ ගැහිලා මම ඔහුත් එක්ක ආදරෙන් බැදුනා.මම මට ආදරෙන් බැදෙන්න ඉඩ දුන්නේ එකම සරල කාරනයක් නිසයි. එ මම ඉන් කිසිම දෙයක් බලාපොරොත්තු නොවන නිසායි . මම දන්නවා තව මාස තුනකට පස්සෙ මම ඉන්නේ හුගාක් දුරින් . එයා මගේ මතකයක් විතරක් වෙවි. එත් මට තව දුරටත් ආදරය නැතුව ජීවත් වෙන්න අමාරුයි. මම මගේ සීමාවට ළඟාවෙලා ඉවරයි.',
  },
  {
    title: 'ලොවීනා',
    imageUrl: loviImage,
    description: 'මවුන්ට් ලැවීනියාවේ මේට්ලන්ඩ්ට පමණක්...ලැවීනියා වූ...ලොවීනා...පුන්නිට නොපෙනී...යන්න ගියත් සොයා උතියා...තවමත් ඇය සක්මනේ...ගල්කිස්ස වැලිතීරයේ.',
  },
  {
    title: 'ගුරු ගීතය',
    imageUrl: guruImage,
    description: 'ශීත කාලය පැමිණේවි. තද ශීත කුණාටු හමාවි. හිම සහිත මහ නපුරු සුළිසුලං හමාවි. එහෙත් වසන්තය එනවා සත්තකයි.',
  },
  {
    title: 'දුයිෂෙන්',
    imageUrl: isiImage,
    description: 'මා තනිකර කතා කරන සැටිය ඒ.මටම මා නිතරම නොයෙක් දේ කියා ගත්තද ඒ සියල්ල ක්‍රියාවට යෙදිය නොහැකිය.මා අඳින චිත්‍රය මොන විධියේ එකක් දැයි කීමට මා අපොහොසත් ය.එහෙත් මම ස්ථිරවම එක් දෙයක් දනිමි...මම සොයන්නෙමි.',
  },
  {
    title: '  බබා x',
    imageUrl: babaImage,
    description: ' හැමදේම චක්‍රයක්, කාලයත් එක්ක හැමදේම වෙනස් වෙනවා, ක්ෂය වෙනවා, නැති වෙලා යනවා, එහෙත් සැබෑ ධර්මතාවයන් විශ්වය ආරක්ෂා කරනවා. ඒවා විශ්වය විසින් ගබඩා කොට තබා ගන්නවා. කාලයාගේ ඇවෑමෙන් ඒවා තවත් කිසිවෙකු හෝ විසින් සොයා ගන්නවා. චක්‍රය මේ ආකාරයෙන් කාල, වර්ෂ , ශතවර්ෂ වලට ගමන් කරනවා.',
  },
];

const buttonLinks = [
  'https://drive.google.com/drive/u/4/folders/1zoPOzoN35_HZmmQEMvvCzb8LZhpFD1R3',
  'https://drive.google.com/drive/u/4/folders/1aRGA9ej7N9be71JNjONiqUZwnOm1sK8k',
  'https://drive.google.com/drive/u/4/folders/1O8PG197-7xG7qdZjNN-ysK0wg8Urbhmi',
  'https://drive.google.com/drive/u/4/folders/1MXtqDRZHGNOJzdM3-TVIDPfjkxHRdvHc',
  'https://drive.google.com/drive/u/4/folders/15dPODzJPwO1itFKtdTSoWsUiXI1_Lma7',
  'https://drive.google.com/drive/u/4/folders/1oZwQXcHswiGQRx-3-UjAHsISl6fbm90f',
  'https://drive.google.com/drive/u/4/folders/1eF0P2PVwwMLYxYeLDCWyoe-XJebwsiHx',
  'https://drive.google.com/drive/u/4/folders/1lvE4oEe4Az93-w_7VBBJBCLW3LLw6uTr',
  'https://drive.google.com/drive/u/4/folders/1Jgv40hnC19tT8IPHsseRNlsNJKpV-xSU',
 
];

const Text = () => {
  return (
    <div className="text">
      <div className="textTitles">
        <span className="textTitleLg">සිංහල නවකතා</span>
        <img
          className="textImg"
          src="https://images.pexels.com/photos/16731753/pexels-photo-16731753/free-photo-of-independence-memorial-hall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="textDesc">
          "නවකතාව යන වචනයට ඉංග්‍රීසියෙන් යොදන novel යන වදන බිඳී ආවේ ඉතාලි බසෙහි එන novella යන වදනෙහි අග අකුරු දෙක හැළීමෙනි. එහි අරුත ‘නව’ හෙවත් ‘අලුත්’ යන්නය.”
        </p>
      </div>
      <div className="textpost">
        {postsData.map((post, index) => (
          <div key={index} className="textpostItem">
            <img
              className="textpostImg"
              src={post.imageUrl}
              alt=""
            />
            <div className="textpostInfo">
              <span className="postTitle">{post.title}</span>
              <hr />
              <p className="textpostDesc">{post.description}</p>
              <a
                href={buttonLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="textButton">
                පිවිසෙන්න
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Text;
