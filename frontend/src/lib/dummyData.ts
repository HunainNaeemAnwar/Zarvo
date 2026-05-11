export const dummyDiseases = [
  {
    id: "1",
    nameUr: "گندم کا گہرا زنگ",
    nameEn: "Wheat Yellow Rust",
    cropType: "گندم",
    symptomPreview: "پتوں پر پیلے دھبے اور زنگ کے نقطے",
    severity: "high" as const,
    imageColor: "#FEF3C7",
  },
  {
    id: "2",
    nameUr: "چاول کا پتہ جھلاس",
    nameEn: "Rice Leaf Blight",
    cropType: "چاول",
    symptomPreview: "پتوں کے کنارے بھورے ہو جاتے ہیں",
    severity: "medium" as const,
    imageColor: "#FEE2E2",
  },
  {
    id: "3",
    nameUr: "کپاس کا جادو",
    nameEn: "Cotton Wilt",
    cropType: "کپاس",
    symptomPreview: "پودے سرخ ہو جاتے ہیں اور مر جاتے ہیں",
    severity: "high" as const,
    imageColor: "#FEE2E2",
  },
  {
    id: "4",
    nameUr: "گنا کا سرخ سران",
    nameEn: "Sugarcane Red Rot",
    cropType: "گنا",
    symptomPreview: "تنوں کے اندر سرخ رنگ کا خراب ہونا",
    severity: "high" as const,
    imageColor: "#FEE2E2",
  },
  {
    id: "5",
    nameUr: "مکئی کا پتہ دھبہ",
    nameEn: "Maize Leaf Spot",
    cropType: "مکئی",
    symptomPreview: "پتوں پر چھوٹے گول دھبے",
    severity: "low" as const,
    imageColor: "#DCFCE7",
  },
  {
    id: "6",
    nameUr: "گندم کا کالا زنگ",
    nameEn: "Wheat Stem Rust",
    cropType: "گندم",
    symptomPreview: "تنوں پر بھورے زنگ کے دھبے",
    severity: "high" as const,
    imageColor: "#FEE2E2",
  },
  {
    id: "7",
    nameUr: "چاول کا بلاست",
    nameEn: "Rice Blast",
    cropType: "چاول",
    symptomPreview: "پتوں پر آگ جیسے دھبے",
    severity: "medium" as const,
    imageColor: "#FEF3C7",
  },
  {
    id: "8",
    nameUr: "کپاس کا بوڑی",
    nameEn: "Cotton Boll Rot",
    cropType: "کپاس",
    symptomPreview: "کپاس کے پھول کھراب ہو جاتے ہیں",
    severity: "medium" as const,
    imageColor: "#FEF3C7",
  },
  {
    id: "9",
    nameUr: "گنا کا موزیک",
    nameEn: "Sugarcane Mosaic",
    cropType: "گنا",
    symptomPreview: "پتوں پر چٹکے پٹے",
    severity: "low" as const,
    imageColor: "#DCFCE7",
  },
  {
    id: "10",
    nameUr: "مکئی کا کالا سٹیم",
    nameEn: "Maize Charcoal Rot",
    cropType: "مکئی",
    symptomPreview: "تنوں کالا ہو جاتا ہے",
    severity: "medium" as const,
    imageColor: "#FEF3C7",
  },
];

export const dummyDiseaseDetails: Record<string, {
  nameUr: string;
  scientificName: string;
  severity: "high" | "medium" | "low";
  imageColor: string;
  symptoms: string[];
  prevention: string[];
  treatment: string[];
  bestSprayTime: string;
}> = {
  "1": {
    nameUr: "گندم کا گہرا زنگ",
    scientificName: "Puccinia striiformis",
    severity: "high",
    imageColor: "#FEF3C7",
    symptoms: [
      "پتوں پر پیلے دھبے ظاہر ہوتے ہیں",
      "دھبے زنگ کی طرح ہوتے ہیں",
      "پتوں کی رنگت زرد ہو جاتی ہے",
      "پودے کی نشو و نوتا روک جاتی ہے",
    ],
    prevention: [
      "زنگ-resistant قسم کی گندم کی کاشت کریں",
      "بیمار پودوں کو فوراً ختم کریں",
      "فصل کی مناسب وقت پر کٹائی کریں",
      "کھاد کا مناسب استعمال کریں",
    ],
    treatment: [
      "Propiconazole spray کریں",
      "Azoxystrobin کا استعمال کریں",
      "بیمار حصے کو کاٹ کر نکالیں",
      "کھاد میں نائٹروجن بڑھائیں",
    ],
    bestSprayTime: "صبح 8-10 بجے",
  },
  "2": {
    nameUr: "چاول کا پتہ جھلاس",
    scientificName: "Magnaporthe oryzae",
    severity: "medium",
    imageColor: "#FEE2E2",
    symptoms: [
      "پتوں کے کنارے بھورے ہو جاتے ہیں",
      "پتوں پر گول دھبے ظاہر ہوتے ہیں",
      "پتوں کا سڑنا شروع ہو جاتا ہے",
      "دانوں کی کیفیت متاثر ہوتی ہے",
    ],
    prevention: [
      "بیمار-resistant قسم کی کاشت کریں",
      "پانی کا مناسب انتظام کریں",
      "بیمار دانوں کو استعمال نہ کریں",
      "فصل کی گھنیوں کو کم کریں",
    ],
    treatment: [
      "Tricyclazole spray کریں",
      "Isoprothiolane کا استعمال کریں",
      "بیمار پتوں کو ہٹا دیں",
      "کھاد میں پوٹاشیم بڑھائیں",
    ],
    bestSprayTime: "دن 2-4 بجے",
  },
  "3": {
    nameUr: "کپاس کا جادو",
    scientificName: "Fusarium oxysporum",
    severity: "high",
    imageColor: "#FEE2E2",
    symptoms: [
      "پودے سرخ ہو جاتے ہیں",
      "پتوں کا پیلا پڑنا",
      "پودے مر جاتے ہیں",
      "تنوں کا کالا ہونا",
    ],
    prevention: [
      "بیمار-resistant قسم کی کاشت کریں",
      "مٹی کو سینٹائز کریں",
      "بیمار پودوں کو فوراً ختم کریں",
      "فصل کی گھنیوں کو مناسب رکھیں",
    ],
    treatment: [
      "Carbendazim کا استعمال کریں",
      "Thiram seed treatment کریں",
      "بیمار پودوں کو نکال دیں",
      "مٹی میں کھاد بڑھائیں",
    ],
    bestSprayTime: "شام 5-7 بجے",
  },
};
