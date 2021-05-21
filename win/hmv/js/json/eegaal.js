const eegaal_dataSet = [
  ["","القِسمُ الأَوَّلُ\n\nكِتَابُ الأَسمَاءِ",5  ],
  ["","بَابُ الأَلِفِ\n\nا މިއީ اَلِفُ بَا ގެ އެއްވަނަ އަކުރެވެ. އެއީ اَبجَدُން (1) މިعَدَدެވެ.",5  ],
  ["މާތްރަސްކަލާގެ","اَللهُ",5  ],
  ["މާތްރަސްކަލާގެ","اَللهُ",5  ],
  ["ބަފައި","اَبٌ",5  ],
  ["ވިނަ. ވަޒަންއެދުންވެރިވުން","اَبٌّ",5  ],
  ["ފެން. އަވާމެންދުރު","اَبَابٌ",5  ],
  ["ތިނޯސްހަދާވިއްކާމީހާ","اَبَّارٌ",5  ],
  ["جَمَلُ [ޖަމަލު]ގެ ކުރީމޮއްގަޑުބަންނަވާގަޑު","اِبَاضٌ",5  ],
  ["ކިހިލިޖަހާފައިވާއެތިގަޑު","اِبَاطٌ",5  ],
  ["ކަމެއްގެއެއްޗެއްގެކުރީކޮޅު","اِبَّانٌ",5  ],
  ["ފެށުން","اِبْتِدَاءٌ",5  ],
  ["ހިނިތުންވުން","اِبْتِسَامٌ",5  ],
  ["ދުވަހަކު. އަބަދު","اَبَدٌ",5  ],
  ["ކަމެއްކަޑައެޅުން. ރޮދިއެބުރުން","اِبْرَامٌ",5  ],
  ["ތިނޯސް","اِبْرَةٌ",5  ],
  ["ތިނޯސްވިއްކާމީހާ","اِبْرِيٌّ",5  ],
  ["ސާފުރަތުރަން","اِبْرِيزٌ",5  ],
  ["ކެދުފަށުއި","اِبْرِيمٌ",5  ],
  ["ފެންއަޅާކުރާ","اِبْرِيقٌ",5  ],
  ["ކަމަރުގެމޫނުމަތި","اِبْزِيمٌ",5  ],
  ["ކިހިލިފަތް","اِبْطٌ",5  ],
  ["جَمَلُ [ޖަމަލު] އޮށް","اِبِلٌ",5  ],
  ["ފިރިހެންދަރި","اِبْنٌ",5  ],
  ["އަންހެންދަރި","اِبْنَةٌ",5  ],
  ["ގަސްގަހުގެބަދަ. عَيبُ [ޢައިބު]","اُبْنَةٌ",5  ],
  ["ކަޅުވަކަރު","آبْنُوسٌ",5  ],
  ["ބޮޑުވާއިގިލި","اِبْهَامٌ",5  ],
  ["އަންހެން حِمَارُ [ޙިމާރު]","اَتَانٌ",5  ],
  ["ވާރު. رِشوَةٌ [ރިޝްވަތު]","إِتَاوَةٌ",6  ],
  ["ބީރައްޓެހިމީހާ","أَتَاوِيٌّ",6  ],
  ["ނިއަދުރު","أُتْرُنْجٌ",6  ],
  ["ގެވެހިކަންވާރު","أَثَاثٌ",6  ],
  ["ލަކުނު","أُثْرٌ",6  ],
  ["އުދުންޖަހާހިލަ","أُثْفِيَّةٌ",6  ],
  ["ފާފަ","إِثْمٌ",6  ],
  ["ފާފަވެރިޔާ","آثِمٌ",6  ],
  ["ގަލަދުން","إِثْمِدٌ",6  ],
  ["ކަމެއްގެތެރެ","أَثْنَاءٌ",6  ],
  ["ދޭއް","اِثْنَانِ",6  ],
  ["ބާރަ","اِثْنَا عَشَرَ",6  ],
  ["ޖަވާބުދިނުން","إِجَابَةٌ",6  ],
  ["ލޮނުގަދަފެން","أُجَاجٌ",6  ],
  ["އަލޫބޮخَاރު [އަލޫބޮޚާރު]","إِجَّاصٌ",6  ],
  ["އެއްޗެހިދޮންނަމުށިގަޑު","إِجَّانَةٌ",6  ],
  ["ހޫނުގެގަދަކަން","أَجَّةٌ",6  ],
  ["އިނާމު. ދަރުމަ","أَجْرٌ",6  ],
  ["ރާނާއީޓު","آجُرٌّ",6  ],
  ["ކުލި. މުސާރަ","أُجْرَةٌ",6  ],
  ["ބޭސްފިހާރަ","أَجْزَاخَانَةٌ",6  ],
  ["އާއެކޭ","أَجَلْ",6  ],
  ["ޓަކައި. ސަބަބު","أَجْلٌ",6  ],
  ["مُدَّةُ [މުއްދަތު] ގެ ނިމޭކޮޅު","أَجَلٌ",6  ],
  ["ކަދުރާގެރިހުން. ފުއްލާގެބައިގަޑު","إِجْلٌ",6  ],
  ["آخِرَة [އާޚިރަތް] ދުވަސް","آجِلَةٌ",6  ],
  ["ކިއްލާ","أُجُمٌ",6  ],
  ["ބޯވާގަޑު. ޖަންގަލީ","أَجَمَةٌ",6  ],
  ["ހިލޭމީހާ. ބިދޭސީން","أَجْنَبِيٌّ",6  ],
  ["ފެންއޮހޭއަޑު. އަލިފާނުގެއަޑު","أَجِيْجٌ",6  ],
  ["ކުލީމީހާ","أَجِيْرٌ",6  ],
  ["ކެއްސުން","اَحٌّ",6  ],
  ["ފެންބޮވުން. އަގަހިކުން","أُحَاحٌ",6  ],
  ["مَجلِس [މަޖްލިސް] ކުރުން","اِحْتِفَالٌ",6  ],
  ["ހުވަފެނުގައިމަނިބޭރުވުން","اِحْتِلَامٌ",6  ],
  ["އެކެން","أَحَدٌ",6  ],
  ["މަދީނާކައިރިފަރުބަދައެއް","أُحُدٌ",6  ],
  ["އެތެރެހަށީތަކެތި","أَحْشَاءٌ",6  ],
  ["ކުޑަގިފިލިނުކުންނަހޮޅި","إِحْلِيْلٌ",6  ],
  ["ބުއްދިހަމަނުވާމީހާ","أَحْمَقُ",6  ],
  ["ކަޅުކަޅިކަޅު. ހުދުކަޅިހުދުމީހާ","أَحْوَرُ",7  ],
  ["އެއްބަފާ. ނުވަތައެއްބަޑުފިރިހެނާ","أَخٌ",7  ],
  ["ހިޔާވިހާ. ނަކަތެއް","أُخْبِيَةٌ",7  ],
  ["އެއްބަފާ. ނުވަތައެއްބަޑުއަންހެނާ","أُخْتٌ",7  ],
  ["ދިގުވަޅުގަޑު","أُخْدُوْدٌ",7  ],
  ["ފަހުކޮޅު","آخِرٌ",7  ],
  ["އަނެއް. އެހެން","آخَرُ",7  ],
  ["މަންމަނު","أَخْرَسُ",7  ],
  ["ބުރިކަށީގުދުނިކުމެފާއިވާމީހާ","أَخْزَلُ",7  ],
  ["ބޯވަ","أُخْطُبُوْطٌ",7  ],
  ["ލޮލުގެފެނުންކޮށިމީހާ","أَخْفَشُ",7  ],
  ["ދަށްފައިގެމެދުގައިވާއަޑިތަން","أَخْمَصٌ",7  ],
  ["ބިރުބޮޑުކަމެއް","إِدٌّ",7  ],
  ["ހަތިޔާރު. އާލާތް","أَدَاةٌ",7  ],
  ["ލައިގެންކާތަކެތި","إِدَامٌ",7  ],
  ["ނިއަނެތިކަން. أَدَبُ [އަދަބު]ވެރިކަން","أَدَبٌ",7  ],
  ["ހަމުގެއެތެރެފުއް","أَدَمَةٌ",7  ],
  ["އަދަބުވެރިޔާ","أَدِيْبٌ",7  ],
  ["ވެލި. دِبَاغُ [ދިބާޣު]ކުޅަހަން","أَدِيْمٌ",7  ],
  ["އިޒުނަލިބުން. ދިނުން","إِذْنٌ",7  ],
  ["ކަންފަތް. އުޅައް","أُذُنٌ",7  ],
  ["ބަންގި. އަންގައިލުން","أَذَانٌ",7  ],
  ["އުދަގޫ","أَذَى",7  ],
  ["އުދަގޫދިނުން. ލިބުން","أَذِيَّةٌ",7  ],
  ["ބޭނުން","أَرَبٌ",7  ],
  ["އެއްޗެތީގައިޖަހާގޮށް","أُرْبَةٌ",7  ],
  ["ހަތަރެއް. 4","أَرْبَعَةٌ",7  ],
  ["ބުދަ","أَرْبِعَاءٌ",7  ],
  ["ސާޅީސް. 40","أَرْبَعُونَ",7  ],
  ["މާކަޅުވާމަހުގެބުޑު","أُرْبِيَّةٌ",7  ],
  ["މަދުމަދުންބުއިން","اِرْتِشَافٌ",7  ],
  ["މީރުވަސް","أَرَجٌ",7  ],
  ["ފަރާތްފަރާތް","أَرْجَاءٌ",7  ],
  ["އުދޯލި","أُرْجُوْحَةٌ",7  ],
  ["ބަސްތާއެއް. 24 صَاعُ [ޞާޢު]","إِرْدَبٌّ",7  ],
  ["ހަޑޫ","أَرُزٌّ",7  ],
  ["ބިންގަޑު","أَرْضٌ",7  ],
  ["ކަތުރުފަނި","أَرَضَةٌ",7  ],
  ["ރޭގަޑުނިދިނައުން","أَرَقٌ",7  ],
  ["ރުޅިއައިސްގެންދަތްކޭރުވުން","أُرَّمٌ",7  ],
  ["ހުވަފަތްއަންހެނާ","أَرْمَلَةٌ",8  ],
  ["މުސަޅު","أَرْنَبٌ",8  ],
  ["ނޭފަތުކުރި. އަންހެންމުސަޅު","أَرْنَبَةٌ",8  ],
  ["ބުއްދިވެރިޔާ","أَرِيْبٌ",8  ],
  ["ރަސްކަމުގެ تَختُ [ތަޚުތު]. ސިންގާސަނާ","أَرِيْكَةٌ",8  ],
  ["ދިމާ. ކުރިމަތި","إِزَاءٌ",8  ],
  ["އަންނައެތިގަޑު","إِزَارٌ",8  ],
  ["ގުނައިރުހަނުހުރުން","أَزْمٌ",8  ],
  ["ތަދުމަޑުކަން","أَزْمَةٌ",8  ],
  ["ވަޑާންކަށި","إِزْمِيْلٌ",8  ],
  ["ތެލިކެކޭއަޑު","أَزِيْزٌ",8  ],
  ["ބިންގާ. ތަރަހަ","أَسَاسٌ",8  ],
  ["ސިންގާ","أُسَامَةُ",8  ],
  ["ހުކުރުހަތްދުވަސް","أُسْبُوْعٌ",8  ],
  ["ފިދުމަސްގަޑުގެކޮޅު","إِسْتٌ",8  ],
  ["އެދުރުމީހާ","أُسْتَاذٌ",8  ],
  ["ސިންގާ","أَسَدٌ",8  ],
  ["ހުދުތިމަރަ","أُسْرُبٌ",8  ],
  ["މީހާގެ أَهلُ [އަހުލު]ވެރީން","أُسْرَةٌ",8  ],
  ["މަނަވަރުފައްޗެއް","أُسْطُوْلٌ",8  ],
  ["ގަދަހިތާމަ","أَسَفٌ",8  ],
  ["ހިތާމަވެރިޔާ","آسِفٌ",8  ],
  ["ހުހިވައް","إِسْفَنْجٌ",8  ],
  ["ހުދުރެވި","إِسْفَنْدٌ",8  ],
  ["ހިންދޫރަ","إِسْفِيْدَاجٌ",8  ],
  ["ލަކުޑިފަޅާއަބު","إِسْفِيْنٌ",8  ],
  ["نَصَارَى [ނަޞާރާ]އިންގެދަންނަބޭކަލުން","أُسْقُفٌّ",8  ],
  ["ފައިވާނާއި خُفُّ [ޚުއްފު]ހަދާމީހާ","إِسْكَافٌ",8  ],
  ["رُومُ [ރޫމު]ކަޑުގެބަދަރު","إِسْكِلَةٌ",8  ],
  ["ލޮންސި. ހައިގަސް","أَسَلٌ",8  ],
  ["ބަސްބުނުމުގެގޮތް. މަގު","أُسْلُوْبٌ",8  ],
  ["ނަން","اِسْمٌ",8  ],
  ["ބޭސްކުރާމީހާ","آسِيْ",8  ],
  ["ޚަބަރުފާއުޅުކުރުން","إِشَاعَةٌ",8  ],
  ["ބައިވެރިވުން","اِشْتِرَاكٌ",8  ],
  ["ކީހުން","أَشْرٌ",8  ],
  ["ބޮޑިކަދޮޅު","إِشْقِيْلٌ",8  ],
  ["ހަންޑިހަތް","أُشْنَةٌ",8  ],
  ["އިގިލި","إِصْبَعٌ",8  ],
  ["އަސްތިބޭގެ","إِصْطَبَلٌ",8  ],
  ["ކޮންމެ އެއްޗެއްގެ ބުޑުގަނޑު","اَصلٌ",9  ],
  ["ގަސް އިންދާ މުށި","اَصِيصٌ",9  ],
  ["ހަވީރު ނަސަބުމޮޅުމީހާ","اَصِيلٌ",9  ],
  ["އަލިކުރުން","اِضَاءَةٌ",9  ],
  ["ނަގައިލުން","اِضَاعَةٌ",9  ],
  ["އެކޮޅު ކޮޅު ތަކެތި","اَضدَادٌ",9  ],
  ["ގިނަ ގުނަވުން","اَضعَافٌ",9  ],
  ["ހަލާކުވެ ނެތިދިއުން","اِضمِحلَالٌ",9  ],
  ["ގިއު ގަނޑު ފްރޭމް","اِطَارٌ",9  ],
  ["ގިއުގަނޑު ހަދާ ވިއްކާ މީހާ","اَطَّارٌ",9  ],
  ["ބޮޑަށް ތާރީފްކުރުން","اِطرَاءٌ",9  ],
  ["ބޮޑެތި ކިއްލަ","اُطُمٌ",9  ],
  ["ވެލާ. ކަހަނބު. މުސިންބި","اُطُومٌ",9  ],
  ["އަދިރިކުރުން","ظِلَامٌ",9  ],
  ["ފާޅުކަން","اِظهَارٌ",9  ],
  ["އިޤުރާރު ވުން","اِعتِرَافٌ",9  ],
  ["ކޮރުމީހާ","اَعرَجٌ",9  ],
  ["އެންގުން ފާޅުކުރުން","اِعلَانٌ",9  ],
  ["ލޯކަނު މީހާ","اَعمَى",9  ],
  ["ލޫޓުވުން","اِغَارَةٌ",9  ],
  ["އަތްގޮށީން ފެންނެގުން","اِغتِرَافٌ",9  ],
  ["ގަނޑުވުން","اِغمَاءٌ",9  ],
  ["ނޯށުން ވާހަކަދައްކާ މީހާ","اَغَنُّ",9  ],
  ["ކަންފަތު މަޑު ކަނޑާލާ ނިއަފަތިކޮޅު","اُفٌّ",9  ],
  ["ދަތިކަން ހުއްޓޭ. ޗަސްޖެހުން","اُفٍّ",9  ],
  ["ދޮގުބުނާ މީހާ","اَفَّاكٌ",9  ],
  ["مُصِيبَات [މުސީބާތް]","آفَةٌ",9  ],
  ["އުދަރެސް","اُفقٌ",9  ],
  ["ދޮގު","اِفكٌ",9  ],
  ["އިރުހަދުއޮސްން","اُفُولٌ",9  ],
  ["އަފިހުން","اَفيُونٌ",9  ],
  ["400 ދިރުހަމްގެ ބަރުދަން","اُقَّةٌ",9  ],
  ["ފާފަކުރުން","اِقتِرَافٌ",9  ],
  ["ލިބޭ ތަކެތީން ފޯރާ ވަރަށް އުޅުން ބެހެއްޓުން","اقتِصَادٌ",9  ],
  ["خِتَانُ [ޚިތާނު]ނުކުރާ މީހާ","اَقلَفُ",9  ],
  ["ބޮޑެތިވިލާތް","اِقلِيمٌ",9  ],
  ["ޙިމާރުމަތީ އަޅާ މަޑި","اُكَافٌ",9  ],
  ["ބިންގަނޑު ހަދާ ގޮވާންކުރާ މީހާ","اَكَّارٌ",9  ],
  ["ގިނައިން ކާމީހާ","اَكَّالٌ",9  ],
  ["ކެއުން","اَكلٌ",9  ],
  ["ފަޅޯ ފަޅަ މޭވާ","اُكُلٌ",10  ],
  ["ކާބާވަތުގެ ކޮންމެ އެއްޗެއް","اُكلٌ",10  ],
  ["ކޯވަރު. ބުޅީ އަޅާއެންގަނޑު","اُكلَةٌ",10  ],
  ["އެއްފަހަރު ކެއުން","اَكلَةٌ",10  ],
  ["ބޯކެހުން","اِكلَةٌ",10  ],
  ["ތުއްރަވާސް ނޮރަނަކަތް","اِكلِيلٌ",10  ],
  ["ބޮޑު ފަސްފުނި","اَكَمَةٌ",10  ],
  ["ވިހާއިރު ލޯކަނުމީހާ","اَكمَهُ",10  ],
  ["މިހާރު","اَلآنَ",10  ],
  ["ދަންނާށޭ","اَلَا",10  ],
  ["މެނުވީ.ނޫނީ","اَلاَّ",10  ],
  ["أَهلُ [އަހުލު]ވެރީން. އަވާމެންދުރު","آل",10  ],
  ["ކަނޑައެޅިގެން","اَلبَتَّه",10  ],
  ["އެނބުރިބަލާލުން","اِلتِفَاتٌ",10  ],
  ["ކެދުން. ފަށްފަށްކިއުން","اِلحَاحٌ",10  ],
  ["ހާހެއް [1000]","اَلفٌ",10  ],
  ["އެކުލަވާ ރަޙްމަތްތެރިޔާ","آلِفٌ",10  ],
  ["ހިތުގެ އެކުވެރިކަން","اُلفَةٌ",10  ],
  ["ވޭން.ވޭންލިބުން","اَلَمٌ",10  ],
  ["އަލިމަސް. އެހެއް.","اَلمَاسٌ",10  ],
  ["ފިނދުމަސްކަނޑު","اَليَةٌ",10  ],
  ["ހުވައި","اَليَّةٌ",10  ],
  ["މިއަދު","اَليَومُ",10  ],
  ["ނުވަތަ","اَم",10  ],
  ["قَصدُ [ޤަޞްދު]ކުރުން","أَمٌّ",10  ],
  ["އަމައި","أُمٌّ",10  ],
  ["ދަންނައެ","اَمَّا",10  ],
  ["އެހެންނާ","اِمَّا",10  ],
  ["ވެރިކަން","اِمَارَةٌ",10  ],
  ["عَلَامَة [ޢަލާމާތް]. ފާހަގަ","اَماَرَةٌ",10  ],
  ["ދުރުކުކުން","اِماَطَةٌ",10  ],
  ["ލަބައިލުން. ދޫޖެއްސުން","اِمَالَةٌ",10  ],
  ["ވެރިމީހާ","اِمامٌ",10  ],
  ["ކުރިމަތި","اَمَامٌ",10  ],
  ["ބާގަޔަކުމީހުން","اُمَّةٌ",10  ],
  ["ތިޔާގިއުޅުން ވައްތަރު","اِمَّةٌ",10  ],
  ["އަޅުއަންހެނާ","اَمَةٌ",10  ],
  ["އުސްތަން","اَمْتٌ",10  ],
  ["ގޮތްބެލުން. ވަރުބެލުން","اِمْتِحَانٌ",10  ],
  ["ކިއަމަންގަތުން","اِمْتِثَاَلٌ",10  ],
  ["ކަމެއް. ކަމައް އެދުން","اَمْرٌ",11  ],
  ["އަމުރުކުރާ މީހާ","آمِرٌ",11  ],
  ["މުންކަރާތެއް އަޖާބުކަމެއް","اِمْرٌ",11  ],
  ["އަންހެނާ","اِمْرَأَةٌ",11  ],
  ["އިއްޔެ","اَمْسِ",11  ],
  ["ހިމަގޮހޮރު","اَسْعَاءٌ",11  ],
  ["ކަންތަކަށް އެދުން","اَمَلٌ",11  ],
  ["ބޭސް ގޯނބިލި","اَمْلَجٌ",11  ],
  ["ގާތް. ކުޑައެތިކޮޅު","اَمَمٌ",11  ],
  ["ހުން","اُمُّ مِلْدَمٍ",11  ],
  ["މަށްކާ","اُمُّ الْقُرَى",11  ],
  ["އަމާންކަން","اَمَنْ",11  ],
  ["އަމުރު ވެރިޔާ","اَمِيرٌ",11  ],
  ["އަމާނާތް ތެރިޔާ","اَمِينٌ",11  ],
  ["އަހަރެން. މަ","اَنَا",11  ],
  ["އެއްޗެހިއަޅާ ކަންވާރު","اِنَاءٌ",11  ],
  ["މީސްތަނުން","اَنَامٌ",11  ],
  ["ހޮޅި. އޮނު. ހޮލު","اُنْبُوبٌ",11  ],
  ["އާވި ނަށްކާ އިންޖީނު","اِنْبِيقٌ",11  ],
  ["ކަލޭ","اَنْتَ",11  ],
  ["ހޭލުން","اِنْتِبَاهٌ",11  ],
  ["މޮޅުތަކެތި ހޮވުން","اِنْتِخَابٌ",11  ],
  ["ހުގުގަސް","اِنْجِدَانٌ",11  ],
  ["ނަގިލި","اَنْبَرٌ",11  ],
  ["ލެނބިލުން. ގުދުވުން","اِنْحِنَاءٌ",11  ],
  ["އާދަމުގެދަރީން","اِنْسٌ",11  ],
  ["މުނިއަވަސްފިލުވުން","اُنْسٌ",11  ],
  ["މުނިއަވަސް ފިލުވާ މީހާ","آنِسٌ",11  ],
  ["އާދަމުގެ ދަރީން","اِنْسَانٌ",11  ],
  ["ލޮލުގެކޮއި","اِنْسَانُ الْعَيْنِ",11  ],
  ["ދަމާލާ ގޮށް","اُنْشُوطَةٌ",11  ],
  ["ނޭފަތް","اَنْفٌ",11  ],
  ["ބޭނުންނުހިފާނުބަހައްޓާއެތި","اُنْفٌ",11  ],
  ["ދެންމެޔަކު","آنِفًا",11  ],
  ["ނުރުހުން. ބޮޑާކަން","آنَفَةٌ",11  ],
  ["ފުރޮޅިގެން ދިއުން","اِنْقِلَابٌ",11  ],
  ["ކިޔަމަން ގަތުން","اِنْقِيَادٌ",11  ],
  ["ވިރިފައިވާ ތިމަރަ","آنُكٌ",11  ],
  ["އިނގިލީގެ ކުރީ ބަދަ","اُنْمُلَةٌ",11  ],
  ["ނަމޫނާ","اُنْمُوذَجٌ",11  ],
  ["ބަލިވެގެން ފަހަތަށްދިއުން","اِنْهِزَامٌ",12  ],
  ["ފަރިހިދަމުއި","اَنِيْسُونْ",12  ],
  ["ވޭނުގެ ކުކުރުން","اَنِيْنٌ",12  ],
  ["ނުބައި ޖަންގަލީ އާދަ","اَوَابِدٌ",12  ],
  ["ހޫނުކަން. ކިރުހިއްކުން","اُوَارٌ",12  ],
  ["ގަދަޔަށް އަނަގަ ހިއްކުން. ބޯއެނބުރުން","اُوَامٌ",12  ],
  ["ވަގުތު","اَوَانٌ",12  ],
  ["ރޯގާ ބަލިމަޑުކަން","اَوْبِيَةٌ",12  ],
  ["މަތިވެރިކަން","اَوْخٌ",12  ],
  ["ރާދަ އަސްދޫނި. ރޭރު","اِوَنٌ",12  ],
  ["ކޮޓަރި","اَوْضَةٌ",12  ],
  ["ބާރަދިރުހަމުގެ ބަރުދަން","اُوقَيَةٌ",12  ],
  ["ފުރަތަމަ","اَوًّلٌ",12  ],
  ["ވެރި","اُولُو",12  ],
  ["ރަނގަޅުކަން ބޮޑު","اَوْلَى",12  ],
  ["އައްދޯތް","آهْ",12  ],
  ["ދީބާޣު ނުކުރާ ހަން","اَهَابٌ",12  ],
  ["ދަތުރުގެ ސާމާނު","اُهْبَةٌ",12  ],
  ["އެހީތެރިވުން","اِهْتِمَامٌ",12  ],
  ["އެސްފިޔަދިގު މީހާ","اَهْدَبٌ",12  ],
  ["ތިމާގެ މީހުން","اَهْلٌ",12  ],
  ["އެހީތެރިކަން ނުބެހެއްޓުން","اِهْمَالٌ",12  ],
  ["ބޭނުންކަން ބޮޑުވުން","اَحَمِّيًّةٌ",12  ],
  ["އެނބުރި އައުން","اِيَابٌ",12  ],
  ["އެދުން ކެނޑުން","اِيَاسٌ",12  ],
  ["މަށަށް","اِيَّايَ",12  ],
  ["އެބަހީ","اَيْ",12  ],
  ["ގަބޫލު ކުރުން","اِيْجَابٌ",12  ],
  ["ވާތްފަރާތް. ފަސޭހަކަން","اَيْسَرٌ",12  ],
  ["ހޭލެއްވުން","اِيْقَاظٌ",12  ],
  ["ދަޅުފީނި ފުށްލާ","اِيَّلٌ",12  ],
  ["ހުސްހަށިބައި މީހާ","اَيِّمٌ",12  ],
  ["އިޝާރާތް ކުރުން","اِيْمَاءٌ",12  ],
  ["ހިތުން ތެދުކުރުން","اِيْمَانٌ",12  ],
  ["ކަނާތް ފަރާތް","اَيْمَنٌ",12  ],
  ["ވަގުތު ކުޑަތަންވުން","اَيْنٌ",12  ],
  ["ކޮންތާކު","اَيْنَ",12  ],
  ["ރަސްގެފާނު މަޖިލީސްކުރާގެ","اِيْوَانٌ",12  ],
  ["","بَابُ البَاءِ\n\nب މިއީ اَلِفُ بَا ގެ ދެވަނަ އަކުރެވެ. އެއީ اَبجَدُން (2) މިعَدَدެވެ.",13  ],
  ["ދޮރު","بَابٌ",13  ],
  ["ސިލީޕަރުފައިވާން","بَابُوْجٌ",13  ],
  ["އާގުބޯޓު","بَابُوْرٌ",13  ],
  ["މެދުގޯތިތެރެ","بَاحَةٌ",13  ],
  ["ހޯދާބަލާމީހާ","بَاحِثٌ",13  ],
  ["ބުއްދިމަދުމީހާ","بَاحِرٌ",13  ],
  ["ހޫނުގެގަދަކަން","بَاحُوْرٌ",13  ],
  ["އާގުބޯޓު","بَاخِرَةٌ",13  ],
  ["އަމިއްލަޔަށްމަރުވާމީހާ","بَاخِعٌ",13  ],
  ["ބީރައްޓެހިވަލުރަށް","بَادِيَةٌ",13  ],
  ["މަތިވެރިމީހާ","بَاذِخٌ",13  ],
  ["ހޭދަކުރާމީހާ","بَاذِلٌ",13  ],
  ["ބަށި","بَاذِنْجَانٌ",13  ],
  ["ހެއުކޮއްހީތާމީހާ","بَارٌّ",13  ],
  ["قِرشُ [ޤިރްޝު]ގެ 40 ބައިކުޅައެއްބައި","بَارَةٌ",13  ],
  ["ކުޅަދާނަފަޅުވެރިޔާ","بَارِجٌ",13  ],
  ["މަވަރު","بَارِجَةٌ",13  ],
  ["ވޭތުވެދިޔަރޭ","بَارِحَةٌ",13  ],
  ["ފިނިއެއްޗެއް","بَارِدٌ",13  ],
  ["ދެފަތްނުފޮޅޭކުދިގަސް. ކޯދު","بَارِضٌ",13  ],
  ["ބަޑިބޭސް","بَارُوْدٌ",13  ],
  ["ކުދިބަޑި","بَارُوْدَةٌ",13  ],
  ["ބާޒު","بَازٌ",13  ],
  ["عذاب [އަޒާބު]. ފަރުވާ. ގަދަފަދަކަން","بَأْسٌ",13  ],
  ["ދިގުއެއްޗެއް","بَاسِقٌ",13  ],
  ["ހިއްވަރުގަދަފަހުލަވާނު","بَاسِلٌ",13  ],
  ["އަތްދަޑީގާވާނާރެއް","بَاسَلِيْقٌ",13  ],
  ["ހިނިތުންވާމީހާ","بَاسِمٌ",13  ],
  ["ބުރީބަލިކަން","بَاسُوْرٌ",13  ],
  ["ލޯ","بَاصِرَةٌ",13  ],
  ["ތޫނުކަޑި","بَاضِعٌ",13  ],
  ["ގަދަކަމުންއަތުލާމީހާ","بَاطِشٌ",13  ],
  ["بَاطِل [ބާޠިލު]ކަންތައް","بَاطِلٌ",14  ],
  ["އެތެރެފުށް","بَاطِنٌ",14  ],
  ["ބޮމަ","بَاعٌ",14  ],
  ["ސަބަބު ފޮނުވާމީހާ","بَاعِثٌ",14  ],
  ["حَقّاَ [ޙައްޤާ]އި ދެކޮޅުހަދާމީހާ","بَاغٍ",14  ],
  ["ބަދެފާހުންނަމާބޮޑި","بَاقَةٌ",14  ],
  ["ފަޅާމީހާ.ބޮޑަށްދަންނަމީހާ","بَاقِرٌ",14  ],
  ["ފޫޅު. ކާންގެންގުޅޭމީހާ","بَاقِلَّاءُ",14  ],
  ["އަހަރުގެފުރަތަމަމޭވާ.ކުރީކޮޅު","بَاكُورَةٌ",14  ],
  ["ރޯމީހާ","بَاكِيْ",14  ],
  ["ހިތް. حَالُ [ޙާލު].","بَالٌ",14  ],
  ["ފުރާފުރިއްޖެމީހާ","بَالِغٌ",14  ],
  ["ނަރުދަމާ.ނަރުދަމާގެއަގަ.","بَالُوعَةٌ",14  ],
  ["ބެލޫނު","بَالُونٌ",14  ],
  ["ބާމިޔާ.ތަރުކާރިއެއް","بَامِيا",14  ],
  ["ރާނާމީހާ","بَنِيْ",14  ],
  ["ކަމެއްނެތިދެކޮޅަށްހިނގާމީހާ","بَاهِلٌ",14  ],
  ["ރީތިމީހާ","بَاهِيْ",14  ],
  ["ރޭހުރިތަކެތި","بَائِتٌ",14  ],
  ["ބޭނުންބޮޑު فَقِيرُ [ފަޤީރު]","بَائِسٌ",14  ],
  ["ވިއްކާމީހާ","بَائِعٌ",14  ],
  ["هِنْدُ [ހިންދު]ކަރައިގެމިނިކާވަގު","بَبْرٌ",14  ],
  ["ތަކަތުވާ","بَبَّغَاءٌ",14  ],
  ["ކަނޑައިލުން","بَتٌّ",14  ],
  ["ކަނޑައިލުން","بَتْرٌ",14  ],
  ["ފެތުރުން.ބޮޑިހިތާމަ","بَثٌ",14  ],
  ["ބިހި","بَثْرٌ",14  ],
  ["ޅަކޮތަރު.ކޮތަރުފުއްގަޑު","بُجٌ",14  ],
  ["ގިރުބާދޫނި","بَجَعَةٌ",14  ],
  ["ނަވުގެފަޅުވެރީން","بَحَّارٌ",14  ],
  ["ތަނަވަސްތަން","بُحْبُوحَةٌ",14  ],
  ["ހޯދާބެލުން","بَحْثٌ",14  ],
  ["ކަޑު","بَحْرٌ",14  ],
  ["ކުދިކަޑު","بُحَيْرَةٌ",14  ],
  ["އާވި.ހުން","بُخَارٌ",14  ],
  ["ވަރުގަދަ عَجَمِي جَمَلُ [ޢަޖަމީ ޖަމަލު]","بُخْتِيٌّ",14  ],
  ["އަގަވަސްނުބައިވުން","بَخَرٌ",14  ],
  ["ލޯދުއްވާލުން","بَخْزٌ",14  ],
  ["އުނިކުރުން.އަނިޔާކުރުން","بَخْسٌ",14  ],
  ["ކަމެއްކޮށްދިނީމާދޭ هَدِيَة [ހަދިޔާ]","بَخْشِيْشٌ",14  ],
  ["ލޯކޮނެލުން","بَحْصٌ",15  ],
  ["މުދަލަށްދަހިވެތިކަން","بُخْلٌ",15  ],
  ["އަންހެނުންއަޅާކުޑަދޮޅި","بُخْنُقٌ",15  ],
  ["މީރުވަސްދުވާދުންއަޅާތަކެތި","بَخُوْرٌ",15  ],
  ["މުދަލަށްދަހިވެތިމީހާ","بَخِيْلٌ",15  ],
  ["ފިލާންދާތަން","بُدٌّ",15  ],
  ["ފެށުން","بَدْأٌ",15  ],
  ["ކާތަކެތިވިއްކާމީހާ","بَدَّالٌ",15  ],
  ["ކަމެއްގެކުރީކޮޅު","بُدَاهَةٌ",15  ],
  ["ފުރިހަމަހަދު","بَدْرٌ",15  ],
  ["ދިހަހާސް دِرْهَمْ [ދިރުހަމް]ވާ ކޮތަޅު","بَدْرَةٌ",15  ],
  ["ފުރިހަމަހެދުމެއް","بَدْلَةٌ",15  ],
  ["ހަށިގަޑު","بَدَنٌ",15  ],
  ["އަންހެން جَمَلُ [ޖަމަލު]","بَدَنَةٌ",15  ],
  ["ފައުޅުވުން","بُدُوٌّ",15  ],
  ["ވަލުރަށުގެމީހާ. ބަދަވީއެއް","بَدَوِيٌّ",15  ],
  ["فِكْرُ [ފިކުރަ]ކާނުލައިއެގުން","بَدِيْهَةٌ",15  ],
  ["ދޫނުބައިކަން","بَذَاءَةٌ",15  ],
  ["ދަރަޖަމަތިވެރިވުން","بَذَاخَةٌ",15  ],
  ["އޮށް. ގޮވާންލުން. މުޑުވައް","بَذْرٌ",15  ],
  ["ހޭދަކުރުން","بَذْلٌ",15  ],
  ["ލާންގެންގުޅޭ ބައުފޭރާން","بِذْلَةٌ",15  ],
  ["ދޫނުބައިމީހާ","بَذِيْءٌ",15  ],
  ["އެއްގަން. ހެއުމާތްމީހާ","بَرٌّ",15  ],
  ["ހެއުކަން","بِرٌّ",15  ],
  ["ގޮދަން","بُرٌّ",15  ],
  ["ފޭއްސުން. ދަޑިމެށުން","بُرَاءٌ",15  ],
  ["ސަލާމަތްވުން","بَرَاءَةٌ",15  ],
  ["ދަގަޑުގާނާއިރުވެރޭކުޑި","بُرَادَةٌ",15  ],
  ["ފޯޗު. ފެންފިނިކުރާކަންވާރު","بَرَّادَةٌ",15  ],
  ["ކޮންމެކަމަކުންމަތިވެރިވުން","بَرَاعَةٌ",15  ],
  ["ވައުއަބުރާމީހާ","بَرَّامٌ",15  ],
  ["ބަލިފަސޭހަވުން","بُرْءٌ",15  ],
  ["ބާވަތެއްގެބަބުރުން","بَرْبَرٌ",15  ],
  ["ފޮނިލުބޯ","بُرْتُقَالٌ",15  ],
  ["جَنَوَارُ [ޖަނަވާރު]ގެ ވަކި","بُرْثُنٌ",15  ],
  ["ބުރުޒު","بُرْجٌ",15  ],
  ["އިގިލީގެބަދަ","بُرْجُمَةٌ",15  ],
  ["ފަރުގާލު","بَرْجَلٌ",15  ],
  ["حَالُ [ޙާލު]ދަތިކަމުގެ ހިތާމައިގެގަދަވޭން","بُرَحَاءٌ",15  ],
  ["ފިނި. ނިދި","بَرْدٌ",16  ],
  ["ގޮބޮޅިވާރޭ","بَرَدٌ",16  ],
  ["ހީކަރުވާފައިއަންނަ ހުން","بُرَدَاءٌ",16  ],
  ["ސާލު","بُرْدَةٌ",16  ],
  ["ސޫފިމަތީއަޅާފޮތިގަޑު","بَرْذَعَةٌ",16  ],
  ["تُرُكِىْ [ތުރުކީ] އަސް","بِرْذَوْنٌ",16  ],
  ["ފައުޅުވުން","بَرَزٌ",16  ],
  ["ގަސްނެއް ބިންގަޑު","بُرْضَةٌ",16  ],
  ["ބަރުތީލަ. ދިގުހިލަ","بِرْطِيْلٌ",16  ],
  ["ނުފޮޅޭމާ","بُرْعُوْمٌ",16  ],
  ["މަދިރި","بَرْغَشٌ",16  ],
  ["ސެއްޅި","بُرْغُوَثٌ",16  ],
  ["ބިރުން حَيْرَانْ ޙައިރާން]ވުން","بَرَقٌ",16  ],
  ["ވިދުވަރު","بَرْقٌ",16  ],
  ["އަންހެނާ زِيْنَةْ [ޒީނަތް]ވުން","بُرْقٌ",16  ],
  ["ތެލްގިރާފް","بَرْقِيَّةٌ",16  ],
  ["ގާދުއްވާބަޑި","بِرْقِيْلٌ",16  ],
  ["ފަރުގާލު","بِرْكَارٌ",16  ],
  ["އަލިފާންއަރާފަރުބަދަ","بُرْكَانٌ",16  ],
  ["ވެވު","بِرْكَةٌ",16  ],
  ["ވާއެޅުން. ނަނުއެޅުން","بَرْمٌ",16  ],
  ["ތެލި. ފުފޭ","بُرْمَةٌ",16  ],
  ["ފީފާ","بِرْمِيْلٌ",16  ],
  ["ލިއެފައިވާ قَوَاعِدُ [ޤަވާޢިދު]","بَرْنَامَجٌ",16  ],
  ["ސިލަވަރު","بُرُنْزٌ",16  ],
  ["އިގިރޭސި ތޮފި","بُرْنَيْطَةٌ",16  ],
  ["ގިއުގަޑު. ފިރޭމް","بِرْوَازٌ",16  ],
  ["ކުދިގަސްފެޅުން","بُرُوْضٌ",16  ],
  ["جَمَلُ [ޖަމަލު] ބަޑުޖެހުން","بُرُوْكٌ",16  ],
  ["ވިއްސާރަ ބަލާ ކަށިގަޑު","بِرُوْمِتْرُ",16  ],
  ["ދަލީލު","بُرْهَانٌ",16  ],
  ["ހިދުކޮޅެއް","بُرْهَةٌ",16  ],
  ["هِنْدِىْ [ހިންދީ]ންގެއަޅުވެރީން","بَرَهْمَنٌ",16  ],
  ["قَلَمْ [ޤަލަން] ޖެހުން","بَرْيٌ",16  ],
  ["سَلَامَةْ [ސަލާމަތް] ވެފައިހުރިމީހާ","بَريْءٌ",16  ],
  ["ހެއްދެވިހައި خَلْقُ [ޚަލްޤު]ތަކުން","بَرِيَّةٌ",16  ],
  ["ހުސްބިންތައް. صَحَرَا [ސަހަރާ]","بَرِّيَّةٌ",16  ],
  ["ބޯސްޓް. ބާރަ مِيْلُ [މޭލު]","بَريْدٌ",16  ],
  ["ކައްޑެވިރޮދި","بَرِيْمٌ",16  ],
  ["ބުރުމާ. ތޮރުފާކަށި","بَرِّيْمَةٌ",16  ],
  ["އުއިފޮތި. ފޭރިގަތުން","بَزٌّ",17  ],
  ["ހަވާދާއި. އޮށްވިއްކާމީހާ","بَزَّارٌ",17  ],
  ["ފޮތިވިއްކާމީހާ","بَزَّازٌ",17  ],
  ["ކުޅު","بُزَاقٌ",17  ],
  ["ލުބޯހުތެއްކަހަލަފިނިހަކައެއް","بَزَّاقٌ",17  ],
  ["އުގުރިނަގާކަށިގަޑު","بِزَالٌ",17  ],
  ["ގިރުބާގެހޮޅި","بَزْبَازٌ",17  ],
  ["އޮއްޓަރު. ހަވާދު","بِزْرٌ",17  ],
  ["އިސްބަغُލު [އިސްބަޣުލު]","بِزْرُقُطُوْنَا",17  ],
  ["މެދުދަތުންދައިގަތުން","بَزْمٌ",17  ],
  ["ފަތްބޮޑި ބަންނަވަކަގަޑު","بَزِيْمٌ",17  ],
  ["އޮޅުބުޅާ","بِسٌّ",17  ],
  ["ދޫލަ","بِسَاطٌ",17  ],
  ["ހިތްވަރުގަދަކަން","بَسَالَةٌ",17  ],
  ["ބަގީޗާ","بُسْتَانٌ",17  ],
  ["ދޮންނުވާރޯކަދުރު","بُسْرٌ",17  ],
  ["ފެތުރުން","بَسْطٌ",17  ],
  ["ތަނަވަސްކަން","بَسْطَةٌ",17  ],
  ["بِسْمِ [ބިސްމި]","بَسْمَلَةٌ",17  ],
  ["އުހައުވެރިކަމުގެ خَبَرُ [ޚަބަރު]","بِشَارَةٌ",17  ],
  ["މޫނުއަލިކޮއްލުން","بَشَاشَةٌ",17  ],
  ["صُوْرَ [ސޫރަ]ހުތުރުކަން","بَشَاعَةٌ",17  ],
  ["ދޮގުވެރިޔާ","بَشَّاكٌ",17  ],
  ["ހަންނޮޅުން","بَشْرٌ",17  ],
  ["މޫނުއަލިކަން","بِشْرٌ",17  ],
  ["އާދަމުގެދަރީން","بَشَرٌ",17  ],
  ["ހަމުގެބޭރުފުށް","بَشَرَةٌ",17  ],
  ["ފޫހިވުން.ގިސްލެވޭވަރަށްކެއުން","بَشَمٌ",17  ],
  ["އުހައުވެރިخَبَرُ [ޚަބަރު] ދޭމީހާ","بَشِيْرٌ",17  ],
  ["صُوْرَ [ސޫރަ]ހުތުރުމީހާ","بَشِيْعٌ",17  ],
  ["ކުޅު","بُصَاقٌ",17  ],
  ["ލޯ. ލޮލުގެފެނުން","بَصَرٌ",17  ],
  ["ފިޔާ","بَصَلٌ",17  ],
  ["ބޮޑިކަދޮޅު","بَصَلُ الْفَارِّ",17  ],
  ["ރޯވެފާވާއަގުރު","بَصْوَةٌ",17  ],
  ["ހިތުގެފެނުން. ވިސްނުން","بَصِيْرَةٌ",17  ],
  ["ހަންތުނިއޮމާންކަން","بَضَاضَةٌ",17  ],
  ["ވިޔަފާރިސާމާނު","بِضَاعَةٌ",17  ],
  ["ތިނަކާނުވަޔަކާ ދެމެދު","بِضْعٌ",17  ],
  ["މަސްކޮޅެއް","بِضْعَةٌ",17  ],
  ["އަސްދޫނި. ފަޅައިލުން","بَطٌّ",18  ],
  ["ލަސްވުން","بُطْأٌ",18  ],
  ["ވިލާތު އަލުވި","بَطَاطَا",18  ],
  ["އަގުޖަހާފާވާފޮތިކޮޅު. ކަރުދާސްކޮޅެއް","بِطَاقَةٌ",18  ],
  ["ގޮތްނެތްމީހާ","بَطَّالٌ",18  ],
  ["ބަތާނަ. رَحْمَةْ [ރަޙްމަތް]ތެރިޔާ","بِطَانَةٌ",18  ],
  ["އަކިރިބިންގަޑު. مَكَّه [މައްކާ]","بَطْحَاءُ",18  ],
  ["ލޮއްވުން","بَطْخٌ",18  ],
  ["ފަޅައިލުން","بَطْرٌ",18  ],
  ["ބޮޑާކަން","بَطَرٌ",18  ],
  ["رُوْمِىْ [ރޫމީ]ންގެ لَشْكَرُ [ލަޝްކަރު]ގެ ވެރިއާ","بِطْرِيْقٌ",18  ],
  ["ފާދިރީންގެވެރިމީހާ","بِطْرِيْرَكٌ",18  ],
  ["ފަހުލަވާނު","بَطَلٌ",18  ],
  ["ބަޑު","بَطْنٌ",18  ],
  ["ނުލާހިކުވާވަރަށް ކެއުން","بِطْنَةٌ",18  ],
  ["ކަރާ","بِطِّيْخٌ",18  ],
  ["ބުރުނު. ހިތުގެތިރީބައި","بُطَيْنٌ",18  ],
  ["ގޮޅާ. ތުނިޔަ","بَطْلِيْنُوْسٌ",18  ],
  ["ފޮނުވުން","بَعْثٌ",18  ],
  ["ދުރު. ދުރުކަން","بُعْدٌ",18  ],
  ["جَنَوَارُ [ޖަނަވާރު]ގެ ގުއި","بَعْرٌ",18  ],
  ["ބައެއް","بَعْضٌ",18  ],
  ["ފިރިމީހާ","بَعْلٌ",18  ],
  ["މަދިރި","بَعُوْضٌ",18  ],
  ["ދުރުގައިވާއެތި","بَعِيْدٌ",18  ],
  ["جَمَلُ [ޖަމަލު]. އޮށް","بَعِيْرٌ",18  ],
  ["بَغَلُ [ބަޣަލު] ގެންގުޅޭމީހާ","بَغَّالٌ",18  ],
  ["ކުއްލިއަކަށް","بَغْتَةً",18  ],
  ["އަލާނުކެޑުން","بَغَرٌ",18  ],
  ["ހިތުގެރުޅި","بُغْضٌ",18  ],
  ["އަހާحِمَارُ [ޙިމާރު] ދޭއްޗަށްލިބޭދަރި","بَغَلٌ",18  ],
  ["އެދޭކަންތައް","بُغْيَةٌ",18  ],
  ["ތަންމަކުނު","بَقٌّ",18  ],
  ["ދެމިހުރުން","بَقَاءٌ",18  ],
  ["ގެރިގެންގުޅޭމީހާ. ފަޅާމީހާ","بَقَّارٌ",18  ],
  ["ތަރުކާރީވއްކާމީހާ","بَقَّالٌ",18  ],
  ["ބޮخُސާބޮޑި [ބޮޚުސާބޮޑި]","بُقْجَةٌ",18  ],
  ["ފަޅައިލުން","بَقْرٌ",18  ],
  ["އަންހެންގެރި","بَقَرَةٌ",18  ],
  ["ތަރުކާރީ","بَقْلٌ",18  ],
  ["ފަތަގު","بَقَّمٌ",19  ],
  ["އިތުރުންހުރި ތަކެތި","بَقِيَّةٌ",19  ],
  ["ރުއިން","بُكَاءٌ",19  ],
  ["ހެދުނު","بُكْرَةٌ",19  ],
  ["ފުރޮޅު. ކައްޕި. ދަޑިބަރަނި","بَكَرَةٌ",19  ],
  ["މައްމަންކަން","بَكَمٌ",19  ],
  ["ތެމުން","بَلٌّ",19  ],
  ["އަދިއެ ކިމެއްތަ","بَلْ",19  ],
  ["ގޮތްބެލުން. ހިތާމަ","بَلاَءٌ",19  ],
  ["ހިތްގައުކަން","بَلَادَةٌ",19  ],
  ["ތަޅުންއަޅާ އޮމާންހިލަ","بَلَاطٌ",19  ],
  ["ބަސްބުނުމުގެ ކުޅަދާނަކަން","بَلَاغَةٌ",19  ],
  ["ވިސްނުންކޮށިކަން","بَلَاهَةٌ",19  ],
  ["ހިތުގެމޮޅިވެރިކަން","بِلْبَالٌ",19  ],
  ["ރާކޫޒު","بُلْبُلَةٌ",19  ],
  ["ގިތި ކަދުރު","بَلَحٌ",19  ],
  ["ރަށް","بَلَدٌ",19  ],
  ["އުތުރަހަޅަ","بُلْدَه",19  ],
  ["ރަށު ތެރެހެދުމުގެ مَحْكَمَه [މަޙްކަމާ]","بَلَدِيَّةٌ",19  ],
  ["ހުވަންނަކަތް","بُلَعٌ",19  ],
  ["خِލޭސްމޭ [ޚިލޭސްމޭ]","بَلْغَمٌ",19  ],
  ["ތެއްކަން","بَلَلٌ",19  ],
  ["ބިއްލޫރި","بَلُّوْرٌ",19  ],
  ["ބައުވުން","بِلًى",19  ],
  ["ނޫނެކޭ. އާއެކޭ","بَلَى",19  ],
  ["ހިތްގައުމީހާ","بَلِيْدٌ",19  ],
  ["ބުރޮޅި","بُلَيْلَجٌ",19  ],
  ["ބުން","بُنٌّ",19  ],
  ["ރާނާމީހާ","بَنَّانٌ",19  ],
  ["އައްސަރަގު","بَنَاتُنَعْشٍ",19  ],
  ["އިގިލިތަކުގެ ކޮޅު","بَنَانٌ",19  ],
  ["އަންހެންދަރި","بِنْتٌ",19  ],
  ["ބަގުފިލާ","بَنْجٌ",19  ],
  ["ބަދަރު. މައިރަށް","بَنْدَرٌ",19  ],
  ["ކުދިއުންޑަ. ކުދިބަދަނެއް","بُنْدُقٌ",19  ],
  ["ކުދިބަޑި","بُنْدُقِيَّةٌ",19  ],
  ["ބެޓްރޯލް","بِنْزِيْنٌ",19  ],
  ["ކަށިއިގިލި","بِنْصَرٌ",19  ],
  ["ފަޓްލޫނު","بَنْطَلُوْنٌ",19  ],
  ["ދޮރުވާނު","بَوَّابٌ",19  ],
  ["ހަލާކު","بَوَارٌ",20  ],
  ["ބަރުގޮނުފުމޭމީހާ","بَوَّاقٌ",20  ],
  ["ރަންރިހިވިރުވާ އުބު","بُوْتَقَةٌ",20  ],
  ["ބައްދާ ރަންކަރު","بَوْرَقٌ",20  ],
  ["ތިލޭރުމިހާފުމޭ ހޮޅި","بُورِيٌ",20  ],
  ["ބޯސްޓު","بُوْسْطَةٌ",20  ],
  ["ސަމުގާ","بُوْصَلَةٌ",20  ],
  ["ބަރުގޮނު","بُوْقٌ",20  ],
  ["ފައިބޮޑުވާއިގިލިބުޑުކަށިގަޑު","بُوْعٌ",20  ],
  ["ކުޑަގެފިލި","بَوْلٌ",20  ],
  ["ބިއްލަޑީ","بُوْلِيْصَةٌ",20  ],
  ["ރިދޫފިނިފެންމާ","بَهَارٌ",20  ],
  ["އުފާވެރިކަން. ރީތިކަން","بَهْجَةٌ",20  ],
  ["ދޫމި","بَهَقٌ",20  ],
  ["ހެއްވާމީހާ. صَالِحُ [ޞާލިޙު]ވެރިއާ","بُهْلُوْلٌ",20  ],
  ["ޅަކަންބަޅި","بَهْمٌ",20  ],
  ["ހިތްވަރުގަދަ ފަހުލަވާނު","بُهَمٌ",20  ],
  ["މަރިޔާދުގެ","بَهْوٌ",20  ],
  ["ރިތިއެތި. ރިތިމިހާ","بَهِيْجٌ",20  ],
  ["ހަތަރެސްފައިޖަހައިގެން ހިނގާ ސޫފި","بَهِيمَةٌ",20  ],
  ["ހުދުކުލަ. ދޮންކުލަ","بَيَاضٌ",20  ],
  ["ބިސްވިއްކާ މިހާ. ތިމަރަލާމީހާ","بَيَّاضٌ",20  ],
  ["ވިއްކާމީހާ","بَيَّاعٌ",20  ],
  ["ގެ. ޅެމެއްގެބުރިއެއް","بَيْتٌ",20  ],
  ["ސަރުކާރުގެ خَزَانَة [ޚަޒާނާ]","بَيْتُ الْمَالِ",20  ],
  ["މެނުވީ","بَيْدَ",20  ],
  ["ހަލާކުވުން","بَيْدٌ",20  ],
  ["ހުސްބިންގަނޑު","بَيْدَاءٌ",20  ],
  ["ސާފުކުރާން ގޮވާންއެއްކުރާތަން","بَيْدَرٌ",20  ],
  ["ފެންވަޅު","بِئْرٌ",20  ],
  ["އަމާންދިދަ","بَيْرَقٌ",20  ],
  ["ބިސް. ދަގަޑުތޮފި","بَيْضَةٌ",20  ],
  ["ސޫފާސޫފީގެ حَكِيْم [ޙަކީމް]","بَيْطَارٌ",20  ],
  ["ވެރިކަން ޤަބޫލުކުރުން","بَيْعَةٌ",20  ],
  ["نَصَارَى [ނަޞާރާ]އިންގެ ފައްޅި","بِيْعَةٌ",20  ],
  ["ދެމެދު","بَيْنَ",20  ],
  ["ފައުޅުވެގެންވާއެތި","بَيِّنٌ",20  ],
  ["ހެމި. ދަލީލު","بَيِّنَةٌ",20  ],
  ["","بَابُ التَّاءِ\n\nت މިއީ اَلِفُ بَا ގެ ތިންވަނަ އަކުރެވެ. އެއީ اَبجَدُން (400) މިعَدَدެވެ.",21  ],
  ["ވަރުދެރަ މުސްކުޅިޔާ.","تَابٌّ",21  ],
  ["ހަވާދު. މަސާލަ.","تَابِلٌ",21  ],
  ["ސަންސޯއް. ފޮށި.","تَابُوْتٌ",21  ],
  ["لَشْكَرُ [ލަޝްކަރު]ގެ ބައިގަނޑެއް.","تَابُوْرٌ",21  ],
  ["ރަސްކަމުގެ تَاجُ [ތާޖު].","تَاجٌ",21  ],
  ["ވިޔަފާރިވެރިޔާ.","تَاجِرٌ",21  ],
  ["ވިޔާމީހާ.","تَاحِمٌ",21  ],
  ["ބައެއް ފަހަރު.","تَارَةً",21  ],
  ["އައްޑަނަ ހިފާ މީހާ.","تَارِسٌ",21  ],
  ["ދޫކޮށްލި މީހާ.","تَارِكٌ",21  ],
  ["عَيْبُ [ޢައިބު]. ފާފަ.","تَافَةٌ",21  ],
  ["ރަހަނެތް އެތި.","تَافِهٌ",21  ],
  ["ކަދުރު ގެންގުޅޭ މީހާ.","تَامِرٌ",21  ],
  ["تَوبَة [ތައުބާ]ވާ މީހާ.","تَائِبٌ",21  ],
  ["އެދުންވެރިވާ މީހާ.","تَائِقٌ",21  ],
  ["حَيْرَانْ [ޙައިރާން]ވެގެންވާ މީހާ.","تَائِهٌ",21  ],
  ["ފަސްވުން.","تَأَخُّرٌ",21  ],
  ["أَخَކު [އަޚަކު] ކަމުގައި ހެދުން.","تَأَخِّيْ",21  ],
  ["أَدَبُ [އަދަބު] އުނގަންނައިދިނުން.","تَأْدِيبٌ",21  ],
  ["އަދާކުރުން.","تَأْدِيَةٌ",21  ],
  ["آمِيْنْ [އާމީން] ކިޔުން.","تَأْمِينٌ",21  ],
  ["ހިތާމައިގެ ނޭވާލުން.","تَأَوُّهٌ",21  ],
  ["އެތެރެފުށުގެ مَعْنَ [މާނަ] ބަޔާންކުރުން.","تَأْوِيْلٌ",21  ],
  ["ހަލާކު. ކަލާކުކުރުން.","تَبٌ",21  ],
  ["ހަލާކު.","تَبَارٌ",21  ],
  ["ކޮންމެ ކަމެއްގެ ކުރީކޮޅު.","تَبَاشِيْرٌ",21  ],
  ["ހަވާދު ވިއްކާ މީހާ.","تَبَّالٌ",21  ],
  ["ހުއި ވިއްކާ މީހާ.","تَبَّانٌ",21  ],
  ["ޖަގިޔާ. ހަރުވާޅުބުރި.","تُبَّانٌ",21  ],
  ["އެކަކުއަނެކަކަށް فَخْرُ[ފަޚުރު]ވެރިވުން.","تَبَاهِيْ",21  ],
  ["ދުނިޔެއެޅުން.","تَبْتِيْلٌ",21  ],
  ["ބޮޑާ ވައްތަރަށް ހިނގުން.","تَبَخْتُرٌ",21  ],
  ["سَلَامَةْ [ސަލާމަތް] ވެގަތުން.","تَبَرُّءٌ",22  ],
  ["އަންހެނާ ޒީނަތްތެރިކަން ފައުޅުކުރުން.","تَبَرُّجٌ",22  ],
  ["ދަރުމަވެރިވުން.","تَبَرُّعٌ",22  ],
  ["ރޮދިއެބުރުން.","تَبَرُّمٌ",22  ],
  ["ހިނިތުންވުން.","تَبَسُّمٌ",22  ],
  ["ދުންފަތް.","تِبْغٌ",22  ],
  ["ބަހުން ރޮވޭވަރު ކޮއްލުން.","تَبْكِيْتٌ",22  ],
  ["ދިރުވައިލުން.","تَبْلِيْعٌ",22  ],
  ["އިއްވުން.","تَبْلِيْغٌ",22  ],
  ["ހިކި ހުއި.","تِبْنٌ",22  ],
  ["ވިސްނުންތެރިވުން.","تَبَنٌ",22  ],
  ["قَائِمُ [ޤާއިމް] ވުން.","تَبَوُّءٌ",22  ],
  ["އެއްއަހަރުވީ ގެރި.","تَبِيْعٌ",22  ],
  ["ވިދިވިދިގެން ވުން.","تَتْرَى",22  ],
  ["ދުންފަތް.","تُتْنٌ",22  ],
  ["އާފުރުން.","تَثَاؤُبٌ",22  ],
  ["ވިޔާފާރި [ވިޔަފާރި].","تِجَارَةٌ",22  ],
  ["ބިރަކާއި ނުލައި ކުރިޔަށް ނިކުތުން.","تَجَاسُرٌ",22  ],
  ["އައުކުޅައުން.","تَجْدِيْدٌ",22  ],
  ["ފަލިޖެހުން.","تَجْذِيْفٌ",22  ],
  ["ގޮތްބެލުން.","تَحْرِبَةٌ",22  ],
  ["ރޯތަކެތި ހިއްކުން.","تَجْفِيْفٌ",22  ],
  ["ފޮތް ހަންޖެހުން.","تَجْلِيدٌ",22  ],
  ["ދުރުވެގަތުން.","تَجَنُّبٌ",22  ],
  ["ތައްޔާރުކުރުން.","تَجْهِيْزٌ",22  ],
  ["ޒުވާބުކުރުން.","تَحَاوُرٌ",22  ],
  ["ތިރި. ދަށް.","تَحْتُ",22  ],
  ["ކަޑައެޅުން.","تَحَتُّمٌ",22  ],
  ["މިންވަރު ކަޑައެޅުން.","تَحْدِيْدٌ",22  ],
  ["ލިއުން. މިނިވަންކުރުން.","تَحْرِيْرٌ",22  ],
  ["އަކުރާއި مَعْنَ [މާނަ] ބަދަލުކުރުން.","تَحْرِيْفٌ",22  ],
  ["هَدِيَة [ހަދިޔާ]. ވެދުން.","تُحْفَةٌ",22  ],
  ["ނިކަމެތިކުރުން.","تَحْقِيْرٌ",22  ],
  ["ފޮނިކުޅައުން. ޒީނަތްވެގަތުން.","تَحْلِيَةٌ",22  ],
  ["ގަދަ ކަޅުކަން. ރަތްދޮންކަން.","تُحْمَةٌ",22  ],
  ["ކަމެއްގެ ބުރަ އުފުލުން.","تَحَمُّلٌ",22  ],
  ["ހުވައި އުވައިލުން.","تَحَنُّثٌ",22  ],
  ["سَلَامْ [ސަލާން] ކުރުން.","تَحِيَّةٌ",22  ],
  ["މޮޑެފައިވާ ހުތް ފުށްގަޑު.","تَخٌّ",22  ]
]
