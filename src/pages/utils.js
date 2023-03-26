import form1 from 'assets/form1.png'
import form2 from 'assets/form2.png'
import form3 from 'assets/form3.png'
import form4 from 'assets/form4.png'
import step1 from 'assets/step1.png'
import step2 from 'assets/step2.png'
import step3 from 'assets/step3.png'
import step4 from 'assets/step4.png'

const getImage = (id) => {
  const IMAGES = {
    0: { stepImg: step1, formImg: form1 },
    1: { stepImg: step2, formImg: form2 },
    2: { stepImg: step3, formImg: form2 },
    3: { stepImg: step4, formImg: form3 },
    4: { stepImg: null, formImg: form4 }
  }
  return IMAGES[id]
}

export default getImage
