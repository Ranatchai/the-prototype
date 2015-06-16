var DOM_APP_EL_ID = "app";
var React = require('react');
var assign = require('react/lib/Object.assign');
var Loader = require("halogen/MoonLoader");
var React = require("react");

var tags = ['Baby', 'LIFE', 'MAMA', 'Lifestyle', 'Review', 'My adventures in motherhood'];
var blogData = [{
	title: 'เคล็ดลับดีๆ เลือกซื้อผ้าปูที่นอนที่ถูกวิธี',
	description: 'ลองคิดถึงเตียงที่นอนที่สบายที่สุด ที่คุณเคยได้นอนหลับและสัมผัสอยู่บนเตียงนั้นดูสิคะ? ผ้าปูที่นอนที่ดีก็เปรียบเสมือนกับคู่นอนที่ดี เพราะอะไร? ผ้าปูที่นอนนั้นสัมผัสกับผิวของเราโดยตรง ผ้าปูที่นอนที่เหมาะสมสามารถเพิ่มความสุขในการนอนให้เราได้ การเลือกผ้าปูที่นอนมีความสำคัญพอๆ กันกับคุณภาพของฟูกที่นอนและผ้าห่มที่สบายๆ ทราบรึไม่ว่าเครื่องนอนมีส่วนสำคัญที่ทำให้การนอนหลับของเราดีขึ้นค่ะ ปัจจุบันผ้าปูที่นอนมีความหลากหลายทั้งเนื้อผ้าและลวดลายอย่างมากมายในท้องตลาด ในบล็อกนี้แอร์จะเขียนถึงสิ่งที่คุณจำเป็นต้องรู้ในการเลือกผ้าปูที่นอน เพื่อให้เลือกได้เหมาะกับคุณที่สุดค่ะ',
	src: 'http://www.thelovelyair.com/wp-content/uploads/2015/05/Review-lovelyair.com-bed-sheets-1.jpg',
	url: 'http://www.thelovelyair.com/select-bed-sheets/',
	tags: ['Lifestyle', 'Review']
}, {
	title: 'อาการตัวเหลืองในเบบี๋ คุณแม่ควรทราบ',
	description: 'อาการตัวเหลืองคืออะไร  ทารกแรกเกิด ทารกจะมีระดับสารเคมีที่เรียกว่า บิลิรูบิน ( Bilirubin) ในเลือดสูง สารบิลิรูบินคือเม็ดสีสีเหลืองที่เกิดจากการแตกตัวของเม็ดเลือดแดงที่หมดอายุแล้ว การแตกตัวของเม็ดเลือดแดงที่หมดอายุแล้วเป็นเรื่องปกติ และโดยทั่วไปสารบิลิรูบินที่เกิดขึ้นจะไม่ทำให้เกิดอาการตัวเหลือง เพราะตับจะเผาผลาญมันและกำจัดออกทางลำไส้ แต่ทารกแรกคลอดมักจะตัวเหลืองในช่วงสองสามวันแรก เนื่องจากเอนไซม์ในตับซึ่งทำหน้าที่เผาผลาญบิลิรูบินยังไม่สมบูรณ์พอ',
	src: 'http://www.thelovelyair.com/wp-content/uploads/2015/06/blog-lovelyair.com_.jpg',
	url: 'http://www.thelovelyair.com/jaundice-in-newborns/',
	tags: ['My adventures in motherhood']
}, {
	title: 'รีวิวผ้าอ้อมเด็กสำเร็จรูป เบบี้เลิฟ เพลย์แพ้นส์ นาโนพาวเวอร์',
	description: 'สำหรับคนที่มีลูกน้อย คุณพ่อคุณแม่คงปฏิเสธไม่ได้ว่าผ้าอ้อมสำเร็จรูปเป็นของใช้ที่สำคัญมากที่สุดอย่างหนึ่งใช่ไหมค่ะ การเลือกใช้ผ้าอ้อมควรเลือกใช้ให้เหมาะสมกับลูกเป็นเรื่องที่สำคัญค่ะ นอกจากทำให้ลูกน้อยสบายตัวแล้ว ผ้าอ้อมนั้นมีผลต่อพัฒนาการของเด็ก ผ้าอ้อมคุณภาพดีก็ช่วยทำให้ลูกน้อยสดใสร่าเริง สำหรับแม่แอร์แล้วผ้าอ้อมสำเร็จรูปสำคัญมากเลยทีเดียว ขาดไม่ได้เลย ลูกทั้ง 2 คนใช้ผ้าอ้อมสำเร็จรูปกันหมด ผ้าอ้อมสำเร็จรูปใช้ง่าย สะดวก รวดเร็ว ไม่ต้องซักให้เปลืองเวลา ใช้เสร็จแล้วก็ทิ้ง แม่แอร์ยังนึกภาพไม่ออกเลยถ้าหากชีวิตที่ปราศจากผ้าอ้อมสำเร็จรูป แม่แอร์ทดลองใช้มาหลายยี่ห้อละค่ะและหนึ่งในยี่ห้อที่ลองใช้ตอนนี้สำหรับลูกน้อยคือแบรนด์ “เบบี้เลิฟ” (Babylove) ค่ะ สำหรับคุณพ่อคุณแม่มือใหม่หรือครอบครัวไหนที่กำลังหาข้อมูลผ้าอ้อมสำเร็จรูปสำหรับลูกน้อยอยู่ ดูรีวิวนี้แล้วถูกใจแน่นอนเลยค่ะ',
	src: 'http://www.thelovelyair.com/wp-content/uploads/2015/05/Review-babylove-diaper-lovelyair.com-1R-1100x734.jpg',
	url: 'http://www.thelovelyair.com/review-babylove-playpants-nano-power/',
	tags: ['Review']
}];
var logoSrc = 'http://www.thelovelyair.com/wp-content/uploads/2015/05/Logo-lovelyair-300x53.png';
var MockContainer = require('./mock-container2');

React.render(<MockContainer data={blogData} logo={logoSrc} categories={tags}/>, document.getElementById(DOM_APP_EL_ID));