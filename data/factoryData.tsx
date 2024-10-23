import * as FormatData from "./interfaceFormat"

export const authorList: FormatData.AuthorFormat[] = [
    {
        id: 1,
        name: `Van Anh`,
        imgAddress: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiIz2YkRqwuzHr63XTRrFIu2s8GeY-9gzJw&s`,
        bio: `Nguyễn Du (1765-1820) là một trong những nhà thơ lớn nhất của văn học Việt Nam. Ông nổi tiếng với tác phẩm Truyện Kiều, một trong những tác phẩm văn học lớn nhất của Việt Nam.`,
    },
]

export const factoryData: {
    blogList: FormatData.BlogPostFormat[]
    podCastList: FormatData.PodcastFormat[]
    thisDayThatYearList: FormatData.ThisDayThatYearFormat[],

} = {
    blogList: [
        {
            id: 1,
            title: 'Tái hiện lịch sử - Khởi nghĩa Hai Bà Trưng',
            author: authorList[0],
            character: 'Trưng Trắc - Trưng Nhị',
            imgAddress: 'https://hoangthanhthanglong.vn/wp-content/uploads/2023/05/haibatrung1.jpg',
            readTime: '6 phút',
            uploadDate: new Date('2023-05-01'),
            detail: {
                timeHappen: 'Năm 40-43 SCN',
                context: 'Cuộc khởi nghĩa diễn ra vào năm 40 sau Công nguyên, xuất phát từ sự bất bình của nhân dân Lạc Việt đối với sự thống trị hà khắc của nhà Đông Hán. Chồng của Trưng Trắc là Thi Sách bị giết hại do đứng lên phản đối chính sách cai trị, dẫn đến quyết tâm khởi nghĩa của Hai Bà Trưng.',
                mainStory: 'Trưng Trắc và Trưng Nhị tập hợp lực lượng từ Mê Linh (Vĩnh Phúc), huy động các tù trưởng địa phương và nhân dân vùng lên đánh chiếm 65 thành trì của quân Hán. Hai Bà Trưng xưng vương, đặt kinh đô tại Mê Linh. Năm 42, nhà Hán cử Mã Viện đem quân xâm lược trở lại. Quân của Hai Bà chống cự quyết liệt nhưng đến năm 43, khởi nghĩa thất bại, Hai Bà hy sinh.',
                result: 'Dù khởi nghĩa thất bại, cuộc chiến đấu của Hai Bà Trưng đã để lại dấu ấn mạnh mẽ trong lòng dân tộc Việt, trở thành biểu tượng cho tinh thần đấu tranh giành độc lập và thể hiện vai trò của phụ nữ trong lịch sử.',
                image: [`https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg`],
            }
        },
        {
            id: 2,
            title: 'Khởi nghĩa Bà Triệu',
            author: authorList[0],
            character: 'Triệu Thị Trinh',
            imgAddress: `https://vietsu.org/wp-content/uploads/2021/09/trieuthitrinh.jpg`,
            readTime: '6 phút',
            uploadDate: new Date('2023-05-01'),
            detail: {
                timeHappen: `Năm 226 - 248`,
                context: [
                    `Bà Triệu`,
                    `Bà Triệu (chữ Hán: 趙婆), còn được gọi là Bà Triệu, Triệu Trinh Nương (趙貞娘), Triệu Thị Trinh (趙氏貞), Triệu Quốc Trinh (8 tháng 11 năm 226 – 4 tháng 4 năm 248), là một trong những vị anh hùng dân tộc trong lịch sử Việt Nam.`,
                    `Bà Triệu sinh ngày 2 tháng 10 năm Bính Ngọ (8 tháng 11 năm 226)[3] tại miền núi Quan Yên (hay Quân Yên), quận Cửu Chân, nay thuộc làng Quan Yên (hay còn gọi là Yên Thôn), xã Định Tiến, huyện Yên Định, tỉnh Thanh Hóa.`,
                    `Từ nhỏ, bà sớm tỏ ra có chí khí hơn người. Cha mẹ đều mất sớm, Bà Triệu đến ở với anh là Triệu Quốc Đạt, một hào trưởng ở Quan Yên. Lớn lên, bà là người có sức mạnh, giỏi võ nghệ, lại có chí lớn. Đến năm 19 tuổi gặp phải người chị dâu (vợ ông Đạt) ác nghiệt, bà giết chị dâu rồi vào ở trong núi Nưa (nay thuộc các thị trấn Nưa huyện Triệu Sơn, xã Mậu Lâm huyện Như Thanh, xã Trung Thành huyện Nông Cống, Thanh Hóa), chiêu mộ được hơn ngàn tráng sĩ.`,
                ],
                mainStory: [
                    `Mùa xuân năm Mậu Thìn (248), thấy quan lại nhà Đông Ngô (Trung Quốc) tàn ác, dân khổ sở, Bà Triệu bèn bàn với anh việc khởi binh chống lại. Lúc đầu, anh bà không tán thành nhưng sau chịu nghe theo ý kiến của em. Từ hai căn cứ núi vùng Nưa và Yên Định, hai anh em bà dẫn quân đánh chiếm huyện trị Tư Phố nằm ở vị trí hữu ngạn sông Mã. Đây là căn cứ quân sự lớn của quan quân nhà Đông Ngô trên đất Cửu Chân. Thừa thắng, lực lượng nghĩa quân chuyển hướng xuống hoạt động ở vùng đồng bằng con sông này.`,
                    `Đang lúc ấy, Triệu Quốc Đạt lâm bệnh qua đời. Các nghĩa binh thấy bà làm tướng có can đảm, bèn tôn lên làm chủ. Khi ra trận, Bà Triệu mặc áo giáp vàng, đi guốc ngà, cài trâm vàng, cưỡi voi trắng một ngà và được tôn là Nhụy Kiều tướng quân. Quân Bà đi đến đâu cũng được dân chúng hưởng ứng, khiến quân thù khiếp sợ. Phụ nữ quanh vùng thúc giục chồng con ra quân theo Bà Triệu đánh giặc.`,
                    `Được tin cuộc khởi nghĩa lan nhanh, vua Ngô là Tôn Quyền liền phái tướng Lục Dận (cháu của Lục Tốn), sang làm Thứ sử Giao Châu, An Nam hiệu úy, đem theo 8.000 quân sang đàn áp cuộc khởi nghĩa. Đến nơi, tướng Lục Dận liền dùng của cải mua chuộc một số lãnh tụ địa phương để làm suy yếu và chia rẽ lực lượng nghĩa quân. Theo Trần Trọng Kim trong Việt Nam sử lược, bà chống đỡ với quân Đông Ngô được năm, sáu tháng thì thua. Bà Triệu đã tuẫn tiết trên núi Tùng (xã Triệu Lộc, huyện Hậu Lộc, Thanh Hóa) vào năm Mậu Thìn (248), lúc mới 23 tuổi.`,
                    `Nước Việt lại bị nhà Đông Ngô đô hộ cho đến 265.`,
                ],
                result: `Cuộc khởi nghĩa Bà Triệu có một ý nghĩa lịch sử vô cùng to lớn. Cuộc khởi nghĩa là mốc son trên chặng đường chống ngoại xâm của dân tộc trong suốt 10 thế kỷ. Không chỉ làm rung chuyển chính quyền đô hộ, mà cuộc khởi nghĩa còn góp phần đánh thức ý chí dân tộc, tạo bước đà cho cuộc khởi nghĩa của Lý Bí sau này. Đây là một trong những cuộc nổi dậy tiêu biểu, mạnh mẽ và rộng lớn nhất. Cuộc khởi nghĩa này là đỉnh cao của phong trào nhân dân thế kỷ II – III. Cuộc khởi nghĩa nổ ra ngay trong thời kỳ bọn đô hộ có lực lượng hùng mạnh và đang có dã tâm đồng hóa dân ta.`,
                image: [`https://lichsu.org/wp-content/uploads/2021/08/khoi-nghia-ba-trieu.jpg`],

            }
        },

    ],
    podCastList: [
        {
            id: 1,
            title: `Vương triều nhà Nguyễn trong lịch sử phong kiến Việt Nam`,
            imgAddress: `https://drive.google.com/file/d/141hDLWU0caTtORJ7Deweq70eietbe9-B/view`,
            uploadDate: new Date('2023-05-01'),
            detail: [
                {
                    id: 1,
                    title: `Khởi Nguyên Nhà Nguyễn: Từ Gia Long Đến Triều Đại Mới`,
                    imgAddress: `https://drive.google.com/file/d/141hDLWU0caTtORJ7Deweq70eietbe9-B/view`,
                    link: `https://youtu.be/96SVntYMrPk?si=_lkvjRWJVf04QC9K`,
                },
                {
                    id: 2,
                    title: `Cải Cách Minh Mạng: Xây Dựng và Thống Nhất Quốc Gia`,
                    imgAddress: `https://drive.google.com/file/d/141hDLWU0caTtORJ7Deweq70eietbe9-B/view`,
                    link: `https://youtu.be/96SVntYMrPk?si=_lkvjRWJVf04QC9K`,
                },
                {
                    id: 3,
                    title: `Những Cuộc Xung Đột Với Phương Tây: Nhà Nguyễn Trước Thách Thức`,
                    imgAddress: `https://drive.google.com/file/d/141hDLWU0caTtORJ7Deweq70eietbe9-B/view`,
                    link: `https://youtu.be/96SVntYMrPk?si=_lkvjRWJVf04QC9K`,
                },
                {
                    id: 4,
                    title: `Văn Hóa và Xã Hội Thời Nguyễn: Sắc Màu Một Triều Đại`,
                    imgAddress: `https://drive.google.com/file/d/141hDLWU0caTtORJ7Deweq70eietbe9-B/view`,
                    link: `https://youtu.be/96SVntYMrPk?si=_lkvjRWJVf04QC9K`,
                },
                {
                    id: 5,
                    title: `Pháp thuộc và Sự sụp đổ của Nhà Nguyễn`,
                    imgAddress: `https://drive.google.com/file/d/141hDLWU0caTtORJ7Deweq70eietbe9-B/view`,
                    link: `https://youtu.be/96SVntYMrPk?si=_lkvjRWJVf04QC9K`,
                },
                {
                    id: 6,
                    title: `Di sản Nhà Nguyễn: Từ Cố Đô Huế đến ngày nay`,
                    imgAddress: `https://drive.google.com/file/d/141hDLWU0caTtORJ7Deweq70eietbe9-B/view`,
                    link: `https://youtu.be/96SVntYMrPk?si=_lkvjRWJVf04QC9K`,
                },
            ]
        },
        {
            id: 2,
            title: `Kiến trúc và nghệ thuật trong triều Nguyễn`,
            imgAddress: `https://drive.google.com/file/d/1WX2Ovhh34lbCXDStoR11mzwc18agLFNi/view`,
            uploadDate: new Date('2023-05-01'),
            detail: [
                {
                    id: 1,
                    title: "Kiến Trúc Cổ Kính của Huế",
                    imgAddress: `https://drive.google.com/file/d/1WX2Ovhh34lbCXDStoR11mzwc18agLFNi/view`,
                    link: 'https://www.youtube.com/watch?v=BlEh6V17-rY',
                },
                {
                    id: 2,
                    title: "Nghệ Thuật Điêu Khắc và Hội Họa Trong Triều Nguyễn",
                    imgAddress: `https://drive.google.com/file/d/1WX2Ovhh34lbCXDStoR11mzwc18agLFNi/view`,
                    link: 'https://www.youtube.com/watch?v=BlEh6V17-rY',
                },
                {
                    id: 3,
                    title: "Phát Triển Âm Nhạc và Văn Học",
                    imgAddress: `https://drive.google.com/file/d/1WX2Ovhh34lbCXDStoR11mzwc18agLFNi/view`,
                    link: 'https://www.youtube.com/watch?v=BlEh6V17-rY',
                },
                {
                    id: 4,
                    title: "Tác động của Kiến Trúc và Nghệ Thuật đến Văn Hóa Đương Đại",
                    imgAddress: `https://drive.google.com/file/d/1WX2Ovhh34lbCXDStoR11mzwc18agLFNi/view`,
                    link: 'https://www.youtube.com/watch?v=BlEh6V17-rY',
                },
            ]
        }
    ],

    thisDayThatYearList: [
        {
            id: 1,
            title: `Chiến thắng Điện Biên Phủ`,
            timePoint: 'Tháng 7, 1954',
            content: `Chiến thắng Điện Biên Phủ đã buộc Pháp phải ký Hiệp định Genève (7/1954), chấm dứt cuộc chiến và công nhận độc lập, chủ quyền của Việt Nam, Lào, và Campuchia. Sự kiện này đánh dấu sự kết thúc của thực dân Pháp ở Đông Dương`,
            detail: {
                context: `Sau 8 năm kháng chiến chống Pháp (1946-1954), tình hình chiến trường Việt Nam bước vào giai đoạn quyết định. Quân Pháp xây dựng tập đoàn cứ điểm Điện Biên Phủ, với hy vọng cắt đứt đường tiếp tế và tiêu diệt lực lượng chủ lực của quân đội Việt Nam.`,
                mainStory: `Ngày 13 tháng 3 năm 1954, quân đội Việt Nam do Đại tướng Võ Nguyên Giáp chỉ huy bắt đầu chiến dịch Điện Biên Phủ. Sau 56 ngày đêm giao tranh ác liệt, quân ta giành chiến thắng hoàn toàn vào ngày 7 tháng 5 năm 1954, bắt sống toàn bộ chỉ huy và binh lính Pháp.`,
                result: `Chiến thắng Điện Biên Phủ đã buộc Pháp phải ký Hiệp định Genève (7/1954), chấm dứt cuộc chiến và công nhận độc lập, chủ quyền của Việt Nam, Lào, và Campuchia. Sự kiện này đánh dấu sự kết thúc của thực dân Pháp ở Đông Dương và góp phần vào phong trào giải phóng dân tộc toàn cầu.`,
                image: [`https://www.dbndnghean.vn/dbndna-media/24/5/6/chu-tich-ho-chi-minh-voi-chien-thang-dien-bien-phu--n1.jpg`],
            }
        },
        {
            id: 2,
            title: `Bắt đầu xây dựng Bức tường Berlin`,
            timePoint: "Tháng 8, 1961",
            content: `Dù không phải là sự kiện trực tiếp liên quan đến Việt Nam, việc xây dựng Bức tường Berlin là một phần quan trọng của Chiến tranh Lạnh, ảnh hưởng đến chính sách và sự can thiệp của các cường quốc vào Việt Nam.`,
            detail: {
                context: `Sự chia rẽ Việt Nam tại Vĩ tuyến 17 theo Hiệp định Genève đã tạo ra một môi trường chính trị phức tạp và căng thẳng giữa hai miền.`,
                mainStory: `Từ năm 1954 đến 1964, miền Bắc và miền Nam Việt Nam đã trải qua nhiều biến động chính trị và xã hội, cùng với sự can thiệp từ các cường quốc như Hoa Kỳ.`,
                result: "Sự căng thẳng này đã dẫn đến sự leo thang của cuộc chiến Việt Nam, với Hoa Kỳ tăng cường can thiệp quân sự để hỗ trợ chính phủ miền Nam chống lại miền Bắc và lực lượng Việt Cộng.",
                image: [`https://special.nhandan.vn/visaolavituyen17/assets/z4xHKNds4s/laco-1000x563.jpg`]
            }
        }
    ],
}

