// ung dung phone list
// C: Cho nguoi dung nhap vao ten va sdt moi
// R: in ra toan bo ten va sdt theo dang: ten - sdt
// U: cho ng dung tim theo ten. neu tim thay -> cho update ten va sdt
// Neu ko tim thay -> in ra ko tim thay
// D: cho ng dung tim theo ten. Neu tim thay -> cho delete
// Neu khong -> in ra ko tim thay
// sau moi lan thuac hien thao tac nay thi deu in ra toan bo cac sdt theo dang R
// while -> de chay vo han
// E -> thoat ct

const phonelist = [
    {
        name: 'Ngoc',
        phone: '0123456789',
    },
    {
        name: 'Lam',
        phone: '0978654321',
    },
];
function show(arr){
    for(i=0;i<phonelist.length;i++){
        console.log(`${phonelist[i].name} - ${phonelist[i].phone}`);
    }
}
let loop = true;
while(loop){
    const user = prompt('Chon C/R/U/D').toLowerCase();
    if(user=='c'){
        let a=prompt('Nhap ten moi');
        let b=prompt('Nhap so moi');
        const newphone= {
            name:a,
            phone:b,
        };
        phonelist.push(newphone);
        show(phonelist);
    } else if(user=='r'){
        show(phonelist);
    } else if(user=='u'){
        let c = prompt('Tim ten');
        let found = false;
        for(i=0;i<phonelist.length;i++){
            if(phonelist[i].name==c){
                phonelist[i].name=prompt('Nhap ten moi');
                phonelist[i].phone=prompt('Nhap so moi');
                found=true;
                show(phonelist);
            }
        } if(found===false) console.log('Khong co');
    } else if(user=='d'){
        let c = prompt('Tim ten');
        let found = false;
        for(i=0;i<phonelist.length;i++){
            if(phonelist[i].name==c){
                phonelist.splice(1,1);
                found=true;
                show(phonelist);
            }
        } if(found===false) console.log('Khong co');
    } else if(user=='e') break;   
}
