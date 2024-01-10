var container = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(35.63088037408653,128.75657367818812),
	level: 3,
};

var map = new kakao.maps.Map(container, options);
const t_on = document.querySelectorAll('.traffic li')[0];
const t_off = document.querySelectorAll('.traffic li')[1];
const branch_btns = document.querySelectorAll('.branch li');
var markerOptions = [
	{
		title: '청도사업장(본점',
		latlng: new kakao.maps.LatLng(35.63088037408653,128.75657367818812),
		imgSrc: '../img/sub_company/sub_commpany_location_map_01.png',
		imgSize: new kakao.maps.Size(150, 150),
		imgPos: { offset: new kakao.maps.Point(116, 69) },
		button: branch_btns[0],
	},
	{
		title: '냉난방기술연구서',
		latlng: new kakao.maps.LatLng(37.56127427058771, 126.8277764148868),
		imgSrc: '../img/sub_company/sub_commpany_location_map_02.png',
		imgSize: new kakao.maps.Size(150, 150),
		imgPos: { offset: new kakao.maps.Point(116, 69) },
		button: branch_btns[1],
	},
	{
		title: '아산사업장',
		latlng: new kakao.maps.LatLng(36.8243391787624, 127.10013615555175),
		imgSrc: '../img/sub_company/sub_commpany_location_map_03.png',
		imgSize: new kakao.maps.Size(150, 150),
		imgPos: { offset: new kakao.maps.Point(116, 69) },
		button: branch_btns[2],
	},
];

for (let i = 0; i < markerOptions.length; i++) {
	new kakao.maps.Marker({
		map: map,
		position: markerOptions[i].latlng,
		title: markerOptions[i].title,
		image: new kakao.maps.MarkerImage(
			markerOptions[i].imgSrc,
			markerOptions[i].imgSize,
			markerOptions[i].imgPos
		),
	});

	markerOptions[i].button.addEventListener('click', (e) => {
		e.preventDefault();
		for (let k = 0; k < markerOptions.length; k++) {
			markerOptions[k].button.classList.remove('on');
		}
		markerOptions[i].button.classList.add('on');
		map.setCenter(markerOptions[i].latlng);
	});
}

t_on.addEventListener('click', (e) => {
	e.preventDefault();

	if (t_on.classList.contains('on')) return;

	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	t_on.classList.add('on');
	t_off.classList.remove('on');
});

t_off.addEventListener('click', (e) => {
	e.preventDefault();
	if (t_off.classList.contains('on')) return;
	map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	t_on.classList.remove('on');
	t_off.classList.add('on');
});

var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMLEFT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);
