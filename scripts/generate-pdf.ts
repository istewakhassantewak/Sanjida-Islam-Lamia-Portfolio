import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Left sidebar background: Dark teal / cyan #144f54
  const sidebarWidth = 200;
  page.drawRectangle({
    x: 0,
    y: 0,
    width: sidebarWidth,
    height: height,
    color: rgb(20 / 255, 79 / 255, 84 / 255),
  });

  // Embed photo
  const photoPath = path.resolve('./public/Lamia.png');
  if (fs.existsSync(photoPath)) {
    try {
      const photoBytes = fs.readFileSync(photoPath);
      const photoImage = await pdfDoc.embedPng(photoBytes);
      const imgSize = 110;
      const imgX = (sidebarWidth - imgSize) / 2;
      const imgY = height - 145;

      page.drawImage(photoImage, {
        x: imgX,
        y: imgY,
        width: imgSize,
        height: imgSize,
      });

      // Border around photo
      page.drawRectangle({
        x: imgX,
        y: imgY,
        width: imgSize,
        height: imgSize,
        borderColor: rgb(1, 1, 1),
        borderWidth: 2,
      });
    } catch (e) {
      console.error('Error embedding image:', e);
    }
  }

  // --- SIDEBAR CONTENT (Left) ---
  let leftY = height - 170;
  const leftX = 18;
  const mintColor = rgb(110 / 255, 231 / 255, 183 / 255);
  const white = rgb(1, 1, 1);
  const gray = rgb(0.8, 0.85, 0.85);

  // Section: CONTACT
  page.drawText('CONTACT', { x: leftX, y: leftY, size: 9, font: fontBold, color: mintColor });
  page.drawLine({ start: { x: leftX, y: leftY - 3 }, end: { x: sidebarWidth - 18, y: leftY - 3 }, color: rgb(1, 1, 1), thickness: 0.5, opacity: 0.3 });
  leftY -= 16;

  page.drawText('MOBILE', { x: leftX, y: leftY, size: 7.5, font: fontBold, color: gray });
  leftY -= 10;
  page.drawText('01817410805', { x: leftX, y: leftY, size: 8.5, font: fontRegular, color: white });
  leftY -= 14;

  page.drawText('EMAIL', { x: leftX, y: leftY, size: 7.5, font: fontBold, color: gray });
  leftY -= 10;
  page.drawText('sanjidalamia01@gmail.com', { x: leftX, y: leftY, size: 8, font: fontRegular, color: white });
  leftY -= 14;

  page.drawText('PORTFOLIO', { x: leftX, y: leftY, size: 7.5, font: fontBold, color: gray });
  leftY -= 10;
  page.drawText('sanjida-islam-lamia-portfolio.vercel.app', { x: leftX, y: leftY, size: 7, font: fontRegular, color: mintColor });
  leftY -= 14;

  page.drawText('ADDRESS', { x: leftX, y: leftY, size: 7.5, font: fontBold, color: gray });
  leftY -= 10;
  const addressLines = [
    'House 191, Nanua Dighir Purbo Par,',
    'Bajrapur (Part), Ward No. 12, Cumilla City',
    'Corporation, Cumilla Adarsha Sadar,',
    'Cumilla - 3500, Chattogram Division,',
    'Bangladesh'
  ];
  for (const al of addressLines) {
    page.drawText(al, { x: leftX, y: leftY, size: 7.2, font: fontRegular, color: white });
    leftY -= 9;
  }
  leftY -= 10;

  // Section: PERSONAL DETAILS
  page.drawText('PERSONAL DETAILS', { x: leftX, y: leftY, size: 9, font: fontBold, color: mintColor });
  page.drawLine({ start: { x: leftX, y: leftY - 3 }, end: { x: sidebarWidth - 18, y: leftY - 3 }, color: rgb(1, 1, 1), thickness: 0.5, opacity: 0.3 });
  leftY -= 16;

  const personalDetails = [
    { label: 'DATE OF BIRTH', val: '06 May 2002' },
    { label: 'GENDER', val: 'Female' },
    { label: 'MARITAL STATUS', val: 'Married' },
    { label: 'RELIGION', val: 'Islam' },
    { label: 'BLOOD GROUP', val: 'A+' },
    { label: "FATHER'S NAME", val: 'Md. Manirul Islam Pinto' },
    { label: "MOTHER'S NAME", val: 'Dr. Nasrin Sultana Shilpi' },
  ];

  for (const pd of personalDetails) {
    page.drawText(pd.label, { x: leftX, y: leftY, size: 7, font: fontBold, color: gray });
    leftY -= 9;
    page.drawText(pd.val, { x: leftX, y: leftY, size: 8, font: fontRegular, color: white });
    leftY -= 11;
  }
  leftY -= 6;

  // Section: SKILLS
  page.drawText('SKILLS', { x: leftX, y: leftY, size: 9, font: fontBold, color: mintColor });
  page.drawLine({ start: { x: leftX, y: leftY - 3 }, end: { x: sidebarWidth - 18, y: leftY - 3 }, color: rgb(1, 1, 1), thickness: 0.5, opacity: 0.3 });
  leftY -= 14;

  page.drawText('HARD SKILLS', { x: leftX, y: leftY, size: 7.5, font: fontBold, color: gray });
  leftY -= 11;
  const hardSkills = ['MS Word', 'Excel and PowerPoint', 'Internet & Email', 'Computer Hardware', 'Baking', 'Crafting', 'Teaching / Tutoring'];
  for (const hs of hardSkills) {
    page.drawCircle({ x: leftX + 2, y: leftY + 2.5, size: 1.5, color: mintColor });
    page.drawText(hs, { x: leftX + 8, y: leftY, size: 7.5, font: fontRegular, color: white });
    leftY -= 10;
  }
  leftY -= 4;

  page.drawText('SOFT SKILLS', { x: leftX, y: leftY, size: 7.5, font: fontBold, color: gray });
  leftY -= 11;
  const softSkills = [
    ['Communication', 'Teamwork'],
    ['Adaptability', 'Problem-Solving']
  ];
  for (const row of softSkills) {
    page.drawCircle({ x: leftX + 2, y: leftY + 2.5, size: 1.5, color: mintColor });
    page.drawText(row[0], { x: leftX + 8, y: leftY, size: 7.2, font: fontRegular, color: white });

    page.drawCircle({ x: leftX + 85, y: leftY + 2.5, size: 1.5, color: mintColor });
    page.drawText(row[1], { x: leftX + 91, y: leftY, size: 7.2, font: fontRegular, color: white });
    leftY -= 10;
  }

  // --- RIGHT MAIN CONTENT ---
  const rightX = sidebarWidth + 30;
  const darkTeal = rgb(20 / 255, 79 / 255, 84 / 255);
  const textDark = rgb(0.15, 0.18, 0.2);
  const textMuted = rgb(0.4, 0.45, 0.5);

  let rightY = height - 55;

  // Name Header
  page.drawText('Sanjida Islam', { x: rightX, y: rightY, size: 26, font: fontBold, color: darkTeal });
  rightY -= 28;
  page.drawText('Lamia', { x: rightX, y: rightY, size: 26, font: fontBold, color: darkTeal });
  rightY -= 18;
  page.drawText('Honours Student, Social Work | Commerce Background', { x: rightX, y: rightY, size: 9, font: fontRegular, color: textMuted });
  rightY -= 24;

  // PROFILE SECTION
  page.drawText('PROFILE', { x: rightX, y: rightY, size: 10, font: fontBold, color: darkTeal });
  page.drawLine({ start: { x: rightX, y: rightY - 3 }, end: { x: rightX + 60, y: rightY - 3 }, color: darkTeal, thickness: 1.5 });
  rightY -= 16;

  const profileLines = [
    'Motivated and disciplined student currently pursuing an Honours degree in Social',
    'Work, with a Commerce background and a consistently strong academic record.',
    'Experienced in tutoring and creative crafts, with practical computer skills and a',
    'basic baking certification. Eager to apply dedication, communication and a',
    'service-minded outlook in a professional role.'
  ];
  for (const pl of profileLines) {
    page.drawText(pl, { x: rightX, y: rightY, size: 8, font: fontRegular, color: textDark });
    rightY -= 11;
  }
  rightY -= 15;

  // EDUCATION SECTION
  page.drawText('EDUCATION', { x: rightX, y: rightY, size: 10, font: fontBold, color: darkTeal });
  page.drawLine({ start: { x: rightX, y: rightY - 3 }, end: { x: rightX + 75, y: rightY - 3 }, color: darkTeal, thickness: 1.5 });
  rightY -= 16;

  const education = [
    { title: 'Honours in Social Work', inst: 'Comilla Victoria Government College', note: 'Running | Expected 2027' },
    { title: 'Higher Secondary Certificate (HSC), Commerce', inst: "Cumilla Govt. Women's College", note: 'CGPA: 4.58' },
    { title: 'Secondary School Certificate (SSC), Commerce', inst: 'Comilla Modern High School', note: 'CGPA: 4.17' },
    { title: 'Junior School Certificate (JSC)', inst: 'Comilla Modern High School', note: 'CGPA: 4.50' },
    { title: 'Primary School Certificate (PSC)', inst: 'YWCA School, Cumilla', note: 'CGPA: 5.00' }
  ];

  for (const edu of education) {
    page.drawCircle({ x: rightX + 2, y: rightY + 3, size: 2.2, color: darkTeal });
    page.drawText(edu.title, { x: rightX + 10, y: rightY, size: 8.5, font: fontBold, color: textDark });
    rightY -= 10.5;
    page.drawText(edu.inst, { x: rightX + 10, y: rightY, size: 7.8, font: fontRegular, color: textMuted });
    rightY -= 10;
    page.drawText(edu.note, { x: rightX + 10, y: rightY, size: 7.5, font: fontRegular, color: darkTeal });
    rightY -= 14;
  }
  rightY -= 5;

  // EXPERIENCE SECTION
  page.drawText('EXPERIENCE', { x: rightX, y: rightY, size: 10, font: fontBold, color: darkTeal });
  page.drawLine({ start: { x: rightX, y: rightY - 3 }, end: { x: rightX + 80, y: rightY - 3 }, color: darkTeal, thickness: 1.5 });
  rightY -= 16;

  page.drawCircle({ x: rightX + 2, y: rightY + 3, size: 2.2, color: darkTeal });
  page.drawText('Home Tutor (Private Tuition)', { x: rightX + 10, y: rightY, size: 8.5, font: fontBold, color: textDark });
  rightY -= 11;
  const tutorDesc = [
    'Taught students privately at home, supporting their academic progress and',
    'building strong communication and patience.'
  ];
  for (const td of tutorDesc) {
    page.drawText(td, { x: rightX + 10, y: rightY, size: 7.8, font: fontRegular, color: textMuted });
    rightY -= 10;
  }
  rightY -= 6;

  page.drawCircle({ x: rightX + 2, y: rightY + 3, size: 2.2, color: darkTeal });
  page.drawText('Crafting', { x: rightX + 10, y: rightY, size: 8.5, font: fontBold, color: textDark });
  rightY -= 11;
  const craftDesc = [
    'Hands-on creative craft work demonstrating creativity, attention to detail and',
    'skilled handiwork.'
  ];
  for (const cd of craftDesc) {
    page.drawText(cd, { x: rightX + 10, y: rightY, size: 7.8, font: fontRegular, color: textMuted });
    rightY -= 10;
  }
  rightY -= 15;

  // CERTIFICATIONS SECTION
  page.drawText('CERTIFICATIONS', { x: rightX, y: rightY, size: 10, font: fontBold, color: darkTeal });
  page.drawLine({ start: { x: rightX, y: rightY - 3 }, end: { x: rightX + 100, y: rightY - 3 }, color: darkTeal, thickness: 1.5 });
  rightY -= 16;

  page.drawCircle({ x: rightX + 2, y: rightY + 3, size: 2.2, color: darkTeal });
  page.drawText('Basic Baking Course', { x: rightX + 10, y: rightY, size: 8.5, font: fontBold, color: textDark });
  rightY -= 10;
  page.drawText('The Cake Fairy', { x: rightX + 10, y: rightY, size: 7.8, font: fontRegular, color: textMuted });
  rightY -= 16;

  page.drawCircle({ x: rightX + 2, y: rightY + 3, size: 2.2, color: darkTeal });
  page.drawText('Computer Management', { x: rightX + 10, y: rightY, size: 8.5, font: fontBold, color: textDark });
  rightY -= 10;
  page.drawText('Comilla Victoria Govt. College', { x: rightX + 10, y: rightY, size: 7.8, font: fontRegular, color: textMuted });
  rightY -= 10;
  page.drawText('Grade: A+ | Computer hardware, MS Word, Excel and PowerPoint, internet and email', { x: rightX + 10, y: rightY, size: 7.5, font: fontRegular, color: darkTeal });

  // Save to public directory
  const pdfBytes = await pdfDoc.save();
  const outPath = path.resolve('./public/Sanjida Islam Lamia CV.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`Generated CV PDF at ${outPath} (${pdfBytes.length} bytes)`);
}

generateCV().catch(console.error);
