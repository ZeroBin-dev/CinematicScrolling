// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const bgImages = document.querySelectorAll('.bg-image');
  const scrollY = window.scrollY;

  sections.forEach((section, index) => {
	const box = section.querySelector('.text-box');
	if (scrollY > section.offsetTop - window.innerHeight / 1.5) {
	  section.classList.add('active');

	  // 모든 bg-image를 투명하게 설정 후 현재 인덱스에 맞는 이미지 표시
	  bgImages.forEach((img, imgIndex) => {
		img.style.opacity = imgIndex === index ? 1 : 0;
	  });
	} else {
	  section.classList.remove('active');
	}
  });
});