/* Thai translations. English is read from the HTML itself,
   so only keys that differ in Thai need to be listed here. */
const I18N_TH = {
  'meta.title': 'ภูรี ลิ้มสกุล — Full Stack Developer · Software Engineer',
  'resume': 'Resume-Pooree-Thai.pdf',

  'nav.home': 'หน้าแรก',
  'nav.process': 'วิธีการทำงาน',
  'nav.projects': 'ผลงาน',
  'nav.experience': 'ประสบการณ์',
  'nav.about': 'เกี่ยวกับฉัน',

  'contact.return': 'กลับ',
  'contact.title': 'ติดต่อ',
  'contact.intro': 'ติดต่อได้ทางอีเมลหรือโทรศัพท์',
  'contact.email': 'อีเมล',
  'contact.phone': 'โทรศัพท์',
  'contact.copy': 'คัดลอก',
  'contact.copied': 'คัดลอกแล้ว!',
  'toast.email': 'คัดลอกอีเมลแล้ว',
  'toast.phone': 'คัดลอกเบอร์โทรแล้ว',

  'hero.l1': 'สวัสดี, ผมชื่อ <em>ภูรี</em> !',
  'hero.l2': 'ออกแบบและพัฒนา',
  'hero.l3': 'Web Application.',
  'hero.badge1': 'ประสบการณ์ <b>7+</b> ปี',
  'hero.badge2': 'Backend · Full Stack',
  'hero.sub': 'Software Developer — เชี่ยวชาญ Backend ด้วย Node.js, Express.js, NestJS และ TypeScript พร้อมประสบการณ์พัฒนาแบบ Full Stack ดูแลระบบได้ตั้งแต่ฐานข้อมูล หน้าจอ จนถึง Production บน Google Cloud',
  'hero.more': 'ดูเพิ่มเติม',

  'process.label': 'วิธีการทำงานของฉัน',
  'process.s1': 'เริ่มจากทำความเข้าใจ',
  'process.s2': 'ธุรกิจของคุณ <span class="hl">...</span>',
  'process.s3': 'จากนั้นออกแบบสถาปัตยกรรมระบบแบบ End-to-End',
  'process.s4': 'และ <span class="pill">Flow Diagram</span>',
  'process.s5': 'ข้อมูลที่ดีต้องเริ่มจาก',
  'process.s6': 'การออกแบบฐานข้อมูล',
  'process.s7': 'ต่อด้วยการพัฒนา REST API ที่สะอาดด้วย',
  'process.s9': 'สุดท้าย Deploy ด้วย Docker และ CI/CD ขึ้น',
  'process.s11': '…และดูแลให้ระบบเร็ว เสถียร และ',
  'process.s12': 'พัฒนาต่อได้ในระยะยาว',

  'case.label': 'กรณีศึกษา — ฟรีแลนซ์',
  'case.title': 'ระบบบริหารจัดการ<span>ขนส่ง (POS)</span>',
  'case.client': 'ลูกค้า',
  'case.me': 'ภูรี',
  'case.b1': 'เราทำธุรกิจขนส่งที่มีหลายสาขา และต้องการระบบเดียวที่ใช้ได้ทั้งองค์กร',
  'case.b2': 'ได้เลย! ผมจะออกแบบสถาปัตยกรรมระบบแบบ End-to-End แล้วพัฒนา Backend ด้วย NestJS ให้หลายสาขาทำงานร่วมกันภายใต้องค์กรเดียว',
  'case.b3': 'แล้วออกรายงานจากระบบได้ไหม? 🤔',
  'case.b4': 'ได้ครับ — มีโมดูลรายงานที่สร้างเอกสาร Excel และ PDF ระบบทั้งหมดรันบน Google Cloud Platform และ Deploy ผ่าน GitLab CI/CD',
  'case.c1t': 'ออกแบบ',
  'case.c1': 'ออกแบบสถาปัตยกรรมระบบแบบ End-to-End รองรับบัญชีองค์กรที่มีหลายสาขาภายใต้โครงสร้างองค์กรเดียว',
  'case.c2t': 'พัฒนา',
  'case.c2': 'พัฒนา Business Logic ฝั่ง Backend ด้วย NestJS บน MS SQL Server พร้อมโมดูลรายงานที่สร้างเอกสาร Excel และ PDF',
  'case.c3t': 'ส่งมอบ',
  'case.c3': 'Frontend ด้วย Vue.js และ Backend ด้วย NestJS Deploy ขึ้น Google Cloud Platform ผ่าน GitLab CI/CD',

  'projects.label': 'ผลงานที่คัดสรร',
  'projects.title': 'โปรเจกต์<span>เด่น</span>',
  'p1.t': 'Autofast POS (ระบบศูนย์บริการรถยนต์)',
  'p1.d': 'วิเคราะห์ความต้องการ ออกแบบ Database Schema และพัฒนา RESTful API ใช้ Database Transaction ใน Workflow ที่ซับซ้อน เพื่อให้ข้อมูลสต็อกถูกต้องและป้องกันสต็อกคลาดเคลื่อนระหว่างประมวลผลรายการ',
  'p2.d': 'ออกแบบระบบยืนยันตัวตน และ Workflow อนุมัติราคายางหลายขั้นผ่าน Email พร้อม Export Excel ตามสิทธิ์ผู้ใช้ เพื่อควบคุมการเข้าถึงข้อมูลราคา',
  'p3.d': 'ระบบยืนยันตัวตนด้วย OTP ผ่าน SMS และ Email, Role-Based Access Control (RBAC) และ Audit Log บันทึกการแก้ไขโปรไฟล์ผู้ใช้และกิจกรรมในระบบ',
  'p4.tag': 'ฟรีแลนซ์',
  'p4.t': 'ระบบบริหารจัดการขนส่ง (POS)',
  'p4.d': 'ออกแบบสถาปัตยกรรมแบบ End-to-End และพัฒนา Business Logic ฝั่ง Backend รองรับหลายสาขาภายใต้องค์กรเดียว พร้อมโมดูลรายงานที่สร้างเอกสาร Excel และ PDF',
  'p5.t': 'Web Application แบบ Microservice',
  'p5.d': 'ออกแบบสถาปัตยกรรมระบบแบบ Microservice พัฒนา Web Application ด้วย Backend บน Node.js, Frontend ด้วย Angular และฐานข้อมูล MongoDB',

  'exp.label': 'เส้นทางอาชีพ',
  'exp.title': 'ประสบการณ์<span>ทำงาน</span>',
  'exp.j1.period': '2564 — ปัจจุบัน',
  'exp.j1.list': `
    <li>วิเคราะห์และออกแบบสถาปัตยกรรมระบบแบบ End-to-End และ Flow Diagram</li>
    <li>วิเคราะห์ความต้องการสำหรับ REST API, Database Schema และ Business Logic</li>
    <li>พัฒนาและทดสอบโมดูลทั้งฝั่ง Frontend และ Backend</li>
    <li>วาง CI/CD Pipeline และ Deploy ระบบขึ้น Google Cloud Platform ด้วย Docker</li>
    <li>ดูแลบำรุงรักษา แก้ไขปัญหา และปรับปรุงประสิทธิภาพซอฟต์แวร์บน Production อย่างต่อเนื่อง</li>`,
  'exp.j2.period': '2562 — 2564',
  'exp.j2.list': `
    <li>ออกแบบสถาปัตยกรรมระบบด้วย Microservice Architecture</li>
    <li>พัฒนา Web Application ทั้งฝั่ง Backend ด้วย Node.js และฝั่ง Frontend ด้วย Angular</li>
    <li>ออกแบบและจัดการฐานข้อมูลแบบ NoSQL ด้วย MongoDB</li>`,
  'exp.j3.title': 'ฟรีแลนซ์ (Freelance)',
  'exp.j3.list': `
    <li>ออกแบบสถาปัตยกรรมระบบแบบ End-to-End รองรับบัญชีองค์กรที่มีหลายสาขาภายใต้โครงสร้างองค์กรเดียว</li>
    <li>พัฒนา Business Logic ฝั่ง Backend ด้วย NestJS ให้รองรับหลายสาขาภายในองค์กรเดียว</li>
    <li>พัฒนาโมดูลรายงานสำหรับสร้างเอกสาร Excel และ PDF</li>
    <li>Tech Stack: Vue.js, NestJS, MS SQL Server, GCP, GitLab CI/CD</li>`,

  'skills.label': 'เครื่องมือที่ใช้',
  'skills.title': 'ทักษะ<span>ความสามารถ</span>',
  'skills.lang': 'ภาษาโปรแกรม',
  'skills.db': 'ฐานข้อมูล &amp; ORM',
  'skills.tools': 'เครื่องมือ',

  'about.title': 'สร้างซอฟต์แวร์ที่<span>เสถียร มีประสิทธิภาพ และดูแลต่อได้</span>',
  'about.p1': 'Software Developer ที่มีประสบการณ์พัฒนาซอฟต์แวร์มากกว่า 7 ปี เชี่ยวชาญการพัฒนา Backend ด้วย Node.js, Express.js, NestJS และ TypeScript พร้อมประสบการณ์ลงมือพัฒนา Web Application แบบ Full Stack',
  'about.p2': 'มีประสบการณ์ออกแบบและพัฒนา REST API, Database Schema และ Business Logic หลักสำหรับ Application ทางธุรกิจ รวมถึงทำงานกับ CI/CD Pipeline, Docker และการ Deploy Application บน Google Cloud Platform (GCP) สามารถพัฒนาระบบแบบ End-to-End โดยให้ความสำคัญกับประสิทธิภาพ ความเสถียร และการดูแลต่อได้ในระยะยาว',
  'about.edu': 'ประวัติการศึกษา',
  'edu1.deg': 'ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์',
  'edu1.school': 'มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์พระนครศรีอยุธยา หันตรา',
  'edu1.year': '2559 — 2562',
  'edu2.deg': 'ประกาศนียบัตรวิชาชีพ สาขาเทคโนโลยีสารสนเทศ',
  'edu2.school': 'วิทยาลัยเทคนิคพระนครศรีอยุธยา',
  'edu2.year': '2556 — 2559',
  'about.langs': 'ภาษา',
  'about.langList': '<span>ไทย</span><span>อังกฤษ</span>',
  'about.cta': 'ติดต่อฉัน',
  'about.resume': 'ดาวน์โหลดเรซูเม่ (PDF)',

  'footer.name': 'ภูรี ลิ้มสกุล',
  'footer.copy': 'ภูรี ลิ้มสกุล',
};
