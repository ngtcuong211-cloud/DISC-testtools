export const KEYS = ['D', 'I', 'S', 'C'];
export const STORAGE_KEY = 'disc-insight-v1';
export const types = {
    D: {
        name: 'Quyết đoán',
        en: 'Dominance',
        short: 'Hướng đến kết quả',
        color: '#e11d48',
        light: '#f7eeec',
        desc: 'Bạn thường ưu tiên mục tiêu, sự chủ động và bước tiến cụ thể. Hãy đối chiếu xu hướng này với những tình huống thật của bạn.',
        strength: 'Chủ động chốt hướng đi và thúc đẩy công việc tiến lên.',
        watch: 'Trước khi chốt, dành một lượt để nghe điều người khác còn băn khoăn.',
        action: 'Ở cuộc họp tiếp theo, hỏi “Mình còn bỏ sót góc nhìn nào?” trước khi quyết định.'
    },
    I: {
        name: 'Ảnh hưởng',
        en: 'Influence',
        short: 'Kết nối & truyền cảm hứng',
        color: '#d97706',
        light: '#fbf4e5',
        desc: 'Bạn thường ưu tiên trao đổi, sự hưởng ứng và kết nối con người. Hãy đối chiếu xu hướng này với những tình huống thật của bạn.',
        strength: 'Khơi gợi ý tưởng và giúp mọi người cùng tham gia.',
        watch: 'Sau trao đổi, xác nhận rõ ai làm gì và khi nào hoàn thành.',
        action: 'Kết thúc lần trao đổi tiếp theo bằng một tin nhắn chốt đầu việc và thời hạn.'
    },
    S: {
        name: 'Kiên định',
        en: 'Steadiness',
        short: 'Lắng nghe & đồng hành',
        color: '#059669',
        light: '#eaf3ef',
        desc: 'Bạn thường ưu tiên sự phối hợp, nhịp làm việc ổn định và hỗ trợ người khác. Hãy đối chiếu xu hướng này với những tình huống thật của bạn.',
        strength: 'Lắng nghe và duy trì sự phối hợp bền bỉ trong nhóm.',
        watch: 'Nói rõ nhu cầu và giới hạn của mình, kể cả khi ý kiến chưa giống số đông.',
        action: 'Trong buổi trao đổi tiếp theo, chủ động nêu một đề xuất hoặc một điều bạn cần hỗ trợ.'
    },
    C: {
        name: 'Chuẩn xác',
        en: 'Conscientiousness',
        short: 'Phân tích & chất lượng',
        color: '#0284c7',
        light: '#edf2f8',
        desc: 'Bạn thường ưu tiên căn cứ, tiêu chí rõ ràng và độ chính xác. Hãy đối chiếu xu hướng này với những tình huống thật của bạn.',
        strength: 'Làm rõ tiêu chuẩn và phát hiện những chi tiết cần kiểm chứng.',
        watch: 'Thống nhất mức thông tin đủ dùng để quyết định đúng thời điểm.',
        action: 'Với quyết định tiếp theo, xác định trước hai dữ kiện cần có và thời điểm chốt.'
    }
};

