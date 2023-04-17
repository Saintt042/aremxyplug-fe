import styled from "styled-components";

export const ServicesContainer = styled.div`
    width: 90%;
    margin: 40px auto;
    .service-header {
        display: flex;
        gap: 51.83px;
        width: 100%;
        margin: 40px 0 60px 0;
        .service-header--text {
            width: 50%;
            h2 {
                font-size: 56px;
                line-height: 61.6px;
                width: 40%;
                margin-bottom: 53px;
                font-weight: 700;
            }
            p {
                font-size: 18px;
                line-height: 21.6px;
            }
        }
        .service-header--image {
            width: 50%
        }
    }
    .service-content {
        .service-item {
            margin: 40px 0;
            &:last-child {
                margin-bottom: 0;
            }
            &:first-child {
                margin-top: 0;
            }
            h2 {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 58px;
                line-height: 38.4px;
            }
            p {
                font-size: 18px;
                line-height: 21.6px;
                font-weight: 400;
                margin-bottom: 60px
            }
            .service-item--link {
                display: inline-block;
                padding: 15px 37px;
                border-radius: 8px;
                background: #04177F;
                color: #fff;
                font-size: 14px;
                font-weight: 700;
                line-height: 16px;
            }
        }
    }
`