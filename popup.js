/*
 * @Author: VoldikSS
 * @Date: 2018-10-20 08:49:38
 * @Last Modified by: VoldikSS
 * @Last Modified time: 2018-10-20 08:49:44
 */

!(function() {
  document.getElementById('manager').addEventListener('click', () => {
    window.open('https://www.shanbay.com/team/manage', '_blank')
  })

  document.getElementById('check').addEventListener('click', () => {
    chrome.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { type: 'check' }, response => {
          // alert(response)
          if (response){
            alert(response)
          }
        })
      })
    })
  })

  document.getElementById('add').addEventListener('click', () => {
    let text = document.getElementById('members').value
    let members = JSON.parse(text)
    chrome.storage.sync.set({ members: members }, () => {
      chrome.storage.sync.get(null, members => {
        console.log(members)
      })
    })
  })
})()