// Adapted from DISC.html and DISC_test_PNF.html. Four equally weighted choices;
// original repetitive and value-laden prompts rewritten as neutral work situations.
export const questions = [{
    topic: 'Giải quyết vấn đề',
    q: 'Khi công việc gặp một vướng mắc, bạn thường bắt đầu bằng cách nào?',
    o: {
        D: 'Chọn một hướng xử lý và chủ động triển khai.',
        I: 'Trao đổi nhanh với mọi người để mở thêm hướng giải quyết.',
        S: 'Lắng nghe người liên quan để phối hợp xử lý từng bước.',
        C: 'Tìm nguyên nhân và kiểm tra các dữ kiện liên quan.'
    }
}, {
    topic: 'Giao tiếp',
    q: 'Khi trình bày một ý tưởng với đồng nghiệp, bạn thường…',
    o: {
        D: 'Đi thẳng vào đề xuất và kết quả cần đạt.',
        I: 'Kể ví dụ sinh động để mọi người hào hứng tham gia.',
        S: 'Tạo không gian trao đổi và lắng nghe phản hồi.',
        C: 'Trình bày có cấu trúc, kèm căn cứ rõ ràng.'
    }
}, {
    topic: 'Động lực làm việc',
    q: 'Điều gì thường mang lại cho bạn nhiều năng lượng trong công việc?',
    o: {
        D: 'Chinh phục một mục tiêu có tính thử thách.',
        I: 'Kết nối và tạo ảnh hưởng tích cực đến mọi người.',
        S: 'Đồng hành cùng một tập thể phối hợp ăn ý.',
        C: 'Hoàn thành công việc đạt tiêu chuẩn rõ ràng.'
    }
}, {
    topic: 'Môi trường làm việc',
    q: 'Trong một dự án mới, điều gì giúp bạn làm việc thuận lợi hơn?',
    o: {
        D: 'Có quyền chủ động quyết định trong phạm vi được giao.',
        I: 'Có cơ hội trao đổi ý tưởng thường xuyên.',
        S: 'Có nhịp phối hợp và sự hỗ trợ ổn định từ nhóm.',
        C: 'Có mục tiêu, quy trình và tiêu chí đánh giá cụ thể.'
    }
}, {
    topic: 'Ra quyết định',
    q: 'Khi chọn một công cụ mới cho công việc, bạn thường ưu tiên…',
    o: {
        D: 'Khả năng giải quyết mục tiêu nhanh và hiệu quả.',
        I: 'Trải nghiệm sử dụng và những gợi ý từ người đã dùng.',
        S: 'Mức độ phù hợp với cách làm việc hiện tại của nhóm.',
        C: 'So sánh tính năng và bằng chứng về độ tin cậy.'
    }
}, {
    topic: 'Vai trò trong nhóm',
    q: 'Khi nhóm cùng nhận một nhiệm vụ, bạn thường tự nhiên đảm nhận việc gì?',
    o: {
        D: 'Làm rõ ưu tiên và thúc đẩy tiến độ.',
        I: 'Kết nối mọi người và khơi gợi các ý tưởng.',
        S: 'Hỗ trợ đồng đội và giữ nhịp phối hợp.',
        C: 'Làm rõ tiêu chuẩn và rà soát chất lượng.'
    }
}, {
    topic: 'Áp lực công việc',
    q: 'Khi khối lượng công việc tăng lên, bạn thường có xu hướng…',
    o: {
        D: 'Tập trung chốt ưu tiên và đẩy nhanh việc quan trọng.',
        I: 'Trao đổi với mọi người để huy động thêm năng lượng.',
        S: 'Giữ nhịp từng việc và phối hợp hỗ trợ lẫn nhau.',
        C: 'Kiểm tra kế hoạch và các chi tiết dễ phát sinh sai sót.'
    }
}, {
    topic: 'Nhịp làm việc',
    q: 'Khi được tự sắp xếp cách thực hiện một nhiệm vụ, bạn thích…',
    o: {
        D: 'Bắt tay làm sớm và điều chỉnh theo kết quả.',
        I: 'Linh hoạt thử nhiều ý tưởng trong quá trình làm.',
        S: 'Duy trì các bước đều đặn để công việc thông suốt.',
        C: 'Chuẩn bị kỹ cách làm trước khi triển khai.'
    }
}, {
    topic: 'Phối hợp với quản lý',
    q: 'Khi nhận nhiệm vụ từ quản lý, bạn muốn làm rõ điều gì trước tiên?',
    o: {
        D: 'Kết quả cần đạt và quyền chủ động của mình.',
        I: 'Ý nghĩa của nhiệm vụ và cơ hội trao đổi ý tưởng.',
        S: 'Cách phối hợp, nguồn hỗ trợ và nhịp triển khai.',
        C: 'Yêu cầu chi tiết, căn cứ và tiêu chí hoàn thành.'
    }
}, {
    topic: 'Góp ý cho đồng nghiệp',
    q: 'Khi góp ý để đồng nghiệp cải thiện công việc, bạn thường…',
    o: {
        D: 'Nêu thẳng việc cần thay đổi và hướng xử lý.',
        I: 'Khích lệ tinh thần rồi cùng trao đổi cách cải thiện.',
        S: 'Hỏi thăm khó khăn và hỗ trợ từng bước.',
        C: 'Dùng ví dụ cụ thể để đối chiếu với yêu cầu.'
    }
}, {
    topic: 'Đón nhận thay đổi',
    q: 'Khi nhóm thay đổi cách làm việc, bạn thường quan tâm trước tiên đến…',
    o: {
        D: 'Thay đổi này giúp đạt mục tiêu tốt hơn thế nào.',
        I: 'Cơ hội mới để thử ý tưởng và kết nối mọi người.',
        S: 'Mọi người sẽ thích nghi và hỗ trợ nhau ra sao.',
        C: 'Căn cứ thay đổi và các bước thực hiện cụ thể.'
    }
}, {
    topic: 'Sự ghi nhận',
    q: 'Khi hoàn thành một dự án, lời ghi nhận nào gần với điều bạn coi trọng nhất?',
    o: {
        D: 'Bạn đã tạo ra kết quả và đưa công việc về đích.',
        I: 'Bạn đã truyền năng lượng và kết nối được mọi người.',
        S: 'Bạn đã đồng hành và hỗ trợ nhóm rất bền bỉ.',
        C: 'Bạn đã đảm bảo chất lượng và làm rõ các chi tiết.'
    }
}, {
    topic: 'Bàn giao công việc',
    q: 'Khi bàn giao một việc đang thực hiện, bạn thường nhấn mạnh điều gì?',
    o: {
        D: 'Việc cần chốt tiếp theo và mốc hoàn thành.',
        I: 'Bối cảnh chung và các mối liên hệ hữu ích.',
        S: 'Cách phối hợp và những hỗ trợ người nhận có thể cần.',
        C: 'Tình trạng từng hạng mục cùng tài liệu liên quan.'
    }
}, {
    topic: 'Khác biệt quan điểm',
    q: 'Khi hai đồng nghiệp bất đồng cách triển khai, bạn thường góp phần bằng cách…',
    o: {
        D: 'Đưa ra một hướng xử lý để nhóm có thể tiến tiếp.',
        I: 'Tìm điểm chung để mọi người cởi mở trao đổi.',
        S: 'Đảm bảo mỗi bên đều có thời gian trình bày.',
        C: 'So sánh các phương án theo tiêu chí đã thống nhất.'
    }
}, {
    topic: 'Thông tin chưa đầy đủ',
    q: 'Nếu cần đề xuất phương án khi dữ kiện còn thiếu, bạn thường…',
    o: {
        D: 'Đề xuất một bước có thể làm ngay trong phạm vi cho phép.',
        I: 'Trao đổi với nhiều người để có thêm góc nhìn.',
        S: 'Thống nhất với người liên quan về cách tiến từng bước.',
        C: 'Xác định dữ kiện nào cần xác nhận trước khi đề xuất.'
    }
}, {
    topic: 'Phân bổ nguồn lực',
    q: 'Khi có ít thời gian hơn dự kiến, bạn thường ưu tiên cách tổ chức nào?',
    o: {
        D: 'Tập trung nguồn lực vào đầu việc có tác động lớn nhất.',
        I: 'Kêu gọi mọi người cùng tìm cách làm linh hoạt hơn.',
        S: 'Điều phối lại phần việc để nhóm giữ được nhịp ổn định.',
        C: 'Rà soát phạm vi và xác định phần nào có thể điều chỉnh.'
    }
}, {
    topic: 'Thương lượng',
    q: 'Khi thương lượng một đề nghị với bộ phận khác, bạn thường…',
    o: {
        D: 'Nêu rõ kết quả mong muốn và phần có thể linh hoạt.',
        I: 'Tạo sự kết nối rồi tìm một đề xuất khiến hai bên hào hứng.',
        S: 'Lắng nghe nhu cầu để tìm phương án hai bên cùng làm được.',
        C: 'Chuẩn bị các điều kiện và lập luận cho từng phương án.'
    }
}, {
    topic: 'Khởi động nhiệm vụ',
    q: 'Trong buổi khởi động một nhiệm vụ liên phòng ban, điều gì thường thu hút sự chú ý của bạn?',
    o: {
        D: 'Quyền quyết định và các mốc cần đạt.',
        I: 'Cách tạo sự tham gia giữa những người chưa làm việc chung.',
        S: 'Vai trò của từng người và cách hỗ trợ lẫn nhau.',
        C: 'Phạm vi, tiêu chuẩn đầu ra và các điểm phụ thuộc.'
    }
}, {
    topic: 'Nhận diện rủi ro',
    q: 'Khi cân nhắc một sáng kiến có cả cơ hội và rủi ro, bạn thường tiếp cận bằng cách…',
    o: {
        D: 'Xác định lợi ích mục tiêu và mức rủi ro có thể chấp nhận.',
        I: 'Hình dung khả năng mới rồi trao đổi để hoàn thiện ý tưởng.',
        S: 'Xem tác động đến người tham gia và khả năng thích nghi.',
        C: 'Kiểm tra giả định và các điều kiện có thể làm phương án thất bại.'
    }
}, {
    topic: 'Yêu cầu phát sinh',
    q: 'Khi nhận thêm một yêu cầu trong lúc lịch làm việc đã kín, bạn thường…',
    o: {
        D: 'Thương lượng lại thứ tự ưu tiên để chốt việc cần làm trước.',
        I: 'Trao đổi nhanh để tìm người hoặc cách làm có thể hỗ trợ.',
        S: 'Xem các cam kết hiện tại để thống nhất cách phân chia phù hợp.',
        C: 'Đối chiếu khối lượng và thời hạn trước khi xác nhận khả năng nhận việc.'
    }
}, {
    topic: 'Theo dõi tiến độ',
    q: 'Khi muốn biết một công việc đang tiến triển thế nào, bạn thường tìm thông tin về…',
    o: {
        D: 'Kết quả đã đạt và trở ngại cần tháo gỡ.',
        I: 'Những ý tưởng, trao đổi và kết nối đang diễn ra.',
        S: 'Nhịp phối hợp và những hỗ trợ mọi người đang cần.',
        C: 'Mức hoàn thành từng hạng mục so với kế hoạch.'
    }
}, {
    topic: 'Học kỹ năng mới',
    q: 'Khi bắt đầu học một kỹ năng chưa quen, bạn thường thích…',
    o: {
        D: 'Thử một nhiệm vụ có mục tiêu rõ rồi rút kinh nghiệm.',
        I: 'Học qua trao đổi, ví dụ sinh động và cùng thử với người khác.',
        S: 'Quan sát người hướng dẫn rồi luyện từng bước có hỗ trợ.',
        C: 'Hiểu nguyên tắc và các bước chuẩn trước khi thực hành.'
    }
}, {
    topic: 'Tiếp nhận phản hồi',
    q: 'Khi được góp ý về cách làm việc, bạn thường muốn buổi trao đổi tập trung vào…',
    o: {
        D: 'Điều cần thay đổi để tạo ra kết quả tốt hơn.',
        I: 'Đối thoại cởi mở về tác động của mình với mọi người.',
        S: 'Hiểu kỳ vọng của người góp ý và cách cùng cải thiện.',
        C: 'Ví dụ cụ thể và căn cứ để xác định điểm cần điều chỉnh.'
    }
}, {
    topic: 'Gặp gỡ đối tác mới',
    q: 'Khi làm việc lần đầu với một đối tác chưa quen, bạn thường…',
    o: {
        D: 'Làm rõ mục đích và đưa cuộc trao đổi vào trọng tâm.',
        I: 'Chủ động mở chuyện để tạo sự gần gũi.',
        S: 'Quan sát nhịp trao đổi và dành thời gian tìm hiểu nhu cầu.',
        C: 'Chuẩn bị thông tin và những câu hỏi cần xác nhận.'
    }
}, {
    topic: 'Duy trì công việc lặp lại',
    q: 'Với một nhiệm vụ cần lặp lại thường xuyên, điều gì giúp bạn duy trì sự tập trung?',
    o: {
        D: 'Có mục tiêu cải thiện kết quả qua từng chu kỳ.',
        I: 'Có cách làm mới hoặc cơ hội trao đổi trong quá trình thực hiện.',
        S: 'Có nhịp làm việc quen thuộc và sự phối hợp ổn định.',
        C: 'Có tiêu chuẩn rõ để theo dõi chất lượng từng lần thực hiện.'
    }
}, {
    topic: 'Chia sẻ chuyên môn',
    q: 'Khi hướng dẫn một đồng nghiệp thực hiện công việc, bạn thường bắt đầu từ…',
    o: {
        D: 'Kết quả cần đạt và phần họ có thể tự chủ động.',
        I: 'Ví dụ gần gũi giúp họ hứng thú và dễ hình dung.',
        S: 'Điều họ đã biết và phần cần được đồng hành thêm.',
        C: 'Nguyên tắc, trình tự và các điểm cần kiểm tra.'
    }
}, {
    topic: 'Cải thiện sau sai sót',
    q: 'Sau khi một cách làm không mang lại kết quả như dự kiến, bạn thường…',
    o: {
        D: 'Xác định điều cần đổi và thử một hướng hành động khác.',
        I: 'Trao đổi trải nghiệm để tìm ý tưởng cho lần tiếp theo.',
        S: 'Cùng người liên quan xem lại cách phối hợp và hỗ trợ.',
        C: 'Phân tích chênh lệch giữa kế hoạch, dữ kiện và thực tế.'
    }
}, {
    topic: 'Nhìn lại trải nghiệm',
    q: 'Khi nhìn lại một giai đoạn làm việc, bạn thường tự hỏi điều gì trước tiên?',
    o: {
        D: 'Tôi đã tạo ra tiến triển và kết quả nào?',
        I: 'Tôi đã khơi gợi ý tưởng và kết nối với ai?',
        S: 'Tôi đã đồng hành và giúp nhóm phối hợp ra sao?',
        C: 'Tôi đã rút ra nguyên tắc hay cải thiện chất lượng điều gì?'
    }
}, {
    topic: 'Góp ý với quản lý',
    q: 'Khi thấy một quyết định của quản lý có thể gây khó cho nhóm, bạn thường mở đầu buổi trao đổi thế nào?',
    o: {
        D: 'Nêu hệ quả với mục tiêu và đề xuất một cách xử lý.',
        I: 'Mở cuộc trao đổi bằng một ví dụ để cùng nghĩ cách khác.',
        S: 'Hỏi thêm về bối cảnh rồi chia sẻ những vướng mắc của nhóm.',
        C: 'Đưa các trường hợp đã ghi nhận và điều kiện cần kiểm tra.'
    }
}, {
    topic: 'Xử lý cam kết bị lỡ',
    q: 'Một việc bạn phụ trách đã trễ và ảnh hưởng đến bộ phận khác. Trong lần cập nhật đầu tiên, bạn thường nhấn mạnh điều gì?',
    o: {
        D: 'Phương án khắc phục và mốc mới mà tôi có thể cam kết.',
        I: 'Lời giải thích trực tiếp và lời mời cùng tìm cách tháo gỡ.',
        S: 'Ảnh hưởng đến phần việc của họ và phần tôi có thể hỗ trợ.',
        C: 'Phần bị chậm, nguyên nhân đã xác nhận và thông tin còn thiếu.'
    }
}, {
    topic: 'Giao việc khi vắng mặt',
    q: 'Bạn sẽ vắng mặt vài ngày trong lúc nhóm vẫn phải xử lý một đầu việc. Bạn thường chuẩn bị điều gì trước?',
    o: {
        D: 'Chốt ai có quyền quyết định và việc nào phải hoàn thành khi tôi vắng.',
        I: 'Trao đổi trực tiếp và kết nối người phụ trách với các đầu mối cần gặp.',
        S: 'Cùng người thay tôi chạy qua một lượt để họ biết khi nào cần hỗ trợ.',
        C: 'Để lại tài liệu với tình trạng hiện tại, bước tiếp theo và các điểm kiểm tra.'
    }
}, {
    topic: 'Chọn mức hoàn thiện',
    q: 'Bản nháp đã dùng được, nhưng thời gian còn lại chỉ đủ để cải thiện một phần. Bạn thường chọn phần nào?',
    o: {
        D: 'Phần ảnh hưởng lớn nhất đến kết quả cần bàn giao.',
        I: 'Phần giúp người dùng hiểu và đón nhận sản phẩm dễ hơn.',
        S: 'Phần giúp người tiếp nhận đỡ vướng khi đưa vào công việc thường ngày.',
        C: 'Phần còn sai lệch rõ nhất so với tiêu chí đã thống nhất.'
    }
}, {
    topic: 'Họp khi ít người lên tiếng',
    q: 'Bạn điều phối một buổi họp và thấy phần lớn mọi người ít lên tiếng. Bạn thường làm gì tiếp theo?',
    o: {
        D: 'Thu hẹp vào một lựa chọn cụ thể để nhóm có thể quyết định.',
        I: 'Đặt một câu hỏi mở gần với trải nghiệm của mọi người để khơi gợi trao đổi.',
        S: 'Cho mọi người thời gian suy nghĩ rồi mời từng người chia sẻ nếu sẵn sàng.',
        C: 'Làm rõ câu hỏi cần trả lời và thông tin nhóm đang dựa vào.'
    }
}, {
    topic: 'Phản hồi từ người sử dụng',
    q: 'Hai nhóm người dùng phản hồi trái chiều về cùng một thay đổi. Bạn thường muốn làm gì trước?',
    o: {
        D: 'Xác định phản hồi nào liên quan nhất đến mục tiêu của thay đổi.',
        I: 'Trò chuyện trực tiếp để nghe từng bên kể lại trải nghiệm.',
        S: 'Tìm hiểu việc thích nghi của từng nhóm và những hỗ trợ họ cần.',
        C: 'So sánh hoàn cảnh sử dụng để xem điều gì giải thích khác biệt.'
    }
}, {
    topic: 'Điều chỉnh khi bị gián đoạn',
    q: 'Một việc phát sinh khiến nhóm phải dừng giữa chừng rồi quay lại. Khi bắt đầu lại, bạn thường làm gì trước?',
    o: {
        D: 'Chốt đầu việc cần hoàn thành tiếp để lấy lại đà tiến độ.',
        I: 'Trao đổi nhanh với nhóm để mọi người cùng bắt nhịp lại.',
        S: 'Xác nhận ai đang tiếp phần nào và có ai cần hỗ trợ hay không.',
        C: 'Đối chiếu phần đã làm với mốc bàn giao để tránh bỏ sót.'
    }
}, {
    topic: 'Thử nghiệm liên phòng ban',
    q: 'Hai bộ phận đồng ý thử một cách làm mới trong một tuần. Bạn thường đề nghị thống nhất điều gì trước khi bắt đầu?',
    o: {
        D: 'Mục tiêu ưu tiên và người quyết định sau tuần thử.',
        I: 'Cách thu hút người tham gia và chia sẻ những gì họ quan sát được.',
        S: 'Lịch phối hợp và người hỗ trợ khi phát sinh vướng mắc.',
        C: 'Tiêu chí theo dõi và cách thu thập dữ liệu trong tuần thử.'
    }
}];

