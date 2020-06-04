import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  height: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;

  .footer {
    position: absolute;
    bottom: 0;
    z-index: 9;
    background-color: #fafafa;
    width: 100%;
    padding: 30px 0;
    opacity: 0.95;
    display: flex;
    justify-content: center;
  }

  .genres {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    margin-top: 10px;

    span {
      padding: 5px;
      border-radius: 10px;
      background-color: #fafafa;
      margin-right: 5px;
      border: 1px solid #ddd;
      font-size: 12px;
    }
  }

  .poster {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`;
