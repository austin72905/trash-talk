function sample(array) {
  const random = Math.floor(Math.random() * array.length)

  return array[random]
}


//這邊的option是指req.body
function gTrash(option) {

  //user want

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let target = ''
  let choose = ''
  let trashTalk = ''


  if (option.group === 'engineer') {
    target = '工程師'
    choose = sample(task.engineer)
  }
  else if (option.group === 'designer') {
    target = '設計師'
    choose = sample(task.designer)
  }

  else if (option.group === 'founder') {
    target = '企業家'
    choose = sample(task.founder)
  }

  //return error if user does not pick
  else {
    return '請選擇一個職業'
  }
  //generate trash talk 
  trashTalk = `身為一個${target}，${choose}，${sample(phrase)}吧！`


  //return trash talk

  return trashTalk

}




module.exports = gTrash
