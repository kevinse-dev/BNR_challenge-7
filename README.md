# BNR_challenge-7
Project ini adalah sebuah web app sederhana Simple CRUD dengan menggunakan konsep Authentication dan Authorization dengan menerapkan local Strategy maupun JsonWebToken(JWT)

### Yang saya dapatkan pada challenge ini adalah:
* Design Pattern

    Design pattern atau yang dapat diartikan sebagai pola desain adalah metode yang dibuat untuk membantu tim pengembang dalam menemukan solusi dari masalah-masalah umum yang muncul saat pengembangan perangkat lunak sedang berlangsung.
    
    * MVC (Models Views Controllers)
    
        Model-View-Controller (MVC) adalah pola desain arsitektur yang
        digunakan untuk memisahkan hal-hal yang berurusan dengan
        aplikasi. Maksudnya, MVC akan mengisolasi atau memisahkan
        bagian yang mengatur data di aplikasi (Model) dari bagian
        antarmuka pengguna (View), dengan komponen ketiga
        (Controller) yang mengelola logika dan input pengguna.
    
    * MCR (Models Views Router)
    
        Design pattern yang biasa digunakan dalam RESTful API
        adalah Model Controller Router (MCR). Di dalam aplikasi
        tersebut akan ada tiga interface utama, yaitu Model,
        Controller, dan Router.
        
* Template Engine

    Template engine adalah sebuah system yang bisa kita gunakan untuk membuat template atau halaman website menjadi dinamis dengan sangat fleksibel.
    
    * EJS
    
        EJS adalah singkatan dari Embedded JavaScript . Ini adalah salah satu mesin tampilan template paling populer untuk Node.js dan Express.js.
    
* Asynchronous

    Asynchronous process yang merupakan
    sebuah process yang di-assign ke suatu thread tanpa menunggu process
    tersebut selesai dijalankan. Pengeksekusian process tersebut diserahkan
    sepenuhnya ke core dari processor, tapi thread-nya tidak menunggu process
    tersebut selesai.
    
    Synchronous process sebuah process yang di-assign ke suatu thread dengan
    eksekusi yang berurutan sehingga harus menunggu perintah yang sebelumnya
    sampai selesai (blocking).
    
      * Callback
          sebuah function, tapi bedanya dengan function yang biasa digunakan
          adalah cara eksekusinya. Callback dieksekusi pada poin tertentu, misalnya ketika kita
          memanggilnya lagi di dalam function lain melalui parameter.
      
      * Promise   
      
          suatu object di dalam JavaScript (ES6). Object ini maksudnya akan
          merepresentasikan beberapa state, yaitu pending (sedang dalam proses), fulfilled
          atau resolved (terpenuhi atau sukses), dan rejected (gagal terpenuhi).
          
      * Async/Await
      
          pasangan operator yang bisa kita gunakan untuk mendeklarasikan dan
          menjalankan fungsi asynchronous yang berupa promise.
    
* Authentication & Authorization

    Authentication adalah tindakan mengkonfirmasi kebenaran suatu bagian dari data
    (datum atau data tunggal) atau suatu entity, yang biasanya didalamnya
    terdapat user authentication.    

    Authorization adalah suatu proses memberikan izin kepada pengguna untuk
    mengakses sumber daya atau fungsi tertentu.
        
      * Strategy authentication
      
          * Local Strategy
              
              melakukan proses authentication dengan memvalidasi suatu
              user berdasarkan username dan password.
                
          * JWT Strategy
              
              melakukan proses authentication dengan memvalidasi suatu
              user berdasarkan token.  
   
    
    
    
