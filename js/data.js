/**
 * Minna no Nihongo 1 — Vocabulary Data
 *
 * Structure per lesson:
 *   lessonNumber: number
 *   title: string (lesson topic)
 *   vocabulary: array of {
 *     japanese: string   — kanji + kana (display form)
 *     kana: string       — kana-only reading
 *     vietnamese: string  — Vietnamese meaning
 *     english: string     — English meaning (optional)
 *     example: string     — Example sentence (optional)
 *   }
 *
 * HOW TO ADD MORE LESSONS:
 *   1. Add a new object to the VOCABULARY_DATA array below.
 *   2. Set lessonNumber, title, and vocabulary array.
 *   3. The app auto-detects new lessons — no other changes needed.
 */

const VOCABULARY_DATA = [
  // ═══════════════════════════════════════════
  // LESSON 1 — Introductions / Self-introduction
  // ═══════════════════════════════════════════
  {
    lessonNumber: 1,
    title: "わたしは ～です (Giới thiệu bản thân)",
    vocabulary: [
      {
        japanese: "わたし",
        kana: "わたし",
        vietnamese: "tôi",
        english: "I, me",
        example: "わたしは がくせいです。"
      },
      {
        japanese: "あなた",
        kana: "あなた",
        vietnamese: "bạn, anh, chị",
        english: "you",
        example: "あなたは せんせいですか。"
      },
      {
        japanese: "あの ひと",
        kana: "あのひと",
        vietnamese: "người kia",
        english: "that person",
        example: "あの ひとは だれですか。"
      },
      {
        japanese: "あの かた",
        kana: "あのかた",
        vietnamese: "vị kia (lịch sự)",
        english: "that person (polite)",
        example: "あの かたは やまださんです。"
      },
      {
        japanese: "～さん",
        kana: "～さん",
        vietnamese: "anh/chị ~",
        english: "Mr./Ms. ~",
        example: "たなかさんは にほんじんです。"
      },
      {
        japanese: "～ちゃん",
        kana: "～ちゃん",
        vietnamese: "bé ~, ~ (thân mật)",
        english: "~ (endearing, for children)",
        example: ""
      },
      {
        japanese: "～くん",
        kana: "～くん",
        vietnamese: "cậu ~ (thân mật, nam)",
        english: "~ (familiar, for boys)",
        example: ""
      },
      {
        japanese: "～じん",
        kana: "～じん",
        vietnamese: "người ~ (quốc tịch)",
        english: "~ person (nationality)",
        example: "わたしは ベトナムじんです。"
      },
      {
        japanese: "先生（せんせい）",
        kana: "せんせい",
        vietnamese: "giáo viên, thầy/cô",
        english: "teacher, professor",
        example: "やまださんは せんせいです。"
      },
      {
        japanese: "教師（きょうし）",
        kana: "きょうし",
        vietnamese: "giáo viên",
        english: "teacher (profession)",
        example: ""
      },
      {
        japanese: "学生（がくせい）",
        kana: "がくせい",
        vietnamese: "sinh viên",
        english: "student (university)",
        example: "わたしは がくせいです。"
      },
      {
        japanese: "会社員（かいしゃいん）",
        kana: "かいしゃいん",
        vietnamese: "nhân viên công ty",
        english: "company employee",
        example: "たなかさんは かいしゃいんです。"
      },
      {
        japanese: "社員（しゃいん）",
        kana: "しゃいん",
        vietnamese: "nhân viên",
        english: "employee",
        example: ""
      },
      {
        japanese: "銀行員（ぎんこういん）",
        kana: "ぎんこういん",
        vietnamese: "nhân viên ngân hàng",
        english: "bank employee",
        example: ""
      },
      {
        japanese: "医者（いしゃ）",
        kana: "いしゃ",
        vietnamese: "bác sĩ",
        english: "doctor",
        example: "あの ひとは いしゃです。"
      },
      {
        japanese: "研究者（けんきゅうしゃ）",
        kana: "けんきゅうしゃ",
        vietnamese: "nhà nghiên cứu",
        english: "researcher",
        example: ""
      },
      {
        japanese: "エンジニア",
        kana: "エンジニア",
        vietnamese: "kỹ sư",
        english: "engineer",
        example: "マイクさんは エンジニアです。"
      },
      {
        japanese: "大学（だいがく）",
        kana: "だいがく",
        vietnamese: "trường đại học",
        english: "university",
        example: ""
      },
      {
        japanese: "病院（びょういん）",
        kana: "びょういん",
        vietnamese: "bệnh viện",
        english: "hospital",
        example: ""
      },
      {
        japanese: "電気（でんき）",
        kana: "でんき",
        vietnamese: "điện, đồ điện",
        english: "electricity, electric",
        example: ""
      },
      {
        japanese: "だれ",
        kana: "だれ",
        vietnamese: "ai",
        english: "who",
        example: "あの ひとは だれですか。"
      },
      {
        japanese: "どなた",
        kana: "どなた",
        vietnamese: "ai (lịch sự)",
        english: "who (polite)",
        example: "あの かたは どなたですか。"
      },
      {
        japanese: "～さい",
        kana: "～さい",
        vietnamese: "~ tuổi",
        english: "~ years old",
        example: "わたしは 25さいです。"
      },
      {
        japanese: "なんさい",
        kana: "なんさい",
        vietnamese: "mấy tuổi",
        english: "how old",
        example: "マリアさんは なんさいですか。"
      },
      {
        japanese: "はい",
        kana: "はい",
        vietnamese: "vâng, dạ",
        english: "yes",
        example: "はい、そうです。"
      },
      {
        japanese: "いいえ",
        kana: "いいえ",
        vietnamese: "không",
        english: "no",
        example: "いいえ、ちがいます。"
      },
      {
        japanese: "はじめまして",
        kana: "はじめまして",
        vietnamese: "xin chào (lần đầu gặp)",
        english: "how do you do",
        example: "はじめまして、たなかです。"
      },
      {
        japanese: "どうぞ よろしく",
        kana: "どうぞよろしく",
        vietnamese: "rất vui được gặp bạn",
        english: "pleased to meet you",
        example: ""
      },
      {
        japanese: "失礼ですが（しつれいですが）",
        kana: "しつれいですが",
        vietnamese: "xin lỗi nhưng...",
        english: "excuse me, but...",
        example: "しつれいですが、おなまえは？"
      },
      {
        japanese: "お名前は？（おなまえは？）",
        kana: "おなまえは",
        vietnamese: "tên bạn là gì?",
        english: "what is your name?",
        example: ""
      },
      {
        japanese: "アメリカ",
        kana: "アメリカ",
        vietnamese: "Mỹ",
        english: "America, USA",
        example: "マイクさんは アメリカじんです。"
      },
      {
        japanese: "イギリス",
        kana: "イギリス",
        vietnamese: "Anh",
        english: "England, UK",
        example: ""
      },
      {
        japanese: "インド",
        kana: "インド",
        vietnamese: "Ấn Độ",
        english: "India",
        example: ""
      },
      {
        japanese: "インドネシア",
        kana: "インドネシア",
        vietnamese: "Indonesia",
        english: "Indonesia",
        example: ""
      },
      {
        japanese: "韓国（かんこく）",
        kana: "かんこく",
        vietnamese: "Hàn Quốc",
        english: "South Korea",
        example: ""
      },
      {
        japanese: "タイ",
        kana: "タイ",
        vietnamese: "Thái Lan",
        english: "Thailand",
        example: ""
      },
      {
        japanese: "中国（ちゅうごく）",
        kana: "ちゅうごく",
        vietnamese: "Trung Quốc",
        english: "China",
        example: ""
      },
      {
        japanese: "ドイツ",
        kana: "ドイツ",
        vietnamese: "Đức",
        english: "Germany",
        example: ""
      },
      {
        japanese: "日本（にほん）",
        kana: "にほん",
        vietnamese: "Nhật Bản",
        english: "Japan",
        example: ""
      },
      {
        japanese: "フランス",
        kana: "フランス",
        vietnamese: "Pháp",
        english: "France",
        example: ""
      },
      {
        japanese: "ブラジル",
        kana: "ブラジル",
        vietnamese: "Brazil",
        english: "Brazil",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "～は ～です",
        vietnamese: "~ là ~",
        english: "~ is/am/are ~",
        explanation: "Dùng để giới thiệu bản thân hoặc xác định danh tính. 'は' là trợ từ chỉ chủ đề, 'です' là động từ 'là' lịch sự.",
        examples: [
          {
            japanese: "わたしは マイクです。",
            vietnamese: "Tôi là Mike.",
            english: "I am Mike."
          },
          {
            japanese: "わたしは がくせいです。",
            vietnamese: "Tôi là học sinh.",
            english: "I am a student."
          },
          {
            japanese: "やまださんは せんせいです。",
            vietnamese: "Anh Yamada là giáo viên.",
            english: "Mr. Yamada is a teacher."
          }
        ]
      },
      {
        pattern: "～は ～じゃ ありません",
        vietnamese: "~ không phải là ~",
        english: "~ is/am/are not ~",
        explanation: "Dạng phủ định của 'です'. 'じゃ' là viết tắt thân mật của 'では'.",
        examples: [
          {
            japanese: "わたしは がくせいじゃ ありません。",
            vietnamese: "Tôi không phải là học sinh.",
            english: "I am not a student."
          },
          {
            japanese: "サントスさんは せんせいじゃ ありません。",
            vietnamese: "Anh Santos không phải là giáo viên.",
            english: "Mr. Santos is not a teacher."
          }
        ]
      },
      {
        pattern: "～は ～ですか",
        vietnamese: "~ có phải là ~ không?",
        english: "Is/Am/Are ~ ~?",
        explanation: "Câu hỏi yes/no. Thêm 'か' vào cuối câu khẳng định. Trả lời: はい、～です hoặc いいえ、～じゃ ありません。",
        examples: [
          {
            japanese: "あなたは がくせいですか。",
            vietnamese: "Bạn có phải là học sinh không?",
            english: "Are you a student?"
          },
          {
            japanese: "ミラーさんは アメリカじんですか。",
            vietnamese: "Anh Miller có phải là người Mỹ không?",
            english: "Is Mr. Miller American?"
          }
        ]
      },
      {
        pattern: "～の ～",
        vietnamese: "~ của ~",
        english: "~ of ~, ~'s ~",
        explanation: "Trợ từ 'の' dùng để chỉ sở hữu hoặc thuộc tính. Kết nối hai danh từ.",
        examples: [
          {
            japanese: "これは わたしの ほんです。",
            vietnamese: "Đây là sách của tôi.",
            english: "This is my book."
          },
          {
            japanese: "やまださんは IMCの しゃいんです。",
            vietnamese: "Anh Yamada là nhân viên của IMC.",
            english: "Mr. Yamada is an employee of IMC."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 2 — This / That / Demonstratives
  // ═══════════════════════════════════════════
  {
    lessonNumber: 2,
    title: "これは ～です (Cái này là ~)",
    vocabulary: [
      {
        japanese: "これ",
        kana: "これ",
        vietnamese: "cái này",
        english: "this (thing)",
        example: "これは ほんです。"
      },
      {
        japanese: "それ",
        kana: "それ",
        vietnamese: "cái đó",
        english: "that (thing, near listener)",
        example: "それは なんですか。"
      },
      {
        japanese: "あれ",
        kana: "あれ",
        vietnamese: "cái kia",
        english: "that (thing, far from both)",
        example: "あれは とけいです。"
      },
      {
        japanese: "この",
        kana: "この",
        vietnamese: "~ này",
        english: "this ~",
        example: "この ほんは わたしのです。"
      },
      {
        japanese: "その",
        kana: "その",
        vietnamese: "~ đó",
        english: "that ~",
        example: "その かばんは だれのですか。"
      },
      {
        japanese: "あの",
        kana: "あの",
        vietnamese: "~ kia",
        english: "that ~ (over there)",
        example: "あの かさは せんせいのです。"
      },
      {
        japanese: "本（ほん）",
        kana: "ほん",
        vietnamese: "sách",
        english: "book",
        example: "これは にほんごの ほんです。"
      },
      {
        japanese: "辞書（じしょ）",
        kana: "じしょ",
        vietnamese: "từ điển",
        english: "dictionary",
        example: "それは えいごの じしょです。"
      },
      {
        japanese: "雑誌（ざっし）",
        kana: "ざっし",
        vietnamese: "tạp chí",
        english: "magazine",
        example: "あれは にほんの ざっしです。"
      },
      {
        japanese: "新聞（しんぶん）",
        kana: "しんぶん",
        vietnamese: "báo",
        english: "newspaper",
        example: "これは きょうの しんぶんです。"
      },
      {
        japanese: "ノート",
        kana: "ノート",
        vietnamese: "vở, sổ ghi chép",
        english: "notebook",
        example: ""
      },
      {
        japanese: "手帳（てちょう）",
        kana: "てちょう",
        vietnamese: "sổ tay",
        english: "personal organizer",
        example: ""
      },
      {
        japanese: "名刺（めいし）",
        kana: "めいし",
        vietnamese: "danh thiếp",
        english: "business card",
        example: "これは わたしの めいしです。"
      },
      {
        japanese: "カード",
        kana: "カード",
        vietnamese: "thẻ",
        english: "card",
        example: ""
      },
      {
        japanese: "鉛筆（えんぴつ）",
        kana: "えんぴつ",
        vietnamese: "bút chì",
        english: "pencil",
        example: ""
      },
      {
        japanese: "ボールペン",
        kana: "ボールペン",
        vietnamese: "bút bi",
        english: "ballpoint pen",
        example: "この ボールペンは いくらですか。"
      },
      {
        japanese: "シャープペンシル",
        kana: "シャープペンシル",
        vietnamese: "bút chì bấm",
        english: "mechanical pencil",
        example: ""
      },
      {
        japanese: "鍵（かぎ）",
        kana: "かぎ",
        vietnamese: "chìa khóa",
        english: "key",
        example: "これは くるまの かぎです。"
      },
      {
        japanese: "時計（とけい）",
        kana: "とけい",
        vietnamese: "đồng hồ",
        english: "watch, clock",
        example: "その とけいは にほんのです。"
      },
      {
        japanese: "傘（かさ）",
        kana: "かさ",
        vietnamese: "ô, dù",
        english: "umbrella",
        example: ""
      },
      {
        japanese: "かばん",
        kana: "かばん",
        vietnamese: "cặp, túi xách",
        english: "bag",
        example: ""
      },
      {
        japanese: "テレビ",
        kana: "テレビ",
        vietnamese: "ti vi",
        english: "television",
        example: ""
      },
      {
        japanese: "ラジオ",
        kana: "ラジオ",
        vietnamese: "radio, đài",
        english: "radio",
        example: ""
      },
      {
        japanese: "カメラ",
        kana: "カメラ",
        vietnamese: "máy ảnh",
        english: "camera",
        example: ""
      },
      {
        japanese: "コンピューター",
        kana: "コンピューター",
        vietnamese: "máy tính",
        english: "computer",
        example: ""
      },
      {
        japanese: "自動車（じどうしゃ）",
        kana: "じどうしゃ",
        vietnamese: "xe ô tô",
        english: "automobile, car",
        example: ""
      },
      {
        japanese: "机（つくえ）",
        kana: "つくえ",
        vietnamese: "bàn",
        english: "desk",
        example: ""
      },
      {
        japanese: "椅子（いす）",
        kana: "いす",
        vietnamese: "ghế",
        english: "chair",
        example: ""
      },
      {
        japanese: "チョコレート",
        kana: "チョコレート",
        vietnamese: "sô cô la",
        english: "chocolate",
        example: ""
      },
      {
        japanese: "コーヒー",
        kana: "コーヒー",
        vietnamese: "cà phê",
        english: "coffee",
        example: ""
      },
      {
        japanese: "英語（えいご）",
        kana: "えいご",
        vietnamese: "tiếng Anh",
        english: "English (language)",
        example: ""
      },
      {
        japanese: "日本語（にほんご）",
        kana: "にほんご",
        vietnamese: "tiếng Nhật",
        english: "Japanese (language)",
        example: "これは にほんごの ほんです。"
      },
      {
        japanese: "～語（～ご）",
        kana: "～ご",
        vietnamese: "tiếng ~",
        english: "~ language",
        example: ""
      },
      {
        japanese: "何（なん / なに）",
        kana: "なん",
        vietnamese: "cái gì",
        english: "what",
        example: "これは なんですか。"
      },
      {
        japanese: "そうです",
        kana: "そうです",
        vietnamese: "đúng vậy",
        english: "that's right",
        example: "はい、そうです。"
      },
      {
        japanese: "違います（ちがいます）",
        kana: "ちがいます",
        vietnamese: "không phải, sai",
        english: "no, that's wrong",
        example: "いいえ、ちがいます。"
      },
      {
        japanese: "そうですか",
        kana: "そうですか",
        vietnamese: "vậy à, thế à",
        english: "is that so?",
        example: ""
      },
      {
        japanese: "あのう",
        kana: "あのう",
        vietnamese: "à..., ơ...",
        english: "well..., um...",
        example: "あのう、これは なんですか。"
      },
      {
        japanese: "ほんの 気持ちです",
        kana: "ほんのきもちです",
        vietnamese: "chút lòng thành",
        english: "it's just a small token",
        example: ""
      },
      {
        japanese: "どうぞ",
        kana: "どうぞ",
        vietnamese: "mời, xin mời",
        english: "please (offering)",
        example: "どうぞ。"
      },
      {
        japanese: "どうも",
        kana: "どうも",
        vietnamese: "cảm ơn (thân mật)",
        english: "thanks (casual)",
        example: ""
      },
      {
        japanese: "ありがとう ございます",
        kana: "ありがとうございます",
        vietnamese: "cảm ơn rất nhiều",
        english: "thank you very much",
        example: ""
      },
      {
        japanese: "これから お世話に なります",
        kana: "これからおせわになります",
        vietnamese: "từ nay xin nhờ giúp đỡ",
        english: "I hope for your kind assistance",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "これ/それ/あれ は ～です",
        vietnamese: "Cái này/đó/kia là ~",
        english: "This/That is ~",
        explanation: "Đại từ chỉ định vật thể. これ (gần người nói), それ (gần người nghe), あれ (xa cả hai).",
        examples: [
          {
            japanese: "これは カメラです。",
            vietnamese: "Cái này là máy ảnh.",
            english: "This is a camera."
          },
          {
            japanese: "それは テレビです。",
            vietnamese: "Cái đó là TV.",
            english: "That is a TV."
          },
          {
            japanese: "あれは わたしの かさです。",
            vietnamese: "Cái kia là ô của tôi.",
            english: "That over there is my umbrella."
          }
        ]
      },
      {
        pattern: "この/その/あの ～",
        vietnamese: "~ này/đó/kia",
        english: "This/That ~ (noun modifier)",
        explanation: "Từ định chỉ đứng trước danh từ. この (gần người nói), その (gần người nghe), あの (xa cả hai).",
        examples: [
          {
            japanese: "この ほんは わたしのです。",
            vietnamese: "Quyển sách này là của tôi.",
            english: "This book is mine."
          },
          {
            japanese: "その かばんは だれのですか。",
            vietnamese: "Cái cặp đó là của ai?",
            english: "Whose bag is that?"
          },
          {
            japanese: "あの ひとは たなかさんです。",
            vietnamese: "Người kia là anh Tanaka.",
            english: "That person is Mr. Tanaka."
          }
        ]
      },
      {
        pattern: "～は ～のです",
        vietnamese: "~ là của ~",
        english: "~ belongs to ~",
        explanation: "Biểu thị sở hữu. 'の' đại diện cho danh từ đã được nhắc đến (pronoun).",
        examples: [
          {
            japanese: "この かさは わたしのです。",
            vietnamese: "Cây ô này là của tôi.",
            english: "This umbrella is mine."
          },
          {
            japanese: "それは だれのですか。",
            vietnamese: "Cái đó là của ai?",
            english: "Whose is that?"
          }
        ]
      },
      {
        pattern: "そうです / そうじゃ ありません",
        vietnamese: "Đúng vậy / Không phải",
        english: "That's right / That's not right",
        explanation: "Câu trả lời ngắn xác nhận hoặc phủ định. Thay cho việc lặp lại toàn bộ câu.",
        examples: [
          {
            japanese: "これは ほんですか。— はい、そうです。",
            vietnamese: "Cái này là sách à? — Vâng, đúng vậy.",
            english: "Is this a book? — Yes, it is."
          },
          {
            japanese: "これは あなたのですか。— いいえ、そうじゃ ありません。",
            vietnamese: "Cái này là của bạn à? — Không, không phải.",
            english: "Is this yours? — No, it's not."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 3 — Here / There / Places
  // ═══════════════════════════════════════════
  {
    lessonNumber: 3,
    title: "ここは ～です (Nơi này là ~)",
    vocabulary: [
      {
        japanese: "ここ",
        kana: "ここ",
        vietnamese: "ở đây",
        english: "here",
        example: "ここは しょくどうです。"
      },
      {
        japanese: "そこ",
        kana: "そこ",
        vietnamese: "ở đó",
        english: "there",
        example: "トイレは そこです。"
      },
      {
        japanese: "あそこ",
        kana: "あそこ",
        vietnamese: "ở kia",
        english: "over there",
        example: "エレベーターは あそこです。"
      },
      {
        japanese: "どこ",
        kana: "どこ",
        vietnamese: "ở đâu",
        english: "where",
        example: "トイレは どこですか。"
      },
      {
        japanese: "こちら",
        kana: "こちら",
        vietnamese: "phía này (lịch sự)",
        english: "this way (polite)",
        example: ""
      },
      {
        japanese: "そちら",
        kana: "そちら",
        vietnamese: "phía đó (lịch sự)",
        english: "that way (polite)",
        example: ""
      },
      {
        japanese: "あちら",
        kana: "あちら",
        vietnamese: "phía kia (lịch sự)",
        english: "that way over there (polite)",
        example: ""
      },
      {
        japanese: "どちら",
        kana: "どちら",
        vietnamese: "phía nào (lịch sự)",
        english: "which way (polite)",
        example: "おくには どちらですか。"
      },
      {
        japanese: "教室（きょうしつ）",
        kana: "きょうしつ",
        vietnamese: "phòng học",
        english: "classroom",
        example: ""
      },
      {
        japanese: "食堂（しょくどう）",
        kana: "しょくどう",
        vietnamese: "nhà ăn, canteen",
        english: "dining hall, cafeteria",
        example: "しょくどうは 2かいです。"
      },
      {
        japanese: "事務所（じむしょ）",
        kana: "じむしょ",
        vietnamese: "văn phòng",
        english: "office",
        example: ""
      },
      {
        japanese: "会議室（かいぎしつ）",
        kana: "かいぎしつ",
        vietnamese: "phòng họp",
        english: "conference room",
        example: ""
      },
      {
        japanese: "受付（うけつけ）",
        kana: "うけつけ",
        vietnamese: "quầy lễ tân",
        english: "reception",
        example: "うけつけは 1かいです。"
      },
      {
        japanese: "ロビー",
        kana: "ロビー",
        vietnamese: "sảnh",
        english: "lobby",
        example: ""
      },
      {
        japanese: "部屋（へや）",
        kana: "へや",
        vietnamese: "phòng",
        english: "room",
        example: ""
      },
      {
        japanese: "トイレ",
        kana: "トイレ",
        vietnamese: "nhà vệ sinh",
        english: "toilet, restroom",
        example: "トイレは どこですか。"
      },
      {
        japanese: "お手洗い（おてあらい）",
        kana: "おてあらい",
        vietnamese: "nhà vệ sinh (lịch sự)",
        english: "restroom (polite)",
        example: ""
      },
      {
        japanese: "階段（かいだん）",
        kana: "かいだん",
        vietnamese: "cầu thang",
        english: "stairs",
        example: ""
      },
      {
        japanese: "エレベーター",
        kana: "エレベーター",
        vietnamese: "thang máy",
        english: "elevator",
        example: "エレベーターは あそこです。"
      },
      {
        japanese: "エスカレーター",
        kana: "エスカレーター",
        vietnamese: "thang cuốn",
        english: "escalator",
        example: ""
      },
      {
        japanese: "お国（おくに）",
        kana: "おくに",
        vietnamese: "đất nước (lịch sự)",
        english: "country (polite)",
        example: "おくには どちらですか。"
      },
      {
        japanese: "会社（かいしゃ）",
        kana: "かいしゃ",
        vietnamese: "công ty",
        english: "company",
        example: ""
      },
      {
        japanese: "うち",
        kana: "うち",
        vietnamese: "nhà",
        english: "home, house",
        example: ""
      },
      {
        japanese: "電話（でんわ）",
        kana: "でんわ",
        vietnamese: "điện thoại",
        english: "telephone",
        example: "でんわは あそこです。"
      },
      {
        japanese: "靴（くつ）",
        kana: "くつ",
        vietnamese: "giày",
        english: "shoes",
        example: ""
      },
      {
        japanese: "ネクタイ",
        kana: "ネクタイ",
        vietnamese: "cà vạt",
        english: "necktie",
        example: ""
      },
      {
        japanese: "ワイン",
        kana: "ワイン",
        vietnamese: "rượu vang",
        english: "wine",
        example: ""
      },
      {
        japanese: "売り場（うりば）",
        kana: "うりば",
        vietnamese: "quầy bán hàng",
        english: "department, counter",
        example: "くつの うりばは どこですか。"
      },
      {
        japanese: "地下（ちか）",
        kana: "ちか",
        vietnamese: "tầng hầm",
        english: "basement",
        example: ""
      },
      {
        japanese: "～階（～かい / ～がい）",
        kana: "～かい",
        vietnamese: "tầng ~",
        english: "~ floor",
        example: "しょくどうは 2かいです。"
      },
      {
        japanese: "何階（なんがい）",
        kana: "なんがい",
        vietnamese: "tầng mấy",
        english: "what floor",
        example: "うけつけは なんがいですか。"
      },
      {
        japanese: "～円（～えん）",
        kana: "～えん",
        vietnamese: "~ yên",
        english: "~ yen",
        example: "これは 500えんです。"
      },
      {
        japanese: "いくら",
        kana: "いくら",
        vietnamese: "bao nhiêu tiền",
        english: "how much",
        example: "この かばんは いくらですか。"
      },
      {
        japanese: "百（ひゃく）",
        kana: "ひゃく",
        vietnamese: "trăm",
        english: "hundred",
        example: ""
      },
      {
        japanese: "千（せん）",
        kana: "せん",
        vietnamese: "nghìn",
        english: "thousand",
        example: ""
      },
      {
        japanese: "万（まん）",
        kana: "まん",
        vietnamese: "vạn, mười nghìn",
        english: "ten thousand",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "ここ/そこ/あそこ は ～です",
        vietnamese: "Đây/đó/kia là ~",
        english: "Here/There is ~",
        explanation: "Đại từ chỉ định địa điểm. ここ (gần người nói), そこ (gần người nghe), あそこ (xa cả hai).",
        examples: [
          {
            japanese: "ここは しょくどうです。",
            vietnamese: "Đây là nhà ăn.",
            english: "This place is a dining hall."
          },
          {
            japanese: "そこは トイレです。",
            vietnamese: "Đó là nhà vệ sinh.",
            english: "That place is a restroom."
          },
          {
            japanese: "あそこは エレベーターです。",
            vietnamese: "Kia là thang máy.",
            english: "That place over there is an elevator."
          }
        ]
      },
      {
        pattern: "～は どこですか",
        vietnamese: "~ ở đâu?",
        english: "Where is ~?",
        explanation: "Câu hỏi về vị trí. 'どこ' nghĩa là 'ở đâu'.",
        examples: [
          {
            japanese: "トイレは どこですか。",
            vietnamese: "Nhà vệ sinh ở đâu?",
            english: "Where is the restroom?"
          },
          {
            japanese: "でんわは どこですか。",
            vietnamese: "Điện thoại ở đâu?",
            english: "Where is the telephone?"
          }
        ]
      },
      {
        pattern: "～は ～かいです",
        vietnamese: "~ ở tầng ~",
        english: "~ is on the ~ floor",
        explanation: "Chỉ số tầng. かい (階) nghĩa là 'tầng'.",
        examples: [
          {
            japanese: "しょくどうは 1かいです。",
            vietnamese: "Nhà ăn ở tầng 1.",
            english: "The dining hall is on the 1st floor."
          },
          {
            japanese: "かいぎしつは 3かいです。",
            vietnamese: "Phòng họp ở tầng 3.",
            english: "The meeting room is on the 3rd floor."
          }
        ]
      },
      {
        pattern: "～の ～",
        vietnamese: "~ của/ở ~",
        english: "~ of ~, ~ in/at ~",
        explanation: "Trợ từ 'の' kết nối tên địa điểm với tổ chức/công ty.",
        examples: [
          {
            japanese: "この エレベーターは IMCの エレベーターです。",
            vietnamese: "Thang máy này là thang máy của IMC.",
            english: "This elevator is IMC's elevator."
          },
          {
            japanese: "あの きょうしつは にほんごの きょうしつです。",
            vietnamese: "Lớp học kia là lớp học tiếng Nhật.",
            english: "That classroom is a Japanese classroom."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 4 — Time / Daily Schedule
  // ═══════════════════════════════════════════
  {
    lessonNumber: 4,
    title: "～時に 起きます (Thời gian / Lịch trình)",
    vocabulary: [
      {
        japanese: "起きます（おきます）",
        kana: "おきます",
        vietnamese: "thức dậy",
        english: "to wake up, to get up",
        example: "まいあさ 6じに おきます。"
      },
      {
        japanese: "寝ます（ねます）",
        kana: "ねます",
        vietnamese: "đi ngủ",
        english: "to sleep, to go to bed",
        example: "11じに ねます。"
      },
      {
        japanese: "働きます（はたらきます）",
        kana: "はたらきます",
        vietnamese: "làm việc",
        english: "to work",
        example: "9じから 5じまで はたらきます。"
      },
      {
        japanese: "休みます（やすみます）",
        kana: "やすみます",
        vietnamese: "nghỉ ngơi",
        english: "to rest, to take a day off",
        example: "にちようびに やすみます。"
      },
      {
        japanese: "勉強します（べんきょうします）",
        kana: "べんきょうします",
        vietnamese: "học",
        english: "to study",
        example: "まいにち にほんごを べんきょうします。"
      },
      {
        japanese: "終わります（おわります）",
        kana: "おわります",
        vietnamese: "kết thúc",
        english: "to finish, to end",
        example: "じゅぎょうは 3じに おわります。"
      },
      {
        japanese: "デパート",
        kana: "デパート",
        vietnamese: "bách hóa, trung tâm thương mại",
        english: "department store",
        example: ""
      },
      {
        japanese: "銀行（ぎんこう）",
        kana: "ぎんこう",
        vietnamese: "ngân hàng",
        english: "bank",
        example: "ぎんこうは 9じから 3じまでです。"
      },
      {
        japanese: "郵便局（ゆうびんきょく）",
        kana: "ゆうびんきょく",
        vietnamese: "bưu điện",
        english: "post office",
        example: ""
      },
      {
        japanese: "図書館（としょかん）",
        kana: "としょかん",
        vietnamese: "thư viện",
        english: "library",
        example: ""
      },
      {
        japanese: "美術館（びじゅつかん）",
        kana: "びじゅつかん",
        vietnamese: "bảo tàng mỹ thuật",
        english: "art museum",
        example: ""
      },
      {
        japanese: "今（いま）",
        kana: "いま",
        vietnamese: "bây giờ",
        english: "now",
        example: "いま 3じです。"
      },
      {
        japanese: "～時（～じ）",
        kana: "～じ",
        vietnamese: "~ giờ",
        english: "~ o'clock",
        example: "いま 7じです。"
      },
      {
        japanese: "～分（～ふん / ～ぷん）",
        kana: "～ふん",
        vietnamese: "~ phút",
        english: "~ minutes",
        example: "いま 7じ30ぷんです。"
      },
      {
        japanese: "半（はん）",
        kana: "はん",
        vietnamese: "rưỡi (30 phút)",
        english: "half (past)",
        example: "6じはんに おきます。"
      },
      {
        japanese: "午前（ごぜん）",
        kana: "ごぜん",
        vietnamese: "buổi sáng, trước trưa",
        english: "a.m., morning",
        example: "ごぜん 9じに はたらきます。"
      },
      {
        japanese: "午後（ごご）",
        kana: "ごご",
        vietnamese: "buổi chiều, sau trưa",
        english: "p.m., afternoon",
        example: ""
      },
      {
        japanese: "朝（あさ）",
        kana: "あさ",
        vietnamese: "buổi sáng",
        english: "morning",
        example: ""
      },
      {
        japanese: "昼（ひる）",
        kana: "ひる",
        vietnamese: "buổi trưa",
        english: "noon, daytime",
        example: ""
      },
      {
        japanese: "夜（よる）",
        kana: "よる",
        vietnamese: "buổi tối",
        english: "evening, night",
        example: ""
      },
      {
        japanese: "おととい",
        kana: "おととい",
        vietnamese: "hôm kia",
        english: "day before yesterday",
        example: ""
      },
      {
        japanese: "きのう",
        kana: "きのう",
        vietnamese: "hôm qua",
        english: "yesterday",
        example: ""
      },
      {
        japanese: "今日（きょう）",
        kana: "きょう",
        vietnamese: "hôm nay",
        english: "today",
        example: ""
      },
      {
        japanese: "明日（あした）",
        kana: "あした",
        vietnamese: "ngày mai",
        english: "tomorrow",
        example: ""
      },
      {
        japanese: "あさって",
        kana: "あさって",
        vietnamese: "ngày mốt",
        english: "day after tomorrow",
        example: ""
      },
      {
        japanese: "毎朝（まいあさ）",
        kana: "まいあさ",
        vietnamese: "mỗi sáng",
        english: "every morning",
        example: "まいあさ 6じに おきます。"
      },
      {
        japanese: "毎晩（まいばん）",
        kana: "まいばん",
        vietnamese: "mỗi tối",
        english: "every evening",
        example: ""
      },
      {
        japanese: "毎日（まいにち）",
        kana: "まいにち",
        vietnamese: "mỗi ngày",
        english: "every day",
        example: ""
      },
      {
        japanese: "月曜日（げつようび）",
        kana: "げつようび",
        vietnamese: "thứ Hai",
        english: "Monday",
        example: ""
      },
      {
        japanese: "火曜日（かようび）",
        kana: "かようび",
        vietnamese: "thứ Ba",
        english: "Tuesday",
        example: ""
      },
      {
        japanese: "水曜日（すいようび）",
        kana: "すいようび",
        vietnamese: "thứ Tư",
        english: "Wednesday",
        example: ""
      },
      {
        japanese: "木曜日（もくようび）",
        kana: "もくようび",
        vietnamese: "thứ Năm",
        english: "Thursday",
        example: ""
      },
      {
        japanese: "金曜日（きんようび）",
        kana: "きんようび",
        vietnamese: "thứ Sáu",
        english: "Friday",
        example: ""
      },
      {
        japanese: "土曜日（どようび）",
        kana: "どようび",
        vietnamese: "thứ Bảy",
        english: "Saturday",
        example: ""
      },
      {
        japanese: "日曜日（にちようび）",
        kana: "にちようび",
        vietnamese: "Chủ nhật",
        english: "Sunday",
        example: "にちようびに やすみます。"
      },
      {
        japanese: "何曜日（なんようび）",
        kana: "なんようび",
        vietnamese: "thứ mấy",
        english: "what day of the week",
        example: "きょうは なんようびですか。"
      },
      {
        japanese: "番号（ばんごう）",
        kana: "ばんごう",
        vietnamese: "số",
        english: "number",
        example: "でんわばんごうは なんですか。"
      },
      {
        japanese: "何時（なんじ）",
        kana: "なんじ",
        vietnamese: "mấy giờ",
        english: "what time",
        example: "いま なんじですか。"
      },
      {
        japanese: "何分（なんぷん）",
        kana: "なんぷん",
        vietnamese: "mấy phút",
        english: "how many minutes",
        example: ""
      },
      {
        japanese: "～から",
        kana: "～から",
        vietnamese: "từ ~",
        english: "from ~",
        example: "9じから はたらきます。"
      },
      {
        japanese: "～まで",
        kana: "～まで",
        vietnamese: "đến ~",
        english: "until ~",
        example: "5じまで はたらきます。"
      },
      {
        japanese: "そちら",
        kana: "そちら",
        vietnamese: "bên đó (lịch sự)",
        english: "your place (polite)",
        example: "そちらは なんじから なんじまでですか。"
      }
    ],
    grammar: [
      {
        pattern: "～時～分",
        vietnamese: "~ giờ ~ phút",
        english: "~ o'clock ~ minute",
        explanation: "Cách nói giờ và phút trong tiếng Nhật. じ (時) = giờ, ふん/ぷん (分) = phút.",
        examples: [
          {
            japanese: "いま 9じ 10ぷんです。",
            vietnamese: "Bây giờ là 9 giờ 10 phút.",
            english: "It's 9:10 now."
          },
          {
            japanese: "かいぎは 3じはんです。",
            vietnamese: "Cuộc họp là lúc 3 giờ rưỡi.",
            english: "The meeting is at 3:30."
          }
        ]
      },
      {
        pattern: "～に ～ます",
        vietnamese: "~ vào lúc ~",
        english: "~ at (time)",
        explanation: "Trợ từ 'に' chỉ thời điểm cụ thể.",
        examples: [
          {
            japanese: "まいあさ 6じに おきます。",
            vietnamese: "Tôi dậy lúc 6 giờ mỗi sáng.",
            english: "I wake up at 6 o'clock every morning."
          },
          {
            japanese: "12じ 15ふんに べんきょうします。",
            vietnamese: "Tôi học lúc 12 giờ 15 phút.",
            english: "I study at 12:15."
          }
        ]
      },
      {
        pattern: "～から ～まで",
        vietnamese: "từ ~ đến ~",
        english: "from ~ to/until ~",
        explanation: "Chỉ khoảng thời gian từ điểm bắt đầu đến điểm kết thúc.",
        examples: [
          {
            japanese: "9じから 5じまで はたらきます。",
            vietnamese: "Tôi làm việc từ 9 giờ đến 5 giờ.",
            english: "I work from 9 to 5."
          },
          {
            japanese: "げつようびから きんようびまで がっこうへ いきます。",
            vietnamese: "Tôi đi học từ thứ Hai đến thứ Sáu.",
            english: "I go to school from Monday to Friday."
          }
        ]
      },
      {
        pattern: "～は ～から ～までです",
        vietnamese: "~ từ ~ đến ~",
        english: "~ is from ~ to ~",
        explanation: "Nói về khung giờ hoạt động của một địa điểm.",
        examples: [
          {
            japanese: "ぎんこうは 9じから 3じまでです。",
            vietnamese: "Ngân hàng từ 9 giờ đến 3 giờ.",
            english: "The bank is (open) from 9 to 3."
          },
          {
            japanese: "デパートは 10じから 8じまでです。",
            vietnamese: "Cửa hàng bách hóa từ 10 giờ đến 8 giờ.",
            english: "The department store is (open) from 10 to 8."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 5 — Going / Coming / Transportation
  // ═══════════════════════════════════════════
  {
    lessonNumber: 5,
    title: "～へ 行きます (Đi đến ~)",
    vocabulary: [
      {
        japanese: "行きます（いきます）",
        kana: "いきます",
        vietnamese: "đi",
        english: "to go",
        example: "がっこうへ いきます。"
      },
      {
        japanese: "来ます（きます）",
        kana: "きます",
        vietnamese: "đến",
        english: "to come",
        example: "にほんへ きました。"
      },
      {
        japanese: "帰ります（かえります）",
        kana: "かえります",
        vietnamese: "về",
        english: "to go back, to return",
        example: "うちへ かえります。"
      },
      {
        japanese: "学校（がっこう）",
        kana: "がっこう",
        vietnamese: "trường học",
        english: "school",
        example: ""
      },
      {
        japanese: "スーパー",
        kana: "スーパー",
        vietnamese: "siêu thị",
        english: "supermarket",
        example: ""
      },
      {
        japanese: "駅（えき）",
        kana: "えき",
        vietnamese: "nhà ga",
        english: "station",
        example: ""
      },
      {
        japanese: "飛行機（ひこうき）",
        kana: "ひこうき",
        vietnamese: "máy bay",
        english: "airplane",
        example: "ひこうきで にほんへ きました。"
      },
      {
        japanese: "船（ふね）",
        kana: "ふね",
        vietnamese: "tàu, thuyền",
        english: "ship, boat",
        example: ""
      },
      {
        japanese: "電車（でんしゃ）",
        kana: "でんしゃ",
        vietnamese: "tàu điện",
        english: "electric train",
        example: "でんしゃで がっこうへ いきます。"
      },
      {
        japanese: "バス",
        kana: "バス",
        vietnamese: "xe buýt",
        english: "bus",
        example: ""
      },
      {
        japanese: "タクシー",
        kana: "タクシー",
        vietnamese: "taxi",
        english: "taxi",
        example: ""
      },
      {
        japanese: "自転車（じてんしゃ）",
        kana: "じてんしゃ",
        vietnamese: "xe đạp",
        english: "bicycle",
        example: ""
      },
      {
        japanese: "歩いて（あるいて）",
        kana: "あるいて",
        vietnamese: "đi bộ",
        english: "on foot",
        example: "あるいて がっこうへ いきます。"
      },
      {
        japanese: "人（ひと）",
        kana: "ひと",
        vietnamese: "người",
        english: "person, people",
        example: ""
      },
      {
        japanese: "友達（ともだち）",
        kana: "ともだち",
        vietnamese: "bạn bè",
        english: "friend",
        example: "ともだちと いきます。"
      },
      {
        japanese: "彼（かれ）",
        kana: "かれ",
        vietnamese: "anh ấy",
        english: "he, boyfriend",
        example: ""
      },
      {
        japanese: "彼女（かのじょ）",
        kana: "かのじょ",
        vietnamese: "cô ấy",
        english: "she, girlfriend",
        example: ""
      },
      {
        japanese: "家族（かぞく）",
        kana: "かぞく",
        vietnamese: "gia đình",
        english: "family",
        example: ""
      },
      {
        japanese: "一人で（ひとりで）",
        kana: "ひとりで",
        vietnamese: "một mình",
        english: "alone, by oneself",
        example: "ひとりで いきます。"
      },
      {
        japanese: "先週（せんしゅう）",
        kana: "せんしゅう",
        vietnamese: "tuần trước",
        english: "last week",
        example: ""
      },
      {
        japanese: "今週（こんしゅう）",
        kana: "こんしゅう",
        vietnamese: "tuần này",
        english: "this week",
        example: ""
      },
      {
        japanese: "来週（らいしゅう）",
        kana: "らいしゅう",
        vietnamese: "tuần sau",
        english: "next week",
        example: ""
      },
      {
        japanese: "先月（せんげつ）",
        kana: "せんげつ",
        vietnamese: "tháng trước",
        english: "last month",
        example: ""
      },
      {
        japanese: "今月（こんげつ）",
        kana: "こんげつ",
        vietnamese: "tháng này",
        english: "this month",
        example: ""
      },
      {
        japanese: "来月（らいげつ）",
        kana: "らいげつ",
        vietnamese: "tháng sau",
        english: "next month",
        example: ""
      },
      {
        japanese: "去年（きょねん）",
        kana: "きょねん",
        vietnamese: "năm ngoái",
        english: "last year",
        example: ""
      },
      {
        japanese: "今年（ことし）",
        kana: "ことし",
        vietnamese: "năm nay",
        english: "this year",
        example: ""
      },
      {
        japanese: "来年（らいねん）",
        kana: "らいねん",
        vietnamese: "năm sau",
        english: "next year",
        example: ""
      },
      {
        japanese: "～月（～がつ）",
        kana: "～がつ",
        vietnamese: "tháng ~",
        english: "month ~",
        example: ""
      },
      {
        japanese: "何月（なんがつ）",
        kana: "なんがつ",
        vietnamese: "tháng mấy",
        english: "what month",
        example: ""
      },
      {
        japanese: "～日（～にち）",
        kana: "～にち",
        vietnamese: "ngày ~",
        english: "day ~",
        example: ""
      },
      {
        japanese: "何日（なんにち）",
        kana: "なんにち",
        vietnamese: "ngày mấy",
        english: "what day",
        example: ""
      },
      {
        japanese: "いつ",
        kana: "いつ",
        vietnamese: "khi nào",
        english: "when",
        example: "いつ にほんへ きましたか。"
      },
      {
        japanese: "誕生日（たんじょうび）",
        kana: "たんじょうび",
        vietnamese: "sinh nhật",
        english: "birthday",
        example: "たんじょうびは いつですか。"
      },
      {
        japanese: "普通（ふつう）",
        kana: "ふつう",
        vietnamese: "bình thường, tàu thường",
        english: "ordinary, local (train)",
        example: ""
      },
      {
        japanese: "急行（きゅうこう）",
        kana: "きゅうこう",
        vietnamese: "tàu nhanh",
        english: "express (train)",
        example: ""
      },
      {
        japanese: "特急（とっきゅう）",
        kana: "とっきゅう",
        vietnamese: "tàu tốc hành",
        english: "limited express",
        example: ""
      },
      {
        japanese: "次の（つぎの）",
        kana: "つぎの",
        vietnamese: "tiếp theo",
        english: "next",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "～へ 行きます/来ます/帰ります",
        vietnamese: "đi/đến/về ~",
        english: "go/come/return to ~",
        explanation: "Trợ từ 'へ' (đọc là 'e') chỉ hướng di chuyển.",
        examples: [
          {
            japanese: "わたしは がっこうへ いきます。",
            vietnamese: "Tôi đi đến trường.",
            english: "I go to school."
          },
          {
            japanese: "にちようびに どこへ いきますか。",
            vietnamese: "Chủ nhật bạn đi đâu?",
            english: "Where do you go on Sunday?"
          },
          {
            japanese: "7じに うちへ かえります。",
            vietnamese: "Tôi về nhà lúc 7 giờ.",
            english: "I return home at 7 o'clock."
          }
        ]
      },
      {
        pattern: "～で 行きます/来ます/帰ります",
        vietnamese: "đi/đến/về bằng ~",
        english: "go/come/return by ~",
        explanation: "Trợ từ 'で' chỉ phương tiện di chuyển.",
        examples: [
          {
            japanese: "でんしゃで かいしゃへ いきます。",
            vietnamese: "Tôi đi công ty bằng tàu điện.",
            english: "I go to the company by train."
          },
          {
            japanese: "ひこうきで にほんへ きました。",
            vietnamese: "Tôi đến Nhật bằng máy bay.",
            english: "I came to Japan by airplane."
          },
          {
            japanese: "あるいて うちへ かえります。",
            vietnamese: "Tôi về nhà bằng cách đi bộ.",
            english: "I return home on foot."
          }
        ]
      },
      {
        pattern: "～と ～へ 行きます",
        vietnamese: "đi ~ với ~",
        english: "go to ~ with ~",
        explanation: "Trợ từ 'と' chỉ người đồng hành.",
        examples: [
          {
            japanese: "ともだちと えいがを みに いきます。",
            vietnamese: "Tôi đi xem phim với bạn.",
            english: "I go to see a movie with my friend."
          },
          {
            japanese: "だれと きましたか。",
            vietnamese: "Bạn đến với ai?",
            english: "Who did you come with?"
          }
        ]
      },
      {
        pattern: "いつ ～ますか",
        vietnamese: "khi nào ~?",
        english: "when ~?",
        explanation: "Câu hỏi về thời gian. 'いつ' nghĩa là 'khi nào'. Không dùng 'に' sau 'いつ'.",
        examples: [
          {
            japanese: "いつ にほんへ きましたか。",
            vietnamese: "Khi nào bạn đến Nhật?",
            english: "When did you come to Japan?"
          },
          {
            japanese: "いつ くにへ かえりますか。",
            vietnamese: "Khi nào bạn về nước?",
            english: "When will you return to your country?"
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 6 — Object + Action Verbs
  // ═══════════════════════════════════════════
  {
    lessonNumber: 6,
    title: "～を します (Làm ~)",
    vocabulary: [
      {
        japanese: "食べます（たべます）",
        kana: "たべます",
        vietnamese: "ăn",
        english: "to eat",
        example: "あさごはんを たべます。"
      },
      {
        japanese: "飲みます（のみます）",
        kana: "のみます",
        vietnamese: "uống",
        english: "to drink",
        example: "コーヒーを のみます。"
      },
      {
        japanese: "吸います（すいます）",
        kana: "すいます",
        vietnamese: "hút (thuốc)",
        english: "to smoke",
        example: "たばこを すいます。"
      },
      {
        japanese: "見ます（みます）",
        kana: "みます",
        vietnamese: "xem, nhìn",
        english: "to see, to watch",
        example: "テレビを みます。"
      },
      {
        japanese: "聞きます（ききます）",
        kana: "ききます",
        vietnamese: "nghe",
        english: "to listen, to hear",
        example: "おんがくを ききます。"
      },
      {
        japanese: "読みます（よみます）",
        kana: "よみます",
        vietnamese: "đọc",
        english: "to read",
        example: "しんぶんを よみます。"
      },
      {
        japanese: "書きます（かきます）",
        kana: "かきます",
        vietnamese: "viết",
        english: "to write",
        example: "てがみを かきます。"
      },
      {
        japanese: "買います（かいます）",
        kana: "かいます",
        vietnamese: "mua",
        english: "to buy",
        example: "ほんを かいます。"
      },
      {
        japanese: "撮ります（とります）",
        kana: "とります",
        vietnamese: "chụp (ảnh)",
        english: "to take (a photo)",
        example: "しゃしんを とります。"
      },
      {
        japanese: "します",
        kana: "します",
        vietnamese: "làm, chơi",
        english: "to do, to play",
        example: "サッカーを します。"
      },
      {
        japanese: "会います（あいます）",
        kana: "あいます",
        vietnamese: "gặp",
        english: "to meet",
        example: "ともだちに あいます。"
      },
      {
        japanese: "ご飯（ごはん）",
        kana: "ごはん",
        vietnamese: "cơm, bữa ăn",
        english: "rice, meal",
        example: ""
      },
      {
        japanese: "朝ご飯（あさごはん）",
        kana: "あさごはん",
        vietnamese: "bữa sáng",
        english: "breakfast",
        example: ""
      },
      {
        japanese: "昼ご飯（ひるごはん）",
        kana: "ひるごはん",
        vietnamese: "bữa trưa",
        english: "lunch",
        example: ""
      },
      {
        japanese: "晩ご飯（ばんごはん）",
        kana: "ばんごはん",
        vietnamese: "bữa tối",
        english: "dinner",
        example: ""
      },
      {
        japanese: "パン",
        kana: "パン",
        vietnamese: "bánh mì",
        english: "bread",
        example: ""
      },
      {
        japanese: "卵（たまご）",
        kana: "たまご",
        vietnamese: "trứng",
        english: "egg",
        example: ""
      },
      {
        japanese: "肉（にく）",
        kana: "にく",
        vietnamese: "thịt",
        english: "meat",
        example: ""
      },
      {
        japanese: "魚（さかな）",
        kana: "さかな",
        vietnamese: "cá",
        english: "fish",
        example: ""
      },
      {
        japanese: "野菜（やさい）",
        kana: "やさい",
        vietnamese: "rau",
        english: "vegetable",
        example: ""
      },
      {
        japanese: "果物（くだもの）",
        kana: "くだもの",
        vietnamese: "trái cây",
        english: "fruit",
        example: ""
      },
      {
        japanese: "水（みず）",
        kana: "みず",
        vietnamese: "nước",
        english: "water",
        example: ""
      },
      {
        japanese: "お茶（おちゃ）",
        kana: "おちゃ",
        vietnamese: "trà",
        english: "tea",
        example: ""
      },
      {
        japanese: "紅茶（こうちゃ）",
        kana: "こうちゃ",
        vietnamese: "trà đen, hồng trà",
        english: "black tea",
        example: ""
      },
      {
        japanese: "牛乳（ぎゅうにゅう）",
        kana: "ぎゅうにゅう",
        vietnamese: "sữa bò",
        english: "milk",
        example: ""
      },
      {
        japanese: "ジュース",
        kana: "ジュース",
        vietnamese: "nước trái cây",
        english: "juice",
        example: ""
      },
      {
        japanese: "ビール",
        kana: "ビール",
        vietnamese: "bia",
        english: "beer",
        example: ""
      },
      {
        japanese: "お酒（おさけ）",
        kana: "おさけ",
        vietnamese: "rượu",
        english: "alcohol, sake",
        example: ""
      },
      {
        japanese: "映画（えいが）",
        kana: "えいが",
        vietnamese: "phim",
        english: "movie",
        example: "えいがを みます。"
      },
      {
        japanese: "手紙（てがみ）",
        kana: "てがみ",
        vietnamese: "thư",
        english: "letter",
        example: ""
      },
      {
        japanese: "写真（しゃしん）",
        kana: "しゃしん",
        vietnamese: "ảnh",
        english: "photograph",
        example: ""
      },
      {
        japanese: "レポート",
        kana: "レポート",
        vietnamese: "báo cáo",
        english: "report",
        example: ""
      },
      {
        japanese: "花（はな）",
        kana: "はな",
        vietnamese: "hoa",
        english: "flower",
        example: "はなを かいます。"
      },
      {
        japanese: "サッカー",
        kana: "サッカー",
        vietnamese: "bóng đá",
        english: "soccer",
        example: ""
      },
      {
        japanese: "テニス",
        kana: "テニス",
        vietnamese: "quần vợt",
        english: "tennis",
        example: ""
      },
      {
        japanese: "花見（はなみ）",
        kana: "はなみ",
        vietnamese: "ngắm hoa",
        english: "flower viewing",
        example: ""
      },
      {
        japanese: "何（なに）",
        kana: "なに",
        vietnamese: "cái gì",
        english: "what",
        example: ""
      },
      {
        japanese: "一緒に（いっしょに）",
        kana: "いっしょに",
        vietnamese: "cùng nhau",
        english: "together",
        example: "いっしょに いきませんか。"
      },
      {
        japanese: "ちょっと",
        kana: "ちょっと",
        vietnamese: "một chút",
        english: "a little, a moment",
        example: "ちょっと すみません。"
      },
      {
        japanese: "いつも",
        kana: "いつも",
        vietnamese: "luôn luôn",
        english: "always",
        example: ""
      },
      {
        japanese: "時々（ときどき）",
        kana: "ときどき",
        vietnamese: "thỉnh thoảng",
        english: "sometimes",
        example: ""
      },
      {
        japanese: "それから",
        kana: "それから",
        vietnamese: "sau đó",
        english: "after that, and then",
        example: ""
      },
      {
        japanese: "いいですね",
        kana: "いいですね",
        vietnamese: "hay quá nhỉ",
        english: "that's nice",
        example: ""
      },
      {
        japanese: "わかりました",
        kana: "わかりました",
        vietnamese: "tôi hiểu rồi",
        english: "I understand",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "～を ～ます",
        vietnamese: "làm ~",
        english: "do ~ (verb)",
        explanation: "Trợ từ 'を' đánh dấu tân ngữ (object) của động từ.",
        examples: [
          {
            japanese: "しんぶんを よみます。",
            vietnamese: "Tôi đọc báo.",
            english: "I read the newspaper."
          },
          {
            japanese: "コーヒーを のみます。",
            vietnamese: "Tôi uống cà phê.",
            english: "I drink coffee."
          },
          {
            japanese: "てがみを かきます。",
            vietnamese: "Tôi viết thư.",
            english: "I write a letter."
          }
        ]
      },
      {
        pattern: "～で ～を ～ます",
        vietnamese: "làm ~ ở ~",
        english: "do ~ at/in ~",
        explanation: "Trợ từ 'で' chỉ địa điểm diễn ra hành động.",
        examples: [
          {
            japanese: "としょかんで ほんを よみます。",
            vietnamese: "Tôi đọc sách ở thư viện.",
            english: "I read books at the library."
          },
          {
            japanese: "うちで テレビを みます。",
            vietnamese: "Tôi xem TV ở nhà.",
            english: "I watch TV at home."
          }
        ]
      },
      {
        pattern: "なにを ～ますか",
        vietnamese: "làm cái gì?",
        english: "what do you ~?",
        explanation: "Câu hỏi về đối tượng của hành động.",
        examples: [
          {
            japanese: "あさ なにを たべますか。",
            vietnamese: "Buổi sáng bạn ăn gì?",
            english: "What do you eat in the morning?"
          },
          {
            japanese: "どこで しんぶんを かいますか。",
            vietnamese: "Bạn mua báo ở đâu?",
            english: "Where do you buy the newspaper?"
          }
        ]
      },
      {
        pattern: "～を ～ましょう",
        vietnamese: "hãy cùng làm ~",
        english: "let's ~",
        explanation: "Rủ người khác cùng làm việc gì đó.",
        examples: [
          {
            japanese: "いっしょに コーヒーを のみましょう。",
            vietnamese: "Hãy cùng uống cà phê nào.",
            english: "Let's drink coffee together."
          },
          {
            japanese: "きょうとへ いきましょう。",
            vietnamese: "Hãy đi Kyoto nào.",
            english: "Let's go to Kyoto."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 7 — Giving / Receiving
  // ═══════════════════════════════════════════
  {
    lessonNumber: 7,
    title: "あげます・もらいます (Cho, nhận, mượn, dạy)",
    vocabulary: [
      {
        japanese: "あげます",
        kana: "あげます",
        vietnamese: "cho, tặng",
        english: "To give",
        example: "わたしは　ミラーさんに　花を　あげました。"
      },
      {
        japanese: "もらいます",
        kana: "もらいます",
        vietnamese: "nhận, được cho",
        english: "To receive",
        example: "わたしは　カリナさんに　プレゼントを　もらいました。"
      },
      {
        japanese: "貸します（かします）",
        kana: "かします",
        vietnamese: "cho mượn",
        english: "To lend",
        example: "わたしは　サントスさんに　本を　貸しました。"
      },
      {
        japanese: "借ります（かります）",
        kana: "かります",
        vietnamese: "mượn",
        english: "To borrow",
        example: "わたしは　山田さんに　傘を　借りました。"
      },
      {
        japanese: "教えます（おしえます）",
        kana: "おしえます",
        vietnamese: "dạy, chỉ bảo",
        english: "To teach, to tell",
        example: "わたしは　木村さんに　英語を　教えます。"
      },
      {
        japanese: "習います（ならいます）",
        kana: "ならいます",
        vietnamese: "học (từ ai đó)",
        english: "To learn (from someone)",
        example: "わたしは　小林先生に　日本語を　習います。"
      },
      {
        japanese: "かけます",
        kana: "かけます",
        vietnamese: "gọi (điện thoại)",
        english: "To make (a phone call)",
        example: "わたしは　会社に　電話を　かけます。"
      },
      {
        japanese: "送ります（おくります）",
        kana: "おくります",
        vietnamese: "gửi",
        english: "To send",
        example: "わたしは　国の　家族に　荷物を　送ります。"
      },
      {
        japanese: "手（て）",
        kana: "て",
        vietnamese: "tay",
        english: "Hand",
        example: "手を　洗います。"
      },
      {
        japanese: "紙（かみ）",
        kana: "かみ",
        vietnamese: "giấy",
        english: "Paper",
        example: ""
      },
      {
        japanese: "シャツ",
        kana: "シャツ",
        vietnamese: "áo sơ mi",
        english: "Shirt",
        example: ""
      },
      {
        japanese: "プレゼント",
        kana: "プレゼント",
        vietnamese: "quà tặng",
        english: "Present, gift",
        example: "誕生日の　プレゼントを　もらいました。"
      },
      {
        japanese: "荷物（にもつ）",
        kana: "にもつ",
        vietnamese: "hành lý, bưu kiện",
        english: "Luggage, package",
        example: ""
      },
      {
        japanese: "お金（おかね）",
        kana: "おかね",
        vietnamese: "tiền",
        english: "Money",
        example: ""
      },
      {
        japanese: "切符（きっぷ）",
        kana: "きっぷ",
        vietnamese: "vé",
        english: "Ticket",
        example: "切符を　買います。"
      },
      {
        japanese: "クリスマス",
        kana: "クリスマス",
        vietnamese: "Giáng sinh",
        english: "Christmas",
        example: "クリスマスに　プレゼントを　あげます。"
      },
      {
        japanese: "父（ちち）",
        kana: "ちち",
        vietnamese: "bố (của mình)",
        english: "My father",
        example: "父は　会社員です。"
      },
      {
        japanese: "母（はは）",
        kana: "はは",
        vietnamese: "mẹ (của mình)",
        english: "My mother",
        example: "母に　花を　あげました。"
      },
      {
        japanese: "お父さん（おとうさん）",
        kana: "おとうさん",
        vietnamese: "bố (của người khác)",
        english: "(Someone's) father",
        example: "お父さんは　お元気ですか。"
      },
      {
        japanese: "お母さん（おかあさん）",
        kana: "おかあさん",
        vietnamese: "mẹ (của người khác)",
        english: "(Someone's) mother",
        example: ""
      },
      {
        japanese: "はし",
        kana: "はし",
        vietnamese: "đũa",
        english: "Chopsticks",
        example: "はしで　食べます。"
      },
      {
        japanese: "スプーン",
        kana: "スプーン",
        vietnamese: "muỗng, thìa",
        english: "Spoon",
        example: ""
      },
      {
        japanese: "ナイフ",
        kana: "ナイフ",
        vietnamese: "dao",
        english: "Knife",
        example: ""
      },
      {
        japanese: "フォーク",
        kana: "フォーク",
        vietnamese: "nĩa",
        english: "Fork",
        example: ""
      },
      {
        japanese: "はさみ",
        kana: "はさみ",
        vietnamese: "kéo",
        english: "Scissors",
        example: ""
      },
      {
        japanese: "もう",
        kana: "もう",
        vietnamese: "đã, rồi",
        english: "Already",
        example: "もう　お昼ごはんを　食べましたか。"
      },
      {
        japanese: "まだ",
        kana: "まだ",
        vietnamese: "chưa, vẫn chưa",
        english: "Not yet",
        example: "いいえ、まだです。"
      }
    ],
    grammar: [
      {
        pattern: "～に ～を あげます",
        vietnamese: "cho ~ cái ~",
        english: "give ~ to ~",
        explanation: "Trợ từ 'に' chỉ người nhận, 'を' chỉ vật được cho.",
        examples: [
          {
            japanese: "わたしは ともだちに プレゼントを あげます。",
            vietnamese: "Tôi cho bạn quà.",
            english: "I give a present to my friend."
          },
          {
            japanese: "ちちに ネクタイを あげました。",
            vietnamese: "Tôi đã cho bố cái cà vạt.",
            english: "I gave my father a necktie."
          }
        ]
      },
      {
        pattern: "～に ～を もらいます",
        vietnamese: "nhận ~ từ ~",
        english: "receive ~ from ~",
        explanation: "Trợ từ 'に' hoặc 'から' chỉ người cho, 'を' chỉ vật nhận được.",
        examples: [
          {
            japanese: "わたしは やまださんに はなを もらいました。",
            vietnamese: "Tôi nhận hoa từ anh Yamada.",
            english: "I received flowers from Yamada."
          },
          {
            japanese: "たんじょうびに ははから プレゼントを もらいました。",
            vietnamese: "Sinh nhật tôi nhận quà từ mẹ.",
            english: "I received a present from my mother on my birthday."
          }
        ]
      },
      {
        pattern: "～に ～を かします/かります",
        vietnamese: "cho mượn/mượn ~ của ~",
        english: "lend/borrow ~ to/from ~",
        explanation: "かします = cho mượn, かります = mượn/vay.",
        examples: [
          {
            japanese: "わたしは たなかさんに ほんを かしました。",
            vietnamese: "Tôi đã cho Tanaka mượn sách.",
            english: "I lent a book to Tanaka."
          },
          {
            japanese: "ともだちに CDを かりました。",
            vietnamese: "Tôi mượn CD của bạn.",
            english: "I borrowed a CD from my friend."
          }
        ]
      },
      {
        pattern: "もう ～ました",
        vietnamese: "đã ~ rồi",
        english: "already ~",
        explanation: "'もう' với thì quá khứ biểu thị hành động đã hoàn thành.",
        examples: [
          {
            japanese: "もう ひるごはんを たべましたか。",
            vietnamese: "Bạn đã ăn trưa rồi chưa?",
            english: "Have you already eaten lunch?"
          },
          {
            japanese: "はい、もう たべました。",
            vietnamese: "Vâng, tôi đã ăn rồi.",
            english: "Yes, I've already eaten."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 8 — Adjectives
  // ═══════════════════════════════════════════
  {
    lessonNumber: 8,
    title: "形容詞 (Tính từ い và な)",
    vocabulary: [
      {
        japanese: "ハンサム（な）",
        kana: "ハンサム",
        vietnamese: "đẹp trai",
        english: "Handsome",
        example: "ミラーさんは　ハンサムですね。"
      },
      {
        japanese: "きれい（な）",
        kana: "きれい",
        vietnamese: "đẹp, sạch sẽ",
        english: "Beautiful, clean",
        example: "きれいな　花ですね。"
      },
      {
        japanese: "静か（な）（しずか）",
        kana: "しずか",
        vietnamese: "yên tĩnh",
        english: "Quiet",
        example: "この　町は　静かです。"
      },
      {
        japanese: "にぎやか（な）",
        kana: "にぎやか",
        vietnamese: "nhộn nhịp, sôi động",
        english: "Lively, bustling",
        example: "東京は　にぎやかな　町です。"
      },
      {
        japanese: "有名（な）（ゆうめい）",
        kana: "ゆうめい",
        vietnamese: "nổi tiếng",
        english: "Famous",
        example: "奈良は　有名な　町です。"
      },
      {
        japanese: "親切（な）（しんせつ）",
        kana: "しんせつ",
        vietnamese: "tử tế, tốt bụng",
        english: "Kind",
        example: "山田さんは　親切です。"
      },
      {
        japanese: "元気（な）（げんき）",
        kana: "げんき",
        vietnamese: "khỏe mạnh, hoạt bát",
        english: "Healthy, energetic",
        example: "お元気ですか。"
      },
      {
        japanese: "暇（な）（ひま）",
        kana: "ひま",
        vietnamese: "rảnh rỗi",
        english: "Free (time)",
        example: "日曜日は　暇です。"
      },
      {
        japanese: "便利（な）（べんり）",
        kana: "べんり",
        vietnamese: "tiện lợi",
        english: "Convenient",
        example: "この　辞書は　便利です。"
      },
      {
        japanese: "不便（な）（ふべん）",
        kana: "ふべん",
        vietnamese: "bất tiện",
        english: "Inconvenient",
        example: ""
      },
      {
        japanese: "大きい（おおきい）",
        kana: "おおきい",
        vietnamese: "to, lớn",
        english: "Big",
        example: "大きい　かばんですね。"
      },
      {
        japanese: "小さい（ちいさい）",
        kana: "ちいさい",
        vietnamese: "nhỏ, bé",
        english: "Small",
        example: ""
      },
      {
        japanese: "新しい（あたらしい）",
        kana: "あたらしい",
        vietnamese: "mới",
        english: "New",
        example: "新しい　車を　買いました。"
      },
      {
        japanese: "古い（ふるい）",
        kana: "ふるい",
        vietnamese: "cũ",
        english: "Old (things)",
        example: ""
      },
      {
        japanese: "いい（よい）",
        kana: "いい",
        vietnamese: "tốt, hay",
        english: "Good",
        example: "いい　天気ですね。"
      },
      {
        japanese: "悪い（わるい）",
        kana: "わるい",
        vietnamese: "xấu, tệ",
        english: "Bad",
        example: ""
      },
      {
        japanese: "暑い（あつい）",
        kana: "あつい",
        vietnamese: "nóng (thời tiết)",
        english: "Hot (weather)",
        example: "きょうは　暑いですね。"
      },
      {
        japanese: "寒い（さむい）",
        kana: "さむい",
        vietnamese: "lạnh (thời tiết)",
        english: "Cold (weather)",
        example: "北海道は　寒いです。"
      },
      {
        japanese: "熱い（あつい）",
        kana: "あつい",
        vietnamese: "nóng (đồ vật, chất lỏng)",
        english: "Hot (things)",
        example: "このコーヒーは　熱いです。"
      },
      {
        japanese: "冷たい（つめたい）",
        kana: "つめたい",
        vietnamese: "lạnh (đồ vật, chất lỏng)",
        english: "Cold (things)",
        example: "冷たい　水を　ください。"
      },
      {
        japanese: "難しい（むずかしい）",
        kana: "むずかしい",
        vietnamese: "khó",
        english: "Difficult",
        example: "日本語は　難しいですか。"
      },
      {
        japanese: "やさしい",
        kana: "やさしい",
        vietnamese: "dễ, hiền lành",
        english: "Easy, gentle",
        example: ""
      },
      {
        japanese: "高い（たかい）",
        kana: "たかい",
        vietnamese: "cao, đắt",
        english: "High, expensive",
        example: "この　時計は　高いです。"
      },
      {
        japanese: "安い（やすい）",
        kana: "やすい",
        vietnamese: "rẻ",
        english: "Cheap, inexpensive",
        example: "あの　レストランは　安いです。"
      },
      {
        japanese: "低い（ひくい）",
        kana: "ひくい",
        vietnamese: "thấp",
        english: "Low, short (height)",
        example: ""
      },
      {
        japanese: "おもしろい",
        kana: "おもしろい",
        vietnamese: "thú vị, hay",
        english: "Interesting, funny",
        example: "この　映画は　おもしろいです。"
      },
      {
        japanese: "つまらない",
        kana: "つまらない",
        vietnamese: "chán, nhàm chán",
        english: "Boring",
        example: ""
      },
      {
        japanese: "忙しい（いそがしい）",
        kana: "いそがしい",
        vietnamese: "bận rộn",
        english: "Busy",
        example: "毎日　忙しいです。"
      },
      {
        japanese: "楽しい（たのしい）",
        kana: "たのしい",
        vietnamese: "vui vẻ",
        english: "Fun, enjoyable",
        example: "旅行は　楽しかったです。"
      },
      {
        japanese: "白い（しろい）",
        kana: "しろい",
        vietnamese: "trắng",
        english: "White",
        example: ""
      },
      {
        japanese: "黒い（くろい）",
        kana: "くろい",
        vietnamese: "đen",
        english: "Black",
        example: ""
      },
      {
        japanese: "赤い（あかい）",
        kana: "あかい",
        vietnamese: "đỏ",
        english: "Red",
        example: ""
      },
      {
        japanese: "青い（あおい）",
        kana: "あおい",
        vietnamese: "xanh da trời, xanh lam",
        english: "Blue, green",
        example: ""
      },
      {
        japanese: "町（まち）",
        kana: "まち",
        vietnamese: "thị trấn, thành phố",
        english: "Town, city",
        example: ""
      },
      {
        japanese: "食べ物（たべもの）",
        kana: "たべもの",
        vietnamese: "đồ ăn, thức ăn",
        english: "Food",
        example: "日本の　食べ物は　おいしいです。"
      },
      {
        japanese: "所（ところ）",
        kana: "ところ",
        vietnamese: "nơi, chỗ",
        english: "Place",
        example: ""
      },
      {
        japanese: "寮（りょう）",
        kana: "りょう",
        vietnamese: "ký túc xá",
        english: "Dormitory",
        example: ""
      },
      {
        japanese: "生活（せいかつ）",
        kana: "せいかつ",
        vietnamese: "cuộc sống, sinh hoạt",
        english: "Life, living",
        example: "日本の　生活は　どうですか。"
      },
      {
        japanese: "仕事（しごと）",
        kana: "しごと",
        vietnamese: "công việc",
        english: "Work, job",
        example: "仕事は　忙しいです。"
      },
      {
        japanese: "どう",
        kana: "どう",
        vietnamese: "thế nào",
        english: "How",
        example: "日本の　生活は　どうですか。"
      },
      {
        japanese: "どんな",
        kana: "どんな",
        vietnamese: "loại nào, như thế nào",
        english: "What kind of",
        example: "どんな　映画が　好きですか。"
      },
      {
        japanese: "とても",
        kana: "とても",
        vietnamese: "rất",
        english: "Very",
        example: "この　ケーキは　とても　おいしいです。"
      },
      {
        japanese: "あまり",
        kana: "あまり",
        vietnamese: "không lắm, không mấy",
        english: "Not very (with negative)",
        example: "あまり　おもしろくないです。"
      }
    ],
    grammar: [
      {
        pattern: "い-adjective + です",
        vietnamese: "Tính từ đuôi い",
        english: "i-adjective + desu",
        explanation: "Tính từ đuôi い trực tiếp bổ nghĩa cho danh từ hoặc đứng cuối câu với です.",
        examples: [
          {
            japanese: "この ほんは おもしろいです。",
            vietnamese: "Cuốn sách này thú vị.",
            english: "This book is interesting."
          },
          {
            japanese: "あたらしい くつを かいました。",
            vietnamese: "Tôi đã mua giày mới.",
            english: "I bought new shoes."
          },
          {
            japanese: "きょうは あついです。",
            vietnamese: "Hôm nay nóng.",
            english: "It's hot today."
          }
        ]
      },
      {
        pattern: "な-adjective + です",
        vietnamese: "Tính từ đuôi な",
        english: "na-adjective + desu",
        explanation: "Tính từ đuôi な cần thêm 'な' khi bổ nghĩa trực tiếp cho danh từ, nhưng bỏ 'な' khi đứng cuối câu với です.",
        examples: [
          {
            japanese: "ふじさんは きれいです。",
            vietnamese: "Núi Phú Sĩ đẹp.",
            english: "Mt. Fuji is beautiful."
          },
          {
            japanese: "しずかな ところです。",
            vietnamese: "Là nơi yên tĩnh.",
            english: "It's a quiet place."
          },
          {
            japanese: "にほんごは べんりです。",
            vietnamese: "Tiếng Nhật tiện lợi.",
            english: "Japanese is convenient."
          }
        ]
      },
      {
        pattern: "～は ～くないです",
        vietnamese: "~ không ~",
        english: "~ is not ~",
        explanation: "Phủ định của tính từ đuôi い: bỏ い, thêm くないです.",
        examples: [
          {
            japanese: "この くつは たかくないです。",
            vietnamese: "Đôi giày này không đắt.",
            english: "These shoes are not expensive."
          },
          {
            japanese: "あまり おもしろくないです。",
            vietnamese: "Không mấy thú vị.",
            english: "It's not very interesting."
          }
        ]
      },
      {
        pattern: "～は ～じゃ ありません",
        vietnamese: "~ không ~",
        english: "~ is not ~",
        explanation: "Phủ định của tính từ đuôi な và danh từ.",
        examples: [
          {
            japanese: "あまり きれいじゃ ありません。",
            vietnamese: "Không mấy đẹp.",
            english: "It's not very beautiful."
          },
          {
            japanese: "ここは しずかじゃ ありません。",
            vietnamese: "Đây không yên tĩnh.",
            english: "This place is not quiet."
          }
        ]
      },
      {
        pattern: "～は どうですか",
        vietnamese: "~ thế nào?",
        english: "How is ~?",
        explanation: "Câu hỏi về tính chất, trạng thái của sự vật.",
        examples: [
          {
            japanese: "にほんの せいかつは どうですか。",
            vietnamese: "Cuộc sống ở Nhật thế nào?",
            english: "How is life in Japan?"
          },
          {
            japanese: "この レストランは どうですか。",
            vietnamese: "Nhà hàng này thế nào?",
            english: "How is this restaurant?"
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 9 — Likes / Dislikes / Abilities
  // ═══════════════════════════════════════════
  {
    lessonNumber: 9,
    title: "すきです・きらいです (Thích, ghét, khả năng)",
    vocabulary: [
      {
        japanese: "わかります",
        kana: "わかります",
        vietnamese: "hiểu, biết",
        english: "To understand",
        example: "日本語が　わかります。"
      },
      {
        japanese: "あります",
        kana: "あります",
        vietnamese: "có",
        english: "To have, to exist",
        example: "お金が　あります。"
      },
      {
        japanese: "好き（な）（すき）",
        kana: "すき",
        vietnamese: "thích",
        english: "Like, fond of",
        example: "果物が　好きです。"
      },
      {
        japanese: "嫌い（な）（きらい）",
        kana: "きらい",
        vietnamese: "ghét, không thích",
        english: "Dislike, hate",
        example: ""
      },
      {
        japanese: "上手（な）（じょうず）",
        kana: "じょうず",
        vietnamese: "giỏi, khéo",
        english: "Good at, skillful",
        example: "ミラーさんは　日本語が　上手です。"
      },
      {
        japanese: "下手（な）（へた）",
        kana: "へた",
        vietnamese: "kém, vụng",
        english: "Poor at, unskillful",
        example: "わたしは　料理が　下手です。"
      },
      {
        japanese: "料理（りょうり）",
        kana: "りょうり",
        vietnamese: "món ăn, việc nấu ăn",
        english: "Cooking, cuisine",
        example: "日本　料理が　好きです。"
      },
      {
        japanese: "飲み物（のみもの）",
        kana: "のみもの",
        vietnamese: "đồ uống",
        english: "Drink, beverage",
        example: ""
      },
      {
        japanese: "スポーツ",
        kana: "スポーツ",
        vietnamese: "thể thao",
        english: "Sports",
        example: "どんな　スポーツが　好きですか。"
      },
      {
        japanese: "野球（やきゅう）",
        kana: "やきゅう",
        vietnamese: "bóng chày",
        english: "Baseball",
        example: ""
      },
      {
        japanese: "ダンス",
        kana: "ダンス",
        vietnamese: "nhảy, khiêu vũ",
        english: "Dance",
        example: ""
      },
      {
        japanese: "音楽（おんがく）",
        kana: "おんがく",
        vietnamese: "âm nhạc",
        english: "Music",
        example: "音楽を　聞きます。"
      },
      {
        japanese: "歌（うた）",
        kana: "うた",
        vietnamese: "bài hát",
        english: "Song",
        example: ""
      },
      {
        japanese: "クラシック",
        kana: "クラシック",
        vietnamese: "nhạc cổ điển",
        english: "Classical music",
        example: ""
      },
      {
        japanese: "ジャズ",
        kana: "ジャズ",
        vietnamese: "nhạc jazz",
        english: "Jazz",
        example: ""
      },
      {
        japanese: "コンサート",
        kana: "コンサート",
        vietnamese: "buổi hòa nhạc",
        english: "Concert",
        example: ""
      },
      {
        japanese: "カラオケ",
        kana: "カラオケ",
        vietnamese: "karaoke",
        english: "Karaoke",
        example: "カラオケに　行きませんか。"
      },
      {
        japanese: "歌舞伎（かぶき）",
        kana: "かぶき",
        vietnamese: "kịch Kabuki",
        english: "Kabuki (theater)",
        example: ""
      },
      {
        japanese: "絵（え）",
        kana: "え",
        vietnamese: "tranh, bức họa",
        english: "Picture, painting",
        example: ""
      },
      {
        japanese: "字（じ）",
        kana: "じ",
        vietnamese: "chữ",
        english: "Character, letter",
        example: ""
      },
      {
        japanese: "漢字（かんじ）",
        kana: "かんじ",
        vietnamese: "chữ Hán",
        english: "Kanji, Chinese character",
        example: "漢字が　わかりますか。"
      },
      {
        japanese: "ひらがな",
        kana: "ひらがな",
        vietnamese: "chữ Hiragana",
        english: "Hiragana",
        example: ""
      },
      {
        japanese: "カタカナ",
        kana: "カタカナ",
        vietnamese: "chữ Katakana",
        english: "Katakana",
        example: ""
      },
      {
        japanese: "ローマ字（ローマじ）",
        kana: "ローマじ",
        vietnamese: "chữ La-tinh",
        english: "Roman alphabet",
        example: ""
      },
      {
        japanese: "細い（ほそい）",
        kana: "ほそい",
        vietnamese: "mảnh, gầy",
        english: "Thin, slim",
        example: ""
      },
      {
        japanese: "太い（ふとい）",
        kana: "ふとい",
        vietnamese: "to, mập",
        english: "Thick, fat",
        example: ""
      },
      {
        japanese: "よく",
        kana: "よく",
        vietnamese: "thường xuyên, giỏi",
        english: "Often, well",
        example: "よく　映画を　見ます。"
      },
      {
        japanese: "だいたい",
        kana: "だいたい",
        vietnamese: "đại khái, gần như",
        english: "Mostly, roughly",
        example: "だいたい　わかります。"
      },
      {
        japanese: "たくさん",
        kana: "たくさん",
        vietnamese: "nhiều",
        english: "A lot, many",
        example: "CDを　たくさん　持っています。"
      },
      {
        japanese: "少し（すこし）",
        kana: "すこし",
        vietnamese: "một chút, một ít",
        english: "A little",
        example: "日本語が　少し　わかります。"
      },
      {
        japanese: "全然（ぜんぜん）",
        kana: "ぜんぜん",
        vietnamese: "hoàn toàn không",
        english: "Not at all (with negative)",
        example: "漢字が　全然　わかりません。"
      },
      {
        japanese: "早く（はやく）",
        kana: "はやく",
        vietnamese: "nhanh, sớm",
        english: "Early, quickly",
        example: ""
      },
      {
        japanese: "〜から",
        kana: "から",
        vietnamese: "vì, bởi vì (lý do)",
        english: "Because (reason)",
        example: "時間が　ありませんから、新聞を　読みません。"
      },
      {
        japanese: "どうして",
        kana: "どうして",
        vietnamese: "tại sao",
        english: "Why",
        example: "どうして　日本語を　勉強しますか。"
      },
      {
        japanese: "残念ですが（ざんねんですが）",
        kana: "ざんねんですが",
        vietnamese: "rất tiếc nhưng...",
        english: "I'm sorry but...",
        example: "残念ですが、行きません。"
      }
    ],
    grammar: [
      {
        pattern: "～が 好きです/嫌いです",
        vietnamese: "thích/ghét ~",
        english: "like/dislike ~",
        explanation: "Trợ từ 'が' đánh dấu đối tượng của sở thích, cảm xúc, khả năng.",
        examples: [
          {
            japanese: "わたしは にほんりょうりが すきです。",
            vietnamese: "Tôi thích món ăn Nhật.",
            english: "I like Japanese food."
          },
          {
            japanese: "やさいが きらいです。",
            vietnamese: "Tôi ghét rau.",
            english: "I dislike vegetables."
          },
          {
            japanese: "あなたは どんな スポーツが すきですか。",
            vietnamese: "Bạn thích thể thao nào?",
            english: "What sports do you like?"
          }
        ]
      },
      {
        pattern: "～が わかります",
        vietnamese: "hiểu ~",
        english: "understand ~",
        explanation: "わかります (hiểu) dùng với trợ từ 'が', không dùng 'を'.",
        examples: [
          {
            japanese: "にほんごが わかりますか。",
            vietnamese: "Bạn hiểu tiếng Nhật không?",
            english: "Do you understand Japanese?"
          },
          {
            japanese: "すこし わかります。",
            vietnamese: "Tôi hiểu một chút.",
            english: "I understand a little."
          }
        ]
      },
      {
        pattern: "～が できます",
        vietnamese: "có thể làm ~, biết ~",
        english: "can do ~",
        explanation: "できます chỉ khả năng làm việc gì đó.",
        examples: [
          {
            japanese: "ピアノが できます。",
            vietnamese: "Tôi biết chơi piano.",
            english: "I can play the piano."
          },
          {
            japanese: "りょうりが できますか。",
            vietnamese: "Bạn có biết nấu ăn không?",
            english: "Can you cook?"
          }
        ]
      },
      {
        pattern: "どうして/なぜ ～ですか",
        vietnamese: "tại sao ~?",
        english: "why ~?",
        explanation: "Câu hỏi về lý do.",
        examples: [
          {
            japanese: "どうして にほんごを べんきょうしますか。",
            vietnamese: "Tại sao bạn học tiếng Nhật?",
            english: "Why do you study Japanese?"
          },
          {
            japanese: "にほんの かいしゃで はたらきたいですから。",
            vietnamese: "Vì tôi muốn làm việc ở công ty Nhật.",
            english: "Because I want to work at a Japanese company."
          }
        ]
      },
      {
        pattern: "よく/だいたい/たくさん/すこし/あまり/全然",
        vietnamese: "Các trạng từ chỉ mức độ",
        english: "Adverbs of frequency/degree",
        explanation: "よく (thường), だいたい (đại khái), たくさん (nhiều), すこし (một chút), あまり (không lắm - với phủ định), ぜんぜん (hoàn toàn không - với phủ định).",
        examples: [
          {
            japanese: "よく えいがを みます。",
            vietnamese: "Tôi thường xem phim.",
            english: "I often watch movies."
          },
          {
            japanese: "あまり わかりません。",
            vietnamese: "Tôi không hiểu lắm.",
            english: "I don't understand very much."
          },
          {
            japanese: "ぜんぜん できません。",
            vietnamese: "Tôi hoàn toàn không biết.",
            english: "I can't do it at all."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 10 — Existence & Location
  // ═══════════════════════════════════════════
  {
    lessonNumber: 10,
    title: "あります・います (Sự tồn tại, vị trí)",
    vocabulary: [
      {
        japanese: "います",
        kana: "います",
        vietnamese: "có, ở (người, động vật)",
        english: "To exist (living things)",
        example: "部屋に　猫が　います。"
      },
      {
        japanese: "あります",
        kana: "あります",
        vietnamese: "có, ở (đồ vật)",
        english: "To exist (non-living things)",
        example: "机の　上に　本が　あります。"
      },
      {
        japanese: "いろいろ（な）",
        kana: "いろいろ",
        vietnamese: "nhiều loại, đa dạng",
        english: "Various",
        example: "スーパーに　いろいろな　物が　あります。"
      },
      {
        japanese: "男の人（おとこのひと）",
        kana: "おとこのひと",
        vietnamese: "đàn ông",
        english: "Man",
        example: ""
      },
      {
        japanese: "女の人（おんなのひと）",
        kana: "おんなのひと",
        vietnamese: "phụ nữ",
        english: "Woman",
        example: ""
      },
      {
        japanese: "男の子（おとこのこ）",
        kana: "おとこのこ",
        vietnamese: "con trai, bé trai",
        english: "Boy",
        example: ""
      },
      {
        japanese: "女の子（おんなのこ）",
        kana: "おんなのこ",
        vietnamese: "con gái, bé gái",
        english: "Girl",
        example: ""
      },
      {
        japanese: "犬（いぬ）",
        kana: "いぬ",
        vietnamese: "con chó",
        english: "Dog",
        example: "公園に　犬が　います。"
      },
      {
        japanese: "猫（ねこ）",
        kana: "ねこ",
        vietnamese: "con mèo",
        english: "Cat",
        example: ""
      },
      {
        japanese: "木（き）",
        kana: "き",
        vietnamese: "cây",
        english: "Tree",
        example: ""
      },
      {
        japanese: "物（もの）",
        kana: "もの",
        vietnamese: "đồ vật, thứ",
        english: "Thing, object",
        example: ""
      },
      {
        japanese: "電池（でんち）",
        kana: "でんち",
        vietnamese: "pin",
        english: "Battery",
        example: ""
      },
      {
        japanese: "箱（はこ）",
        kana: "はこ",
        vietnamese: "hộp",
        english: "Box",
        example: "箱の　中に　何が　ありますか。"
      },
      {
        japanese: "スイッチ",
        kana: "スイッチ",
        vietnamese: "công tắc",
        english: "Switch",
        example: ""
      },
      {
        japanese: "冷蔵庫（れいぞうこ）",
        kana: "れいぞうこ",
        vietnamese: "tủ lạnh",
        english: "Refrigerator",
        example: ""
      },
      {
        japanese: "テーブル",
        kana: "テーブル",
        vietnamese: "bàn",
        english: "Table",
        example: "テーブルの　上に　花が　あります。"
      },
      {
        japanese: "ベッド",
        kana: "ベッド",
        vietnamese: "giường",
        english: "Bed",
        example: ""
      },
      {
        japanese: "棚（たな）",
        kana: "たな",
        vietnamese: "kệ, giá",
        english: "Shelf",
        example: ""
      },
      {
        japanese: "ドア",
        kana: "ドア",
        vietnamese: "cửa ra vào",
        english: "Door",
        example: ""
      },
      {
        japanese: "窓（まど）",
        kana: "まど",
        vietnamese: "cửa sổ",
        english: "Window",
        example: ""
      },
      {
        japanese: "ポスト",
        kana: "ポスト",
        vietnamese: "hòm thư",
        english: "Postbox, mailbox",
        example: ""
      },
      {
        japanese: "ビル",
        kana: "ビル",
        vietnamese: "tòa nhà",
        english: "Building",
        example: ""
      },
      {
        japanese: "コンビニ",
        kana: "コンビニ",
        vietnamese: "cửa hàng tiện lợi",
        english: "Convenience store",
        example: "駅の　近くに　コンビニが　あります。"
      },
      {
        japanese: "公園（こうえん）",
        kana: "こうえん",
        vietnamese: "công viên",
        english: "Park",
        example: ""
      },
      {
        japanese: "喫茶店（きっさてん）",
        kana: "きっさてん",
        vietnamese: "quán cà phê",
        english: "Coffee shop",
        example: ""
      },
      {
        japanese: "本屋（ほんや）",
        kana: "ほんや",
        vietnamese: "tiệm sách",
        english: "Bookstore",
        example: ""
      },
      {
        japanese: "〜屋（〜や）",
        kana: "や",
        vietnamese: "tiệm, cửa hàng ~",
        english: "~ shop, ~ store",
        example: ""
      },
      {
        japanese: "乗り場（のりば）",
        kana: "のりば",
        vietnamese: "bến xe, nơi lên xe",
        english: "Bus/taxi stand, platform",
        example: "タクシー乗り場は　あそこです。"
      },
      {
        japanese: "県（けん）",
        kana: "けん",
        vietnamese: "tỉnh",
        english: "Prefecture",
        example: ""
      },
      {
        japanese: "上（うえ）",
        kana: "うえ",
        vietnamese: "trên",
        english: "On, above",
        example: "机の　上に　本が　あります。"
      },
      {
        japanese: "下（した）",
        kana: "した",
        vietnamese: "dưới",
        english: "Under, below",
        example: ""
      },
      {
        japanese: "前（まえ）",
        kana: "まえ",
        vietnamese: "trước",
        english: "In front of",
        example: ""
      },
      {
        japanese: "後ろ（うしろ）",
        kana: "うしろ",
        vietnamese: "phía sau",
        english: "Behind",
        example: ""
      },
      {
        japanese: "右（みぎ）",
        kana: "みぎ",
        vietnamese: "bên phải",
        english: "Right",
        example: ""
      },
      {
        japanese: "左（ひだり）",
        kana: "ひだり",
        vietnamese: "bên trái",
        english: "Left",
        example: ""
      },
      {
        japanese: "中（なか）",
        kana: "なか",
        vietnamese: "bên trong",
        english: "Inside",
        example: ""
      },
      {
        japanese: "外（そと）",
        kana: "そと",
        vietnamese: "bên ngoài",
        english: "Outside",
        example: ""
      },
      {
        japanese: "隣（となり）",
        kana: "となり",
        vietnamese: "bên cạnh",
        english: "Next to",
        example: "銀行の　隣に　郵便局が　あります。"
      },
      {
        japanese: "近く（ちかく）",
        kana: "ちかく",
        vietnamese: "gần",
        english: "Near, nearby",
        example: ""
      },
      {
        japanese: "間（あいだ）",
        kana: "あいだ",
        vietnamese: "ở giữa",
        english: "Between",
        example: "銀行と　郵便局の　間に　花屋が　あります。"
      }
    ],
    grammar: [
      {
        pattern: "います/あります",
        vietnamese: "có, tồn tại",
        english: "there is/are, to exist",
        explanation: "います dùng cho người và động vật, あります dùng cho đồ vật và thực vật.",
        examples: [
          {
            japanese: "へやに だれが いますか。",
            vietnamese: "Ai đang ở trong phòng?",
            english: "Who is in the room?"
          },
          {
            japanese: "つくえの うえに ほんが あります。",
            vietnamese: "Trên bàn có sách.",
            english: "There is a book on the desk."
          },
          {
            japanese: "にわに ねこが います。",
            vietnamese: "Trong vườn có mèo.",
            english: "There is a cat in the garden."
          }
        ]
      },
      {
        pattern: "～に ～が います/あります",
        vietnamese: "ở ~ có ~",
        english: "there is ~ in/at/on ~",
        explanation: "Trợ từ 'に' chỉ vị trí tồn tại, 'が' đánh dấu chủ ngữ.",
        examples: [
          {
            japanese: "こうえんに こどもが たくさん います。",
            vietnamese: "Trong công viên có nhiều trẻ em.",
            english: "There are many children in the park."
          },
          {
            japanese: "つくえの したに ねこが います。",
            vietnamese: "Dưới bàn có mèo.",
            english: "There is a cat under the desk."
          }
        ]
      },
      {
        pattern: "～は ～に います/あります",
        vietnamese: "~ ở ~",
        english: "~ is in/at/on ~",
        explanation: "Câu trúc này hỏi hoặc nói về vị trí của một đối tượng cụ thể.",
        examples: [
          {
            japanese: "やまださんは どこに いますか。",
            vietnamese: "Anh Yamada ở đâu?",
            english: "Where is Yamada?"
          },
          {
            japanese: "かぎは つくえの なかに あります。",
            vietnamese: "Chìa khóa ở trong bàn.",
            english: "The key is in the desk."
          }
        ]
      },
      {
        pattern: "～の 上/下/中/前/後ろ/隣/近く",
        vietnamese: "trên/dưới/trong/trước/sau/bên cạnh/gần ~",
        english: "on/under/in/in front of/behind/next to/near ~",
        explanation: "Các từ chỉ vị trí tương đối.",
        examples: [
          {
            japanese: "ほんは つくえの うえに あります。",
            vietnamese: "Sách ở trên bàn.",
            english: "The book is on the desk."
          },
          {
            japanese: "ぎんこうは デパートの となりに あります。",
            vietnamese: "Ngân hàng ở bên cạnh trung tâm thương mại.",
            english: "The bank is next to the department store."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 11 — Counters & Family
  // ═══════════════════════════════════════════
  {
    lessonNumber: 11,
    title: "助数詞・家族 (Trợ số từ, gia đình)",
    vocabulary: [
      {
        japanese: "一つ（ひとつ）",
        kana: "ひとつ",
        vietnamese: "một (cái/quả)",
        english: "One (general counter)",
        example: "りんごを　一つ　ください。"
      },
      {
        japanese: "二つ（ふたつ）",
        kana: "ふたつ",
        vietnamese: "hai (cái/quả)",
        english: "Two (general counter)",
        example: ""
      },
      {
        japanese: "三つ（みっつ）",
        kana: "みっつ",
        vietnamese: "ba (cái/quả)",
        english: "Three (general counter)",
        example: ""
      },
      {
        japanese: "四つ（よっつ）",
        kana: "よっつ",
        vietnamese: "bốn (cái/quả)",
        english: "Four (general counter)",
        example: ""
      },
      {
        japanese: "五つ（いつつ）",
        kana: "いつつ",
        vietnamese: "năm (cái/quả)",
        english: "Five (general counter)",
        example: ""
      },
      {
        japanese: "六つ（むっつ）",
        kana: "むっつ",
        vietnamese: "sáu (cái/quả)",
        english: "Six (general counter)",
        example: ""
      },
      {
        japanese: "七つ（ななつ）",
        kana: "ななつ",
        vietnamese: "bảy (cái/quả)",
        english: "Seven (general counter)",
        example: ""
      },
      {
        japanese: "八つ（やっつ）",
        kana: "やっつ",
        vietnamese: "tám (cái/quả)",
        english: "Eight (general counter)",
        example: ""
      },
      {
        japanese: "九つ（ここのつ）",
        kana: "ここのつ",
        vietnamese: "chín (cái/quả)",
        english: "Nine (general counter)",
        example: ""
      },
      {
        japanese: "十（とお）",
        kana: "とお",
        vietnamese: "mười (cái/quả)",
        english: "Ten (general counter)",
        example: ""
      },
      {
        japanese: "いくつ",
        kana: "いくつ",
        vietnamese: "bao nhiêu (cái)",
        english: "How many",
        example: "りんごを　いくつ　買いましたか。"
      },
      {
        japanese: "〜人（〜にん）",
        kana: "にん",
        vietnamese: "~ người (trợ số từ)",
        english: "Counter for people",
        example: "家族は　4人です。"
      },
      {
        japanese: "〜台（〜だい）",
        kana: "だい",
        vietnamese: "~ chiếc (máy, xe)",
        english: "Counter for machines/vehicles",
        example: "車が　3台　あります。"
      },
      {
        japanese: "〜枚（〜まい）",
        kana: "まい",
        vietnamese: "~ tờ, tấm (đồ mỏng)",
        english: "Counter for flat objects",
        example: "切手を　5枚　ください。"
      },
      {
        japanese: "〜回（〜かい）",
        kana: "かい",
        vietnamese: "~ lần",
        english: "Counter for times/occasions",
        example: "1週間に　2回　テニスを　します。"
      },
      {
        japanese: "りんご",
        kana: "りんご",
        vietnamese: "quả táo",
        english: "Apple",
        example: ""
      },
      {
        japanese: "みかん",
        kana: "みかん",
        vietnamese: "quả quýt",
        english: "Mandarin orange",
        example: ""
      },
      {
        japanese: "サンドイッチ",
        kana: "サンドイッチ",
        vietnamese: "bánh sandwich",
        english: "Sandwich",
        example: ""
      },
      {
        japanese: "カレー",
        kana: "カレー",
        vietnamese: "cà ri",
        english: "Curry",
        example: ""
      },
      {
        japanese: "アイスクリーム",
        kana: "アイスクリーム",
        vietnamese: "kem",
        english: "Ice cream",
        example: ""
      },
      {
        japanese: "切手（きって）",
        kana: "きって",
        vietnamese: "tem",
        english: "Stamp",
        example: "80円の　切手を　5枚　ください。"
      },
      {
        japanese: "葉書（はがき）",
        kana: "はがき",
        vietnamese: "bưu thiếp",
        english: "Postcard",
        example: ""
      },
      {
        japanese: "封筒（ふうとう）",
        kana: "ふうとう",
        vietnamese: "phong bì",
        english: "Envelope",
        example: ""
      },
      {
        japanese: "速達（そくたつ）",
        kana: "そくたつ",
        vietnamese: "thư chuyển phát nhanh",
        english: "Express mail",
        example: ""
      },
      {
        japanese: "書留（かきとめ）",
        kana: "かきとめ",
        vietnamese: "thư bảo đảm",
        english: "Registered mail",
        example: ""
      },
      {
        japanese: "航空便（こうくうびん）",
        kana: "こうくうびん",
        vietnamese: "thư hàng không",
        english: "Airmail",
        example: ""
      },
      {
        japanese: "船便（ふなびん）",
        kana: "ふなびん",
        vietnamese: "thư đường biển",
        english: "Sea mail, surface mail",
        example: ""
      },
      {
        japanese: "両親（りょうしん）",
        kana: "りょうしん",
        vietnamese: "bố mẹ, song thân",
        english: "Parents",
        example: ""
      },
      {
        japanese: "兄弟（きょうだい）",
        kana: "きょうだい",
        vietnamese: "anh chị em",
        english: "Siblings",
        example: "兄弟が　いますか。"
      },
      {
        japanese: "兄（あに）",
        kana: "あに",
        vietnamese: "anh trai (của mình)",
        english: "My older brother",
        example: ""
      },
      {
        japanese: "姉（あね）",
        kana: "あね",
        vietnamese: "chị gái (của mình)",
        english: "My older sister",
        example: ""
      },
      {
        japanese: "弟（おとうと）",
        kana: "おとうと",
        vietnamese: "em trai (của mình)",
        english: "My younger brother",
        example: ""
      },
      {
        japanese: "妹（いもうと）",
        kana: "いもうと",
        vietnamese: "em gái (của mình)",
        english: "My younger sister",
        example: ""
      },
      {
        japanese: "外国（がいこく）",
        kana: "がいこく",
        vietnamese: "nước ngoài",
        english: "Foreign country",
        example: ""
      },
      {
        japanese: "外国人（がいこくじん）",
        kana: "がいこくじん",
        vietnamese: "người nước ngoài",
        english: "Foreigner",
        example: ""
      },
      {
        japanese: "どのくらい",
        kana: "どのくらい",
        vietnamese: "bao lâu, bao nhiêu",
        english: "How long, how much",
        example: "どのくらい　かかりますか。"
      },
      {
        japanese: "〜週間（〜しゅうかん）",
        kana: "しゅうかん",
        vietnamese: "~ tuần",
        english: "~ week(s)",
        example: "2週間　日本に　います。"
      },
      {
        japanese: "〜か月（〜かげつ）",
        kana: "かげつ",
        vietnamese: "~ tháng",
        english: "~ month(s)",
        example: "3か月　日本語を　勉強しました。"
      },
      {
        japanese: "〜年（〜ねん）",
        kana: "ねん",
        vietnamese: "~ năm",
        english: "~ year(s)",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "〜枚（まい）、〜本（ほん）、〜個（こ）",
        vietnamese: "Trợ số từ: ~ tờ/tấm, ~ cây/chai, ~ cái",
        english: "Counters: flat objects, long objects, small objects",
        explanation: "Trợ số từ dùng để đếm các loại đồ vật khác nhau. 枚 đếm vật mỏng phẳng (giấy, tem), 本 đếm vật dài (bút, chai), 個 đếm vật nhỏ tròn (trái cây).",
        examples: [
          {
            japanese: "切手を　5枚　ください。",
            vietnamese: "Cho tôi 5 cái tem.",
            english: "Please give me 5 stamps."
          },
          {
            japanese: "ペンが　3本　あります。",
            vietnamese: "Có 3 cây bút.",
            english: "There are 3 pens."
          },
          {
            japanese: "りんごを　2個　買いました。",
            vietnamese: "Tôi đã mua 2 quả táo.",
            english: "I bought 2 apples."
          }
        ]
      },
      {
        pattern: "いくつ / 何〜（なん〜）",
        vietnamese: "Bao nhiêu (tuổi/cái), bao nhiêu ~",
        english: "How many, how old",
        explanation: "'いくつ' hỏi số lượng chung hoặc tuổi (không chính thức). '何〜' kết hợp với trợ số từ để hỏi số lượng cụ thể (何枚、何本、何個).",
        examples: [
          {
            japanese: "りんごを　いくつ　買いましたか。",
            vietnamese: "Bạn đã mua bao nhiêu quả táo?",
            english: "How many apples did you buy?"
          },
          {
            japanese: "何枚　ありますか。",
            vietnamese: "Có bao nhiêu tờ?",
            english: "How many (sheets) are there?"
          },
          {
            japanese: "お子さんは　おいくつですか。",
            vietnamese: "Con bạn bao nhiêu tuổi?",
            english: "How old is your child?"
          }
        ]
      },
      {
        pattern: "家族の呼び方",
        vietnamese: "Cách gọi thành viên gia đình",
        english: "Family terms (humble vs. respectful)",
        explanation: "Tiếng Nhật phân biệt cách gọi gia đình mình (khiêm tốn) và gia đình người khác (tôn trọng). VD: 兄 (anh trai mình) vs お兄さん (anh trai người khác).",
        examples: [
          {
            japanese: "兄は　会社員です。",
            vietnamese: "Anh trai tôi là nhân viên công ty.",
            english: "My older brother is a company employee."
          },
          {
            japanese: "お兄さんは　何人　いますか。",
            vietnamese: "Bạn có mấy anh trai?",
            english: "How many older brothers do you have?"
          },
          {
            japanese: "妹が　2人　います。",
            vietnamese: "Tôi có 2 em gái.",
            english: "I have 2 younger sisters."
          }
        ]
      },
      {
        pattern: "〜人（〜にん）",
        vietnamese: "~ người (đếm người)",
        english: "Counter for people",
        explanation: "Trợ số từ đếm người. Chú ý: 1人 (ひとり), 2人 (ふたり), 3人 (さんにん), 4人 (よにん). Hỏi: 何人 (なんにん)。",
        examples: [
          {
            japanese: "家族は　何人ですか。",
            vietnamese: "Gia đình bạn có mấy người?",
            english: "How many people are in your family?"
          },
          {
            japanese: "家族は　4人です。",
            vietnamese: "Gia đình tôi có 4 người.",
            english: "There are 4 people in my family."
          },
          {
            japanese: "友達が　3人　来ます。",
            vietnamese: "Có 3 người bạn sẽ đến.",
            english: "Three friends will come."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 12 — Comparison / Seasons / Weather
  // ═══════════════════════════════════════════
  {
    lessonNumber: 12,
    title: "比較 (So sánh, mùa, thời tiết)",
    vocabulary: [
      {
        japanese: "簡単（な）（かんたん）",
        kana: "かんたん",
        vietnamese: "đơn giản, dễ",
        english: "Simple, easy",
        example: "この　問題は　簡単です。"
      },
      {
        japanese: "近い（ちかい）",
        kana: "ちかい",
        vietnamese: "gần",
        english: "Near, close",
        example: "駅は　近いです。"
      },
      {
        japanese: "遠い（とおい）",
        kana: "とおい",
        vietnamese: "xa",
        english: "Far",
        example: ""
      },
      {
        japanese: "速い（はやい）",
        kana: "はやい",
        vietnamese: "nhanh",
        english: "Fast, quick",
        example: "新幹線は　速いです。"
      },
      {
        japanese: "遅い（おそい）",
        kana: "おそい",
        vietnamese: "chậm, muộn",
        english: "Slow, late",
        example: ""
      },
      {
        japanese: "多い（おおい）",
        kana: "おおい",
        vietnamese: "nhiều",
        english: "Many, much",
        example: "東京は　人が　多いです。"
      },
      {
        japanese: "少ない（すくない）",
        kana: "すくない",
        vietnamese: "ít",
        english: "Few, little",
        example: ""
      },
      {
        japanese: "暖かい（あたたかい）",
        kana: "あたたかい",
        vietnamese: "ấm áp",
        english: "Warm",
        example: "春は　暖かいです。"
      },
      {
        japanese: "涼しい（すずしい）",
        kana: "すずしい",
        vietnamese: "mát mẻ",
        english: "Cool",
        example: "秋は　涼しいです。"
      },
      {
        japanese: "甘い（あまい）",
        kana: "あまい",
        vietnamese: "ngọt",
        english: "Sweet",
        example: "この　ケーキは　甘いです。"
      },
      {
        japanese: "辛い（からい）",
        kana: "からい",
        vietnamese: "cay",
        english: "Spicy, hot",
        example: ""
      },
      {
        japanese: "重い（おもい）",
        kana: "おもい",
        vietnamese: "nặng",
        english: "Heavy",
        example: "この　荷物は　重いです。"
      },
      {
        japanese: "軽い（かるい）",
        kana: "かるい",
        vietnamese: "nhẹ",
        english: "Light (weight)",
        example: ""
      },
      {
        japanese: "季節（きせつ）",
        kana: "きせつ",
        vietnamese: "mùa",
        english: "Season",
        example: "どの　季節が　いちばん　好きですか。"
      },
      {
        japanese: "春（はる）",
        kana: "はる",
        vietnamese: "mùa xuân",
        english: "Spring",
        example: "春は　暖かいです。"
      },
      {
        japanese: "夏（なつ）",
        kana: "なつ",
        vietnamese: "mùa hè",
        english: "Summer",
        example: "夏は　暑いです。"
      },
      {
        japanese: "秋（あき）",
        kana: "あき",
        vietnamese: "mùa thu",
        english: "Autumn, fall",
        example: ""
      },
      {
        japanese: "冬（ふゆ）",
        kana: "ふゆ",
        vietnamese: "mùa đông",
        english: "Winter",
        example: "冬は　寒いです。"
      },
      {
        japanese: "天気（てんき）",
        kana: "てんき",
        vietnamese: "thời tiết",
        english: "Weather",
        example: "きょうは　いい　天気ですね。"
      },
      {
        japanese: "雨（あめ）",
        kana: "あめ",
        vietnamese: "mưa",
        english: "Rain",
        example: "きょうは　雨です。"
      },
      {
        japanese: "雪（ゆき）",
        kana: "ゆき",
        vietnamese: "tuyết",
        english: "Snow",
        example: "北海道は　雪が　多いです。"
      },
      {
        japanese: "曇り（くもり）",
        kana: "くもり",
        vietnamese: "trời nhiều mây",
        english: "Cloudy",
        example: ""
      },
      {
        japanese: "風（かぜ）",
        kana: "かぜ",
        vietnamese: "gió",
        english: "Wind",
        example: ""
      },
      {
        japanese: "空（そら）",
        kana: "そら",
        vietnamese: "bầu trời",
        english: "Sky",
        example: ""
      },
      {
        japanese: "海（うみ）",
        kana: "うみ",
        vietnamese: "biển",
        english: "Sea, ocean",
        example: ""
      },
      {
        japanese: "世界（せかい）",
        kana: "せかい",
        vietnamese: "thế giới",
        english: "World",
        example: "世界で　いちばん　高い　山は　何ですか。"
      },
      {
        japanese: "〜の方（〜のほう）",
        kana: "のほう",
        vietnamese: "~ hơn (so sánh)",
        english: "~ (comparison marker)",
        example: "大阪より　東京の　方が　大きいです。"
      },
      {
        japanese: "ずっと",
        kana: "ずっと",
        vietnamese: "hơn nhiều, ~ hơn hẳn",
        english: "By far, much more",
        example: "北海道は　東京より　ずっと　寒いです。"
      },
      {
        japanese: "一番（いちばん）",
        kana: "いちばん",
        vietnamese: "nhất, số một",
        english: "The most, number one",
        example: "日本で　いちばん　高い　山は　富士山です。"
      },
      {
        japanese: "もっと",
        kana: "もっと",
        vietnamese: "hơn nữa",
        english: "More",
        example: ""
      },
      {
        japanese: "どちら",
        kana: "どちら",
        vietnamese: "cái nào (trong hai)",
        english: "Which (of two)",
        example: "肉と　魚と　どちらが　好きですか。"
      },
      {
        japanese: "どれ",
        kana: "どれ",
        vietnamese: "cái nào (trong ba trở lên)",
        english: "Which (of three or more)",
        example: ""
      }
    ],
    grammar: [
      {
        pattern: "〜ました / 〜ませんでした",
        vietnamese: "~ đã ~ / ~ đã không ~",
        english: "Past tense (polite form)",
        explanation: "Thì quá khứ của động từ lịch sự. Chuyển ます thành ました (khẳng định) hoặc ませんでした (phủ định).",
        examples: [
          {
            japanese: "昨日　映画を　見ました。",
            vietnamese: "Hôm qua tôi đã xem phim.",
            english: "I watched a movie yesterday."
          },
          {
            japanese: "朝ごはんを　食べませんでした。",
            vietnamese: "Tôi đã không ăn sáng.",
            english: "I didn't eat breakfast."
          },
          {
            japanese: "先週　京都に　行きました。",
            vietnamese: "Tuần trước tôi đã đi Kyoto.",
            english: "I went to Kyoto last week."
          }
        ]
      },
      {
        pattern: "い形容詞の過去形（〜かったです / 〜くなかったです）",
        vietnamese: "Thì quá khứ của tính từ đuôi い",
        english: "Past tense of い-adjectives",
        explanation: "Bỏ い cuối, thêm かったです (khẳng định) hoặc くなかったです (phủ định). VD: 暑い → 暑かったです / 暑くなかったです.",
        examples: [
          {
            japanese: "昨日は　暑かったです。",
            vietnamese: "Hôm qua trời nóng.",
            english: "It was hot yesterday."
          },
          {
            japanese: "試験は　難しくなかったです。",
            vietnamese: "Kỳ thi đã không khó.",
            english: "The exam was not difficult."
          },
          {
            japanese: "映画は　面白かったです。",
            vietnamese: "Phim đã thú vị.",
            english: "The movie was interesting."
          }
        ]
      },
      {
        pattern: "な形容詞の過去形（〜でした / 〜じゃありませんでした）",
        vietnamese: "Thì quá khứ của tính từ đuôi な",
        english: "Past tense of な-adjectives",
        explanation: "Chuyển です thành でした (khẳng định) hoặc じゃありませんでした (phủ định). VD: 静かです → 静かでした / 静かじゃありませんでした.",
        examples: [
          {
            japanese: "部屋は　静かでした。",
            vietnamese: "Phòng đã yên tĩnh.",
            english: "The room was quiet."
          },
          {
            japanese: "先生は　親切でした。",
            vietnamese: "Thầy giáo đã tử tế.",
            english: "The teacher was kind."
          },
          {
            japanese: "昨日は　暇じゃありませんでした。",
            vietnamese: "Hôm qua tôi đã không rảnh.",
            english: "I was not free yesterday."
          }
        ]
      },
      {
        pattern: "どちらが〜ですか / どれが〜ですか",
        vietnamese: "Cái nào ~ ? (so sánh)",
        english: "Which one ~ ? (comparison)",
        explanation: "どちらが dùng khi chọn giữa 2 vật, どれが dùng khi chọn trong 3+ vật. Trả lời bằng A の ほうが 〜です (A hơn).",
        examples: [
          {
            japanese: "肉と　魚と　どちらが　好きですか。",
            vietnamese: "Bạn thích thịt hay cá hơn?",
            english: "Which do you like better, meat or fish?"
          },
          {
            japanese: "この　3つの　中で　どれが　一番　いいですか。",
            vietnamese: "Trong 3 cái này, cái nào tốt nhất?",
            english: "Which is the best among these three?"
          },
          {
            japanese: "コーヒーの　ほうが　好きです。",
            vietnamese: "Tôi thích cà phê hơn.",
            english: "I like coffee better."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 13 — Desires / Ordering
  // ═══════════════════════════════════════════
  {
    lessonNumber: 13,
    title: "ほしい・〜たい (Mong muốn, gọi món)",
    vocabulary: [
      {
        japanese: "欲しい（ほしい）",
        kana: "ほしい",
        vietnamese: "muốn (đồ vật)",
        english: "To want (something)",
        example: "新しい　パソコンが　欲しいです。"
      },
      {
        japanese: "〜たいです",
        kana: "たいです",
        vietnamese: "muốn (làm gì)",
        english: "Want to (do something)",
        example: "日本へ　行きたいです。"
      },
      {
        japanese: "遊びます（あそびます）",
        kana: "あそびます",
        vietnamese: "chơi",
        english: "To play, to enjoy oneself",
        example: "公園で　遊びます。"
      },
      {
        japanese: "泳ぎます（およぎます）",
        kana: "およぎます",
        vietnamese: "bơi",
        english: "To swim",
        example: "プールで　泳ぎたいです。"
      },
      {
        japanese: "迎えに行きます（むかえにいきます）",
        kana: "むかえにいきます",
        vietnamese: "đi đón",
        english: "To go to pick up (someone)",
        example: "空港へ　迎えに行きます。"
      },
      {
        japanese: "疲れました（つかれました）",
        kana: "つかれました",
        vietnamese: "mệt rồi",
        english: "I'm tired",
        example: "きょうは　とても　疲れました。"
      },
      {
        japanese: "のど",
        kana: "のど",
        vietnamese: "cổ họng",
        english: "Throat",
        example: "のどが　渇きました。"
      },
      {
        japanese: "お腹（おなか）",
        kana: "おなか",
        vietnamese: "bụng",
        english: "Stomach",
        example: "お腹が　すきました。"
      },
      {
        japanese: "子供（こども）",
        kana: "こども",
        vietnamese: "trẻ em, con cái",
        english: "Child, children",
        example: ""
      },
      {
        japanese: "店（みせ）",
        kana: "みせ",
        vietnamese: "cửa hàng, tiệm",
        english: "Shop, store",
        example: ""
      },
      {
        japanese: "レストラン",
        kana: "レストラン",
        vietnamese: "nhà hàng",
        english: "Restaurant",
        example: "あの　レストランで　食べたいです。"
      },
      {
        japanese: "プール",
        kana: "プール",
        vietnamese: "bể bơi",
        english: "Swimming pool",
        example: ""
      },
      {
        japanese: "川（かわ）",
        kana: "かわ",
        vietnamese: "sông",
        english: "River",
        example: ""
      },
      {
        japanese: "経済（けいざい）",
        kana: "けいざい",
        vietnamese: "kinh tế",
        english: "Economy, economics",
        example: ""
      },
      {
        japanese: "美術（びじゅつ）",
        kana: "びじゅつ",
        vietnamese: "mỹ thuật",
        english: "Art, fine arts",
        example: "美術の　本が　欲しいです。"
      },
      {
        japanese: "釣り（つり）",
        kana: "つり",
        vietnamese: "câu cá",
        english: "Fishing",
        example: "釣りに　行きたいです。"
      },
      {
        japanese: "スキー",
        kana: "スキー",
        vietnamese: "trượt tuyết",
        english: "Skiing",
        example: "冬は　スキーに　行きたいです。"
      },
      {
        japanese: "会議（かいぎ）",
        kana: "かいぎ",
        vietnamese: "cuộc họp",
        english: "Meeting, conference",
        example: "あした　会議が　あります。"
      },
      {
        japanese: "登録（とうろく）",
        kana: "とうろく",
        vietnamese: "đăng ký",
        english: "Registration",
        example: ""
      },
      {
        japanese: "週末（しゅうまつ）",
        kana: "しゅうまつ",
        vietnamese: "cuối tuần",
        english: "Weekend",
        example: "週末　何を　したいですか。"
      },
      {
        japanese: "〜ごろ",
        kana: "ごろ",
        vietnamese: "khoảng ~ (thời gian)",
        english: "About, around (time)",
        example: "12時ごろ　昼ごはんを　食べます。"
      },
      {
        japanese: "何か（なにか）",
        kana: "なにか",
        vietnamese: "cái gì đó",
        english: "Something",
        example: "何か　食べたいです。"
      },
      {
        japanese: "どこか",
        kana: "どこか",
        vietnamese: "nơi nào đó",
        english: "Somewhere",
        example: "週末　どこか　行きたいですか。"
      },
      {
        japanese: "別々に（べつべつに）",
        kana: "べつべつに",
        vietnamese: "riêng, tách biệt",
        english: "Separately",
        example: "お会計は　別々に　お願いします。"
      },
      {
        japanese: "いかがですか",
        kana: "いかがですか",
        vietnamese: "thế nào ạ? (lịch sự)",
        english: "How about? (polite)",
        example: "コーヒーは　いかがですか。"
      },
      {
        japanese: "ください",
        kana: "ください",
        vietnamese: "cho tôi, xin hãy",
        english: "Please give me",
        example: "これを　ください。"
      },
      {
        japanese: "じゃ",
        kana: "じゃ",
        vietnamese: "vậy thì",
        english: "Well then",
        example: "じゃ、コーヒーを　ください。"
      },
      {
        japanese: "注文（ちゅうもん）",
        kana: "ちゅうもん",
        vietnamese: "gọi món, đặt hàng",
        english: "Order",
        example: "ご注文は？"
      }
    ],
    grammar: [
      {
        pattern: "〜たいです",
        vietnamese: "Muốn ~",
        english: "Want to ~",
        explanation: "Diễn tả mong muốn của bản thân. Động từ ます-form bỏ ます, thêm たいです. Phủ định: たくないです. VD: 行きます → 行きたいです。",
        examples: [
          {
            japanese: "日本に　行きたいです。",
            vietnamese: "Tôi muốn đi Nhật.",
            english: "I want to go to Japan."
          },
          {
            japanese: "寿司が　食べたいです。",
            vietnamese: "Tôi muốn ăn sushi.",
            english: "I want to eat sushi."
          },
          {
            japanese: "今日は　何も　したくないです。",
            vietnamese: "Hôm nay tôi không muốn làm gì cả.",
            english: "I don't want to do anything today."
          }
        ]
      },
      {
        pattern: "〜に　行きます / 来ます / 帰ります",
        vietnamese: "Đi/Đến/Về để ~ (mục đích)",
        english: "Go/Come/Return to do ~",
        explanation: "Diễn tả mục đích của việc di chuyển. Dùng danh từ + に hoặc động từ ます-form (bỏ ます) + に. VD: 勉強します → 勉強しに、買います → 買いに。",
        examples: [
          {
            japanese: "映画を　見に　行きます。",
            vietnamese: "Tôi đi xem phim.",
            english: "I go to watch a movie."
          },
          {
            japanese: "日本へ　日本語を　勉強しに　来ました。",
            vietnamese: "Tôi đến Nhật để học tiếng Nhật.",
            english: "I came to Japan to study Japanese."
          },
          {
            japanese: "昼ごはんを　食べに　帰ります。",
            vietnamese: "Tôi về nhà để ăn trưa.",
            english: "I return home to eat lunch."
          }
        ]
      },
      {
        pattern: "どこかに / 何か / だれか",
        vietnamese: "Đâu đó, cái gì đó, ai đó",
        english: "Somewhere, something, someone",
        explanation: "Thêm か sau từ để hỏi (どこ, 何, だれ) để tạo nghĩa 'nào đó'. Dùng trong câu khẳng định và nghi vấn. Phủ định: どこにも (đâu cũng không).",
        examples: [
          {
            japanese: "休みに　どこかに　行きますか。",
            vietnamese: "Kỳ nghỉ bạn có đi đâu đó không?",
            english: "Will you go somewhere during the holiday?"
          },
          {
            japanese: "何か　食べたいです。",
            vietnamese: "Tôi muốn ăn gì đó.",
            english: "I want to eat something."
          },
          {
            japanese: "だれかに　会いましたか。",
            vietnamese: "Bạn đã gặp ai đó chưa?",
            english: "Did you meet someone?"
          }
        ]
      },
      {
        pattern: "ご〜",
        vietnamese: "Tiền tố lịch sự",
        english: "Honorific prefix",
        explanation: "Thêm ご trước danh từ Sino-Japanese (từ Hán) để tỏ lịch sự. VD: ご家族 (gia đình quý vị), ご注文 (đơn đặt hàng của quý khách).",
        examples: [
          {
            japanese: "ご家族は　何人ですか。",
            vietnamese: "Gia đình quý vị có mấy người?",
            english: "How many people are in your family?"
          },
          {
            japanese: "ご注文は？",
            vietnamese: "Quý khách gọi gì ạ?",
            english: "What would you like to order?"
          },
          {
            japanese: "ご住所を　お願いします。",
            vietnamese: "Xin cho biết địa chỉ của quý vị.",
            english: "May I have your address, please?"
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 14 — て-form (Requests / Ongoing actions)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 14,
    title: "て形 (Thể て — yêu cầu, hành động đang diễn ra)",
    vocabulary: [
      {
        japanese: "つけます",
        kana: "つけます",
        vietnamese: "bật (đèn, máy)",
        english: "To turn on",
        example: "電気をつけてください。"
      },
      {
        japanese: "消（け）します",
        kana: "けします",
        vietnamese: "tắt (đèn, máy)",
        english: "To turn off / to erase",
        example: "エアコンを消してください。"
      },
      {
        japanese: "開（あ）けます",
        kana: "あけます",
        vietnamese: "mở (cửa, cửa sổ)",
        english: "To open",
        example: "窓を開けてください。"
      },
      {
        japanese: "閉（し）めます",
        kana: "しめます",
        vietnamese: "đóng (cửa, cửa sổ)",
        english: "To close",
        example: "ドアを閉めてください。"
      },
      {
        japanese: "急（いそ）ぎます",
        kana: "いそぎます",
        vietnamese: "vội, nhanh lên",
        english: "To hurry",
        example: "急いでください。"
      },
      {
        japanese: "待（ま）ちます",
        kana: "まちます",
        vietnamese: "chờ, đợi",
        english: "To wait",
        example: "ちょっと待ってください。"
      },
      {
        japanese: "止（と）めます",
        kana: "とめます",
        vietnamese: "dừng, đỗ (xe)",
        english: "To stop / to park",
        example: "ここに車を止めてください。"
      },
      {
        japanese: "持（も）ちます",
        kana: "もちます",
        vietnamese: "cầm, mang",
        english: "To hold / to carry",
        example: "この荷物を持ってください。"
      },
      {
        japanese: "取（と）ります",
        kana: "とります",
        vietnamese: "lấy",
        english: "To take / to pick up",
        example: "塩を取ってください。"
      },
      {
        japanese: "手伝（てつだ）います",
        kana: "てつだいます",
        vietnamese: "giúp đỡ",
        english: "To help / to assist",
        example: "引っ越しを手伝ってください。"
      },
      {
        japanese: "呼（よ）びます",
        kana: "よびます",
        vietnamese: "gọi",
        english: "To call",
        example: "タクシーを呼んでください。"
      },
      {
        japanese: "話（はな）します",
        kana: "はなします",
        vietnamese: "nói chuyện",
        english: "To speak / to talk",
        example: "ゆっくり話してください。"
      },
      {
        japanese: "使（つか）います",
        kana: "つかいます",
        vietnamese: "sử dụng",
        english: "To use",
        example: "このパソコンを使ってもいいですか。"
      },
      {
        japanese: "置（お）きます",
        kana: "おきます",
        vietnamese: "đặt, để",
        english: "To put / to place",
        example: "ここに荷物を置いてください。"
      },
      {
        japanese: "作（つく）ります",
        kana: "つくります",
        vietnamese: "làm, chế tạo",
        english: "To make / to create",
        example: "晩ごはんを作っています。"
      },
      {
        japanese: "売（う）ります",
        kana: "うります",
        vietnamese: "bán",
        english: "To sell",
        example: "あの店でパンを売っています。"
      },
      {
        japanese: "知（し）ります",
        kana: "しります",
        vietnamese: "biết",
        english: "To know",
        example: "ミラーさんの電話番号を知っていますか。"
      },
      {
        japanese: "住（す）みます",
        kana: "すみます",
        vietnamese: "sống, cư trú",
        english: "To live / to reside",
        example: "東京に住んでいます。"
      },
      {
        japanese: "研究（けんきゅう）します",
        kana: "けんきゅうします",
        vietnamese: "nghiên cứu",
        english: "To research",
        example: "大学で日本語を研究しています。"
      },
      {
        japanese: "電気（でんき）",
        kana: "でんき",
        vietnamese: "đèn, điện",
        english: "Light / electricity",
        example: "電気をつけてください。"
      },
      {
        japanese: "名前（なまえ）",
        kana: "なまえ",
        vietnamese: "tên",
        english: "Name",
        example: "ここに名前を書いてください。"
      },
      {
        japanese: "住所（じゅうしょ）",
        kana: "じゅうしょ",
        vietnamese: "địa chỉ",
        english: "Address",
        example: "住所と名前を書いてください。"
      },
      {
        japanese: "地図（ちず）",
        kana: "ちず",
        vietnamese: "bản đồ",
        english: "Map",
        example: "地図を見てください。"
      },
      {
        japanese: "塩（しお）",
        kana: "しお",
        vietnamese: "muối",
        english: "Salt",
        example: "塩を取ってください。"
      },
      {
        japanese: "砂糖（さとう）",
        kana: "さとう",
        vietnamese: "đường (gia vị)",
        english: "Sugar",
        example: "砂糖を入れてください。"
      },
      {
        japanese: "問題（もんだい）",
        kana: "もんだい",
        vietnamese: "vấn đề, câu hỏi",
        english: "Problem / question",
        example: "問題の答えを書いてください。"
      },
      {
        japanese: "答（こた）え",
        kana: "こたえ",
        vietnamese: "câu trả lời",
        english: "Answer",
        example: "答えはまだわかりません。"
      },
      {
        japanese: "真（ま）っすぐ",
        kana: "まっすぐ",
        vietnamese: "thẳng",
        english: "Straight",
        example: "真っすぐ行ってください。"
      },
      {
        japanese: "ゆっくり",
        kana: "ゆっくり",
        vietnamese: "chậm rãi, từ từ",
        english: "Slowly",
        example: "ゆっくり話してください。"
      },
      {
        japanese: "すぐ",
        kana: "すぐ",
        vietnamese: "ngay lập tức",
        english: "Immediately / right away",
        example: "すぐ来てください。"
      },
      {
        japanese: "また",
        kana: "また",
        vietnamese: "lại, lần nữa",
        english: "Again",
        example: "また来てください。"
      },
      {
        japanese: "あとで",
        kana: "あとで",
        vietnamese: "sau, lát nữa",
        english: "Later / afterwards",
        example: "あとで電話してください。"
      },
      {
        japanese: "もう少（すこ）し",
        kana: "もうすこし",
        vietnamese: "thêm một chút nữa",
        english: "A little more",
        example: "もう少し待ってください。"
      },
      {
        japanese: "すみませんが",
        kana: "すみませんが",
        vietnamese: "xin lỗi nhưng... (mở đầu nhờ vả)",
        english: "Excuse me, but...",
        example: "すみませんが、写真を撮ってください。"
      }
    ],
    grammar: [
      {
        pattern: "〜てください",
        vietnamese: "Làm ơn ~, hãy ~",
        english: "Please do ~",
        explanation: "Dùng để nhờ vả hoặc yêu cầu lịch sự. Động từ て-form + ください. VD: 見ます → 見てください, 食べます → 食べてください。",
        examples: [
          {
            japanese: "ちょっと　待ってください。",
            vietnamese: "Hãy đợi một chút.",
            english: "Please wait a moment."
          },
          {
            japanese: "窓を　開けてください。",
            vietnamese: "Làm ơn mở cửa sổ.",
            english: "Please open the window."
          },
          {
            japanese: "ここに　名前を　書いてください。",
            vietnamese: "Hãy viết tên vào đây.",
            english: "Please write your name here."
          }
        ]
      },
      {
        pattern: "〜ましょう / 〜ませんか",
        vietnamese: "Hãy cùng ~, ~ nhé / ~ không? (mời)",
        english: "Let's ~ / Won't you ~ ?",
        explanation: "ましょう: rủ rê, đề nghị cùng làm. ませんか: mời mọc lịch sự hơn. VD: 行きます → 行きましょう / 行きませんか。",
        examples: [
          {
            japanese: "一緒に　昼ごはんを　食べましょう。",
            vietnamese: "Hãy cùng ăn trưa nhé.",
            english: "Let's eat lunch together."
          },
          {
            japanese: "映画を　見に　行きませんか。",
            vietnamese: "Chúng ta đi xem phim không?",
            english: "Won't you go to see a movie?"
          },
          {
            japanese: "ちょっと　休みましょう。",
            vietnamese: "Nghỉ một chút nhé.",
            english: "Let's take a break."
          }
        ]
      },
      {
        pattern: "て形の作り方",
        vietnamese: "Cách chia động từ thành thể て",
        english: "How to form て-form",
        explanation: "Nhóm I: 〜って、〜いて、〜いで、〜して、〜んで. Nhóm II: bỏ る thêm て. Nhóm III: します→して, 来ます→来て. VD: 買う→買って, 食べる→食べて。",
        examples: [
          {
            japanese: "買います　→　買って",
            vietnamese: "mua → mua (て)",
            english: "buy → buying (te-form)"
          },
          {
            japanese: "食べます　→　食べて",
            vietnamese: "ăn → ăn (て)",
            english: "eat → eating (te-form)"
          },
          {
            japanese: "来ます　→　来（き）て",
            vietnamese: "đến → đến (て)",
            english: "come → coming (te-form)"
          }
        ]
      },
      {
        pattern: "〜てから、〜",
        vietnamese: "Sau khi ~, thì ~",
        english: "After doing ~, ~",
        explanation: "Diễn tả hành động xảy ra theo thứ tự. Hành động đầu tiên dùng て-form + から, sau đó là hành động thứ hai.",
        examples: [
          {
            japanese: "宿題を　してから、テレビを　見ます。",
            vietnamese: "Sau khi làm bài tập, tôi xem TV.",
            english: "After doing homework, I watch TV."
          },
          {
            japanese: "手を　洗ってから、ご飯を　食べます。",
            vietnamese: "Sau khi rửa tay, tôi ăn cơm.",
            english: "After washing hands, I eat."
          },
          {
            japanese: "シャワーを　浴びてから、寝ます。",
            vietnamese: "Sau khi tắm, tôi đi ngủ.",
            english: "After taking a shower, I go to bed."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 15 — Permission / Prohibition / Status
  // ═══════════════════════════════════════════
  {
    lessonNumber: 15,
    title: "てもいいです (Xin phép, cấm đoán, trạng thái)",
    vocabulary: [
      {
        japanese: "座（すわ）ります",
        kana: "すわります",
        vietnamese: "ngồi",
        english: "To sit down",
        example: "ここに座ってもいいですか。"
      },
      {
        japanese: "立（た）ちます",
        kana: "たちます",
        vietnamese: "đứng",
        english: "To stand up",
        example: "立ってください。"
      },
      {
        japanese: "入（はい）ります",
        kana: "はいります",
        vietnamese: "vào",
        english: "To enter",
        example: "この部屋に入ってはいけません。"
      },
      {
        japanese: "出（で）ます",
        kana: "でます",
        vietnamese: "ra ngoài",
        english: "To go out / to leave",
        example: "教室を出てもいいですか。"
      },
      {
        japanese: "やめます",
        kana: "やめます",
        vietnamese: "bỏ, nghỉ (việc), thôi",
        english: "To quit / to stop",
        example: "タバコをやめてください。"
      },
      {
        japanese: "押（お）します",
        kana: "おします",
        vietnamese: "nhấn, đẩy",
        english: "To push / to press",
        example: "このボタンを押してください。"
      },
      {
        japanese: "若（わか）い",
        kana: "わかい",
        vietnamese: "trẻ",
        english: "Young",
        example: "あの先生は若いです。"
      },
      {
        japanese: "長（なが）い",
        kana: "ながい",
        vietnamese: "dài",
        english: "Long",
        example: "髪が長いです。"
      },
      {
        japanese: "短（みじか）い",
        kana: "みじかい",
        vietnamese: "ngắn",
        english: "Short (length)",
        example: "髪が短いです。"
      },
      {
        japanese: "明（あか）るい",
        kana: "あかるい",
        vietnamese: "sáng",
        english: "Bright",
        example: "この部屋は明るいです。"
      },
      {
        japanese: "暗（くら）い",
        kana: "くらい",
        vietnamese: "tối",
        english: "Dark",
        example: "部屋が暗いですから、電気をつけてください。"
      },
      {
        japanese: "背（せ）が高（たか）い",
        kana: "せがたかい",
        vietnamese: "cao (người)",
        english: "Tall (person)",
        example: "ミラーさんは背が高いです。"
      },
      {
        japanese: "背（せ）が低（ひく）い",
        kana: "せがひくい",
        vietnamese: "thấp (người)",
        english: "Short (person)",
        example: "弟は背が低いです。"
      },
      {
        japanese: "太（ふと）い",
        kana: "ふとい",
        vietnamese: "mập, béo; to, dày",
        english: "Fat / thick",
        example: ""
      },
      {
        japanese: "頭（あたま）がいい",
        kana: "あたまがいい",
        vietnamese: "thông minh",
        english: "Smart / intelligent",
        example: "あの学生は頭がいいです。"
      },
      {
        japanese: "体（からだ）",
        kana: "からだ",
        vietnamese: "cơ thể",
        english: "Body",
        example: "体に気をつけてください。"
      },
      {
        japanese: "頭（あたま）",
        kana: "あたま",
        vietnamese: "đầu",
        english: "Head",
        example: "頭が痛いです。"
      },
      {
        japanese: "髪（かみ）",
        kana: "かみ",
        vietnamese: "tóc",
        english: "Hair",
        example: "髪が長いです。"
      },
      {
        japanese: "顔（かお）",
        kana: "かお",
        vietnamese: "mặt, khuôn mặt",
        english: "Face",
        example: "顔を洗います。"
      },
      {
        japanese: "目（め）",
        kana: "め",
        vietnamese: "mắt",
        english: "Eye",
        example: "目が大きいです。"
      },
      {
        japanese: "耳（みみ）",
        kana: "みみ",
        vietnamese: "tai",
        english: "Ear",
        example: "耳が痛いです。"
      },
      {
        japanese: "口（くち）",
        kana: "くち",
        vietnamese: "miệng",
        english: "Mouth",
        example: "口を開けてください。"
      },
      {
        japanese: "歯（は）",
        kana: "は",
        vietnamese: "răng",
        english: "Tooth / teeth",
        example: "毎日歯を磨きます。"
      },
      {
        japanese: "お腹（おなか）",
        kana: "おなか",
        vietnamese: "bụng",
        english: "Stomach / belly",
        example: "お腹が痛いです。"
      },
      {
        japanese: "足（あし）",
        kana: "あし",
        vietnamese: "chân",
        english: "Foot / leg",
        example: "足が痛いです。"
      },
      {
        japanese: "サービス",
        kana: "サービス",
        vietnamese: "dịch vụ, miễn phí",
        english: "Service / free of charge",
        example: "このコーヒーはサービスです。"
      },
      {
        japanese: "ジョギング",
        kana: "ジョギング",
        vietnamese: "chạy bộ",
        english: "Jogging",
        example: "毎朝ジョギングをしています。"
      },
      {
        japanese: "シャワー",
        kana: "シャワー",
        vietnamese: "vòi sen, tắm vòi sen",
        english: "Shower",
        example: "シャワーを浴びます。"
      },
      {
        japanese: "緑（みどり）",
        kana: "みどり",
        vietnamese: "màu xanh lá cây",
        english: "Green",
        example: "緑のかばんはミラーさんのです。"
      },
      {
        japanese: "お寺（おてら）",
        kana: "おてら",
        vietnamese: "chùa (Phật giáo)",
        english: "Buddhist temple",
        example: "京都でお寺を見ました。"
      },
      {
        japanese: "神社（じんじゃ）",
        kana: "じんじゃ",
        vietnamese: "đền thần (Thần đạo)",
        english: "Shinto shrine",
        example: "お正月に神社へ行きます。"
      },
      {
        japanese: "留守（るす）",
        kana: "るす",
        vietnamese: "vắng nhà",
        english: "Absence from home",
        example: "田中さんは留守です。"
      }
    ],
    grammar: [
      {
        pattern: "〜てもいいです",
        vietnamese: "~ cũng được, có thể ~ (xin phép)",
        english: "May I ~, It's okay to ~",
        explanation: "Xin phép hoặc cho phép làm gì đó. Động từ て-form + もいいです. Phủ định: てはいけません (không được ~).",
        examples: [
          {
            japanese: "ここで　写真を　撮ってもいいですか。",
            vietnamese: "Chụp ảnh ở đây có được không?",
            english: "May I take photos here?"
          },
          {
            japanese: "はい、いいですよ。",
            vietnamese: "Vâng, được ạ.",
            english: "Yes, you may."
          },
          {
            japanese: "辞書を　使ってもいいです。",
            vietnamese: "Bạn có thể dùng từ điển.",
            english: "You may use a dictionary."
          }
        ]
      },
      {
        pattern: "〜てはいけません",
        vietnamese: "Không được ~, cấm ~",
        english: "Must not ~, It's not allowed to ~",
        explanation: "Cấm đoán, không được phép làm gì đó. Động từ て-form + はいけません. Có thể viết tắt: ちゃいけません (thân mật).",
        examples: [
          {
            japanese: "ここで　たばこを　吸ってはいけません。",
            vietnamese: "Không được hút thuốc ở đây.",
            english: "You must not smoke here."
          },
          {
            japanese: "遅刻してはいけません。",
            vietnamese: "Không được đến muộn.",
            english: "You must not be late."
          },
          {
            japanese: "試験中に　話してはいけません。",
            vietnamese: "Trong khi thi không được nói chuyện.",
            english: "You must not talk during the exam."
          }
        ]
      },
      {
        pattern: "〜ています",
        vietnamese: "Đang ~, đã ~ (trạng thái hiện tại)",
        english: "Be doing ~, have done ~ (progressive/resultative)",
        explanation: "Diễn tả hành động đang diễn ra hoặc trạng thái kết quả. Động từ て-form + います. VD: 読んでいます (đang đọc), 知っています (đã biết).",
        examples: [
          {
            japanese: "今　何を　していますか。",
            vietnamese: "Bây giờ bạn đang làm gì?",
            english: "What are you doing now?"
          },
          {
            japanese: "本を　読んでいます。",
            vietnamese: "Tôi đang đọc sách.",
            english: "I am reading a book."
          },
          {
            japanese: "田中さんを　知っていますか。",
            vietnamese: "Bạn có biết anh Tanaka không?",
            english: "Do you know Mr. Tanaka?"
          }
        ]
      },
      {
        pattern: "〜ています（状態）",
        vietnamese: "Trạng thái đã ~ (kết quả còn lại)",
        english: "Resultative state (completed action with lasting result)",
        explanation: "Một số động từ dùng ています để chỉ trạng thái kết quả còn lại. VD: 結婚しています (đã kết hôn), 住んでいます (đang sống), 知っています (đã biết).",
        examples: [
          {
            japanese: "私は　結婚しています。",
            vietnamese: "Tôi đã kết hôn.",
            english: "I am married."
          },
          {
            japanese: "東京に　住んでいます。",
            vietnamese: "Tôi sống ở Tokyo.",
            english: "I live in Tokyo."
          },
          {
            japanese: "この　漢字を　知っていますか。",
            vietnamese: "Bạn có biết chữ Hán này không?",
            english: "Do you know this kanji?"
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 16 — Connecting Verbs (Daily life / Methods)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 16,
    title: "動詞の接続 (Nối động từ — sinh hoạt hàng ngày, cách làm)",
    vocabulary: [
      {
        japanese: "乗（の）ります",
        kana: "のります",
        vietnamese: "lên (tàu, xe)",
        english: "To ride / to get on",
        example: "バスに乗ります。"
      },
      {
        japanese: "降（お）ります",
        kana: "おります",
        vietnamese: "xuống (tàu, xe)",
        english: "To get off",
        example: "次の駅で降ります。"
      },
      {
        japanese: "乗（の）り換（か）えます",
        kana: "のりかえます",
        vietnamese: "chuyển tàu/xe",
        english: "To transfer / to change (trains)",
        example: "東京駅で乗り換えてください。"
      },
      {
        japanese: "浴（あ）びます",
        kana: "あびます",
        vietnamese: "tắm (vòi sen)",
        english: "To take (a shower)",
        example: "シャワーを浴びて、朝ごはんを食べます。"
      },
      {
        japanese: "入（い）れます",
        kana: "いれます",
        vietnamese: "cho vào, bỏ vào",
        english: "To put in / to insert",
        example: "お金を入れて、ボタンを押してください。"
      },
      {
        japanese: "出（だ）します",
        kana: "だします",
        vietnamese: "lấy ra, rút ra, gửi",
        english: "To take out / to submit",
        example: "ATMでお金を出します。"
      },
      {
        japanese: "引（ひ）きます",
        kana: "ひきます",
        vietnamese: "kéo",
        english: "To pull",
        example: "ドアを引いてください。"
      },
      {
        japanese: "払（はら）います",
        kana: "はらいます",
        vietnamese: "trả tiền, thanh toán",
        english: "To pay",
        example: "カードで払ってもいいですか。"
      },
      {
        japanese: "返（かえ）します",
        kana: "かえします",
        vietnamese: "trả lại",
        english: "To return / to give back",
        example: "図書館に本を返します。"
      },
      {
        japanese: "届（とど）けます",
        kana: "とどけます",
        vietnamese: "chuyển đến, giao",
        english: "To deliver / to report",
        example: "荷物を届けてください。"
      },
      {
        japanese: "出（で）かけます",
        kana: "でかけます",
        vietnamese: "ra ngoài, đi ra",
        english: "To go out",
        example: "ちょっと出かけます。"
      },
      {
        japanese: "脱（ぬ）ぎます",
        kana: "ぬぎます",
        vietnamese: "cởi (giày, quần áo)",
        english: "To take off (clothes/shoes)",
        example: "靴を脱いでください。"
      },
      {
        japanese: "選（えら）びます",
        kana: "えらびます",
        vietnamese: "chọn, lựa chọn",
        english: "To choose / to select",
        example: "好きなものを選んでください。"
      },
      {
        japanese: "連（つ）れて行（い）きます",
        kana: "つれていきます",
        vietnamese: "dẫn đi (người/động vật)",
        english: "To take (someone) along",
        example: "子どもを公園に連れて行きます。"
      },
      {
        japanese: "持（も）って行（い）きます",
        kana: "もっていきます",
        vietnamese: "mang đi",
        english: "To take (something)",
        example: "傘を持って行ってください。"
      },
      {
        japanese: "持（も）って来（き）ます",
        kana: "もってきます",
        vietnamese: "mang đến",
        english: "To bring (something)",
        example: "お弁当を持って来ました。"
      },
      {
        japanese: "心配（しんぱい）します",
        kana: "しんぱいします",
        vietnamese: "lo lắng",
        english: "To worry",
        example: "心配しないでください。"
      },
      {
        japanese: "残業（ざんぎょう）します",
        kana: "ざんぎょうします",
        vietnamese: "làm thêm giờ",
        english: "To work overtime",
        example: "毎日残業して、疲れました。"
      },
      {
        japanese: "出張（しゅっちょう）します",
        kana: "しゅっちょうします",
        vietnamese: "đi công tác",
        english: "To go on a business trip",
        example: "来週大阪へ出張します。"
      },
      {
        japanese: "大丈夫（だいじょうぶ）（な）",
        kana: "だいじょうぶ",
        vietnamese: "không sao, ổn",
        english: "All right / fine / OK",
        example: "大丈夫ですか。"
      },
      {
        japanese: "薬（くすり）",
        kana: "くすり",
        vietnamese: "thuốc",
        english: "Medicine",
        example: "薬を飲んで、寝てください。"
      },
      {
        japanese: "熱（ねつ）",
        kana: "ねつ",
        vietnamese: "sốt",
        english: "Fever / temperature",
        example: "熱がありますか。"
      },
      {
        japanese: "病気（びょうき）",
        kana: "びょうき",
        vietnamese: "bệnh",
        english: "Illness / disease",
        example: "病気ですから、会社を休みます。"
      },
      {
        japanese: "風邪（かぜ）",
        kana: "かぜ",
        vietnamese: "cảm lạnh",
        english: "Cold (illness)",
        example: "風邪を引きました。"
      },
      {
        japanese: "インフルエンザ",
        kana: "インフルエンザ",
        vietnamese: "cúm",
        english: "Influenza / flu",
        example: "インフルエンザですから、学校を休みます。"
      },
      {
        japanese: "天気予報（てんきよほう）",
        kana: "てんきよほう",
        vietnamese: "dự báo thời tiết",
        english: "Weather forecast",
        example: "天気予報を見ましたか。"
      },
      {
        japanese: "映画館（えいがかん）",
        kana: "えいがかん",
        vietnamese: "rạp chiếu phim",
        english: "Movie theater",
        example: "映画館で映画を見ます。"
      },
      {
        japanese: "〜から",
        kana: "〜から",
        vietnamese: "vì ~, bởi vì ~",
        english: "Because ~",
        example: "熱がありますから、病院へ行きます。"
      },
      {
        japanese: "お大事（だいじ）に",
        kana: "おだいじに",
        vietnamese: "chúc mau khỏe",
        english: "Take care / Get well soon",
        example: "お大事に。"
      },
      {
        japanese: "どうしましたか",
        kana: "どうしましたか",
        vietnamese: "bị sao vậy? Có chuyện gì?",
        english: "What happened? / What's wrong?",
        example: "どうしましたか。…頭が痛いです。"
      }
    ],
    grammar: [
      {
        pattern: "〜て、〜て、〜",
        vietnamese: "~, ~, ~ (nối động từ)",
        english: "~ and ~ and ~ (connecting verbs)",
        explanation: "Nối nhiều động từ theo thứ tự. Các động từ trước dùng て-form, động từ cuối cùng chia theo thời gian. VD: 起きて、顔を洗って、朝ごはんを食べます。",
        examples: [
          {
            japanese: "朝　起きて、顔を　洗って、朝ごはんを　食べます。",
            vietnamese: "Sáng tôi dậy, rửa mặt, và ăn sáng.",
            english: "In the morning, I get up, wash my face, and eat breakfast."
          },
          {
            japanese: "京都へ　行って、お寺を　見て、帰りました。",
            vietnamese: "Tôi đi Kyoto, xem chùa, và về.",
            english: "I went to Kyoto, saw temples, and came back."
          },
          {
            japanese: "電車に　乗って、新宿で　降ります。",
            vietnamese: "Tôi đi tàu và xuống ở Shinjuku.",
            english: "I take the train and get off at Shinjuku."
          }
        ]
      },
      {
        pattern: "〜てから、〜",
        vietnamese: "Sau khi ~, thì ~",
        english: "After doing ~, ~",
        explanation: "Diễn tả hành động theo thứ tự rõ ràng. Hành động thứ nhất dùng て-form + から, sau đó là hành động thứ hai.",
        examples: [
          {
            japanese: "宿題を　してから、遊びます。",
            vietnamese: "Sau khi làm bài tập, tôi chơi.",
            english: "After doing homework, I play."
          },
          {
            japanese: "昼ごはんを　食べてから、昼寝を　します。",
            vietnamese: "Sau khi ăn trưa, tôi ngủ trưa.",
            english: "After eating lunch, I take a nap."
          },
          {
            japanese: "手を　洗ってから、食べてください。",
            vietnamese: "Sau khi rửa tay, hãy ăn.",
            english: "Please eat after washing your hands."
          }
        ]
      },
      {
        pattern: "〜から",
        vietnamese: "Vì ~, bởi vì ~ (lý do)",
        english: "Because ~, since ~",
        explanation: "Diễn tả lý do. Câu lý do + から, câu kết quả. Dùng với cả động từ/tính từ/danh từ. Câu lý do giữ nguyên dạng lịch sự hoặc thường.",
        examples: [
          {
            japanese: "雨が　降りますから、出かけません。",
            vietnamese: "Vì trời mưa nên tôi không ra ngoài.",
            english: "Because it's raining, I won't go out."
          },
          {
            japanese: "安いですから、これを　買います。",
            vietnamese: "Vì rẻ nên tôi mua cái này.",
            english: "Because it's cheap, I'll buy this."
          },
          {
            japanese: "時間が　ありませんから、タクシーで　行きます。",
            vietnamese: "Vì không có thời gian nên tôi đi taxi.",
            english: "Because I don't have time, I'll go by taxi."
          }
        ]
      },
      {
        pattern: "それから",
        vietnamese: "Sau đó, rồi thì",
        english: "Then, after that",
        explanation: "Từ nối diễn tả trình tự các hành động. Khác với てから (sau khi ~), それから là từ nối đứng đầu câu mới.",
        examples: [
          {
            japanese: "朝ごはんを　食べます。それから、学校へ　行きます。",
            vietnamese: "Tôi ăn sáng. Sau đó đi học.",
            english: "I eat breakfast. Then I go to school."
          },
          {
            japanese: "買い物を　しました。それから、映画を　見ました。",
            vietnamese: "Tôi đi mua sắm. Sau đó xem phim.",
            english: "I went shopping. Then I watched a movie."
          },
          {
            japanese: "シャワーを　浴びます。それから、寝ます。",
            vietnamese: "Tôi tắm. Sau đó ngủ.",
            english: "I take a shower. Then I go to bed."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 17 — ない-form (Must / Don't have to / Please don't)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 17,
    title: "ない形 (Thể ない — phải làm, không cần làm, xin đừng)",
    vocabulary: [
      {
        japanese: "覚（おぼ）えます",
        kana: "おぼえます",
        vietnamese: "nhớ, ghi nhớ",
        english: "To memorize / to remember",
        example: "漢字を覚えなければなりません。"
      },
      {
        japanese: "忘（わす）れます",
        kana: "わすれます",
        vietnamese: "quên",
        english: "To forget",
        example: "パスポートを忘れないでください。"
      },
      {
        japanese: "なくします",
        kana: "なくします",
        vietnamese: "làm mất",
        english: "To lose (something)",
        example: "財布をなくしました。"
      },
      {
        japanese: "出（だ）します",
        kana: "だします",
        vietnamese: "nộp (báo cáo)",
        english: "To submit / to turn in",
        example: "レポートを出さなければなりません。"
      },
      {
        japanese: "連絡（れんらく）します",
        kana: "れんらくします",
        vietnamese: "liên lạc",
        english: "To contact",
        example: "先生に連絡しなければなりません。"
      },
      {
        japanese: "大切（たいせつ）（な）",
        kana: "たいせつ",
        vietnamese: "quan trọng",
        english: "Important / precious",
        example: "パスポートは大切ですから、なくさないでください。"
      },
      {
        japanese: "危（あぶ）ない",
        kana: "あぶない",
        vietnamese: "nguy hiểm",
        english: "Dangerous",
        example: "ここは危ないですから、入らないでください。"
      },
      {
        japanese: "意味（いみ）",
        kana: "いみ",
        vietnamese: "ý nghĩa",
        english: "Meaning",
        example: "この言葉の意味がわかりません。"
      },
      {
        japanese: "お釣（つ）り",
        kana: "おつり",
        vietnamese: "tiền thối",
        english: "Change (money)",
        example: "お釣りをもらいましたか。"
      },
      {
        japanese: "パスポート",
        kana: "パスポート",
        vietnamese: "hộ chiếu",
        english: "Passport",
        example: "パスポートを忘れないでください。"
      },
      {
        japanese: "授業（じゅぎょう）",
        kana: "じゅぎょう",
        vietnamese: "giờ học, tiết học",
        english: "Class / lesson",
        example: "明日授業がありますか。"
      },
      {
        japanese: "試験（しけん）",
        kana: "しけん",
        vietnamese: "kỳ thi",
        english: "Exam / test",
        example: "来週試験がありますから、勉強しなければなりません。"
      },
      {
        japanese: "レポート",
        kana: "レポート",
        vietnamese: "báo cáo, bài luận",
        english: "Report",
        example: "レポートを出さなければなりません。"
      },
      {
        japanese: "締（し）め切（き）り",
        kana: "しめきり",
        vietnamese: "hạn chót",
        english: "Deadline",
        example: "レポートの締め切りはいつですか。"
      },
      {
        japanese: "約束（やくそく）",
        kana: "やくそく",
        vietnamese: "lời hứa, cuộc hẹn",
        english: "Promise / appointment",
        example: "友達と約束があります。"
      },
      {
        japanese: "予定（よてい）",
        kana: "よてい",
        vietnamese: "kế hoạch, dự định",
        english: "Plan / schedule",
        example: "週末の予定はありますか。"
      },
      {
        japanese: "必（かなら）ず",
        kana: "かならず",
        vietnamese: "nhất định, chắc chắn",
        english: "Certainly / without fail",
        example: "必ず来てください。"
      },
      {
        japanese: "いつまでに",
        kana: "いつまでに",
        vietnamese: "trước khi nào, hạn chót khi nào",
        english: "By when",
        example: "いつまでにレポートを出さなければなりませんか。"
      },
      {
        japanese: "できるだけ",
        kana: "できるだけ",
        vietnamese: "cố gắng hết sức, càng ... càng tốt",
        english: "As much as possible",
        example: "できるだけ早く来てください。"
      },
      {
        japanese: "〜なければなりません",
        kana: "〜なければなりません",
        vietnamese: "phải ~",
        english: "Must ~ / have to ~",
        example: "毎日勉強しなければなりません。"
      },
      {
        japanese: "〜なくてもいいです",
        kana: "〜なくてもいいです",
        vietnamese: "không cần ~, không phải ~",
        english: "Don't have to ~",
        example: "明日来なくてもいいです。"
      },
      {
        japanese: "〜ないでください",
        kana: "〜ないでください",
        vietnamese: "xin đừng ~",
        english: "Please don't ~",
        example: "ここで写真を撮らないでください。"
      }
    ],
    grammar: [
      {
        pattern: "ない形",
        vietnamese: "Thể ない (phủ định thường)",
        english: "ない-form (plain negative)",
        explanation: "Dạng phủ định thường của động từ. Nhóm I: 〜あない. Nhóm II: bỏ る thêm ない. Nhóm III: しない, 来（こ）ない. VD: 行く→行かない, 食べる→食べない。",
        examples: [
          {
            japanese: "行きます　→　行かない",
            vietnamese: "đi → không đi",
            english: "go → don't go"
          },
          {
            japanese: "食べます　→　食べない",
            vietnamese: "ăn → không ăn",
            english: "eat → don't eat"
          },
          {
            japanese: "します　→　しない",
            vietnamese: "làm → không làm",
            english: "do → don't do"
          }
        ]
      },
      {
        pattern: "〜ないでください",
        vietnamese: "Xin đừng ~",
        english: "Please don't ~",
        explanation: "Yêu cầu lịch sự đừng làm gì. Động từ ない-form + でください. VD: 行く → 行かないでください。",
        examples: [
          {
            japanese: "ここで　写真を　撮らないでください。",
            vietnamese: "Xin đừng chụp ảnh ở đây.",
            english: "Please don't take photos here."
          },
          {
            japanese: "遅刻しないでください。",
            vietnamese: "Xin đừng đến muộn.",
            english: "Please don't be late."
          },
          {
            japanese: "心配しないでください。",
            vietnamese: "Xin đừng lo lắng.",
            english: "Please don't worry."
          }
        ]
      },
      {
        pattern: "〜なければなりません",
        vietnamese: "Phải ~, cần phải ~",
        english: "Must ~, have to ~",
        explanation: "Diễn tả sự cần thiết, nghĩa vụ phải làm. Động từ ない-form bỏ い + ければなりません. VD: 行く → 行かなければなりません. Có thể viết tắt: なきゃ。",
        examples: [
          {
            japanese: "毎日　勉強しなければなりません。",
            vietnamese: "Tôi phải học mỗi ngày.",
            english: "I must study every day."
          },
          {
            japanese: "9時までに　会社に　行かなければなりません。",
            vietnamese: "Tôi phải đến công ty trước 9 giờ.",
            english: "I must get to the office by 9 o'clock."
          },
          {
            japanese: "薬を　飲まなければなりません。",
            vietnamese: "Tôi phải uống thuốc.",
            english: "I must take medicine."
          }
        ]
      },
      {
        pattern: "〜なくてもいいです",
        vietnamese: "Không cần ~, không phải ~",
        english: "Don't have to ~, need not ~",
        explanation: "Diễn tả không cần thiết phải làm, không có nghĩa vụ. Động từ ない-form bỏ い + くてもいいです. VD: 行く → 行かなくてもいいです。",
        examples: [
          {
            japanese: "明日は　来なくてもいいです。",
            vietnamese: "Mai không cần đến.",
            english: "You don't have to come tomorrow."
          },
          {
            japanese: "宿題を　しなくてもいいですか。",
            vietnamese: "Không làm bài tập cũng được à?",
            english: "Don't I have to do the homework?"
          },
          {
            japanese: "急がなくてもいいです。",
            vietnamese: "Không cần vội.",
            english: "You don't have to hurry."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 18 — Dictionary form + ことができます
  // ═══════════════════════════════════════════
  {
    lessonNumber: 18,
    title: "辞書形＋ことができます (Khả năng, sở thích, trước khi làm)",
    vocabulary: [
      {
        japanese: "できます",
        kana: "できます",
        vietnamese: "có thể, làm được",
        english: "Can / to be able to",
        example: "日本語を話すことができます。"
      },
      {
        japanese: "洗（あら）います",
        kana: "あらいます",
        vietnamese: "rửa, giặt",
        english: "To wash",
        example: "食事の前に手を洗います。"
      },
      {
        japanese: "弾（ひ）きます",
        kana: "ひきます",
        vietnamese: "chơi, đánh (đàn)",
        english: "To play (piano/guitar)",
        example: "ピアノを弾くことができますか。"
      },
      {
        japanese: "歌（うた）います",
        kana: "うたいます",
        vietnamese: "hát",
        english: "To sing",
        example: "日本の歌を歌うことができます。"
      },
      {
        japanese: "集（あつ）めます",
        kana: "あつめます",
        vietnamese: "thu thập, sưu tầm",
        english: "To collect / to gather",
        example: "切手を集めることが趣味です。"
      },
      {
        japanese: "捨（す）てます",
        kana: "すてます",
        vietnamese: "vứt, bỏ",
        english: "To throw away",
        example: "ここにごみを捨てないでください。"
      },
      {
        japanese: "換（か）えます",
        kana: "かえます",
        vietnamese: "đổi (tiền)",
        english: "To exchange / to change",
        example: "ドルを円に換えることができますか。"
      },
      {
        japanese: "運転（うんてん）します",
        kana: "うんてんします",
        vietnamese: "lái xe",
        english: "To drive",
        example: "車を運転することができますか。"
      },
      {
        japanese: "予約（よやく）します",
        kana: "よやくします",
        vietnamese: "đặt trước, đặt chỗ",
        english: "To reserve / to book",
        example: "ホテルを予約しました。"
      },
      {
        japanese: "見学（けんがく）します",
        kana: "けんがくします",
        vietnamese: "tham quan (nhà máy, trường học)",
        english: "To visit / to tour (a facility)",
        example: "工場を見学する前に、説明を聞きます。"
      },
      {
        japanese: "ピアノ",
        kana: "ピアノ",
        vietnamese: "đàn piano",
        english: "Piano",
        example: "ピアノを弾くことができますか。"
      },
      {
        japanese: "ギター",
        kana: "ギター",
        vietnamese: "đàn guitar",
        english: "Guitar",
        example: "ギターを弾くことが趣味です。"
      },
      {
        japanese: "チェス",
        kana: "チェス",
        vietnamese: "cờ vua",
        english: "Chess",
        example: "チェスができますか。"
      },
      {
        japanese: "歌（うた）",
        kana: "うた",
        vietnamese: "bài hát",
        english: "Song",
        example: "日本の歌を知っていますか。"
      },
      {
        japanese: "切符（きっぷ）",
        kana: "きっぷ",
        vietnamese: "vé",
        english: "Ticket",
        example: "切符を買う前に、地図を見てください。"
      },
      {
        japanese: "現金（げんきん）",
        kana: "げんきん",
        vietnamese: "tiền mặt",
        english: "Cash",
        example: "現金で払わなければなりませんか。"
      },
      {
        japanese: "カード",
        kana: "カード",
        vietnamese: "thẻ (tín dụng, ngân hàng)",
        english: "Card (credit card, etc.)",
        example: "カードで払うことができます。"
      },
      {
        japanese: "趣味（しゅみ）",
        kana: "しゅみ",
        vietnamese: "sở thích",
        english: "Hobby",
        example: "趣味は何ですか。"
      },
      {
        japanese: "お祭（まつ）り",
        kana: "おまつり",
        vietnamese: "lễ hội",
        english: "Festival",
        example: "日本のお祭りを見たことがありますか。"
      },
      {
        japanese: "ドラマ",
        kana: "ドラマ",
        vietnamese: "phim truyền hình",
        english: "Drama (TV series)",
        example: "日本のドラマを見ることができますか。"
      },
      {
        japanese: "国（くに）",
        kana: "くに",
        vietnamese: "nước, quốc gia; quê hương",
        english: "Country / hometown",
        example: "国で何語を話しますか。"
      },
      {
        japanese: "動物（どうぶつ）",
        kana: "どうぶつ",
        vietnamese: "động vật",
        english: "Animal",
        example: "どんな動物が好きですか。"
      },
      {
        japanese: "馬（うま）",
        kana: "うま",
        vietnamese: "ngựa",
        english: "Horse",
        example: "馬に乗ることができますか。"
      },
      {
        japanese: "ペット",
        kana: "ペット",
        vietnamese: "thú cưng",
        english: "Pet",
        example: "ペットを飼っていますか。"
      },
      {
        japanese: "日記（にっき）",
        kana: "にっき",
        vietnamese: "nhật ký",
        english: "Diary",
        example: "毎日日記を書いています。"
      },
      {
        japanese: "直接（ちょくせつ）",
        kana: "ちょくせつ",
        vietnamese: "trực tiếp",
        english: "Directly",
        example: "直接会社へ行ってください。"
      },
      {
        japanese: "自由（じゆう）に",
        kana: "じゆうに",
        vietnamese: "tự do, thoải mái",
        english: "Freely",
        example: "自由に使ってください。"
      },
      {
        japanese: "久（ひさ）しぶり",
        kana: "ひさしぶり",
        vietnamese: "lâu rồi không gặp",
        english: "Long time no see",
        example: "お久しぶりですね。"
      },
      {
        japanese: "もちろん",
        kana: "もちろん",
        vietnamese: "dĩ nhiên, tất nhiên",
        english: "Of course",
        example: "もちろん、いいですよ。"
      },
      {
        japanese: "〜ことができます",
        kana: "〜ことができます",
        vietnamese: "có thể ~",
        english: "Can ~ / to be able to ~",
        example: "漢字を読むことができます。"
      },
      {
        japanese: "〜まえに",
        kana: "〜まえに",
        vietnamese: "trước khi ~",
        english: "Before ~",
        example: "寝る前に、本を読みます。"
      }
    ],
    grammar: [
      {
        pattern: "辞書形（Dictionary form）",
        vietnamese: "Dạng từ điển (thể thường)",
        english: "Dictionary form (plain form)",
        explanation: "Dạng động từ gốc trong từ điển. Nhóm I: 〜う. Nhóm II: 〜る. Nhóm III: する、来（く）る. Dùng trong câu thường, trước một số cấu trúc ngữ pháp.",
        examples: [
          {
            japanese: "行きます　→　行く",
            vietnamese: "đi → đi (từ điển)",
            english: "go → to go"
          },
          {
            japanese: "食べます　→　食べる",
            vietnamese: "ăn → ăn (từ điển)",
            english: "eat → to eat"
          },
          {
            japanese: "来ます　→　来（く）る",
            vietnamese: "đến → đến (từ điển)",
            english: "come → to come"
          }
        ]
      },
      {
        pattern: "〜ことができます",
        vietnamese: "Có thể ~, biết ~",
        english: "Can ~, be able to ~",
        explanation: "Diễn tả khả năng làm việc gì. Động từ từ điển + ことができます. VD: 泳ぐ → 泳ぐことができます (có thể bơi).",
        examples: [
          {
            japanese: "日本語を　話すことが　できます。",
            vietnamese: "Tôi có thể nói tiếng Nhật.",
            english: "I can speak Japanese."
          },
          {
            japanese: "ピアノを　弾くことが　できますか。",
            vietnamese: "Bạn có thể chơi piano không?",
            english: "Can you play the piano?"
          },
          {
            japanese: "漢字を　読むことが　できません。",
            vietnamese: "Tôi không thể đọc chữ Hán.",
            english: "I can't read kanji."
          }
        ]
      },
      {
        pattern: "趣味は〜ことです",
        vietnamese: "Sở thích của tôi là ~",
        english: "My hobby is ~",
        explanation: "Diễn tả sở thích. Động từ từ điển + こと biến động từ thành danh từ. VD: 本を読む → 本を読むことです (sở thích là đọc sách).",
        examples: [
          {
            japanese: "私の　趣味は　映画を　見ることです。",
            vietnamese: "Sở thích của tôi là xem phim.",
            english: "My hobby is watching movies."
          },
          {
            japanese: "趣味は　音楽を　聞くことです。",
            vietnamese: "Sở thích của tôi là nghe nhạc.",
            english: "My hobby is listening to music."
          },
          {
            japanese: "趣味は　旅行することです。",
            vietnamese: "Sở thích của tôi là đi du lịch.",
            english: "My hobby is traveling."
          }
        ]
      },
      {
        pattern: "〜前に",
        vietnamese: "Trước khi ~",
        english: "Before ~",
        explanation: "Diễn tả hành động trước một hành động khác. Động từ từ điển + 前に. Danh từ + の前に. VD: 寝る前に (trước khi ngủ).",
        examples: [
          {
            japanese: "寝る　前に、歯を　磨きます。",
            vietnamese: "Trước khi ngủ, tôi đánh răng.",
            english: "Before going to bed, I brush my teeth."
          },
          {
            japanese: "出かける　前に、電気を　消してください。",
            vietnamese: "Trước khi ra ngoài, hãy tắt đèn.",
            english: "Before going out, please turn off the lights."
          },
          {
            japanese: "食事の　前に、手を　洗います。",
            vietnamese: "Trước bữa ăn, tôi rửa tay.",
            english: "Before meals, I wash my hands."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 19 — た-form (Experience / Listing activities)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 19,
    title: "た形 (Thể た — kinh nghiệm, liệt kê hoạt động)",
    vocabulary: [
      {
        japanese: "登（のぼ）ります",
        kana: "のぼります",
        vietnamese: "leo (núi)",
        english: "To climb",
        example: "富士山に登ったことがありますか。"
      },
      {
        japanese: "泊（と）まります",
        kana: "とまります",
        vietnamese: "ở lại, nghỉ qua đêm",
        english: "To stay (overnight)",
        example: "旅館に泊まったことがありますか。"
      },
      {
        japanese: "掃除（そうじ）します",
        kana: "そうじします",
        vietnamese: "dọn dẹp, quét dọn",
        english: "To clean",
        example: "部屋を掃除したり、洗濯したりします。"
      },
      {
        japanese: "洗濯（せんたく）します",
        kana: "せんたくします",
        vietnamese: "giặt giũ",
        english: "To do laundry",
        example: "日曜日に洗濯したり、買い物したりします。"
      },
      {
        japanese: "練習（れんしゅう）します",
        kana: "れんしゅうします",
        vietnamese: "luyện tập",
        english: "To practice",
        example: "毎日日本語を練習しています。"
      },
      {
        japanese: "引（ひ）っ越（こ）します",
        kana: "ひっこしします",
        vietnamese: "chuyển nhà",
        english: "To move (house)",
        example: "来月東京に引っ越します。"
      },
      {
        japanese: "なります",
        kana: "なります",
        vietnamese: "trở nên, trở thành",
        english: "To become",
        example: "日本語が上手になりました。"
      },
      {
        japanese: "痩（や）せます",
        kana: "やせます",
        vietnamese: "gầy đi, giảm cân",
        english: "To become thin / to lose weight",
        example: "最近痩せましたね。"
      },
      {
        japanese: "太（ふと）ります",
        kana: "ふとります",
        vietnamese: "mập lên, tăng cân",
        english: "To become fat / to gain weight",
        example: "最近太りました。"
      },
      {
        japanese: "生（う）まれます",
        kana: "うまれます",
        vietnamese: "được sinh ra",
        english: "To be born",
        example: "東京で生まれました。"
      },
      {
        japanese: "お正月（おしょうがつ）",
        kana: "おしょうがつ",
        vietnamese: "Tết Nhật Bản",
        english: "New Year",
        example: "お正月に何をしましたか。"
      },
      {
        japanese: "美容院（びよういん）",
        kana: "びよういん",
        vietnamese: "tiệm làm tóc",
        english: "Beauty salon / hair salon",
        example: "美容院で髪を切りました。"
      },
      {
        japanese: "試合（しあい）",
        kana: "しあい",
        vietnamese: "trận đấu",
        english: "Match / game (sports)",
        example: "サッカーの試合を見たことがありますか。"
      },
      {
        japanese: "サーフィン",
        kana: "サーフィン",
        vietnamese: "lướt sóng",
        english: "Surfing",
        example: "サーフィンをしたことがありますか。"
      },
      {
        japanese: "お遍路（おへんろ）",
        kana: "おへんろ",
        vietnamese: "hành hương (88 chùa ở Shikoku)",
        english: "Shikoku pilgrimage",
        example: "お遍路をしたことがありますか。"
      },
      {
        japanese: "柔道（じゅうどう）",
        kana: "じゅうどう",
        vietnamese: "nhu đạo (judo)",
        english: "Judo",
        example: "柔道を習ったことがありますか。"
      },
      {
        japanese: "空手（からて）",
        kana: "からて",
        vietnamese: "karate (không thủ đạo)",
        english: "Karate",
        example: "空手をしたことがあります。"
      },
      {
        japanese: "相撲（すもう）",
        kana: "すもう",
        vietnamese: "sumo (đấu vật Nhật)",
        english: "Sumo wrestling",
        example: "相撲を見たことがありますか。"
      },
      {
        japanese: "剣道（けんどう）",
        kana: "けんどう",
        vietnamese: "kiếm đạo (kendo)",
        english: "Kendo",
        example: "剣道を練習したことがあります。"
      },
      {
        japanese: "生（い）け花（ばな）",
        kana: "いけばな",
        vietnamese: "cắm hoa Nhật Bản",
        english: "Japanese flower arrangement",
        example: "生け花を習ったことがありますか。"
      },
      {
        japanese: "茶道（さどう）",
        kana: "さどう",
        vietnamese: "trà đạo",
        english: "Tea ceremony",
        example: "茶道をしたことがあります。"
      },
      {
        japanese: "一度（いちど）",
        kana: "いちど",
        vietnamese: "một lần",
        english: "Once / one time",
        example: "一度富士山に登ったことがあります。"
      },
      {
        japanese: "一度（いちど）も",
        kana: "いちども",
        vietnamese: "chưa bao giờ (dùng với phủ định)",
        english: "Never (with negative)",
        example: "一度も日本へ行ったことがありません。"
      },
      {
        japanese: "〜たことがあります",
        kana: "〜たことがあります",
        vietnamese: "đã từng ~",
        english: "Have experienced ~ / have done ~ before",
        example: "日本料理を食べたことがあります。"
      },
      {
        japanese: "〜たり〜たりします",
        kana: "〜たり〜たりします",
        vietnamese: "làm những việc như ~ và ~",
        english: "Do things like ~ and ~",
        example: "休みの日は本を読んだり、映画を見たりします。"
      }
    ],
    grammar: [
      {
        pattern: "た形（た-form）",
        vietnamese: "Thể た (quá khứ thường)",
        english: "た-form (plain past)",
        explanation: "Dạng quá khứ thường của động từ. て-form chuyển て→た, で→だ. VD: 買って→買った, 食べて→食べた, 飲んで→飲んだ.",
        examples: [
          {
            japanese: "行きます　→　行った",
            vietnamese: "đi → đã đi",
            english: "go → went"
          },
          {
            japanese: "食べます　→　食べた",
            vietnamese: "ăn → đã ăn",
            english: "eat → ate"
          },
          {
            japanese: "来ます　→　来（き）た",
            vietnamese: "đến → đã đến",
            english: "come → came"
          }
        ]
      },
      {
        pattern: "〜たことがあります",
        vietnamese: "Đã từng ~",
        english: "Have done ~ (experience)",
        explanation: "Diễn tả kinh nghiệm đã làm việc gì đó trong quá khứ. Động từ た-form + ことがあります. Phủ định: ことがありません (chưa từng).",
        examples: [
          {
            japanese: "富士山に　登ったことが　あります。",
            vietnamese: "Tôi đã từng leo núi Phú Sĩ.",
            english: "I have climbed Mt. Fuji."
          },
          {
            japanese: "納豆を　食べたことが　ありますか。",
            vietnamese: "Bạn đã từng ăn natto chưa?",
            english: "Have you ever eaten natto?"
          },
          {
            japanese: "京都に　行ったことが　ありません。",
            vietnamese: "Tôi chưa từng đi Kyoto.",
            english: "I have never been to Kyoto."
          }
        ]
      },
      {
        pattern: "〜たり〜たりします",
        vietnamese: "Làm những việc như ~ và ~",
        english: "Do things like ~ and ~",
        explanation: "Liệt kê một số hoạt động đại diện, ngụ ý còn nhiều hoạt động khác. Động từ た-form + り, lặp lại + します. VD: 読んだり見たりします.",
        examples: [
          {
            japanese: "休みの　日は　本を　読んだり、音楽を　聞いたりします。",
            vietnamese: "Ngày nghỉ tôi đọc sách, nghe nhạc, v.v.",
            english: "On holidays, I read books, listen to music, and so on."
          },
          {
            japanese: "週末は　映画を　見たり、買い物したりします。",
            vietnamese: "Cuối tuần tôi xem phim, đi mua sắm, v.v.",
            english: "On weekends, I watch movies, go shopping, and so on."
          },
          {
            japanese: "朝は　散歩したり、ジョギングしたりします。",
            vietnamese: "Buổi sáng tôi đi dạo, chạy bộ, v.v.",
            english: "In the morning, I take walks, jog, and so on."
          }
        ]
      },
      {
        pattern: "〜たり〜たりしました",
        vietnamese: "Đã làm những việc như ~ và ~",
        english: "Did things like ~ and ~ (past)",
        explanation: "Dạng quá khứ của たり〜たりします. Diễn tả những hoạt động đã làm trong quá khứ.",
        examples: [
          {
            japanese: "京都で　お寺を　見たり、お土産を　買ったりしました。",
            vietnamese: "Ở Kyoto tôi đã xem chùa, mua quà, v.v.",
            english: "In Kyoto, I saw temples, bought souvenirs, and so on."
          },
          {
            japanese: "昨日は　掃除したり、洗濯したりしました。",
            vietnamese: "Hôm qua tôi đã dọn dẹp, giặt giũ, v.v.",
            english: "Yesterday, I cleaned, did laundry, and so on."
          },
          {
            japanese: "パーティーで　歌ったり、踊ったりしました。",
            vietnamese: "Ở tiệc tôi đã hát, nhảy, v.v.",
            english: "At the party, I sang, danced, and so on."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 20 — Plain form
  // ═══════════════════════════════════════════
  {
    lessonNumber: 20,
    title: "普通形 (Thể thông thường)",
    vocabulary: [
      {
        japanese: "要ります（いります）",
        kana: "いります",
        vietnamese: "cần",
        english: "To need",
        example: "パスポートが要ります。"
      },
      {
        japanese: "調べます（しらべます）",
        kana: "しらべます",
        vietnamese: "tra cứu, điều tra",
        english: "To investigate, to look up",
        example: "辞書で言葉を調べます。"
      },
      {
        japanese: "直します（なおします）",
        kana: "なおします",
        vietnamese: "sửa chữa",
        english: "To fix, to repair",
        example: "時計を直します。"
      },
      {
        japanese: "修理します（しゅうりします）",
        kana: "しゅうりします",
        vietnamese: "sửa chữa (máy móc)",
        english: "To repair",
        example: "パソコンを修理します。"
      },
      {
        japanese: "着ます（きます）",
        kana: "きます",
        vietnamese: "mặc (áo)",
        english: "To wear (upper body)",
        example: "シャツを着ます。"
      },
      {
        japanese: "はきます",
        kana: "はきます",
        vietnamese: "mang, đi (giày/quần)",
        english: "To wear (lower body/shoes)",
        example: "靴をはきます。"
      },
      {
        japanese: "かぶります",
        kana: "かぶります",
        vietnamese: "đội (mũ)",
        english: "To wear (hat)",
        example: "帽子をかぶります。"
      },
      {
        japanese: "かけます",
        kana: "かけます",
        vietnamese: "đeo (kính)",
        english: "To wear (glasses)",
        example: "眼鏡をかけます。"
      },
      {
        japanese: "いる",
        kana: "いる",
        vietnamese: "có, ở (thể thông thường của います)",
        english: "To exist (animate, plain form)",
        example: "猫がいる。"
      },
      {
        japanese: "ある",
        kana: "ある",
        vietnamese: "có, ở (thể thông thường của あります)",
        english: "To exist (inanimate, plain form)",
        example: "本がある。"
      },
      {
        japanese: "付き合います（つきあいます）",
        kana: "つきあいます",
        vietnamese: "hẹn hò, giao tiếp",
        english: "To go out with, to associate with",
        example: "友達と付き合います。"
      },
      {
        japanese: "僕（ぼく）",
        kana: "ぼく",
        vietnamese: "tôi, mình (nam giới dùng)",
        english: "I (male, informal)",
        example: "僕は学生だ。"
      },
      {
        japanese: "君（きみ）",
        kana: "きみ",
        vietnamese: "bạn, cậu (thân mật)",
        english: "You (informal)",
        example: "君はどう思う？"
      },
      {
        japanese: "〜くん",
        kana: "〜くん",
        vietnamese: "hậu tố gọi thân mật (thường dùng cho nam)",
        english: "Suffix for boys/younger males",
        example: "田中くん、元気？"
      },
      {
        japanese: "お腹がすきました（おなかがすきました）",
        kana: "おなかがすきました",
        vietnamese: "đói bụng",
        english: "I'm hungry",
        example: "お腹がすきました。何か食べたいです。"
      },
      {
        japanese: "お腹がいっぱいです（おなかがいっぱいです）",
        kana: "おなかがいっぱいです",
        vietnamese: "no bụng",
        english: "I'm full",
        example: "もうお腹がいっぱいです。"
      },
      {
        japanese: "喉が渇きました（のどがかわきました）",
        kana: "のどがかわきました",
        vietnamese: "khát nước",
        english: "I'm thirsty",
        example: "喉が渇きました。水をください。"
      },
      {
        japanese: "すごい",
        kana: "すごい",
        vietnamese: "tuyệt vời, ghê gớm",
        english: "Amazing, great",
        example: "すごい！よくできたね。"
      },
      {
        japanese: "本当（ほんとう）",
        kana: "ほんとう",
        vietnamese: "thật, thực sự",
        english: "True, really",
        example: "本当？信じられない。"
      },
      {
        japanese: "嘘（うそ）",
        kana: "うそ",
        vietnamese: "nói dối, nói xạo",
        english: "Lie, not true",
        example: "嘘でしょう！"
      },
      {
        japanese: "だめ（な）",
        kana: "だめ",
        vietnamese: "không được, không tốt",
        english: "No good, not allowed",
        example: "ここで写真を撮っちゃだめです。"
      },
      {
        japanese: "普通形（ふつうけい）",
        kana: "ふつうけい",
        vietnamese: "thể thông thường",
        english: "Plain form",
        example: ""
      },
      {
        japanese: "つまり",
        kana: "つまり",
        vietnamese: "nghĩa là, tức là",
        english: "In other words, that is to say",
        example: "つまり、行かないということですか。"
      },
      {
        japanese: "例えば（たとえば）",
        kana: "たとえば",
        vietnamese: "ví dụ",
        english: "For example",
        example: "例えば、寿司やラーメンが好きです。"
      },
      {
        japanese: "ところで",
        kana: "ところで",
        vietnamese: "à mà, nhân tiện",
        english: "By the way",
        example: "ところで、明日暇？"
      },
      {
        japanese: "遅くなります（おそくなります）",
        kana: "おそくなります",
        vietnamese: "bị muộn, trở nên trễ",
        english: "To become late",
        example: "帰りが遅くなります。"
      },
      {
        japanese: "まあまあ",
        kana: "まあまあ",
        vietnamese: "tàm tạm, bình thường",
        english: "So-so",
        example: "最近どう？まあまあだよ。"
      }
    ],
    grammar: [
      {
        pattern: "普通形（Plain form）",
        vietnamese: "Thể thông thường (thường thể)",
        english: "Plain form (casual form)",
        explanation: "Dạng thường của động từ/tính từ/danh từ. Động từ: 行く/行かない/行った/行かなかった. い形: 高い/高くない. な形・名詞: だ/じゃない/だった/じゃなかった.",
        examples: [
          {
            japanese: "動詞：行く、行かない、行った、行かなかった",
            vietnamese: "Động từ: đi, không đi, đã đi, đã không đi",
            english: "Verb: go, don't go, went, didn't go"
          },
          {
            japanese: "い形容詞：高い、高くない、高かった、高くなかった",
            vietnamese: "Tính từ い: cao, không cao, đã cao, đã không cao",
            english: "い-adjective: expensive, not expensive, was expensive, wasn't expensive"
          },
          {
            japanese: "な形容詞・名詞：静かだ、静かじゃない、静かだった",
            vietnamese: "Tính từ な/Danh từ: yên tĩnh, không yên, đã yên",
            english: "な-adjective/Noun: quiet, not quiet, was quiet"
          }
        ]
      },
      {
        pattern: "〜と思います",
        vietnamese: "Tôi nghĩ rằng ~",
        english: "I think that ~",
        explanation: "Diễn tả ý kiến, suy nghĩ của bản thân. Dùng thể thường + と思います. Danh từ và な形 không cần だ trước と思います.",
        examples: [
          {
            japanese: "明日は　雨が　降ると　思います。",
            vietnamese: "Tôi nghĩ ngày mai sẽ mưa.",
            english: "I think it will rain tomorrow."
          },
          {
            japanese: "この　映画は　面白いと　思います。",
            vietnamese: "Tôi nghĩ bộ phim này thú vị.",
            english: "I think this movie is interesting."
          },
          {
            japanese: "田中さんは　来ないと　思います。",
            vietnamese: "Tôi nghĩ anh Tanaka sẽ không đến.",
            english: "I think Mr. Tanaka won't come."
          }
        ]
      },
      {
        pattern: "〜と言いました / 〜と言っていました",
        vietnamese: "~ đã nói rằng ~",
        english: "~ said that ~",
        explanation: "Trích dẫn lời nói của người khác. Dùng thể thường + と言いました. 言っていました nhấn mạnh thời điểm trong quá khứ.",
        examples: [
          {
            japanese: "田中さんは　明日　来ると　言いました。",
            vietnamese: "Anh Tanaka đã nói rằng ngày mai sẽ đến.",
            english: "Mr. Tanaka said he would come tomorrow."
          },
          {
            japanese: "先生は　試験は　難しいと　言っていました。",
            vietnamese: "Thầy giáo đã nói rằng bài thi khó.",
            english: "The teacher said the exam was difficult."
          },
          {
            japanese: "山田さんは　忙しいと　言っていました。",
            vietnamese: "Chị Yamada đã nói rằng bận.",
            english: "Ms. Yamada said she was busy."
          }
        ]
      },
      {
        pattern: "〜でしょう",
        vietnamese: "Có lẽ ~, chắc là ~ (suy đoán)",
        english: "Probably ~, I suppose ~",
        explanation: "Diễn tả suy đoán, dự đoán. Động từ/い形 thể thường + でしょう. な形・名詞bỏ だ + でしょう. Lịch sự hơn: と思います.",
        examples: [
          {
            japanese: "明日は　雨が　降るでしょう。",
            vietnamese: "Ngày mai có lẽ sẽ mưa.",
            english: "It will probably rain tomorrow."
          },
          {
            japanese: "この　本は　面白いでしょう。",
            vietnamese: "Quyển sách này chắc thú vị.",
            english: "This book is probably interesting."
          },
          {
            japanese: "田中さんは　もう　帰ったでしょう。",
            vietnamese: "Anh Tanaka có lẽ đã về rồi.",
            english: "Mr. Tanaka has probably gone home already."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 21 — ～と思います (I think that ~)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 21,
    title: "〜と思います (Tôi nghĩ rằng ~)",
    vocabulary: [
      {
        japanese: "思います（おもいます）",
        kana: "おもいます",
        vietnamese: "nghĩ",
        english: "To think",
        example: "日本語は面白いと思います。"
      },
      {
        japanese: "言います（いいます）",
        kana: "いいます",
        vietnamese: "nói",
        english: "To say",
        example: "先生は明日テストがあると言いました。"
      },
      {
        japanese: "勝ちます（かちます）",
        kana: "かちます",
        vietnamese: "thắng",
        english: "To win",
        example: "日本チームが勝ちました。"
      },
      {
        japanese: "負けます（まけます）",
        kana: "まけます",
        vietnamese: "thua",
        english: "To lose",
        example: "試合に負けました。"
      },
      {
        japanese: "足ります（たります）",
        kana: "たります",
        vietnamese: "đủ",
        english: "To be enough, to suffice",
        example: "お金が足りません。"
      },
      {
        japanese: "役に立ちます（やくにたちます）",
        kana: "やくにたちます",
        vietnamese: "có ích",
        english: "To be useful",
        example: "この辞書は役に立ちます。"
      },
      {
        japanese: "動きます（うごきます）",
        kana: "うごきます",
        vietnamese: "chuyển động, hoạt động",
        english: "To move, to work (machine)",
        example: "時計が動きません。"
      },
      {
        japanese: "咲きます（さきます）",
        kana: "さきます",
        vietnamese: "nở (hoa)",
        english: "To bloom",
        example: "桜が咲きました。"
      },
      {
        japanese: "変わります（かわります）",
        kana: "かわります",
        vietnamese: "thay đổi",
        english: "To change",
        example: "信号が変わりました。"
      },
      {
        japanese: "届きます（とどきます）",
        kana: "とどきます",
        vietnamese: "được giao đến, tới nơi",
        english: "To be delivered, to arrive",
        example: "手紙が届きました。"
      },
      {
        japanese: "困ります（こまります）",
        kana: "こまります",
        vietnamese: "gặp khó khăn, phiền",
        english: "To be troubled",
        example: "お金がなくて困ります。"
      },
      {
        japanese: "開きます（ひらきます）",
        kana: "ひらきます",
        vietnamese: "mở (tự mở ra)",
        english: "To open (intransitive)",
        example: "ドアが開きました。"
      },
      {
        japanese: "閉まります（しまります）",
        kana: "しまります",
        vietnamese: "đóng (tự đóng)",
        english: "To close (intransitive)",
        example: "店が閉まりました。"
      },
      {
        japanese: "つきます",
        kana: "つきます",
        vietnamese: "bật (đèn tự sáng)",
        english: "To turn on (intransitive)",
        example: "電気がつきました。"
      },
      {
        japanese: "消えます（きえます）",
        kana: "きえます",
        vietnamese: "tắt, biến mất",
        english: "To go out, to disappear",
        example: "電気が消えました。"
      },
      {
        japanese: "壊れます（こわれます）",
        kana: "こわれます",
        vietnamese: "bị hỏng, bị vỡ",
        english: "To break (intransitive)",
        example: "パソコンが壊れました。"
      },
      {
        japanese: "割れます（われます）",
        kana: "われます",
        vietnamese: "bị vỡ, bị nứt",
        english: "To crack, to break",
        example: "コップが割れました。"
      },
      {
        japanese: "折れます（おれます）",
        kana: "おれます",
        vietnamese: "bị gãy",
        english: "To break, to snap",
        example: "木の枝が折れました。"
      },
      {
        japanese: "汚れます（よごれます）",
        kana: "よごれます",
        vietnamese: "bị bẩn",
        english: "To get dirty",
        example: "服が汚れました。"
      },
      {
        japanese: "付きます（つきます）",
        kana: "つきます",
        vietnamese: "dính, được gắn vào",
        english: "To be attached",
        example: "エアコンが付いています。"
      },
      {
        japanese: "見つかります（みつかります）",
        kana: "みつかります",
        vietnamese: "được tìm thấy",
        english: "To be found",
        example: "鍵が見つかりました。"
      },
      {
        japanese: "将来（しょうらい）",
        kana: "しょうらい",
        vietnamese: "tương lai",
        english: "Future",
        example: "将来、医者になりたいです。"
      },
      {
        japanese: "夢（ゆめ）",
        kana: "ゆめ",
        vietnamese: "giấc mơ, ước mơ",
        english: "Dream",
        example: "私の夢は先生になることです。"
      },
      {
        japanese: "ニュース",
        kana: "ニュース",
        vietnamese: "tin tức",
        english: "News",
        example: "毎朝ニュースを見ます。"
      },
      {
        japanese: "政治（せいじ）",
        kana: "せいじ",
        vietnamese: "chính trị",
        english: "Politics",
        example: "政治に興味がありません。"
      },
      {
        japanese: "社会（しゃかい）",
        kana: "しゃかい",
        vietnamese: "xã hội",
        english: "Society",
        example: "社会の問題について話しました。"
      },
      {
        japanese: "歴史（れきし）",
        kana: "れきし",
        vietnamese: "lịch sử",
        english: "History",
        example: "日本の歴史を勉強しています。"
      },
      {
        japanese: "事故（じこ）",
        kana: "じこ",
        vietnamese: "tai nạn",
        english: "Accident",
        example: "交通事故がありました。"
      },
      {
        japanese: "地震（じしん）",
        kana: "じしん",
        vietnamese: "động đất",
        english: "Earthquake",
        example: "昨日地震がありました。"
      },
      {
        japanese: "台風（たいふう）",
        kana: "たいふう",
        vietnamese: "bão",
        english: "Typhoon",
        example: "台風が来ると思います。"
      },
      {
        japanese: "戦争（せんそう）",
        kana: "せんそう",
        vietnamese: "chiến tranh",
        english: "War",
        example: "戦争は絶対にだめだと思います。"
      },
      {
        japanese: "平和（へいわ）",
        kana: "へいわ",
        vietnamese: "hòa bình",
        english: "Peace",
        example: "世界の平和を願っています。"
      },
      {
        japanese: "必要（な）（ひつよう）",
        kana: "ひつよう",
        vietnamese: "cần thiết",
        english: "Necessary",
        example: "パスポートが必要です。"
      },
      {
        japanese: "無理（な）（むり）",
        kana: "むり",
        vietnamese: "không thể, quá sức",
        english: "Impossible, unreasonable",
        example: "それは無理だと思います。"
      },
      {
        japanese: "〜と思います（〜とおもいます）",
        kana: "〜とおもいます",
        vietnamese: "tôi nghĩ rằng ~",
        english: "I think that ~",
        example: "明日は雨だと思います。"
      },
      {
        japanese: "〜と言いました（〜といいました）",
        kana: "〜といいました",
        vietnamese: "đã nói rằng ~",
        english: "Said that ~",
        example: "先生は明日休みだと言いました。"
      },
      {
        japanese: "〜でしょう？",
        kana: "〜でしょう",
        vietnamese: "~ phải không? (xác nhận)",
        english: "~ right? (seeking confirmation)",
        example: "明日は日曜日でしょう？"
      }
    ],
    grammar: [
      {
        pattern: "〜と思っています",
        vietnamese: "Tôi đang nghĩ rằng ~ (ý định)",
        english: "I'm thinking that ~ (intention)",
        explanation: "Diễn tả ý định, kế hoạch đã suy nghĩ từ trước. Khác với と思います (ý kiến tức thời), と思っています nhấn mạnh sự suy nghĩ kéo dài.",
        examples: [
          {
            japanese: "将来　医者に　なろうと　思っています。",
            vietnamese: "Tôi đang nghĩ sẽ trở thành bác sĩ trong tương lai.",
            english: "I'm thinking of becoming a doctor in the future."
          },
          {
            japanese: "来年　日本に　留学しようと　思っています。",
            vietnamese: "Tôi đang nghĩ năm sau sẽ du học Nhật.",
            english: "I'm thinking of studying abroad in Japan next year."
          },
          {
            japanese: "今度の　休みに　京都へ　行こうと　思っています。",
            vietnamese: "Tôi đang nghĩ kỳ nghỉ tới sẽ đi Kyoto.",
            english: "I'm thinking of going to Kyoto during the next holiday."
          }
        ]
      },
      {
        pattern: "〜と言っていました",
        vietnamese: "~ đã nói rằng ~",
        english: "~ said that ~",
        explanation: "Trích dẫn lời nói của người khác trong quá khứ. Dùng thể thường + と言っていました. Nhấn mạnh hành động nói trong một khoảng thời gian.",
        examples: [
          {
            japanese: "田中さんは　今日は　来られないと　言っていました。",
            vietnamese: "Anh Tanaka đã nói rằng hôm nay không thể đến.",
            english: "Mr. Tanaka said he couldn't come today."
          },
          {
            japanese: "先生は　宿題を　忘れないでと　言っていました。",
            vietnamese: "Thầy đã dặn đừng quên bài tập.",
            english: "The teacher said not to forget the homework."
          },
          {
            japanese: "友達は　日本語は　難しいと　言っていました。",
            vietnamese: "Bạn tôi đã nói tiếng Nhật khó.",
            english: "My friend said Japanese was difficult."
          }
        ]
      },
      {
        pattern: "〜でしょう",
        vietnamese: "Có lẽ ~, chắc ~ (dự đoán)",
        english: "Probably ~, I suppose ~",
        explanation: "Diễn tả suy đoán của người nói. Động từ/い形 thể thường + でしょう. な形・名詞 bỏ だ + でしょう. Lịch sự hơn と思います.",
        examples: [
          {
            japanese: "明日は　雨が　降るでしょう。",
            vietnamese: "Ngày mai có lẽ sẽ mưa.",
            english: "It will probably rain tomorrow."
          },
          {
            japanese: "この　試験は　難しいでしょう。",
            vietnamese: "Kỳ thi này chắc khó.",
            english: "This exam is probably difficult."
          },
          {
            japanese: "田中さんは　もう　寝たでしょう。",
            vietnamese: "Anh Tanaka có lẽ đã ngủ rồi.",
            english: "Mr. Tanaka has probably gone to bed already."
          }
        ]
      },
      {
        pattern: "〜でしょう？（上昇調）",
        vietnamese: "~ phải không? (xác nhận)",
        english: "~ right? (seeking confirmation)",
        explanation: "Dùng でしょう với ngữ điệu lên cuối câu để xác nhận thông tin với người nghe. Có nghĩa 'đúng không?', 'phải không?'.",
        examples: [
          {
            japanese: "明日は　日曜日でしょう？",
            vietnamese: "Ngày mai là chủ nhật phải không?",
            english: "Tomorrow is Sunday, right?"
          },
          {
            japanese: "あなたも　行くでしょう？",
            vietnamese: "Bạn cũng đi phải không?",
            english: "You're going too, right?"
          },
          {
            japanese: "この　本、読んだでしょう？",
            vietnamese: "Bạn đã đọc quyển sách này rồi phải không?",
            english: "You've read this book, haven't you?"
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 22 — Noun modification with clauses
  // ═══════════════════════════════════════════
  {
    lessonNumber: 22,
    title: "名詞修飾 (Bổ nghĩa danh từ bằng mệnh đề)",
    vocabulary: [
      {
        japanese: "着物（きもの）",
        kana: "きもの",
        vietnamese: "kimono (trang phục truyền thống Nhật)",
        english: "Kimono",
        example: "お祭りで着物を着ます。"
      },
      {
        japanese: "コート",
        kana: "コート",
        vietnamese: "áo khoác",
        english: "Coat",
        example: "寒いのでコートを着ます。"
      },
      {
        japanese: "スーツ",
        kana: "スーツ",
        vietnamese: "bộ vest, com-lê",
        english: "Suit",
        example: "会社でスーツを着ます。"
      },
      {
        japanese: "セーター",
        kana: "セーター",
        vietnamese: "áo len",
        english: "Sweater",
        example: "冬にセーターを着ます。"
      },
      {
        japanese: "帽子（ぼうし）",
        kana: "ぼうし",
        vietnamese: "mũ, nón",
        english: "Hat, cap",
        example: "白い帽子をかぶっている人は誰ですか。"
      },
      {
        japanese: "眼鏡（めがね）",
        kana: "めがね",
        vietnamese: "kính mắt",
        english: "Glasses",
        example: "眼鏡をかけている人が田中さんです。"
      },
      {
        japanese: "手袋（てぶくろ）",
        kana: "てぶくろ",
        vietnamese: "găng tay",
        english: "Gloves",
        example: "手袋をはめます。"
      },
      {
        japanese: "靴下（くつした）",
        kana: "くつした",
        vietnamese: "tất, vớ",
        english: "Socks",
        example: "靴下をはきます。"
      },
      {
        japanese: "アクセサリー",
        kana: "アクセサリー",
        vietnamese: "phụ kiện, trang sức",
        english: "Accessory",
        example: "きれいなアクセサリーを買いました。"
      },
      {
        japanese: "指輪（ゆびわ）",
        kana: "ゆびわ",
        vietnamese: "nhẫn",
        english: "Ring",
        example: "彼女に指輪をあげました。"
      },
      {
        japanese: "時計（とけい）",
        kana: "とけい",
        vietnamese: "đồng hồ",
        english: "Watch, clock",
        example: "父がくれた時計です。"
      },
      {
        japanese: "壁（かべ）",
        kana: "かべ",
        vietnamese: "tường",
        english: "Wall",
        example: "壁に絵がかけてあります。"
      },
      {
        japanese: "引き出し（ひきだし）",
        kana: "ひきだし",
        vietnamese: "ngăn kéo",
        english: "Drawer",
        example: "引き出しの中に何がありますか。"
      },
      {
        japanese: "玄関（げんかん）",
        kana: "げんかん",
        vietnamese: "lối vào, tiền sảnh",
        english: "Entrance, front door area",
        example: "玄関で靴を脱ぎます。"
      },
      {
        japanese: "廊下（ろうか）",
        kana: "ろうか",
        vietnamese: "hành lang",
        english: "Corridor, hallway",
        example: "廊下を走らないでください。"
      },
      {
        japanese: "屋上（おくじょう）",
        kana: "おくじょう",
        vietnamese: "sân thượng",
        english: "Rooftop",
        example: "屋上から富士山が見えます。"
      },
      {
        japanese: "庭（にわ）",
        kana: "にわ",
        vietnamese: "sân vườn",
        english: "Garden, yard",
        example: "庭に花が咲いています。"
      },
      {
        japanese: "島（しま）",
        kana: "しま",
        vietnamese: "đảo, hòn đảo",
        english: "Island",
        example: "沖縄は美しい島です。"
      },
      {
        japanese: "村（むら）",
        kana: "むら",
        vietnamese: "làng, thôn",
        english: "Village",
        example: "小さい村に住んでいます。"
      },
      {
        japanese: "森（もり）",
        kana: "もり",
        vietnamese: "rừng",
        english: "Forest",
        example: "森を散歩しました。"
      },
      {
        japanese: "星（ほし）",
        kana: "ほし",
        vietnamese: "ngôi sao",
        english: "Star",
        example: "星がたくさん見えます。"
      },
      {
        japanese: "月（つき）",
        kana: "つき",
        vietnamese: "mặt trăng",
        english: "Moon",
        example: "今夜は月がきれいです。"
      },
      {
        japanese: "形（かたち）",
        kana: "かたち",
        vietnamese: "hình dạng",
        english: "Shape, form",
        example: "面白い形のビルがあります。"
      },
      {
        japanese: "色（いろ）",
        kana: "いろ",
        vietnamese: "màu sắc",
        english: "Color",
        example: "何色が好きですか。"
      },
      {
        japanese: "味（あじ）",
        kana: "あじ",
        vietnamese: "vị, hương vị",
        english: "Taste, flavor",
        example: "この料理は味がいいです。"
      },
      {
        japanese: "音（おと）",
        kana: "おと",
        vietnamese: "âm thanh, tiếng",
        english: "Sound",
        example: "変な音が聞こえます。"
      },
      {
        japanese: "デザイン",
        kana: "デザイン",
        vietnamese: "thiết kế",
        english: "Design",
        example: "このデザインが好きです。"
      },
      {
        japanese: "動物園（どうぶつえん）",
        kana: "どうぶつえん",
        vietnamese: "vườn thú, sở thú",
        english: "Zoo",
        example: "日曜日に動物園へ行きました。"
      },
      {
        japanese: "遊園地（ゆうえんち）",
        kana: "ゆうえんち",
        vietnamese: "công viên giải trí",
        english: "Amusement park",
        example: "遊園地で遊びました。"
      },
      {
        japanese: "温泉（おんせん）",
        kana: "おんせん",
        vietnamese: "suối nước nóng",
        english: "Hot spring",
        example: "温泉に入りたいです。"
      }
    ],
    grammar: [
      {
        pattern: "名詞修飾（Noun modification）",
        vietnamese: "Bổ nghĩa danh từ bằng mệnh đề",
        english: "Noun modification with clauses",
        explanation: "Dùng câu (thể thường) đứng trước để bổ nghĩa cho danh từ. Động từ thể thường + 名詞. VD: 本を読む人 (người đọc sách).",
        examples: [
          {
            japanese: "あそこに　いる　人は　田中さんです。",
            vietnamese: "Người đang ở kia là anh Tanaka.",
            english: "The person over there is Mr. Tanaka."
          },
          {
            japanese: "昨日　買った　本は　面白いです。",
            vietnamese: "Quyển sách mua hôm qua thú vị.",
            english: "The book I bought yesterday is interesting."
          },
          {
            japanese: "日本語を　話す　人が　います。",
            vietnamese: "Có người nói tiếng Nhật.",
            english: "There is someone who speaks Japanese."
          }
        ]
      },
      {
        pattern: "〜時（とき）",
        vietnamese: "~ thời (thời gian)",
        english: "~ time, occasion",
        explanation: "Danh từ chỉ thời gian. Dùng sau động từ từ điển (時に行きます) hoặc た-form (時がありました) để nói về thời điểm cụ thể.",
        examples: [
          {
            japanese: "食べる　時、いただきますと　言います。",
            vietnamese: "Khi ăn, tôi nói itadakimasu.",
            english: "When eating, I say itadakimasu."
          },
          {
            japanese: "困った　時は　電話してください。",
            vietnamese: "Khi gặp khó khăn, hãy gọi điện.",
            english: "Please call me when you're in trouble."
          },
          {
            japanese: "日本に　来た　時、18歳でした。",
            vietnamese: "Khi đến Nhật, tôi 18 tuổi.",
            english: "When I came to Japan, I was 18 years old."
          }
        ]
      },
      {
        pattern: "〜人（ひと/じん）/ 〜所（ところ）/ 〜物（もの）",
        vietnamese: "Người ~, nơi ~, vật ~",
        english: "Person who ~, place where ~, thing which ~",
        explanation: "Danh từ hình thức sau mệnh đề bổ nghĩa. 人 (người làm ~), 所 (nơi ~), 物 (đồ/việc ~).",
        examples: [
          {
            japanese: "日本語を　教える　人を　探しています。",
            vietnamese: "Tôi đang tìm người dạy tiếng Nhật.",
            english: "I'm looking for someone who teaches Japanese."
          },
          {
            japanese: "生まれた　所は　どこですか。",
            vietnamese: "Nơi bạn sinh ra là đâu?",
            english: "Where is the place you were born?"
          },
          {
            japanese: "食べたい　物が　たくさん　あります。",
            vietnamese: "Có nhiều thứ tôi muốn ăn.",
            english: "There are many things I want to eat."
          }
        ]
      },
      {
        pattern: "〜約束（やくそく）",
        vietnamese: "Lời hứa ~, hẹn ~",
        english: "Promise to ~, appointment to ~",
        explanation: "Danh từ 約束 (lời hứa, cuộc hẹn) có thể được bổ nghĩa bởi mệnh đề động từ. VD: 会う約束 (hẹn gặp).",
        examples: [
          {
            japanese: "友達と　会う　約束が　あります。",
            vietnamese: "Tôi có hẹn gặp bạn.",
            english: "I have an appointment to meet a friend."
          },
          {
            japanese: "明日　来る　約束を　しました。",
            vietnamese: "Tôi đã hứa sẽ đến vào ngày mai.",
            english: "I made a promise to come tomorrow."
          },
          {
            japanese: "毎日　勉強する　約束を　しました。",
            vietnamese: "Tôi đã hứa sẽ học mỗi ngày.",
            english: "I promised to study every day."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 23 — ～とき / ～と (When / If)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 23,
    title: "〜とき/〜と (Khi ~/Nếu ~)",
    vocabulary: [
      {
        japanese: "聞きます（ききます）",
        kana: "ききます",
        vietnamese: "hỏi",
        english: "To ask",
        example: "道を聞きます。"
      },
      {
        japanese: "回します（まわします）",
        kana: "まわします",
        vietnamese: "xoay, vặn",
        english: "To turn, to rotate",
        example: "ハンドルを回します。"
      },
      {
        japanese: "引きます（ひきます）",
        kana: "ひきます",
        vietnamese: "kéo",
        english: "To pull",
        example: "ドアを引きます。"
      },
      {
        japanese: "変えます（かえます）",
        kana: "かえます",
        vietnamese: "thay đổi",
        english: "To change (transitive)",
        example: "チャンネルを変えます。"
      },
      {
        japanese: "触ります（さわります）",
        kana: "さわります",
        vietnamese: "chạm, sờ",
        english: "To touch",
        example: "壁に触らないでください。"
      },
      {
        japanese: "出ます（でます）",
        kana: "でます",
        vietnamese: "ra (tiền thối ra)",
        english: "To come out",
        example: "お釣りが出ます。"
      },
      {
        japanese: "動きます（うごきます）",
        kana: "うごきます",
        vietnamese: "chuyển động, hoạt động",
        english: "To move, to work",
        example: "ボタンを押すと、機械が動きます。"
      },
      {
        japanese: "歩きます（あるきます）",
        kana: "あるきます",
        vietnamese: "đi bộ",
        english: "To walk",
        example: "駅まで歩きます。"
      },
      {
        japanese: "渡ります（わたります）",
        kana: "わたります",
        vietnamese: "băng qua, đi qua",
        english: "To cross",
        example: "橋を渡ります。"
      },
      {
        japanese: "気をつけます（きをつけます）",
        kana: "きをつけます",
        vietnamese: "cẩn thận, chú ý",
        english: "To be careful",
        example: "車に気をつけてください。"
      },
      {
        japanese: "交通（こうつう）",
        kana: "こうつう",
        vietnamese: "giao thông",
        english: "Traffic, transportation",
        example: "交通が便利です。"
      },
      {
        japanese: "信号（しんごう）",
        kana: "しんごう",
        vietnamese: "đèn giao thông",
        english: "Traffic light",
        example: "信号が赤のとき、止まります。"
      },
      {
        japanese: "交差点（こうさてん）",
        kana: "こうさてん",
        vietnamese: "ngã tư",
        english: "Intersection, crossroads",
        example: "次の交差点を右に曲がります。"
      },
      {
        japanese: "角（かど）",
        kana: "かど",
        vietnamese: "góc (đường)",
        english: "Corner",
        example: "角を左に曲がってください。"
      },
      {
        japanese: "橋（はし）",
        kana: "はし",
        vietnamese: "cầu",
        english: "Bridge",
        example: "橋を渡ると、公園があります。"
      },
      {
        japanese: "駐車場（ちゅうしゃじょう）",
        kana: "ちゅうしゃじょう",
        vietnamese: "bãi đỗ xe",
        english: "Parking lot",
        example: "駐車場はどこですか。"
      },
      {
        japanese: "〜目（〜め）",
        kana: "〜め",
        vietnamese: "thứ ~ (số thứ tự)",
        english: "~th (ordinal number suffix)",
        example: "二つ目の角を右に曲がります。"
      },
      {
        japanese: "建物（たてもの）",
        kana: "たてもの",
        vietnamese: "tòa nhà, công trình",
        english: "Building",
        example: "あの白い建物が病院です。"
      },
      {
        japanese: "タワー",
        kana: "タワー",
        vietnamese: "tháp",
        english: "Tower",
        example: "東京タワーに行きました。"
      },
      {
        japanese: "道（みち）",
        kana: "みち",
        vietnamese: "đường, con đường",
        english: "Road, way",
        example: "この道をまっすぐ行ってください。"
      },
      {
        japanese: "方（ほう）",
        kana: "ほう",
        vietnamese: "phía, hướng",
        english: "Direction, side",
        example: "駅の方へ歩きます。"
      },
      {
        japanese: "途中（とちゅう）",
        kana: "とちゅう",
        vietnamese: "giữa đường, dọc đường",
        english: "On the way, midway",
        example: "会社へ行く途中で友達に会いました。"
      },
      {
        japanese: "左側（ひだりがわ）",
        kana: "ひだりがわ",
        vietnamese: "phía bên trái",
        english: "Left side",
        example: "左側にコンビニがあります。"
      },
      {
        japanese: "右側（みぎがわ）",
        kana: "みぎがわ",
        vietnamese: "phía bên phải",
        english: "Right side",
        example: "右側に銀行があります。"
      },
      {
        japanese: "反対（はんたい）",
        kana: "はんたい",
        vietnamese: "đối diện, ngược lại",
        english: "Opposite, reverse",
        example: "反対側に渡ってください。"
      },
      {
        japanese: "両方（りょうほう）",
        kana: "りょうほう",
        vietnamese: "cả hai",
        english: "Both",
        example: "両方とも好きです。"
      },
      {
        japanese: "ボタン",
        kana: "ボタン",
        vietnamese: "nút bấm",
        english: "Button",
        example: "このボタンを押してください。"
      },
      {
        japanese: "機械（きかい）",
        kana: "きかい",
        vietnamese: "máy móc",
        english: "Machine",
        example: "この機械の使い方を教えてください。"
      },
      {
        japanese: "お釣り（おつり）",
        kana: "おつり",
        vietnamese: "tiền thối lại",
        english: "Change (money)",
        example: "お釣りを取ってください。"
      },
      {
        japanese: "〜とき",
        kana: "〜とき",
        vietnamese: "khi ~",
        english: "When ~",
        example: "日本へ来たとき、びっくりしました。"
      },
      {
        japanese: "〜と",
        kana: "〜と",
        vietnamese: "nếu ~ thì, khi ~ thì",
        english: "When ~, if ~ (natural consequence)",
        example: "このボタンを押すと、お釣りが出ます。"
      },
      {
        japanese: "まず",
        kana: "まず",
        vietnamese: "trước tiên, đầu tiên",
        english: "First, first of all",
        example: "まず、お金を入れてください。"
      }
    ],
    grammar: [
      {
        pattern: "〜とき",
        vietnamese: "Khi ~, lúc ~",
        english: "When ~",
        explanation: "Diễn tả thời điểm xảy ra sự việc. Động từ từ điển + とき (trước khi/trong khi), た-form + とき (sau khi). い形・な形・名詞thể thường + とき.",
        examples: [
          {
            japanese: "日本に　行く　とき、何を　持って　行きますか。",
            vietnamese: "Khi đi Nhật, bạn mang gì theo?",
            english: "When you go to Japan, what will you take?"
          },
          {
            japanese: "暇な　とき、何を　しますか。",
            vietnamese: "Khi rảnh, bạn làm gì?",
            english: "What do you do when you're free?"
          },
          {
            japanese: "子どもの　とき、よく　ここで　遊びました。",
            vietnamese: "Hồi còn nhỏ, tôi thường chơi ở đây.",
            english: "When I was a child, I often played here."
          }
        ]
      },
      {
        pattern: "〜と",
        vietnamese: "Nếu ~ thì ~ (điều kiện tự nhiên)",
        english: "If/When ~ (natural consequence)",
        explanation: "Diễn tả điều kiện tự nhiên, kết quả luôn xảy ra. Động từ thể thường + と. Dùng cho sự thật, quy luật, hướng dẫn.",
        examples: [
          {
            japanese: "春に　なると、花が　咲きます。",
            vietnamese: "Khi sang xuân, hoa nở.",
            english: "When spring comes, flowers bloom."
          },
          {
            japanese: "この　ボタンを　押すと、ドアが　開きます。",
            vietnamese: "Nếu nhấn nút này, cửa sẽ mở.",
            english: "If you press this button, the door opens."
          },
          {
            japanese: "右に　曲がると、銀行が　あります。",
            vietnamese: "Nếu rẽ phải, có ngân hàng.",
            english: "If you turn right, there is a bank."
          }
        ]
      },
      {
        pattern: "〜前に / 〜後で",
        vietnamese: "Trước khi ~ / Sau khi ~",
        english: "Before ~ / After ~",
        explanation: "Diễn tả thời điểm trước hoặc sau hành động. 前に: động từ từ điển + 前に. 後で: た-form + 後で. Danh từ + の前に/の後で.",
        examples: [
          {
            japanese: "寝る　前に、歯を　磨きます。",
            vietnamese: "Trước khi ngủ, tôi đánh răng.",
            english: "Before going to bed, I brush my teeth."
          },
          {
            japanese: "ご飯を　食べた　後で、散歩します。",
            vietnamese: "Sau khi ăn cơm, tôi đi dạo.",
            english: "After eating, I take a walk."
          },
          {
            japanese: "授業の　前に、予習します。",
            vietnamese: "Trước giờ học, tôi chuẩn bị bài.",
            english: "Before class, I prepare the lesson."
          }
        ]
      },
      {
        pattern: "〜ながら",
        vietnamese: "Vừa ~ vừa ~ (đồng thời)",
        english: "While ~, ~ at the same time",
        explanation: "Diễn tả hai hành động xảy ra đồng thời. Động từ ます-form bỏ ます + ながら. Hành động chính ở cuối câu.",
        examples: [
          {
            japanese: "音楽を　聞きながら、勉強します。",
            vietnamese: "Tôi vừa học vừa nghe nhạc.",
            english: "I study while listening to music."
          },
          {
            japanese: "テレビを　見ながら、ご飯を　食べます。",
            vietnamese: "Tôi vừa ăn cơm vừa xem TV.",
            english: "I eat while watching TV."
          },
          {
            japanese: "歩きながら、話しましょう。",
            vietnamese: "Hãy vừa đi vừa nói chuyện.",
            english: "Let's talk while walking."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 24 — くれます (Give to me)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 24,
    title: "くれます (Cho tôi/ai đó)",
    vocabulary: [
      {
        japanese: "くれます",
        kana: "くれます",
        vietnamese: "cho (tôi/người thân của tôi)",
        english: "To give (to me/my group)",
        example: "友達が本をくれました。"
      },
      {
        japanese: "あげます",
        kana: "あげます",
        vietnamese: "cho, tặng",
        english: "To give",
        example: "友達にプレゼントをあげます。"
      },
      {
        japanese: "もらいます",
        kana: "もらいます",
        vietnamese: "nhận được",
        english: "To receive",
        example: "母にセーターをもらいました。"
      },
      {
        japanese: "連れて行きます（つれていきます）",
        kana: "つれていきます",
        vietnamese: "dẫn đi, đưa đi",
        english: "To take (someone)",
        example: "子どもを公園に連れて行きます。"
      },
      {
        japanese: "連れて来ます（つれてきます）",
        kana: "つれてきます",
        vietnamese: "dẫn đến, đưa đến",
        english: "To bring (someone)",
        example: "友達を家に連れて来ました。"
      },
      {
        japanese: "送ります（おくります）",
        kana: "おくります",
        vietnamese: "gửi, tiễn",
        english: "To send, to see off",
        example: "駅まで送ります。"
      },
      {
        japanese: "紹介します（しょうかいします）",
        kana: "しょうかいします",
        vietnamese: "giới thiệu",
        english: "To introduce",
        example: "友達を紹介します。"
      },
      {
        japanese: "案内します（あんないします）",
        kana: "あんないします",
        vietnamese: "hướng dẫn, dẫn đường",
        english: "To guide, to show around",
        example: "東京を案内してくれました。"
      },
      {
        japanese: "説明します（せつめいします）",
        kana: "せつめいします",
        vietnamese: "giải thích",
        english: "To explain",
        example: "使い方を説明してくれました。"
      },
      {
        japanese: "迎えに来ます（むかえにきます）",
        kana: "むかえにきます",
        vietnamese: "đến đón",
        english: "To come to pick up",
        example: "空港に迎えに来てくれました。"
      },
      {
        japanese: "届けます（とどけます）",
        kana: "とどけます",
        vietnamese: "giao, chuyển đến",
        english: "To deliver",
        example: "荷物を届けます。"
      },
      {
        japanese: "直します（なおします）",
        kana: "なおします",
        vietnamese: "sửa chữa",
        english: "To fix, to repair",
        example: "父がパソコンを直してくれました。"
      },
      {
        japanese: "翻訳します（ほんやくします）",
        kana: "ほんやくします",
        vietnamese: "dịch, phiên dịch",
        english: "To translate",
        example: "手紙を翻訳してもらいました。"
      },
      {
        japanese: "相談します（そうだんします）",
        kana: "そうだんします",
        vietnamese: "tham khảo, bàn bạc",
        english: "To consult",
        example: "先生に相談しました。"
      },
      {
        japanese: "世話をします（せわをします）",
        kana: "せわをします",
        vietnamese: "chăm sóc",
        english: "To take care of",
        example: "犬の世話をします。"
      },
      {
        japanese: "おじいさん",
        kana: "おじいさん",
        vietnamese: "ông (nội/ngoại)",
        english: "Grandfather, old man",
        example: "おじいさんは元気ですか。"
      },
      {
        japanese: "おばあさん",
        kana: "おばあさん",
        vietnamese: "bà (nội/ngoại)",
        english: "Grandmother, old woman",
        example: "おばあさんがセーターを作ってくれました。"
      },
      {
        japanese: "おじさん",
        kana: "おじさん",
        vietnamese: "chú, bác (nam)",
        english: "Uncle, middle-aged man",
        example: "おじさんにお土産をもらいました。"
      },
      {
        japanese: "おばさん",
        kana: "おばさん",
        vietnamese: "cô, dì, bác (nữ)",
        english: "Aunt, middle-aged woman",
        example: "おばさんがケーキを作ってくれました。"
      },
      {
        japanese: "息子（むすこ）",
        kana: "むすこ",
        vietnamese: "con trai (của mình)",
        english: "Son",
        example: "息子は大学生です。"
      },
      {
        japanese: "娘（むすめ）",
        kana: "むすめ",
        vietnamese: "con gái (của mình)",
        english: "Daughter",
        example: "娘は高校生です。"
      },
      {
        japanese: "自分（じぶん）",
        kana: "じぶん",
        vietnamese: "bản thân, tự mình",
        english: "Oneself",
        example: "自分でやります。"
      },
      {
        japanese: "先輩（せんぱい）",
        kana: "せんぱい",
        vietnamese: "tiền bối, đàn anh/chị",
        english: "Senior (at work/school)",
        example: "先輩がいろいろ教えてくれました。"
      },
      {
        japanese: "後輩（こうはい）",
        kana: "こうはい",
        vietnamese: "hậu bối, đàn em",
        english: "Junior (at work/school)",
        example: "後輩に仕事を教えてあげました。"
      },
      {
        japanese: "社長（しゃちょう）",
        kana: "しゃちょう",
        vietnamese: "giám đốc, chủ tịch công ty",
        english: "Company president",
        example: "社長に紹介してもらいました。"
      },
      {
        japanese: "部長（ぶちょう）",
        kana: "ぶちょう",
        vietnamese: "trưởng phòng",
        english: "Department manager",
        example: "部長が推薦してくれました。"
      },
      {
        japanese: "課長（かちょう）",
        kana: "かちょう",
        vietnamese: "trưởng ban, trưởng bộ phận",
        english: "Section chief",
        example: "課長に相談しました。"
      },
      {
        japanese: "奥さん（おくさん）",
        kana: "おくさん",
        vietnamese: "vợ (của người khác)",
        english: "Wife (someone else's)",
        example: "田中さんの奥さんは先生です。"
      },
      {
        japanese: "ご主人（ごしゅじん）",
        kana: "ごしゅじん",
        vietnamese: "chồng (của người khác)",
        english: "Husband (someone else's)",
        example: "ご主人はお元気ですか。"
      },
      {
        japanese: "〜てあげます",
        kana: "〜てあげます",
        vietnamese: "làm ~ cho (ai đó)",
        english: "To do ~ for someone",
        example: "友達に日本語を教えてあげました。"
      },
      {
        japanese: "〜てもらいます",
        kana: "〜てもらいます",
        vietnamese: "được (ai đó) làm ~ cho",
        english: "To have someone do ~ for me",
        example: "友達に手伝ってもらいました。"
      },
      {
        japanese: "〜てくれます",
        kana: "〜てくれます",
        vietnamese: "(Ai đó) làm ~ cho tôi",
        english: "Someone does ~ for me",
        example: "母が料理を作ってくれました。"
      }
    ],
    grammar: [
      {
        pattern: "あげます / くれます / もらいます",
        vietnamese: "Cho (từ tôi) / Cho (cho tôi) / Nhận",
        english: "Give (from me) / Give (to me) / Receive",
        explanation: "Ba động từ chỉ việc cho nhận. あげます: tôi cho người khác. くれます: người khác cho tôi. もらいます: tôi nhận từ người khác.",
        examples: [
          {
            japanese: "私は　友達に　プレゼントを　あげました。",
            vietnamese: "Tôi đã tặng quà cho bạn.",
            english: "I gave a present to my friend."
          },
          {
            japanese: "友達が　私に　プレゼントを　くれました。",
            vietnamese: "Bạn đã tặng quà cho tôi.",
            english: "My friend gave me a present."
          },
          {
            japanese: "私は　友達に　プレゼントを　もらいました。",
            vietnamese: "Tôi đã nhận quà từ bạn.",
            english: "I received a present from my friend."
          }
        ]
      },
      {
        pattern: "〜てあげます / 〜てくれます / 〜てもらいます",
        vietnamese: "Làm ~ cho (ai) / (Ai) làm ~ cho tôi / Nhờ (ai) làm ~",
        english: "Do ~ for someone / Someone does ~ for me / Have someone do ~",
        explanation: "Động từ て-form kết hợp với động từ cho nhận. てあげます: làm giúp người khác. てくれます: người khác làm giúp tôi. てもらいます: được người khác làm giúp.",
        examples: [
          {
            japanese: "私は　弟に　日本語を　教えて　あげました。",
            vietnamese: "Tôi đã dạy tiếng Nhật cho em trai.",
            english: "I taught Japanese to my younger brother."
          },
          {
            japanese: "母が　料理を　作って　くれました。",
            vietnamese: "Mẹ đã nấu ăn cho tôi.",
            english: "My mother cooked for me."
          },
          {
            japanese: "私は　先生に　漢字を　教えて　もらいました。",
            vietnamese: "Tôi đã được thầy dạy chữ Hán.",
            english: "I had my teacher teach me kanji."
          }
        ]
      },
      {
        pattern: "〜に〜を　あげます",
        vietnamese: "Cho ~ (cho ai)",
        english: "Give ~ to someone",
        explanation: "Cấu trúc cho đồ vật. Người nhận + に + đồ vật + を + あげます. に chỉ người nhận, を chỉ đồ vật được cho.",
        examples: [
          {
            japanese: "田中さんに　花を　あげました。",
            vietnamese: "Tôi đã tặng hoa cho anh Tanaka.",
            english: "I gave flowers to Mr. Tanaka."
          },
          {
            japanese: "友達に　お土産を　あげます。",
            vietnamese: "Tôi tặng quà lưu niệm cho bạn.",
            english: "I give souvenirs to my friend."
          },
          {
            japanese: "妹に　本を　あげました。",
            vietnamese: "Tôi đã cho em gái quyển sách.",
            english: "I gave a book to my younger sister."
          }
        ]
      },
      {
        pattern: "〜に〜を　もらいます",
        vietnamese: "Nhận ~ từ (ai)",
        english: "Receive ~ from someone",
        explanation: "Cấu trúc nhận đồ vật. Người cho + に + đồ vật + を + もらいます. に chỉ người cho (nguồn gốc).",
        examples: [
          {
            japanese: "田中さんに　チョコレートを　もらいました。",
            vietnamese: "Tôi đã nhận chocolate từ anh Tanaka.",
            english: "I received chocolate from Mr. Tanaka."
          },
          {
            japanese: "誕生日に　両親に　時計を　もらいました。",
            vietnamese: "Sinh nhật tôi đã nhận đồng hồ từ bố mẹ.",
            english: "I received a watch from my parents on my birthday."
          },
          {
            japanese: "友達に　手紙を　もらいました。",
            vietnamese: "Tôi đã nhận thư từ bạn.",
            english: "I received a letter from my friend."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════
  // LESSON 25 — ～たら (If ~ then ~)
  // ═══════════════════════════════════════════
  {
    lessonNumber: 25,
    title: "〜たら (Nếu ~ thì)",
    vocabulary: [
      {
        japanese: "考えます（かんがえます）",
        kana: "かんがえます",
        vietnamese: "suy nghĩ",
        english: "To think, to consider",
        example: "もう少し考えます。"
      },
      {
        japanese: "着きます（つきます）",
        kana: "つきます",
        vietnamese: "đến nơi",
        english: "To arrive",
        example: "駅に着いたら、電話してください。"
      },
      {
        japanese: "間に合います（まにあいます）",
        kana: "まにあいます",
        vietnamese: "kịp giờ",
        english: "To be in time",
        example: "急いだら、間に合います。"
      },
      {
        japanese: "開きます（あきます）",
        kana: "あきます",
        vietnamese: "mở (cửa tự mở)",
        english: "To open (intransitive)",
        example: "9時になったら、店が開きます。"
      },
      {
        japanese: "入学します（にゅうがくします）",
        kana: "にゅうがくします",
        vietnamese: "nhập học",
        english: "To enter school",
        example: "来年大学に入学します。"
      },
      {
        japanese: "卒業します（そつぎょうします）",
        kana: "そつぎょうします",
        vietnamese: "tốt nghiệp",
        english: "To graduate",
        example: "大学を卒業したら、日本で働きたいです。"
      },
      {
        japanese: "就職します（しゅうしょくします）",
        kana: "しゅうしょくします",
        vietnamese: "xin việc, đi làm",
        english: "To get a job",
        example: "卒業したら、就職します。"
      },
      {
        japanese: "引退します（いんたいします）",
        kana: "いんたいします",
        vietnamese: "nghỉ hưu, giải nghệ",
        english: "To retire",
        example: "60歳になったら、引退します。"
      },
      {
        japanese: "今度（こんど）",
        kana: "こんど",
        vietnamese: "lần sau, lần tới",
        english: "Next time",
        example: "今度、一緒に行きましょう。"
      },
      {
        japanese: "一生（いっしょう）",
        kana: "いっしょう",
        vietnamese: "cả đời, suốt đời",
        english: "Whole life",
        example: "一生日本語を勉強したいです。"
      },
      {
        japanese: "いつか",
        kana: "いつか",
        vietnamese: "một ngày nào đó",
        english: "Someday",
        example: "いつか日本に住みたいです。"
      },
      {
        japanese: "たぶん",
        kana: "たぶん",
        vietnamese: "có lẽ, chắc là",
        english: "Probably, maybe",
        example: "たぶん大丈夫だと思います。"
      },
      {
        japanese: "きっと",
        kana: "きっと",
        vietnamese: "chắc chắn",
        english: "Surely, certainly",
        example: "きっと合格できますよ。"
      },
      {
        japanese: "本当に（ほんとうに）",
        kana: "ほんとうに",
        vietnamese: "thực sự, thật sự",
        english: "Really, truly",
        example: "本当にありがとうございます。"
      },
      {
        japanese: "もし",
        kana: "もし",
        vietnamese: "nếu (giả sử)",
        english: "If",
        example: "もし時間があったら、来てください。"
      },
      {
        japanese: "いくら〜ても",
        kana: "いくら〜ても",
        vietnamese: "dù ~ bao nhiêu đi nữa",
        english: "No matter how much ~",
        example: "いくら食べても太りません。"
      },
      {
        japanese: "〜たら",
        kana: "〜たら",
        vietnamese: "nếu ~ thì, khi ~ thì",
        english: "If ~, when ~",
        example: "雨が降ったら、行きません。"
      },
      {
        japanese: "〜ても",
        kana: "〜ても",
        vietnamese: "dù ~ cũng, cho dù ~",
        english: "Even if ~",
        example: "雨が降っても、行きます。"
      },
      {
        japanese: "〜なら",
        kana: "〜なら",
        vietnamese: "nếu (nói về ~) thì",
        english: "If (talking about ~)",
        example: "日本料理なら、寿司が好きです。"
      },
      {
        japanese: "チャンス",
        kana: "チャンス",
        vietnamese: "cơ hội",
        english: "Chance, opportunity",
        example: "いいチャンスがあったら、留学したいです。"
      },
      {
        japanese: "教育（きょういく）",
        kana: "きょういく",
        vietnamese: "giáo dục",
        english: "Education",
        example: "教育は大切だと思います。"
      },
      {
        japanese: "環境（かんきょう）",
        kana: "かんきょう",
        vietnamese: "môi trường",
        english: "Environment",
        example: "環境を守らなければなりません。"
      },
      {
        japanese: "場合（ばあい）",
        kana: "ばあい",
        vietnamese: "trường hợp",
        english: "Case, situation",
        example: "雨の場合は中止です。"
      },
      {
        japanese: "経験（けいけん）",
        kana: "けいけん",
        vietnamese: "kinh nghiệm",
        english: "Experience",
        example: "いい経験になりました。"
      },
      {
        japanese: "卒業式（そつぎょうしき）",
        kana: "そつぎょうしき",
        vietnamese: "lễ tốt nghiệp",
        english: "Graduation ceremony",
        example: "卒業式に出席しました。"
      },
      {
        japanese: "結婚式（けっこんしき）",
        kana: "けっこんしき",
        vietnamese: "lễ cưới",
        english: "Wedding ceremony",
        example: "来月友達の結婚式があります。"
      }
    ],
    grammar: [
      {
        pattern: "〜たら",
        vietnamese: "Nếu ~ thì ~, khi ~ thì ~",
        english: "If/When ~ (conditional)",
        explanation: "Diễn tả điều kiện giả định. た-form (động từ/い形/な形/danh từ) + ら. Dùng cho lời khuyên, đề nghị, điều kiện giả định. VD: 行く→行ったら.",
        examples: [
          {
            japanese: "春に　なったら、花見に　行きましょう。",
            vietnamese: "Khi sang xuân, hãy đi ngắm hoa.",
            english: "When spring comes, let's go see cherry blossoms."
          },
          {
            japanese: "時間が　あったら、手伝って　ください。",
            vietnamese: "Nếu có thời gian, hãy giúp tôi.",
            english: "If you have time, please help me."
          },
          {
            japanese: "雨が　降ったら、出かけません。",
            vietnamese: "Nếu trời mưa, tôi sẽ không ra ngoài.",
            english: "If it rains, I won't go out."
          }
        ]
      },
      {
        pattern: "〜ても",
        vietnamese: "Dù ~, cho dù ~",
        english: "Even if/though ~",
        explanation: "Diễn tả điều kiện đối lập. て-form + も. Dù điều kiện có xảy ra, kết quả vẫn không đổi. VD: 行く→行っても, 高い→高くても.",
        examples: [
          {
            japanese: "雨が　降っても、行きます。",
            vietnamese: "Dù trời mưa, tôi vẫn đi.",
            english: "Even if it rains, I'll go."
          },
          {
            japanese: "高くても、買います。",
            vietnamese: "Dù đắt, tôi vẫn mua.",
            english: "Even if it's expensive, I'll buy it."
          },
          {
            japanese: "忙しくても、電話してください。",
            vietnamese: "Dù bận, hãy gọi điện cho tôi.",
            english: "Even if you're busy, please call me."
          }
        ]
      },
      {
        pattern: "〜たら、〜（発見）",
        vietnamese: "~ thì phát hiện ~, ~ thì ~",
        english: "When ~ (discovered/found that ~)",
        explanation: "Diễn tả phát hiện bất ngờ sau khi làm gì. Hành động trước dùng たら, sau đó là phát hiện/kết quả bất ngờ.",
        examples: [
          {
            japanese: "家に　帰ったら、猫が　いました。",
            vietnamese: "Khi về nhà, có con mèo.",
            english: "When I got home, there was a cat."
          },
          {
            japanese: "駅に　着いたら、雨が　降って　いました。",
            vietnamese: "Khi đến ga, trời đang mưa.",
            english: "When I arrived at the station, it was raining."
          },
          {
            japanese: "窓を　開けたら、鳥が　飛んで　きました。",
            vietnamese: "Khi mở cửa sổ, có con chim bay vào.",
            english: "When I opened the window, a bird flew in."
          }
        ]
      },
      {
        pattern: "〜でも",
        vietnamese: "Dù ~ (cho dù)",
        english: "Even ~, no matter ~",
        explanation: "Nhấn mạnh 'bất kể cái gì'. Dùng với từ để hỏi + でも: 何でも (bất cứ gì), どこでも (bất cứ đâu), だれでも (bất cứ ai).",
        examples: [
          {
            japanese: "何でも　食べます。",
            vietnamese: "Tôi ăn bất cứ thứ gì.",
            english: "I eat anything."
          },
          {
            japanese: "どこでも　行きます。",
            vietnamese: "Tôi đi bất cứ đâu.",
            english: "I'll go anywhere."
          },
          {
            japanese: "だれでも　参加できます。",
            vietnamese: "Bất cứ ai cũng có thể tham gia.",
            english: "Anyone can participate."
          }
        ]
      },
      {
        pattern: "〜ば（条件形）",
        vietnamese: "Nếu ~ (dạng điều kiện)",
        english: "If ~ (conditional form)",
        explanation: "Dạng điều kiện khác của động từ (nâng cao). Động từ: 〜えば. い形: 〜ければ. な形・名詞: であれば. VD: 行く→行けば, 高い→高ければ.",
        examples: [
          {
            japanese: "時間が　あれば、手伝います。",
            vietnamese: "Nếu có thời gian, tôi sẽ giúp.",
            english: "If I have time, I'll help."
          },
          {
            japanese: "安ければ、買います。",
            vietnamese: "Nếu rẻ, tôi sẽ mua.",
            english: "If it's cheap, I'll buy it."
          },
          {
            japanese: "わからなければ、聞いてください。",
            vietnamese: "Nếu không hiểu, hãy hỏi.",
            english: "If you don't understand, please ask."
          }
        ]
      }
    ]
  }
];
