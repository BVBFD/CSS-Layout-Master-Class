const videoDatas = [
  {
    id: 1,
    title: '첫번째 영화',
    video: 'vid_1.mp4',
    explain: '첫번째 영화',
  },
  {
    id: 2,
    title: '두번째 영화',
    video: 'vid_2.mp4',
    explain: '두번째 영화',
  },
  {
    id: 3,
    title: '세번째 영화',
    video: 'vid_3.mp4',
    explain: '세번째 영화',
  },
  {
    id: 4,
    title: '네번째 영화',
    video: 'vid_4.mp4',
    explain: '네번째 영화',
  },
  {
    id: 5,
    title: '다섯번째 영화',
    video: 'vid_5.mp4',
    explain: '다섯번째 영화',
  },
];

let videoIndex = 1;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const index = document.querySelector('.index');
const videoContent = document.querySelector('.videoContent');
const titleNum = document.querySelector('.videoNum span span');
const videoTitle = document.querySelector('.videoTitle');
const videoExplain = document.querySelector('.videoExplain');
const mainHeader = document.querySelector('main .mainHeader');

prevBtn.addEventListener('click', () => {
  videoIndex--;
  if (videoIndex === 0) {
    videoIndex++;
    return;
  }
  titleNum.innerText = videoIndex;
  index.innerText = videoIndex;
  videoTitle.innerText = videoDatas[videoIndex - 1].title;
  videoExplain.innerText = videoDatas[videoIndex - 1].explain;
  videoContent.setAttribute('src', `videos/vid_${videoIndex}.mp4`);
});

nextBtn.addEventListener('click', () => {
  videoIndex++;
  if (videoIndex > videoDatas.length) {
    videoIndex--;
    return;
  }
  titleNum.innerText = videoIndex;
  index.innerText = videoIndex;
  videoTitle.innerText = videoDatas[videoIndex - 1].title;
  videoExplain.innerText = videoDatas[videoIndex - 1].explain;
  videoContent.setAttribute('src', `videos/vid_${videoIndex}.mp4`);
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    mainHeader.style.opacity = 0.9;
  }
});