export const QUESTION_COUNT = questions.length;
export const ESTIMATED_MINUTES = '10–15';
const STATE_VERSION = 3;
const previousLengths = {
    1: 12,
    2: 28
};
const orders = ['SDIC', 'CISD', 'DCIS', 'DICS', 'ICDS', 'CSID', 'IDSC', 'ISDC', 'SICD', 'IDCS', 'ICDS', 'IDCS', 'CDSI', 'CSDI', 'SCID', 'ISDC', 'SDCI', 'SIDC', 'CISD', 'CSID', 'CIDS', 'CDSI', 'SIDC', 'ICSD', 'DCSI', 'DISC', 'SICD', 'DCIS', 'CDIS', 'DSIC', 'SCDI', 'ISCD', 'DCSI', 'DSIC', 'SDCI', 'DSCI'];

export function optionOrder(index) {
    // Fixed orders keep revisits stable and give each factor equal exposure in each position.
    return [...orders[index]];
}
export function scoreAnswers(answers) {
    const scores = Object.fromEntries(KEYS.map(k => [k, 0]));
    for (const a of answers)
        if (KEYS.includes(a))
            scores[a]++;
    const max = Math.max(...Object.values(scores));
    const leaders = max === 0 ? [] : KEYS.filter(k => scores[k] === max);
    const lower = KEYS.filter(k => scores[k] < max && scores[k] > 0);
    const nextMax = Math.max(0, ...lower.map(k => scores[k]));
    return {
        scores,
        leaders,
        next: lower.filter(k => scores[k] === nextMax),
        total: Object.values(scores).reduce( (a, b) => a + b, 0)
    };
}
export function emptyState() {
    return {
        version: STATE_VERSION,
        name: '',
        answers: Array(QUESTION_COUNT).fill(null),
        index: 0,
        view: 'intro',
        reflection: '',
        expandedFrom: null,
        editing: false
    };
}
export function restoreState(raw) {
    const fresh = emptyState();
    if (!raw || !Array.isArray(raw.answers))
        return fresh;
    const oldLength = Number.isInteger(raw.version) ? previousLengths[raw.version] : undefined;
    const expectedLength = raw.version === STATE_VERSION ? QUESTION_COUNT : oldLength;
    if (raw.answers.length !== expectedLength)
        return fresh;

    fresh.answers = Array.from(fresh.answers, (_, i) => KEYS.includes(raw.answers[i]) ? raw.answers[i] : null);
    fresh.name = typeof raw.name === 'string' ? raw.name.slice(0, 60).normalize() : '';
    fresh.reflection = typeof raw.reflection === 'string' ? raw.reflection.slice(0, 700).normalize() : '';
    fresh.index = Number.isInteger(raw.index) ? Math.max(0, Math.min(QUESTION_COUNT - 1, raw.index)) : 0;
    fresh.view = ['intro', 'quiz', 'result'].includes(raw.view) ? raw.view : 'intro';
    fresh.editing = fresh.view === 'quiz' && raw.editing === true;
    if (oldLength) {
        fresh.expandedFrom = fresh.answers.some(Boolean) ? oldLength : null;
        fresh.view = 'intro';
        fresh.editing = false;
    } else if (raw.expandedFrom === 12 || raw.expandedFrom === 28) {
        fresh.expandedFrom = raw.expandedFrom;
    }
    if (!fresh.answers.every(Boolean) && fresh.view === 'result') {
        fresh.view = 'quiz';
        fresh.index = fresh.answers.indexOf(null);
    }
    return fresh;
}

