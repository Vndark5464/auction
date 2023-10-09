const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const imageSrc = e.target.result;
      // Thực hiện các thay đổi hoặc lưu trữ hình ảnh ở đây
    }
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  