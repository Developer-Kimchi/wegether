package com.wegether.app.domain.dto;

import com.wegether.app.domain.vo.FileVO;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Data
public class DataDTO {
    private Long id;
    private Long memberId;
    private String memberEmail;
    private String dataTitle;
    private String dataContent;
    private Long dataPrice;
    private String dataSchool;
    private String dataMajor;
    private Long dataReadCount;
    private String dataRegisterDate;
    private String dataUpdateDate;
    private String payRegisterDate;
    private String memberName;
    private String memberNickname;
    private String memberSchool;
    private String memberMajor;
    private String memberPoint;
    private String memberIntroducing;
    private String memberPhoneNumber;
    private Long dataId;
//    private Long WishDataId;
    private List<DataFileDTO> files = new ArrayList<>();
    private List<Long> fileIdsForDelete = new ArrayList<>();



}