// ---- Thông tin người trình bày: chỉnh tại đây ----
export const PRESENTER = {
  name: 'Nguyễn Thế Cường',
  titles: ['F&B Operation Expert', 'DISC Coach', 'Edutainer'],
  titleNote: 'Edutainer: đào tạo kết hợp hoạt động tương tác',
  portfolio: '', // Link portfolio, ví dụ 'https://...'. Để trống thì không hiện.
  booking: '#', // Đường dẫn đặt lịch (Zalo, form...)
};
// Kênh mạng xã hội: { label: 'TikTok', url: 'https://...' }. Để trống thì không hiện.
export const SOCIALS = [];
// Đơn vị đồng hành: { name: 'Tên', logo: './logos/ten.svg', url: 'https://...' }. Để trống thì không hiện.
export const PARTNERS = [];

// Cụm từ mô tả trọng tâm của từng nhóm, hiển thị trên thẻ kết quả.
export const FOCUS_TAGS = {
  D: ['Kết quả', 'Hành động', 'Quyết định'],
  I: ['Con người', 'Ý tưởng', 'Năng lượng'],
  S: ['Hỗ trợ', 'Ổn định', 'Đồng đội'],
  C: ['Chính xác', 'Logic', 'Chất lượng'],
};

// Từ khóa được làm nổi bật trong phần mô tả.
export const KEYWORDS = ['mục tiêu', 'chủ động', 'kết quả', 'lắng nghe', 'phối hợp', 'ổn định', 'kết nối', 'ảnh hưởng', 'tiêu chuẩn', 'căn cứ', 'chính xác', 'cảm hứng', 'trao đổi', 'quyết định', 'hỗ trợ', 'linh hoạt'];

