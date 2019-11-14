<?php
namespace ext;
/**
 * 错误码设置类
 */
class CodeConfig {
    /**
     * 获取错误码配置
     */
    public static function getCodeConfig() {
        return array(
            "0" => "success",
            "300"=>'商户密钥为空',
            "301"=>'无效的商户密钥',
            "302"=>'商户不存在',
            "303"=>'请求方式错误',
            "304"=>'币种名称不得为空',
            "305"=>'无效的币种系列',
            "306"=>'用户名不得为空',
            "307"=>'转出地址不得为空',
            "308"=>'无效的用户地址',
            "309"=>'提现地址不得为空',
            "310"=>'提现数量不得为空',
            "311"=>'商户名称不得为空',
            "312"=>'app_key不得为空',
            "313"=>'secret_key不得为空',
            "314"=>'app_key格式错误',
            "315"=>'secret_key格式错误',
            "316"=>'coin_type为空',
            "317"=>'coin_type信息有误',
            "318"=>'商户未开通此币种',
            "319"=>'商户合约地址有误',
            "320"=>'密码为空',
            "321"=>'金额为空',
            "322"=>'FROM为空',
            "323"=>'TO为空',
            "324"=>'订单号为空',
            "325"=>'订单号重复',
            "400"=>'无效的钱包系列',
            "401"=>'高度太高,无法轮循',
            "402"=>'钱包连接失败',
            "403"=>'生成钱包地址出错',
            "404"=>'接口访问权限受限',
            "405"=>'钱包余额不足',
            "406"=>'不是一个有效的钱包地址',
            "500"=>'encode解码失败',
            "501"=>'encrypted解码失败',
            "502"=>'sign签名为空',
            "503"=>'sign验签有误',
            "504"=>'单个接口访问超过限制',
            "505"=>'系统繁忙，请稍候再试'
        );
    }
}



