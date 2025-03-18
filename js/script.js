// ドロワーメニュー

// menuがクリックされた場合
jQuery(".js-item-menu").on("click", function(){
  jQuery("#js-header-drawer").slideToggle();
})

// トップへ戻るボタン

// 80pxスクロールしたらボタンを表示/非教示
jQuery(window).scroll(function(){
  if(jQuery(this).scrollTop() > 80){ // スクロール量が80pxを超えたら
    jQuery("#js-button-to-top").fadeIn(300); // ボタンをフェードイン
  }else{
    jQuery("#js-button-to-top").fadeOut(300); // ボタンをフェードアウト
  }
});

// ボタンをクリックしたらトップへ遷移
jQuery("#js-button-to-top").on("click", function(){
  jQuery("html, body").animate({scrollTop: 0}, 1500);
})


// モーダルで画像の拡大表示
jQuery(".menu-item-img").on("click", function(){
  // メニュー画像がクリックされたら

  // クリックしたメニュー画像のjQueryオブジェクト準備
  const $clickedImg = $(this);
 
  // 拡大画像クラスのsrc属性にクリック画像のsrcをコピー
  jQuery(".enlarged-image").attr("src", $clickedImg.attr("src"));

  // オーバーレイを表示し、display:flexを付与
  jQuery(".overlay").fadeIn(300);
  jQuery(".overlay").css("display","flex");
  // スクロールを禁止
  jQuery("html, body").css("overflow", "hidden");

  // オーバーレイをクリックしたら
  jQuery(".overlay").on("click", function(){
    // オーバーレイを非表示にする
    jQuery(this).fadeOut(300);
    // スクロール禁止を解除
    jQuery("html, body").css("overflow", "auto");
  })
})