// Gợi ý giao tiếp: INTERACTION[nhóm nổi trội][nhóm khác]
export const INTERACTION = {
  D: {
    I: { do: 'Đi thẳng vào mục tiêu nhưng dành chỗ để họ kể ý tưởng.', avoid: 'Cắt ngang khi họ đang hào hứng hoặc chỉ đưa số liệu khô khan.' },
    S: { do: 'Nói rõ kết quả và thời hạn, rồi cho họ thời gian chuẩn bị.', avoid: 'Thúc ép quyết định ngay hoặc đổi hướng liên tục.' },
    C: { do: 'Chuẩn bị ngắn gọn: mục tiêu, lựa chọn và rủi ro chính.', avoid: 'Vòng vo hoặc bỏ qua căn cứ họ cần để kiểm tra.' }
  },
  I: {
    D: { do: 'Nêu kết quả và lợi ích cụ thể, rồi chốt ngắn gọn.', avoid: 'Kể dài dòng hoặc bàn cảm xúc trước khi vào việc.' },
    S: { do: 'Trò chuyện thân thiện, rồi xác nhận việc cần làm.', avoid: 'Tạo áp lực bằng thời hạn gấp hoặc đổi kế hoạch đột ngột.' },
    C: { do: 'Gói ý tưởng trong khung rõ ràng, kèm ví dụ và dữ liệu.', avoid: 'Dựa vào cảm xúc hay lời hứa mà không có căn cứ.' }
  },
  S: {
    D: { do: 'Nêu rõ lập trường và lợi ích chung, cho thấy bạn đã cân nhắc.', avoid: 'Nói vòng vo hoặc chờ họ lên tiếng trước mới phản hồi.' },
    I: { do: 'Lắng nghe, ghi nhận đóng góp và tạo cơ hội để họ chia sẻ.', avoid: 'Im lặng quá lâu khiến họ nghĩ bạn không quan tâm.' },
    C: { do: 'Chia sẻ tiến trình từng bước, có tài liệu và mốc rà soát.', avoid: 'Thay đổi cách làm đột ngột mà không giải thích.' }
  },
  C: {
    D: { do: 'Đưa kết luận trước, kèm hai đến ba căn cứ chính.', avoid: 'Trình bày dài mọi chi tiết khi họ cần quyết định nhanh.' },
    I: { do: 'Dùng ví dụ thực tế và hình dung kết quả để họ hứng thú.', avoid: 'Chỉ trình bày số liệu, bỏ qua phần kết nối con người.' },
    S: { do: 'Trao đổi có kế hoạch rõ, cho họ thời gian đặt câu hỏi.', avoid: 'Đòi quyết định ngay khi họ chưa kịp hiểu bối cảnh.' }
  }
};
